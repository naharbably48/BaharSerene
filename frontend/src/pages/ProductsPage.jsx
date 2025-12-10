import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import styles from './ProductsPage.module.css';
import { productsData, categories } from '../data/products';
import toast from 'react-hot-toast';

const CATEGORIES = categories.map(cat => cat.name);

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    difficulty: searchParams.get('difficulty') || '',
    page: parseInt(searchParams.get('page')) || 1,
  });

  useEffect(() => {
    try {
      setLoading(true);
      
      // Filter products based on filters
      let filtered = [...productsData];
      
      if (filters.category) {
        filtered = filtered.filter(p => p.category === filters.category);
      }
      
      if (filters.minPrice) {
        filtered = filtered.filter(p => p.price >= parseFloat(filters.minPrice));
      }
      
      if (filters.maxPrice) {
        filtered = filtered.filter(p => p.price <= parseFloat(filters.maxPrice));
      }
      
      if (filters.difficulty) {
        filtered = filtered.filter(p => p.careLevel.toLowerCase() === filters.difficulty.toLowerCase());
      }
      
      setProducts(filtered);
    } catch (error) {
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value, page: 1 });
  };

  return (
    <div className={styles.productsPage}>
      <div className="container">
        <div className={styles.wrapper}>
          {/* Sidebar Filters */}
          <aside className={styles.sidebar}>
            <h3>Filters</h3>

            {/* Category Filter */}
            <div className={styles.filterGroup}>
              <h4>Category</h4>
              {CATEGORIES.map((cat) => (
                <label key={cat} className={styles.checkbox}>
                  <input
                    type="checkbox"
                    checked={filters.category === cat}
                    onChange={(e) =>
                      handleFilterChange('category', e.target.checked ? cat : '')
                    }
                  />
                  {cat}
                </label>
              ))}
            </div>

            {/* Price Filter */}
            <div className={styles.filterGroup}>
              <h4>Price Range</h4>
              <div className={styles.priceInputs}>
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                />
              </div>
            </div>

            {/* Difficulty Filter */}
            <div className={styles.filterGroup}>
              <h4>Difficulty Level</h4>
              {['Beginner-friendly', 'Moderate', 'Advanced'].map((level) => (
                <label key={level} className={styles.checkbox}>
                  <input
                    type="checkbox"
                    checked={filters.difficulty === level}
                    onChange={(e) =>
                      handleFilterChange('difficulty', e.target.checked ? level : '')
                    }
                  />
                  {level}
                </label>
              ))}
            </div>
          </aside>

          {/* Products Grid */}
          <section className={styles.main}>
            <h2>Our Plants</h2>
            {loading ? (
              <div className={styles.loading}>Loading...</div>
            ) : products.length > 0 ? (
              <div className={styles.productGrid}>
                {products.map((product) => (
                  <Link key={product._id} to={`/products/${product._id}`}>
                    <ProductCard product={product} />
                  </Link>
                ))}
              </div>
            ) : (
              <div className={styles.noProducts}>
                <p>No products found. Try adjusting your filters.</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
