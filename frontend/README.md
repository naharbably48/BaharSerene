# BaharSerene Frontend

A beautiful and responsive React application for the BaharSerene plant nursery e-commerce platform.

## Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components (Header, Footer, ProductCard)
│   ├── pages/          # Page components (Home, Products, Cart, Checkout, etc.)
│   ├── services/       # API client and service functions
│   ├── context/        # React Context (Auth, Cart)
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Utility functions
│   ├── styles/         # Global styles
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
├── index.html
├── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables (optional):
Create a `.env.local` file (if needed):
```
VITE_API_URL=http://localhost:5000/api
```

### Running the Application

**Development mode:**
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

**Build for production:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```

## Features

✅ Home page with featured products
✅ Browse and filter products by category
✅ Product detail pages with care instructions
✅ Shopping cart management
✅ Secure checkout process
✅ User authentication (sign up / login)
✅ User profile management
✅ Order history tracking
✅ Wishlist functionality
✅ Product ratings and reviews
✅ Responsive design
✅ Real-time cart updates
✅ Toast notifications

## Components

### Header
- Navigation menu
- Search functionality
- Shopping cart badge
- User authentication menu

### ProductCard
- Product image
- Price display
- Rating system
- Quick add to cart
- Wishlist toggle

### Footer
- Company information
- Links
- Social media
- Copyright

## Context (State Management)

### AuthContext
- User authentication
- Token management
- Profile information

### CartContext
- Shopping cart items
- Add/remove from cart
- Quantity management
- Cart totals

## Services

All API calls are handled through service functions in `src/services/`:

- `authService` - Authentication endpoints
- `productService` - Product browsing and search
- `wishlistService` - Wishlist management
- `orderService` - Order management

## Styling

- CSS Modules for component-specific styles
- Global CSS variables for theming
- Responsive design using CSS Grid and Flexbox
- Mobile-first approach

### Color Scheme
- Primary: `#2d5016` (Deep Green)
- Secondary: `#6ba547` (Fresh Green)
- Accent: `#f4e4c1` (Warm Beige)
- Light Background: `#f9f7f4`

## API Integration

The frontend communicates with the backend API at `http://localhost:5000/api`

### Example API Calls:
- `GET /api/products` - Get all products
- `POST /api/auth/signup` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/cart/add` - Add item to cart
- `POST /api/orders` - Create order

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Notifications**: React Hot Toast
- **Styling**: CSS Modules + Global CSS

## Development Guidelines

1. Keep components small and reusable
2. Use Context for global state
3. Handle errors with toast notifications
4. Always check authentication before sensitive operations
5. Maintain responsive design
6. Follow the existing code structure

## Troubleshooting

### Port already in use
If port 3000 is already in use, Vite will automatically use the next available port.

### API Connection Issues
Ensure the backend server is running on `http://localhost:5000`

### Module not found
Run `npm install` to ensure all dependencies are installed.

## Contributing

Follow the existing code style and structure for any additions.

## License

ISC
