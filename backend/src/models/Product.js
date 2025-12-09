import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide product name'],
      trim: true,
      minlength: [3, 'Product name must be at least 3 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please provide product description'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide product price'],
      min: [0, 'Price cannot be negative'],
    },
    originalPrice: {
      type: Number,
      min: [0, 'Price cannot be negative'],
    },
    category: {
      type: String,
      required: [true, 'Please select a category'],
      enum: [
        'Indoor Plants',
        'Outdoor Plants',
        'Flowering Plants',
        'Seedlings',
        'Seeds Pack',
        'Pots & Planters',
        'Soil, Fertilizer, Tools',
      ],
    },
    images: [
      {
        url: String,
        alt: String,
      },
    ],
    stock: {
      type: Number,
      required: [true, 'Please provide stock quantity'],
      default: 0,
      min: [0, 'Stock cannot be negative'],
    },
    sku: {
      type: String,
      unique: true,
      trim: true,
    },
    difficultyLevel: {
      type: String,
      enum: ['Beginner-friendly', 'Moderate', 'Advanced'],
      default: 'Moderate',
    },
    careInstructions: {
      sunlight: String,
      water: String,
      soil: String,
      temperature: String,
      humidity: String,
      fertilizer: String,
    },
    climateSuitability: [String],
    size: {
      type: String,
      enum: ['Small', 'Medium', 'Large'],
    },
    plantType: String,
    ratings: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        rating: {
          type: Number,
          min: 1,
          max: 5,
        },
        review: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    totalReviews: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// Index for search
productSchema.index({ name: 'text', description: 'text', plantType: 'text' });

export const Product = mongoose.model('Product', productSchema);
