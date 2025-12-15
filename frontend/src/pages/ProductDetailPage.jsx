import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaHeart } from 'react-icons/fa';
import styles from './ProductDetailPage.module.css';
import { productService, wishlistService } from '../services/index';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await productService.getProductById(id);
        setProduct(response.data.product);
      } catch (error) {
        toast.error('Product not found');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to cart!`);
  };

  const handleToggleWishlist = async () => {
    if (!isAuthenticated) {
      toast.error('Please login to add to wishlist');
      return;
    }

    try {
      if (isWishlisted) {
        await wishlistService.removeFromWishlist(product._id);
        toast.success('Removed from wishlist');
      } else {
        await wishlistService.addToWishlist(product._id);
        toast.success('Added to wishlist');
      }
      setIsWishlisted(!isWishlisted);
    } catch (error) {
      toast.error('Failed to update wishlist');
    }
  };

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (!product) return <div className={styles.error}>Product not found</div>;

  return (
    <div className={styles.detail}>
      <div className="container">
        <Link to="/products" className={styles.back}>← Back to Products</Link>

        <div className={styles.wrapper}>
          {/* Images */}
          <div className={styles.imageSection}>
            <div className={styles.mainImage}>
              <img
                src={product.images?.[0]?.url || '/placeholder.jpg'}
                alt={product.name}
              />
            </div>
            {product.images && product.images.length > 1 && (
              <div className={styles.thumbnails}>
                {product.images.map((img, idx) => (
                  <img key={idx} src={img.url} alt={`${product.name} ${idx + 1}`} />
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className={styles.infoSection}>
            <div className={styles.header}>
              <h1>{product.name}</h1>
              <p className={styles.category}>{product.category}</p>
            </div>

            {/* Rating */}
            <div className={styles.rating}>
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  color={i < Math.floor(product.averageRating) ? '#fbbf24' : '#e5e7eb'}
                />
              ))}
              <span>({product.totalReviews} reviews)</span>
            </div>

            {/* Price */}
            <div className={styles.priceSection}>
              <span className={styles.price}>৳{product.price}</span>
              {product.originalPrice && (
                <span className={styles.originalPrice}>৳{product.originalPrice}</span>
              )}
            </div>

            {/* Stock Status */}
            <p className={styles.stock}>
              {product.stock > 0 ? (
                <span className={styles.inStock}>In Stock ({product.stock})</span>
              ) : (
                <span className={styles.outOfStock}>Out of Stock</span>
              )}
            </p>

            {/* Description */}
            <p className={styles.description}>{product.description}</p>

            {/* Care Instructions */}
            <div className={styles.care}>
              <h3>Care Instructions</h3>
              <ul>
                {product.careInstructions?.sunlight && (
                  <li><strong>Sunlight:</strong> {product.careInstructions.sunlight}</li>
                )}
                {product.careInstructions?.water && (
                  <li><strong>Water:</strong> {product.careInstructions.water}</li>
                )}
                {product.careInstructions?.soil && (
                  <li><strong>Soil:</strong> {product.careInstructions.soil}</li>
                )}
              </ul>
            </div>

            {/* Add to Cart */}
            {product.stock > 0 && (
              <div className={styles.actions}>
                <div className={styles.quantity}>
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <input type="number" value={quantity} readOnly />
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  >
                    +
                  </button>
                </div>
                <button className={styles.addBtn} onClick={handleAddToCart}>
                  <FaShoppingCart /> Add to Cart
                </button>
                <button
                  className={`${styles.wishlistBtn} ${isWishlisted ? styles.wishlisted : ''}`}
                  onClick={handleToggleWishlist}
                >
                  <FaHeart />
                </button>
              </div>
            )}

            {/* Tags */}
            <div className={styles.tags}>
              <span>{product.difficultyLevel}</span>
              <span>{product.size}</span>
              {product.plantType && <span>{product.plantType}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
