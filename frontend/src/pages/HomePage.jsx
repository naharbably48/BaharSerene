import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import styles from './HomePage.module.css';
import { productsData, categories } from '../data/products';
import toast from 'react-hot-toast';

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      // Use sample products data - show first 6 products
      setFeaturedProducts(productsData.slice(0, 6));
    } catch (error) {
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to BaharSerene</h1>
          <p>Discover beautiful plants and bring nature's serenity to your home</p>
          <Link to="/products" className={`${styles.cta} btn btn-primary`}>
            Shop Now
          </Link>
        </div>
      </section>

      {/* Promo Banner */}
      <section className={styles.promo}>
        <div className="container">
          <h2>Seasonal Offer</h2>
          <p>Get up to 30% discount on selected plants! Use code: SPRING30</p>
        </div>
      </section>

      {/* Featured Plants */}
      <section className={styles.featured}>
        <div className="container">
          <h2>Featured Plants</h2>
          {loading ? (
            <div className={styles.loading}>Loading...</div>
          ) : (
            <div className={styles.productGrid}>
              {featuredProducts.map((product) => (
                <Link key={product.id || product._id} to={`/products/${product.id || product._id}`}>
                  <ProductCard product={product} />
                </Link>
              ))}
            </div>
          )}
          <div className={styles.viewMore}>
            <Link to="/products" className="btn btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categories}>
        <div className="container">
          <h2>Shop by Category</h2>
          <div className={styles.categoryGrid}>
            {[
              { name: 'Indoor Plants', emoji: '🌿' },
              { name: 'Outdoor Plants', emoji: '🌳' },
              { name: 'Flowering Plants', emoji: '🌺' },
              { name: 'Seedlings', emoji: '🌱' },
              { name: 'Seeds Pack', emoji: '🌾' },
              { name: 'Accessories', emoji: '🪴' },
            ].map((cat) => (
              <Link
                key={cat.name}
                to={`/products?category=${encodeURIComponent(cat.name)}`}
                className={styles.categoryCard}
              >
                <div className={styles.categoryEmoji}>{cat.emoji}</div>
                <p>{cat.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className={styles.benefits}>
        <div className="container">
          <h2>Why Choose BaharSerene?</h2>
          <div className={styles.benefitGrid}>
            <div className={styles.benefit}>
              <div className={styles.icon}>🚚</div>
              <h3>Fast Delivery</h3>
              <p>Quick and safe delivery of your plants</p>
            </div>
            <div className={styles.benefit}>
              <div className={styles.icon}>🌍</div>
              <h3>Premium Quality</h3>
              <p>Healthy and beautiful plants sourced carefully</p>
            </div>
            <div className={styles.benefit}>
              <div className={styles.icon}>💰</div>
              <h3>Best Prices</h3>
              <p>Affordable prices with regular discounts</p>
            </div>
            <div className={styles.benefit}>
              <div className={styles.icon}>🎯</div>
              <h3>Expert Guidance</h3>
              <p>Care tips and expert advice for plant parents</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
