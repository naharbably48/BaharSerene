import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';
import styles from './Header.module.css';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { itemCount } = useCart();

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <Link to="/" className={styles.logo}>
          🌱 BaharSerene
        </Link>

        <nav className={styles.nav}>
          <Link to="/products" className={styles.navLink}>
            Shop
          </Link>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
          <Link to="/contact" className={styles.navLink}>
            Contact
          </Link>
        </nav>

        <div className={styles.icons}>
          <Link to="/wishlist" className={styles.icon}>
            <FaHeart />
          </Link>
          <Link to="/cart" className={styles.icon}>
            <FaShoppingCart />
            {itemCount > 0 && <span className={styles.badge}>{itemCount}</span>}
          </Link>

          {isAuthenticated ? (
            <div className={styles.userMenu}>
              <button className={styles.icon}>
                <FaUser />
              </button>
              <div className={styles.dropdown}>
                <p className={styles.userName}>
                  {user?.firstName} {user?.lastName}
                </p>
                <Link to="/profile">My Profile</Link>
                <Link to="/orders">My Orders</Link>
                <button onClick={logout} className={styles.logoutBtn}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login" className={`${styles.icon} ${styles.loginBtn}`}>
              <FaUser />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
