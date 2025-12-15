import React from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './ProductCard.module.css';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  // Generate a consistent color based on product ID
  const colors = ['#52b788', '#40916c', '#2d6a4f', '#1b4332', '#95d5b2', '#52b788', '#74c69d'];
  const bgColor = colors[product.id % colors.length];
  
  const placeholderImage = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='${encodeURIComponent(bgColor)}' width='300' height='300'/%3E%3Ctext x='50%25' y='40%25' font-size='40' fill='%23fff' text-anchor='middle' font-weight='bold'%3E🌿%3C/text%3E%3Ctext x='50%25' y='65%25' font-size='14' fill='%23fff' text-anchor='middle'%3E${encodeURIComponent(product.name.substring(0, 12))}%3C/text%3E%3C/svg%3E`;
  
  const [imageSrc, setImageSrc] = React.useState(product.image || placeholderImage);

  const handleAddToCart = () => {
    addToCart(product, 1);
    toast.success('Added to cart!');
  };

  const handleImageError = () => {
    setImageSrc(placeholderImage);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={imageSrc}
          alt={product.name}
          className={styles.image}
          onError={handleImageError}
        />
        {!product.inStock && <div className={styles.outOfStock}>Out of Stock</div>}
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>

        <div className={styles.category}>{product.category}</div>

        <div className={styles.rating}>
          <span className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: i < Math.floor(product.rating || product.averageRating || 0) ? '#ffd60a' : '#e5e7eb' }}>★</span>
            ))}
          </span>
          <span className={styles.reviewCount}>({product.reviews || product.totalReviews || 0})</span>
        </div>

        <div className={styles.priceSection}>
          <span className={styles.price}>৳{product.price}</span>
          {product.originalPrice && (
            <span className={styles.originalPrice}>৳{product.originalPrice}</span>
          )}
        </div>

        <p className={styles.description}>{product.description?.substring(0, 60)}...</p>

        <div className={styles.tags}>
          <span className={styles.tag}>{product.careLevel || product.difficultyLevel}</span>
          <span className={styles.tag}>{product.lightNeeds}</span>
        </div>

        <button
          className={styles.addBtn}
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
