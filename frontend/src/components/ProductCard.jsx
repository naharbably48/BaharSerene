import React from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './ProductCard.module.css';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, 1);
    toast.success('Added to cart!');
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={product.images?.[0]?.url || '/placeholder.jpg'}
          alt={product.name}
          className={styles.image}
        />
        {product.stock === 0 && <div className={styles.outOfStock}>Out of Stock</div>}
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>

        <div className={styles.category}>{product.category}</div>

        <div className={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              color={i < Math.floor(product.averageRating) ? '#fbbf24' : '#e5e7eb'}
              size={14}
            />
          ))}
          <span className={styles.reviewCount}>({product.totalReviews})</span>
        </div>

        <div className={styles.priceSection}>
          <span className={styles.price}>₹{product.price}</span>
          {product.originalPrice && (
            <span className={styles.originalPrice}>₹{product.originalPrice}</span>
          )}
        </div>

        <p className={styles.description}>{product.description.substring(0, 60)}...</p>

        <div className={styles.tags}>
          <span className={styles.tag}>{product.difficultyLevel}</span>
          <span className={styles.tag}>{product.size}</span>
        </div>

        <button
          className={styles.addBtn}
          onClick={handleAddToCart}
          disabled={product.stock === 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
