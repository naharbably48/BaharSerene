# BaharSerene - Plant Nursery E-Commerce Platform

A professional, full-stack e-commerce platform for an online plant nursery with modern UI/UX and comprehensive features.

## 🌱 Project Overview

BaharSerene is a beautifully designed, responsive online plant nursery platform that allows users to explore, purchase, and learn about plants. The platform offers a smooth shopping experience, real-time stock updates, personalized recommendations, and a modern, feminine aesthetic that reflects nature and serenity.

## 📁 Project Structure

```
BaharSerene/
├── backend/                 # Node.js + Express API
│   ├── src/
│   │   ├── config/         # Database and app configuration
│   │   ├── controllers/    # Business logic
│   │   ├── models/         # MongoDB schemas
│   │   ├── routes/         # API endpoints
│   │   ├── middleware/     # Auth, error handling, rate limiting
│   │   ├── utils/          # Helper functions
│   │   ├── validators/     # Input validation
│   │   └── server.js       # Main server file
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
└── frontend/                # React + Vite app
    ├── src/
    │   ├── components/     # Reusable components
    │   ├── pages/         # Page components
    │   ├── services/      # API client
    │   ├── context/       # React Context
    │   ├── styles/        # Global styles
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── README.md
```

## 🚀 Quick Start

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Update .env with your MongoDB URI and JWT secret
npm run dev
```

Server runs on `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

App runs on `http://localhost:3000`

## 🌱 Core Features

### 1. **Home Page**
- Clean, soft UI with nature-themed colors
- Featured plants section
- Search bar with suggestions
- Seasonal promo banner
- Category showcase

### 2. **Product Catalog**
- Browse by categories:
  - Indoor Plants
  - Outdoor Plants
  - Flowering Plants
  - Seedlings
  - Seeds Pack
  - Pots & Planters
  - Soil, Fertilizer, Tools
- Advanced filtering:
  - Price range
  - Difficulty level
  - Size
  - Climate suitability
  - Plant type

### 3. **Product Details Page**
- High-quality images
- Detailed care instructions (sunlight, water, soil, etc.)
- Stock availability
- User ratings & reviews
- Similar product suggestions
- Add to Wishlist / Cart

### 4. **Shopping Experience**
- Intuitive cart management
- Quantity controls
- Discount coupon application
- Automatic delivery charge calculation
- Address validation
- Multiple payment methods

### 5. **User Account System**
- Secure sign up / login
- JWT authentication
- Profile management
- Order history
- Wishlist management
- Recently viewed plants

### 6. **Search & Smart Filtering**
- Live search with suggestions
- Text search across products
- Smart filtering by care difficulty
- Price-based sorting

## 🛠 Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **Password Hashing**: bcryptjs
- **Validation**: validator.js
- **Security**: CORS, Rate Limiting

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Notifications**: React Hot Toast
- **Styling**: CSS Modules + Global CSS

## 📊 Database Models

### User
- Personal information
- Authentication credentials
- Wishlist references
- Order history
- Recently viewed products

### Product
- Details and images
- Pricing information
- Stock management
- Care instructions
- Ratings & reviews
- Category classification

### Order
- Items and quantities
- Shipping address
- Payment method & status
- Order status tracking
- Discount information

### Address
- User shipping addresses
- Validation rules
- Default address marking

### Coupon
- Discount codes
- Validity periods
- Usage limits
- Category restrictions

## 🔒 Security Features

✅ JWT-based authentication
✅ Password hashing with bcryptjs
✅ CORS protection
✅ Rate limiting on sensitive endpoints
✅ Input validation on all endpoints
✅ Protected routes requiring authentication
✅ Admin-only operations

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 768px, 1024px
- Flexible grid layouts
- Touch-friendly UI elements
- Optimized images

## 🎨 Design System

### Color Palette
- **Primary**: `#2d5016` (Deep Green)
- **Secondary**: `#6ba547` (Fresh Green)
- **Accent**: `#f4e4c1` (Warm Beige)
- **Background**: `#f9f7f4` (Light Natural)

### Typography
- Clean, readable sans-serif fonts
- Clear hierarchy
- Optimal line heights

## 🚀 Deployment

### Backend Deployment Options
- Heroku
- AWS EC2
- DigitalOcean
- Railway

### Frontend Deployment Options
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## 📚 API Documentation

See `backend/README.md` for detailed API endpoint documentation.

## 🛠 Development Guidelines

1. **Code Structure**: Follow the modular structure outlined
2. **Naming Conventions**: Use camelCase for JS, kebab-case for CSS
3. **Error Handling**: Always handle API errors gracefully
4. **Responsive**: Test on multiple screen sizes
5. **Accessibility**: Ensure proper ARIA labels and semantic HTML

## 🔄 Workflow

1. **User Registration/Login** → JWT token generated
2. **Browse Products** → Filter and search functionality
3. **View Details** → Care instructions and reviews
4. **Add to Cart** → Stored in localStorage
5. **Checkout** → Enter address and payment details
6. **Order Confirmation** → Order created and tracked

## 📦 Dependencies Management

Backend dependencies are in `backend/package.json`
Frontend dependencies are in `frontend/package.json`

## 🤝 Contributing

1. Follow the existing code structure
2. Create feature branches
3. Test thoroughly before submitting
4. Maintain code quality and documentation

## 📝 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/baharserene
JWT_SECRET=your_secret_key
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env.local) - Optional
```
VITE_API_URL=http://localhost:5000/api
```

## 🐛 Known Issues & Roadmap

### Current Version
- ✅ Core features implemented
- ✅ Full authentication system
- ✅ Shopping cart & checkout
- ✅ Order management

### Future Enhancements
- Email notifications
- Advanced analytics
- Payment gateway integration
- Admin dashboard
- Image upload functionality
- Real-time inventory sync
- User recommendations engine

## 📞 Support

For issues or questions, refer to the individual README files in backend/ and frontend/ folders.

## 📄 License

ISC

---

**Built with ❤️ for plant lovers everywhere**

🌱 Make your space green, make it serene! 🌿
