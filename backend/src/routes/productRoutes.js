import express from 'express';
import {
  getAllProducts,
  getProductById,
  searchProducts,
  addRating,
} from '../controllers/productController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/search', searchProducts);
router.get('/:id', getProductById);
router.post('/:id/rating', authMiddleware, addRating);

export default router;
