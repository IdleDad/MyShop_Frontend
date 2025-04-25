import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home'); // dummy redirect
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-brand">
          <img src="/images/logo.png" alt="MyShop" />
          <h1>MyShop</h1>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          <h2>Sign In</h2>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <button
            type="button"
            className="signup-btn"
            onClick={() => alert('Sign up coming soon!')}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
