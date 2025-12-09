import express from 'express';
import { signup, login, getUserProfile, updateProfile } from '../controllers/authController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { loginLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post('/signup', loginLimiter, signup);
router.post('/login', loginLimiter, login);
router.get('/profile', authMiddleware, getUserProfile);
router.put('/profile', authMiddleware, updateProfile);

export default router;
