import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Cart from './pages/Cart';
import OrderSummary from './pages/OrderSummary';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/' || location.pathname === '/login';

  return (
    <div className="container">
      {/* 👇 Hide Navbar only on login page(s) */}
      {!isLoginPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/summary" element={<OrderSummary />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}


export default App;
