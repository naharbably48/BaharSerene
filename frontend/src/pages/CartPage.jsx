import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import styles from './CartPage.module.css';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <div className="container">
          <h2>Your Cart is Empty</h2>
          <p>Start shopping and add some beautiful plants to your cart!</p>
          <Link to="/products" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <div className="container">
        <h1>Shopping Cart</h1>

        <div className={styles.wrapper}>
          {/* Cart Items */}
          <div className={styles.cartItems}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.productId}>
                    <td className={styles.product}>
                      <img src={item.image} alt={item.name} />
                      <span>{item.name}</span>
                    </td>
                    <td>₹{item.price}</td>
                    <td>
                      <div className={styles.quantity}>
                        <button onClick={() => updateQuantity(item.productId, item.quantity - 1)}>
                          <FaMinus />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.productId, item.quantity + 1)}>
                          <FaPlus />
                        </button>
                      </div>
                    </td>
                    <td className={styles.subtotal}>₹{(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className={styles.deleteBtn}
                        onClick={() => removeFromCart(item.productId)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <aside className={styles.summary}>
            <h3>Order Summary</h3>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
            <div className={styles.coupon}>
              <input type="text" placeholder="Coupon Code" />
              <button>Apply</button>
            </div>
            <div className={styles.summaryRow}>
              <span>Delivery Charge</span>
              <span>₹50</span>
            </div>
            <hr />
            <div className={styles.total}>
              <span>Total</span>
              <span>₹{(cartTotal + 50).toFixed(2)}</span>
            </div>
            <Link to="/checkout" className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
              Proceed to Checkout
            </Link>
            <button
              className={styles.continueShopping}
              onClick={() => window.history.back()}
            >
              Continue Shopping
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
