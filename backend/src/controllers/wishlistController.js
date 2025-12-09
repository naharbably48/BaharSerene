import { User } from '../models/User.js';
import { Product } from '../models/Product.js';

export const addToWishlist = async (req, res, next) => {
  try {
    const { productId } = req.body;

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    // Check if product already in wishlist
    if (user.wishlist.includes(productId)) {
      return res.status(400).json({
        success: false,
        message: 'Product already in wishlist',
      });
    }

    user.wishlist.push(productId);
    await user.save();

    res.json({
      success: true,
      message: 'Added to wishlist',
      wishlist: user.wishlist,
    });
  } catch (error) {
    next(error);
  }
};

export const removeFromWishlist = async (req, res, next) => {
  try {
    const { productId } = req.body;

    const user = await User.findByIdAndUpdate(
      req.userId,
      { $pull: { wishlist: productId } },
      { new: true }
    );

    res.json({
      success: true,
      message: 'Removed from wishlist',
      wishlist: user.wishlist,
    });
  } catch (error) {
    next(error);
  }
};

export const getWishlist = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).populate('wishlist');

    res.json({
      success: true,
      wishlist: user.wishlist,
    });
  } catch (error) {
    next(error);
  }
};

export const trackRecentlyViewed = async (req, res, next) => {
  try {
    const { productId } = req.body;

    const user = await User.findById(req.userId);

    // Remove if already exists
    user.recentlyViewed = user.recentlyViewed.filter(
      (item) => item.productId.toString() !== productId
    );

    // Add to beginning
    user.recentlyViewed.unshift({
      productId,
      viewedAt: new Date(),
    });

    // Keep only last 20
    if (user.recentlyViewed.length > 20) {
      user.recentlyViewed = user.recentlyViewed.slice(0, 20);
    }

    await user.save();

    res.json({
      success: true,
      message: 'Product view tracked',
    });
  } catch (error) {
    next(error);
  }
};

export const getRecentlyViewed = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).populate(
      'recentlyViewed.productId'
    );

    res.json({
      success: true,
      recentlyViewed: user.recentlyViewed,
    });
  } catch (error) {
    next(error);
  }
};
