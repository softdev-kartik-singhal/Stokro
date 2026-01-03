# 📈 Stokro - Stock Trading Platform

A full-stack stock trading platform built with the MERN stack, featuring a modern landing page, interactive trading dashboard, and robust backend API.

![Stokro](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-19.2.1-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)

## 🌟 Features

### Frontend (Landing Page)
- **Modern UI/UX** - Responsive landing page with navigation
- **User Authentication** - Signup and login functionality
- **Information Pages** - About, Products, Pricing, and Support sections
- **Account Management** - Easy account creation and management

### Dashboard (Trading Interface)
- **Real-time Holdings** - View and manage your stock holdings
- **Positions Tracking** - Monitor your current positions
- **Order Management** - Place and track buy/sell orders
- **Interactive Charts** - Visualize portfolio performance with Chart.js
- **Funds Management** - Track available funds and investments
- **Watchlist** - Keep track of stocks you're interested in
- **Material-UI Components** - Modern, responsive design

### Backend (API)
- **RESTful API** - Built with Express.js
- **JWT Authentication** - Secure user authentication with JSON Web Tokens
- **User Management** - Registration, login, and profile management
- **Order Processing** - Handle buy/sell orders
- **Holdings Management** - Automatic holding updates on order execution
- **MongoDB Integration** - Persistent data storage
- **CORS Enabled** - Configured for production deployment

## 🏗️ Project Structure

```
Stokro/
├── frontend/           # Landing page (React)
│   ├── src/
│   │   ├── landing_Page/
│   │   │   ├── home/
│   │   │   ├── signup/
│   │   │   ├── about/
│   │   │   ├── products/
│   │   │   ├── pricing/
│   │   │   └── support/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── dashboard/          # Trading dashboard (React + Material-UI)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Holdings.js
│   │   │   ├── Positions.js
│   │   │   ├── Orders.js
│   │   │   ├── WatchList.js
│   │   │   ├── Funds.js
│   │   │   └── ...
│   │   └── index.js
│   └── package.json
│
└── backend/            # API Server (Express.js + MongoDB)
    ├── models/
    │   ├── UsersModel.js
    │   ├── HoldingsModel.js
    │   ├── PositionsModel.js
    │   └── OrdersModel.js
    ├── schemas/
    ├── index.js
    ├── middleware.js
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/stokro.git
   cd stokro
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Install Dashboard Dependencies**
   ```bash
   cd ../dashboard
   npm install
   ```

### Configuration

1. **Backend Environment Variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=3002
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

2. **Update CORS Origins** (if needed)
   
   Edit `backend/index.js` to include your frontend URLs:
   ```javascript
   app.use(cors({
     origin: [
       "http://localhost:3000",
       "http://localhost:3001",
       "https://your-frontend-url.com",
       "https://your-dashboard-url.com"
     ],
     credentials: true
   }));
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   ```
   Server will run on `http://localhost:3002`

2. **Start the Frontend (Landing Page)**
   ```bash
   cd frontend
   npm start
   ```
   Frontend will run on `http://localhost:3000`

3. **Start the Dashboard**
   ```bash
   cd dashboard
   npm start
   ```
   Dashboard will run on `http://localhost:3001`

## 🔌 API Endpoints

### Authentication
- `POST /signup_manually` - Register a new user
- `POST /login_manually` - Login user

### Trading Operations
- `POST /newOrder` - Place a new order (requires authentication)
- `GET /allholdings` - Get all holdings
- `GET /allpositions` - Get all positions
- `GET /allorders` - Get all orders

## 🛠️ Tech Stack

### Frontend & Dashboard
- **React** - UI library
- **React Router** - Client-side routing
- **Material-UI** - Component library (Dashboard)
- **Chart.js** - Data visualization
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcrypt.js** - Password hashing
- **Passport.js** - Authentication middleware

## 📦 Database Models

### User
- Email
- Password (hashed)
- Username
- Address, City, State, Zip

### Holdings
- Stock name
- Quantity
- Average price
- Current price
- Net change
- Day change
- User reference

### Positions
- Product type
- Stock name
- Quantity
- Average price
- Current price
- Net change
- Day change
- Loss indicator

### Orders
- Stock name
- Quantity
- Price
- Mode (buy/sell)

## 🌐 Deployment

The application is configured for deployment on Render:
- Frontend: `https://stokro.onrender.com`
- Dashboard: `https://stokro-dashboard.onrender.com`

### Deployment Steps

1. **Backend Deployment**
   - Set environment variables in Render dashboard
   - Deploy from GitHub repository
   - Ensure MongoDB connection string is configured

2. **Frontend Deployment**
   - Update API endpoints to point to production backend
   - Build the production bundle: `npm run build`
   - Deploy to Render or Netlify

3. **Dashboard Deployment**
   - Update API endpoints to point to production backend
   - Build the production bundle: `npm run build`
   - Deploy to Render or Netlify

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- CORS protection
- Environment variable configuration
- Secure session management

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Kartik Singhal**

## 🙏 Acknowledgments

- Inspired by modern trading platforms
- Built with the MERN stack
- Material-UI for beautiful components
- Chart.js for data visualization

---

⭐ Star this repository if you find it helpful!
