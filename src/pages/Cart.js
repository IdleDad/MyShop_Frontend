import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      {/* Centered Title */}
      <h2 className="cart-title">Shopping Cart</h2>
      <hr />

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-row">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p className="cart-meta">Estimated delivery: <strong>Thu, Apr 25</strong></p>
                <p className="cart-meta">Color: <strong>Black</strong></p>
                <p className="cart-meta">Size: <strong>Medium</strong></p>

                {/* Quantity Controls */}
                <div className="cart-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  <button className="cart-delete" onClick={() => removeFromCart(item.id)}>🗑️</button>
                </div>

                <div className="cart-links">
                  <span onClick={() => removeFromCart(item.id)}>Delete</span> | 
                  <span> Save for later</span> | 
                  <span> Share</span>
                </div>
              </div>

              <div className="cart-price">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}

          <hr />

          <h3 className="cart-total">
            Subtotal ({cartItems.length} items): <strong>${total.toFixed(2)}</strong>
          </h3>

          {/* Centered Buy Now Button */}
          <div className="checkout-wrapper">
            <Link to="/summary">
              <button className="checkout-btn">Buy Now</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
