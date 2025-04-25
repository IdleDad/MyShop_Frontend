import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './ProductPage.css';

const productList = [
  { id: 1, name: 'Headphones', price: 49.99, image: '/images/headphones.jpg', description: 'High-quality wireless headphones.', brand: 'Sony', color: 'Black' },
  { id: 2, name: 'Smart Watch', price: 79.99, image: '/images/smartwatch.jpg', description: 'Track fitness, notifications, and more.', brand: 'Fitbit', color: 'Silver' },
  { id: 3, name: 'Gaming Mouse', price: 29.99, image: '/images/mouse.jpg', description: 'Precision gaming mouse with RGB lighting.', brand: 'Logitech', color: 'Black' },
  { id: 4, name: 'Bluetooth Speaker', price: 39.99, image: '/images/speaker.jpg', description: 'Portable speaker with booming sound.', brand: 'JBL', color: 'Blue' },
  { id: 5, name: 'Casual Shoes', price: 59.99, image: '/images/shoes.jpg', description: 'Stylish and comfortable sneakers.', brand: 'Nike', color: 'White' },
  { id: 6, name: 'Handbag', price: 45.00, image: '/images/bag.jpg', description: 'Elegant everyday handbag.', brand: 'Zara', color: 'Tan' },
  { id: 7, name: 'Sunglasses', price: 25.00, image: '/images/sunglasses.jpg', description: 'UV-protective and trendy.', brand: 'Ray-Ban', color: 'Black' },
  { id: 8, name: 'Perfume', price: 65.00, image: '/images/perfume.jpg', description: 'Long-lasting fragrance.', brand: 'Dior', color: 'Glass' },
];

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = productList.find((item) => item.id === parseInt(id));

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 1000);
  };

  if (!product) return <div style={{ padding: '20px' }}>Product not found.</div>;

  return (
    <div className="product-detail-wrapper">
      <div className="product-detail-top">
        {/* ✅ Product Image with Frame */}
        <div className="product-image-frame">
          <img src={product.image} alt={product.name} />
        </div>

        {/* Product Info */}
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="desc">{product.description}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Color:</strong> {product.color}</p>
          <h3>${product.price.toFixed(2)}</h3>

          <div className="quantity-selector">
            <label>Quantity:</label>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>

          <div className="delivery-info">
            <p><strong>Shipping:</strong> Free • Arrives in 2–3 days</p>
            <p><strong>Location:</strong> Jersey City, 07307</p>
          </div>

          {/* ✅ Button + Toast Row */}
          <div className="add-to-cart-row">
            <button className="animated-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            {showMessage && (
              <span className="cart-feedback">✔️ Added to cart</span>
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="related-section">
        <h3>Related Products</h3>
        <div className="related-grid">
          {productList
            .filter((item) => item.id !== product.id)
            .map((item) => (
              <Link to={`/product/${item.id}`} className="related-card" key={item.id}>
                <div className="related-card-frame">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
