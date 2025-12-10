import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    // Here you would typically send this to your backend
    console.log('Form submitted:', formData);
    toast.success('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with us today!</p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className={styles.info}>
        <div className="container">
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <FaPhone className={styles.icon} />
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
              <p className={styles.hours}>Mon - Fri, 9AM - 6PM</p>
            </div>
            <div className={styles.infoCard}>
              <FaEnvelope className={styles.icon} />
              <h3>Email</h3>
              <p>support@baharserene.com</p>
              <p className={styles.hours}>We reply within 24 hours</p>
            </div>
            <div className={styles.infoCard}>
              <FaMapMarkerAlt className={styles.icon} />
              <h3>Location</h3>
              <p>123 Green Street</p>
              <p>Nature City, NC 12345</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.formWrapper}>
            <div className={styles.formContent}>
              <h2>Send us a Message</h2>
              <p>Have a question? We'd love to help!</p>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Message
                </button>
              </form>
            </div>

            <div className={styles.faqContent}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqItem}>
                <h3>How long does shipping take?</h3>
                <p>We typically ship within 2-3 business days. Delivery takes 5-7 business days depending on your location.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What if my plant arrives damaged?</h3>
                <p>We guarantee all plants arrive in perfect condition. If there's any issue, we'll replace it free of charge.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do you offer plant care support?</h3>
                <p>Yes! Each plant comes with detailed care instructions, and our team is always ready to help with any questions.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I return a plant?</h3>
                <p>We offer a 30-day money-back guarantee if you're not satisfied with your purchase.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
