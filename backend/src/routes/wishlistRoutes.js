import express from 'express';
import {
  addToWishlist,
  removeFromWishlist,
  getWishlist,
  trackRecentlyViewed,
  getRecentlyViewed,
} from '../controllers/wishlistController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/add', authMiddleware, addToWishlist);
router.post('/remove', authMiddleware, removeFromWishlist);
router.get('/', authMiddleware, getWishlist);
router.post('/recent/track', authMiddleware, trackRecentlyViewed);
router.get('/recent/list', authMiddleware, getRecentlyViewed);

export default router;
