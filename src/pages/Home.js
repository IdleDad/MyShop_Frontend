import React from 'react';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Home = () => {
  const products1 = [
    { id: 1, name: 'Headphones', image: '/images/headphones.jpg', price: 49.99 },
    { id: 2, name: 'Smart Watch', image: '/images/smartwatch.jpg', price: 79.99 },
    { id: 3, name: 'Gaming Mouse', image: '/images/mouse.jpg', price: 29.99 },
    { id: 4, name: 'Bluetooth Speaker', image: '/images/speaker.jpg', price: 39.99 }
  ];

  const products2 = [
    { id: 5, name: 'Casual Shoes', image: '/images/shoes.jpg', price: 59.99 },
    { id: 6, name: 'Handbag', image: '/images/bag.jpg', price: 45.00 },
    { id: 7, name: 'Sunglasses', image: '/images/sunglasses.jpg', price: 25.00 },
    { id: 8, name: 'Perfume', image: '/images/perfume.jpg', price: 65.00 }
  ];

  return (
    <div className="home-wrapper">
      {/* Hero Carousel */}
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={3000}
      >
        <div>
          <img src="/images/hero-banner.jpg" alt="Hero Sale Banner 1" />
        </div>
        <div>
          <img src="/images/hero-banner-2.jpg" alt="Hero Sale Banner 2" />
        </div>
      </Carousel>

      {/* Tech Essentials */}
      <section className="section">
        <h2 className="section-title">Tech Essentials</h2>
        <div className="product-grid">
          {products1.map((item) => (
            <Link to={`/product/${item.id}`} className="product-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <p className="product-name">{item.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Style & Beauty */}
      <section className="section">
        <h2 className="section-title">Style & Beauty Picks</h2>
        <div className="product-grid">
          {products2.map((item) => (
            <Link to={`/product/${item.id}`} className="product-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <p className="product-name">{item.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
