import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1>About BaharSerene</h1>
          <p>Bringing Nature's Serenity to Your Home</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.mission}>
        <div className="container">
          <div className={styles.missionContent}>
            <div className={styles.missionText}>
              <h2>Our Mission</h2>
              <p>
                At BaharSerene, we believe that plants have the power to transform spaces and improve lives. Our mission is to make quality plants accessible to everyone, whether you're a seasoned plant parent or just starting your green journey.
              </p>
              <p>
                We're committed to providing healthy, beautiful plants along with expert care guides to ensure your plants thrive in their new homes.
              </p>
            </div>
            <div className={styles.missionImage}>
              <div className={styles.imagePlaceholder}>
                <span>🌿</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <div className="container">
          <h2>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>♻️</div>
              <h3>Sustainability</h3>
              <p>We source plants responsibly and promote eco-friendly practices in everything we do.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>❤️</div>
              <h3>Quality</h3>
              <p>Every plant is carefully cultivated and inspected to ensure it arrives healthy and beautiful.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3>Community</h3>
              <p>We foster a community of plant lovers who share tips, experiences, and celebrate their green spaces.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>📚</div>
              <h3>Education</h3>
              <p>We provide comprehensive care guides and expert advice to help you become a confident plant parent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.story}>
        <div className="container">
          <h2>Our Story</h2>
          <div className={styles.storyContent}>
            <p>
              BaharSerene started as a passion project born from a love of plants and a desire to share that joy with others. What began as a small collection has grown into a thriving online nursery dedicated to bringing nature's serenity into homes around the world.
            </p>
            <p>
              "Bahar" means spring and renewal in Persian, while "Serene" represents the peace and calm that plants bring. Together, they capture our essence: we're not just selling plants, we're helping you create serene spaces filled with natural beauty.
            </p>
            <p>
              Today, we're proud to offer over 100 carefully selected plant varieties, from beginner-friendly options to rare collector specimens. Each plant comes with detailed care instructions and our commitment to your satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>105+</div>
              <p>Plant Varieties</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>10K+</div>
              <p>Happy Customers</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>5000+</div>
              <p>Plants Delivered</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Join Our Plant Community</h2>
          <p>Start your green journey today and discover the joy of plant parenthood.</p>
          <a href="/products" className={styles.ctaBtn}>
            Shop Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
