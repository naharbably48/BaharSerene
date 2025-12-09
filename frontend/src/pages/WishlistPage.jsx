import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import styles from './WishlistPage.module.css';
import { wishlistService } from '../services/index';
import toast from 'react-hot-toast';

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await wishlistService.getWishlist();
        setWishlist(response.data.wishlist || []);
      } catch (error) {
        toast.error('Failed to load wishlist');
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  if (loading) return <div className="container pt-4">Loading...</div>;

  return (
    <div className={styles.wishlistPage}>
      <div className="container">
        <h1>My Wishlist</h1>

        {wishlist.length === 0 ? (
          <div className={styles.empty}>
            <p>Your wishlist is empty.</p>
            <Link to="/products" className="btn btn-primary">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className={styles.grid}>
            {wishlist.map((product) => (
              <Link key={product._id} to={`/products/${product._id}`}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
