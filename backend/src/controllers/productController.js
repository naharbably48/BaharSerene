import { Product } from '../models/Product.js';

export const getAllProducts = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 12,
      category,
      sortBy = 'createdAt',
      order = 'desc',
      minPrice,
      maxPrice,
      difficulty,
      size,
    } = req.query;

    // Build filter
    const filter = { isActive: true };

    if (category) {
      filter.category = category;
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = parseInt(minPrice);
      if (maxPrice) filter.price.$lte = parseInt(maxPrice);
    }

    if (difficulty) {
      filter.difficultyLevel = difficulty;
    }

    if (size) {
      filter.size = size;
    }

    // Build sort
    const sortObj = {};
    sortObj[sortBy] = order === 'asc' ? 1 : -1;

    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Fetch products
    const products = await Product.find(filter)
      .sort(sortObj)
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Product.countDocuments(filter);

    res.json({
      success: true,
      products,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / parseInt(limit)),
        totalProducts: total,
        limit: parseInt(limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      'ratings.userId',
      'firstName lastName avatar'
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    // Get similar products
    const similarProducts = await Product.find({
      category: product.category,
      _id: { $ne: product._id },
      isActive: true,
    }).limit(5);

    res.json({
      success: true,
      product,
      similarProducts,
    });
  } catch (error) {
    next(error);
  }
};

export const searchProducts = async (req, res, next) => {
  try {
    const { query, page = 1, limit = 12 } = req.query;

    if (!query) {
      return res.status(400).json({
        success: false,
        message: 'Search query is required',
      });
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const products = await Product.find(
      { $text: { $search: query }, isActive: true },
      { score: { $meta: 'textScore' } }
    )
      .sort({ score: { $meta: 'textScore' } })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Product.countDocuments({
      $text: { $search: query },
      isActive: true,
    });

    res.json({
      success: true,
      products,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / parseInt(limit)),
        totalProducts: total,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const addRating = async (req, res, next) => {
  try {
    const { rating, review } = req.body;
    const productId = req.params.id;

    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: 'Rating must be between 1 and 5',
      });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    // Add rating
    product.ratings.push({
      userId: req.userId,
      rating,
      review,
    });

    // Recalculate average
    const totalRatings = product.ratings.reduce((sum, r) => sum + r.rating, 0);
    product.averageRating = (totalRatings / product.ratings.length).toFixed(1);
    product.totalReviews = product.ratings.length;

    await product.save();

    res.json({
      success: true,
      message: 'Rating added successfully',
      product,
    });
  } catch (error) {
    next(error);
  }
};
