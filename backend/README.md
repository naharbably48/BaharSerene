# BaharSerene Backend

A professional Node.js/Express API for the BaharSerene plant nursery e-commerce platform.

## Project Structure

```
backend/
├── src/
│   ├── config/          # Database and app configuration
│   ├── controllers/      # Business logic for routes
│   ├── middleware/       # Auth, error handling, rate limiting
│   ├── models/          # MongoDB schemas (User, Product, Order, etc.)
│   ├── routes/          # API endpoints
│   ├── utils/           # Helper functions
│   ├── validators/      # Input validation logic
│   └── server.js        # Main application file
├── package.json
├── .env.example
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 16+
- MongoDB (local or Atlas)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file from `.env.example`:
```bash
copy .env.example .env
```

3. Update environment variables in `.env`

### Running the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Products
- `GET /api/products` - Get all products with filters
- `GET /api/products/search?query=` - Search products
- `GET /api/products/:id` - Get product details
- `POST /api/products/:id/rating` - Add product rating

### Wishlist
- `POST /api/wishlist/add` - Add to wishlist
- `POST /api/wishlist/remove` - Remove from wishlist
- `GET /api/wishlist` - Get wishlist
- `POST /api/wishlist/recent/track` - Track recently viewed
- `GET /api/wishlist/recent/list` - Get recently viewed

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id` - Update order status (admin only)

## Features

✅ User authentication with JWT
✅ Product filtering and search
✅ Shopping cart & checkout
✅ Order management
✅ Wishlist functionality
✅ Rating and reviews
✅ Coupon/discount system
✅ Rate limiting
✅ CORS enabled
✅ Error handling
✅ MongoDB integration

## Environment Variables

See `.env.example` for all required variables.

## Tech Stack

- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **Password**: bcryptjs
- **Validation**: validator.js
- **Security**: express-rate-limit, CORS
