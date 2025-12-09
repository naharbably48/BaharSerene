import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './OrdersPage.module.css';
import { orderService } from '../services/index';
import toast from 'react-hot-toast';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await orderService.getOrders();
        setOrders(response.data.orders);
      } catch (error) {
        toast.error('Failed to load orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <div className="container pt-4">Loading...</div>;

  return (
    <div className={styles.ordersPage}>
      <div className="container">
        <h1>My Orders</h1>

        {orders.length === 0 ? (
          <div className={styles.empty}>
            <p>You haven't placed any orders yet.</p>
            <Link to="/products" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className={styles.ordersList}>
            {orders.map((order) => (
              <div key={order._id} className={styles.orderCard}>
                <div className={styles.orderHeader}>
                  <div>
                    <h3>{order.orderNumber}</h3>
                    <p className={styles.date}>
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <span className={`${styles.status} ${styles[order.orderStatus]}`}>
                      {order.orderStatus.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className={styles.items}>
                  {order.items.map((item, idx) => (
                    <div key={idx} className={styles.item}>
                      <span>{item.productName}</span>
                      <span>x{item.quantity}</span>
                      <span>₹{item.subtotal}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.footer}>
                  <span className={styles.total}>
                    Total: ₹{order.totalAmount}
                  </span>
                  <Link to={`/orders/${order._id}`} className={styles.viewBtn}>
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
