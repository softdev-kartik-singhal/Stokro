require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/UsersModel");
const bcrypt = require("bcryptjs");



const { jwtAuthMiddleware , generateToken} = require("./middleware")
const { HoldingsModel } = require("./models/HoldingsModel");

const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.use(cors({
  origin: [
    "https://stokro-frontend.onrender.com",
    "https://stokro-dashboard.onrender.com"
  ],
  credentials: true
}));
app.use(bodyParser.json());



//it will first delete all holdings in database and then reinitialize with sample data
// app.get("/addholdings", async(req, res) => {
//   let temp = holdings;

//   await HoldingsModel.deleteMany({});

//   temp.forEach(async (item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });

//     await newHolding.save();
//   });

//   res.send("done!");
// });

//it will first delete all positions in database and then reinitialize with sample data
// app.get("/addpositions", async(req, res) => {
//   let temp = positions;
//   await PositionsModel.deleteMany({});

//   temp.forEach(async (item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss
//     });

//     await newPosition.save();
//   });

//   res.send("done!");
// });

app.post("/signup_manually", async (req, res) => {
  try {
    const { email, password, username, address, city, state, zip } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({
        message: "Email, password and username are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists, Try Login",
      });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({
        message: "Username already used",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
      username,
      address,
      city,
      state,
      zip,
    });

    const payload = {
      id: user._id,
      email: user.email,
    };

    const token = generateToken(payload);

    // ✅ ALWAYS return message + token
    return res.status(201).json({
      message: "User registered successfully",
      token,
    });

  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});



app.post("/login_manually", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user || !user.password) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const payload = {
      id: user._id,
      email: user.email,
    };

    const token = generateToken(payload);

    return res.json({ token });

  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});



app.post("/newOrder", async (req, res) => {
  try {
    // 1. Save the order
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    // 2. Update or Create Holding
    const userId = req.user.id;
    
    const stockName = req.body.name;
    const qty = Number(req.body.qty);
    const price = Number(req.body.price);

    let existingHolding = await HoldingsModel.findOne({
      user: userId,
      name: stockName,
    });

    if (existingHolding) {
      // Update existing holding
      const newQty = existingHolding.qty + qty;
      const newAvg =
        (existingHolding.avg * existingHolding.qty + price * qty) / newQty;

      existingHolding.qty = newQty;
      existingHolding.avg = newAvg;
      // You might want to update other fields like 'net', 'day', 'price' (LTP) here if you have real-time data
      // For now, let's just update the LTP to the buy price as a simple update
      existingHolding.price = price;

      await existingHolding.save();
    } else {
      // Create new holding
      const newHolding = new HoldingsModel({
        name: stockName,
        qty: qty,
        avg: price,
        price: price,
        net: "0%", // Initial net change
        day: "0%", // Initial day change
        user: userId,
      });
      await newHolding.save();
    }

    res.send("order saved and holding updated!");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.post("/", async (req, res) => {
  try {

    // 1️⃣ Create holding
    const holding = new HoldingsModel({
      name: req.body.name,
      qty: req.body.qty,
      avg: req.body.avg,
      price: req.body.price,
      net: req.body.net,
      day: req.body.day,
    });

    const savedHolding = await holding.save();

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/allholdings",  async (req, res) => {
  let allholdings = await HoldingsModel.find({});
  res.json(allholdings);
});


app.get("/allpositions", async (req, res) => {
  let allpositions = await PositionsModel.find({});
  res.json(allpositions);
});

app.get("/allorders",  async (req, res) => {
  let allorders = await OrdersModel.find({});
  res.json(allorders);
});

app.listen(PORT, async () => {
  console.log(`App is listening to port ${PORT}`);
  await mongoose.connect(url);
});
