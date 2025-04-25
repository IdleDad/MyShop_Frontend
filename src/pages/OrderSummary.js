import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './OrderSummary.css';

const OrderSummary = () => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="summary-container">
      <h2>Order Summary</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="summary-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
          <hr />
          <h3>Total: ${total.toFixed(2)}</h3>
          <button className="place-order-btn">Place Order</button>
        </>
      )}
    </div>
  );
};

export default OrderSummary;
