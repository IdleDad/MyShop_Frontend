import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="navbar">
      {/* Logo */}
      <Link to="/home" className="nav-logo">
        <img src="/images/logo.png" alt="MyShop Logo" />
        <span>MyShop</span>
      </Link>

      {/* Location */}
      <div className="nav-location">
        <span className="small-text">Delivering to</span>
        <strong>New York</strong>
      </div>

      {/* Search */}
      <div className="nav-search">
        <select className="nav-dropdown">
          <option>All</option>
          <option>Electronics</option>
          <option>Fashion</option>
        </select>
        <input type="text" placeholder="Search..." />
        <button className="search-btn">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M21 20l-5.5-5.5a7 7 0 1 0-1 1L20 21l1-1zm-12-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
  </svg>
</button>
</div>

      {/* Account */}
      <div className="nav-account">
        <span className="small-text">Hello, sign in</span>
        <Link to="/login">Account & Lists</Link>
      </div>

      {/* Cart */}
      <Link to="/cart" className="nav-cart">
        🛒 Cart ({cartItems.length})
      </Link>
    </header>
  );
};

export default Navbar;
