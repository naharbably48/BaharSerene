import apiClient from './apiClient';

// Auth Services
export const authService = {
  signup: (data) => apiClient.post('/auth/signup', data),
  login: (data) => apiClient.post('/auth/login', data),
  getProfile: () => apiClient.get('/auth/profile'),
  updateProfile: (data) => apiClient.put('/auth/profile', data),
};

// Product Services
export const productService = {
  getAllProducts: (params) => apiClient.get('/products', { params }),
  getProductById: (id) => apiClient.get(`/products/${id}`),
  searchProducts: (query, params) =>
    apiClient.get('/products/search', { params: { query, ...params } }),
  addRating: (id, data) => apiClient.post(`/products/${id}/rating`, data),
};

// Wishlist Services
export const wishlistService = {
  addToWishlist: (productId) =>
    apiClient.post('/wishlist/add', { productId }),
  removeFromWishlist: (productId) =>
    apiClient.post('/wishlist/remove', { productId }),
  getWishlist: () => apiClient.get('/wishlist'),
  trackRecentlyViewed: (productId) =>
    apiClient.post('/wishlist/recent/track', { productId }),
  getRecentlyViewed: () => apiClient.get('/wishlist/recent/list'),
};

// Order Services
export const orderService = {
  createOrder: (data) => apiClient.post('/orders', data),
  getOrders: () => apiClient.get('/orders'),
  getOrderById: (id) => apiClient.get(`/orders/${id}`),
  updateOrderStatus: (id, data) => apiClient.put(`/orders/${id}`, data),
};

export default {
  auth: authService,
  products: productService,
  wishlist: wishlistService,
  orders: orderService,
};
