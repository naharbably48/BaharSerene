import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.content} container`}>
        <div className={styles.section}>
          <h3>About BaharSerene</h3>
          <p>
            Your trusted online plant nursery bringing nature's beauty to your home.
          </p>
        </div>

        <div className={styles.section}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#shop">Shop Plants</a></li>
            <li><a href="#care">Care Guide</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Categories</h3>
          <ul>
            <li><a href="#indoor">Indoor Plants</a></li>
            <li><a href="#outdoor">Outdoor Plants</a></li>
            <li><a href="#seeds">Seeds & Seedlings</a></li>
            <li><a href="#accessories">Accessories</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Follow Us</h3>
          <div className={styles.social}>
            <a href="#facebook"><FaFacebook /></a>
            <a href="#instagram"><FaInstagram /></a>
            <a href="#twitter"><FaTwitter /></a>
            <a href="#linkedin"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {currentYear} BaharSerene. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
