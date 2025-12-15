import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './landing_Page/home/HomePage';
import Signup from './landing_Page/signup/Signup';
import About from './landing_Page/about/AboutPage';
import Product from './landing_Page/products/ProductsPage';
import Pricing from './landing_Page/pricing/PricingPage';
import Support from './landing_Page/support/SupportPage';
import Navbar from './landing_Page/Navbar';
import Footer from './landing_Page/Footer';
import NotFound from './landing_Page/NotFound.js';
import Signup_manually from "./landing_Page/signup/Signup_manually.js"
import Login_manually from "./landing_Page/signup/Login.js"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
<div style={{ paddingTop: "80px" }}>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/signup_manually' element={<Signup_manually/>}/>
    <Route path='/Login_manually' element={<Login_manually/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/support' element={<Support/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
</div> 
  <Footer/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
