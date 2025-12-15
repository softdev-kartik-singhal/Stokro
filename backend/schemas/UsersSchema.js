const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  address: String,
  city: String,
  state: String,
  zip: Number,

  registeredAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = UsersSchema;
