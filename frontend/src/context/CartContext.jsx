import React, { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  const saveToLocalStorage = (items) => {
    localStorage.setItem('cart', JSON.stringify(items));
  };

  const addToCart = useCallback((product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.productId === product._id);

      let newCart;
      if (existingItem) {
        newCart = prevCart.map(item =>
          item.productId === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newCart = [
          ...prevCart,
          {
            productId: product._id,
            name: product.name,
            price: product.price,
            quantity,
            image: product.images?.[0]?.url,
          },
        ];
      }

      saveToLocalStorage(newCart);
      return newCart;
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter(item => item.productId !== productId);
      saveToLocalStorage(newCart);
      return newCart;
    });
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    setCart((prevCart) => {
      const newCart = prevCart.map(item =>
        item.productId === productId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      );
      saveToLocalStorage(newCart);
      return newCart;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    localStorage.removeItem('cart');
  }, []);

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
