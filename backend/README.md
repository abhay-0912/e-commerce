# Sanskriti.Traditional - Backend Structure

## Overview

The backend handles all API requests, database operations, authentication, and payment processing.

## Recommended Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js or Fastify
- **Database**: MongoDB or PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **Payment**: Stripe or Razorpay
- **Image Storage**: AWS S3 or Cloudinary
- **Email**: SendGrid or Nodemailer
- **Deployment**: Heroku, Railway, or DigitalOcean

## Suggested Folder Structure

```
backend/
│
├── src/
│   ├── models/              # Database schemas
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Craft.js
│   │   ├── Artisan.js
│   │   ├── Order.js
│   │   └── Cart.js
│   │
│   ├── routes/              # API endpoints
│   │   ├── products.js
│   │   ├── crafts.js
│   │   ├── artisans.js
│   │   ├── orders.js
│   │   ├── cart.js
│   │   └── auth.js
│   │
│   ├── controllers/         # Business logic
│   │   ├── productController.js
│   │   ├── craftController.js
│   │   ├── artisanController.js
│   │   ├── orderController.js
│   │   ├── cartController.js
│   │   └── authController.js
│   │
│   ├── middleware/          # Custom middleware
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── validation.js
│   │
│   ├── config/              # Configuration files
│   │   ├── database.js
│   │   ├── auth.js
│   │   └── payment.js
│   │
│   ├── utils/               # Helper functions
│   │   ├── logger.js
│   │   ├── emailService.js
│   │   └── imageUpload.js
│   │
│   └── server.js            # Main server file
│
├── tests/                   # Test files
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env.example             # Example environment variables
├── .gitignore
├── docker-compose.yml       # Docker setup
├── Dockerfile
├── package.json
└── README.md
```

## API Endpoints (REST)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `GET /api/products/craft/:craft` - Get products by craft
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Crafts
- `GET /api/crafts` - Get all crafts
- `GET /api/crafts/:id` - Get craft details
- `POST /api/crafts` - Create craft (admin)

### Artisans
- `GET /api/artisans` - Get all artisans
- `GET /api/artisans/:id` - Get artisan details

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id` - Update order status (admin)

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `DELETE /api/cart/remove` - Remove item from cart
- `PUT /api/cart/update` - Update cart item

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/refresh` - Refresh token

## Environment Variables

```
# Database
DB_URI=mongodb+srv://...
DB_NAME=sanskriti_traditional

# JWT
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password

# Payment
STRIPE_SECRET_KEY=your_key
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret

# AWS/Cloudinary
AWS_ACCESS_KEY=your_key
AWS_SECRET_KEY=your_secret
CLOUDINARY_URL=your_url

# Server
PORT=5000
NODE_ENV=development
```

## Getting Started

1. Install dependencies: `npm install`
2. Set up environment variables: Copy `.env.example` to `.env`
3. Set up database
4. Run migrations/seeds
5. Start server: `npm start`

## Database Schema (Sample)

### Users
- id, email, password, name, phone, address, createdAt

### Products
- id, name, description, price, craft, origin, image, artisan_id, stock, handmade, giTag, ecoFriendly

### Orders
- id, user_id, items, total, status, address, createdAt, updatedAt

### Crafts
- id, name, description, origin, history, process, image

## Security Best Practices

- Use HTTPS only
- Validate all inputs
- Hash passwords with bcrypt
- Use JWT for authentication
- Implement rate limiting
- CORS configuration
- SQL injection prevention
- XSS prevention
- CSRF tokens

## Testing

- Unit tests with Jest
- Integration tests for API endpoints
- E2E tests with Cypress
- Performance testing

## Deployment

- Set up CI/CD with GitHub Actions
- Use Docker for containerization
- Deploy on Heroku, Railway, or DigitalOcean
- Set up monitoring and logging

## Notes

This is a template structure. Adjust based on your specific needs and technology choices.
