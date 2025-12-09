# 🌱 BaharSerene - Complete Setup Guide

## Project Overview
BaharSerene is a professional, full-stack plant nursery e-commerce platform with React frontend and Node.js/Express backend.

## ✨ What's Included

### Backend Features ✅
- **Express.js API** with professional structure
- **MongoDB Integration** with Mongoose schemas
- **User Authentication** with JWT
- **Product Management** with filtering & search
- **Shopping Cart & Orders** system
- **Wishlist** functionality
- **Rate Limiting** and CORS protection
- **Error Handling** middleware
- **Password Hashing** with bcryptjs

### Frontend Features ✅
- **React 18** with Vite
- **Responsive Design** (mobile-first)
- **React Router** for navigation
- **Context API** for state management
- **Axios** for API calls
- **CSS Modules** for styling
- **Professional UI** with nature theme
- **Toast Notifications**
- **Shopping Cart** with localStorage
- **User Authentication**

## 🚀 Quick Start

### 1. Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Copy environment file
copy .env.example .env

# Update .env with:
# MONGODB_URI=mongodb://localhost:27017/baharserene
# JWT_SECRET=your_secret_key

# Start development server
npm run dev
```

Backend runs on: **http://localhost:5000**

### 2. Frontend Setup

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend runs on: **http://localhost:3000**

## 📊 Database Setup

### Prerequisites
- MongoDB installed locally OR
- MongoDB Atlas account (free cloud database)

### Using Local MongoDB
```bash
# Windows
mongod

# Mac/Linux
brew services start mongodb-community
```

### MongoDB Atlas (Cloud)
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update MONGODB_URI in backend/.env

## 🔑 Key Endpoints

### Authentication
```
POST   /api/auth/signup        - Register user
POST   /api/auth/login         - Login user
GET    /api/auth/profile       - Get user profile
PUT    /api/auth/profile       - Update profile
```

### Products
```
GET    /api/products           - Get all products with filters
GET    /api/products/search    - Search products
GET    /api/products/:id       - Get product details
POST   /api/products/:id/rating - Add product rating
```

### Shopping
```
POST   /api/orders             - Create order
GET    /api/orders             - Get user orders
GET    /api/orders/:id         - Get order details
```

### Wishlist
```
POST   /api/wishlist/add       - Add to wishlist
POST   /api/wishlist/remove    - Remove from wishlist
GET    /api/wishlist           - Get wishlist
```

## 📱 Pages & Routes

### Frontend Routes
```
/                    - Home page
/products            - Product listing with filters
/products/:id        - Product detail page
/cart                - Shopping cart
/checkout            - Order checkout
/login               - User login
/signup              - User registration
/profile             - User profile
/orders              - Order history
/wishlist            - Wishlist
```

## 🗂 Project Structure

```
BaharSerene/
├── backend/
│   ├── src/
│   │   ├── config/          (Database, config)
│   │   ├── controllers/     (Business logic)
│   │   ├── models/          (MongoDB schemas)
│   │   ├── routes/          (API endpoints)
│   │   ├── middleware/      (Auth, errors, rate limit)
│   │   ├── utils/           (Helpers)
│   │   └── server.js
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/      (Header, Footer, ProductCard)
    │   ├── pages/          (Home, Products, Cart, etc.)
    │   ├── services/       (API client)
    │   ├── context/        (Auth, Cart context)
    │   ├── styles/         (Global CSS)
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

## 🎨 Design Features

### Color Scheme
- **Primary Green**: #2d5016
- **Secondary Green**: #6ba547
- **Accent Beige**: #f4e4c1
- **Light Background**: #f9f7f4

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔐 Security

✅ JWT Authentication
✅ Password Hashing (bcryptjs)
✅ CORS Protection
✅ Rate Limiting
✅ Input Validation
✅ Admin-only Routes

## 🛠 Development

### Available Commands

**Backend:**
```bash
npm run dev      # Start with nodemon
npm start        # Start production server
```

**Frontend:**
```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📦 Dependencies

### Backend
- express, cors, dotenv
- mongoose, bcryptjs, jsonwebtoken
- express-rate-limit, validator
- multer, stripe

### Frontend
- react, react-dom, react-router-dom
- axios, react-icons, react-hot-toast
- vite (build tool)

## 🐛 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check MONGODB_URI in .env
- Verify connection string format

### Port Already in Use
- Backend: Change PORT in .env
- Frontend: Vite will use next available port automatically

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### API Not Connecting
- Ensure backend is running on http://localhost:5000
- Check CORS settings in backend
- Verify API endpoints in frontend services

## 📝 Next Steps

1. **Load Sample Data**: Add sample products via API or MongoDB
2. **Configure Payment**: Integrate Stripe/payment gateway
3. **Set Up Email**: Configure email notifications
4. **Deploy**: Push to production platform
5. **Monitor**: Set up logging and monitoring

## 🚀 Deployment Checklist

### Backend
- [ ] Update environment variables for production
- [ ] Set up production MongoDB database
- [ ] Configure JWT secret properly
- [ ] Set FRONTEND_URL to production URL
- [ ] Enable HTTPS
- [ ] Set up error logging

### Frontend
- [ ] Build for production: `npm run build`
- [ ] Update API_URL to production endpoint
- [ ] Test all pages and features
- [ ] Optimize images
- [ ] Set up CDN for static assets

## 📚 Additional Resources

- Express.js Docs: https://expressjs.com
- React Docs: https://react.dev
- MongoDB Docs: https://docs.mongodb.com
- Vite Docs: https://vitejs.dev
- Axios Docs: https://axios-http.com

## 💡 Tips

1. Use React DevTools browser extension for debugging
2. Use MongoDB Compass for database visualization
3. Use Postman for API testing
4. Keep .env files secure (never commit them)
5. Regular database backups

## ✅ Features Checklist

- [x] User authentication system
- [x] Product browsing & filtering
- [x] Shopping cart
- [x] Checkout process
- [x] Order management
- [x] Wishlist
- [x] Product reviews
- [x] Responsive design
- [x] Error handling
- [x] Rate limiting

## 🎯 Success!

Your BaharSerene platform is ready for development!

```
🌱 Make your space green, make it serene! 🌿
```

For detailed information, see:
- `backend/README.md` - Backend documentation
- `frontend/README.md` - Frontend documentation
- `README.md` - Project overview
