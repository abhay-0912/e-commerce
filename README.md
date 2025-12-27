# Sanskriti.Traditional - E-Commerce Website

🌸 **A digital heritage corridor where every product tells a story before it sells.**

## 🎯 Project Overview

Sanskriti.Traditional is a premium e-commerce platform that celebrates and preserves India's rich craft heritage. Unlike typical online stores, this website creates an emotional connection between artisans and buyers through storytelling, education, and authenticity.

## ✨ Key Features

### 🏛️ Living Museum Experience
- **Heritage-First Approach**: Users discover the craft's history before seeing products
- **Artisan Profiles**: Meet the real craftspeople behind each piece
- **Educational Content**: Learn about techniques, origins, and cultural significance
- **Interactive India Map**: Explore crafts by region

### 🛍️ E-Commerce Features
- **Handpicked Originals**: Curated collection of authentic Indian crafts
- **Product Badges**: Handmade, GI-Tagged, Eco-friendly indicators
- **Authenticity Guarantees**: Direct-from-artisan sourcing
- **Ethical Pricing**: 60% of every sale goes to artisans

### 🎨 Design Philosophy

**Color Palette:**
- Ivory (#F5F1E8) - Base background
- Mud Brown (#8B7355) - Text and accents
- Indigo (#4A5F7F) - Primary actions
- Saffron (#E67E22) - Highlights
- Deep Brown (#5D4E37) - Headings

**Typography:**
- Headings: Lora (Serif) - Heritage feel
- Body: Inter (Sans-serif) - Clean readability

**Animations:**
- Slow, elegant transitions
- Scroll-reveal effects
- Smooth parallax on hero
- No aggressive animations

## 📁 Project Structure

```
e-commerce/
│
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete styling with Indian design language
├── script.js           # Interactive features and animations
└── # Sanskriti.Traditional - E-Commerce Website

A cultural e-commerce platform celebrating authentic Indian handicrafts and supporting artisan communities.

## 🎨 Project Overview

**Sanskriti.Traditional** is a fully responsive, heritage-inspired e-commerce website showcasing authentic Indian handicrafts. Built with semantic HTML5, modular CSS, and vanilla JavaScript, it provides an elegant and user-friendly shopping experience.

## ✨ Features

### Core Functionality
- **Product Catalog**: Browse authentic Indian handicrafts
- **Shopping Cart**: Add/remove items, update quantities
- **Checkout Process**: Complete order flow with form validation
- **User Authentication**: Login and registration system
- **Responsive Design**: Mobile-first approach, works on all devices
- **Search Functionality**: Find products and artisans
- **Newsletter Subscription**: Stay updated with new arrivals

### Pages Included
1. **Home** (`index.html`) - Hero section, featured products, testimonials
2. **Shop** (`pages/shop.html`) - Product grid with filters
3. **Product Detail** (`pages/product-detail.html`) - Detailed product view with artisan story
4. **Cart** (`pages/cart.html`) - Shopping cart management
5. **Checkout** (`pages/checkout.html`) - Order completion
6. **Crafts** (`pages/crafts.html`) - Explore craft traditions
7. **Craft Detail** (`pages/craft-detail.html`) - Individual craft information
8. **Artisans** (`pages/artisans.html`) - Meet the craftspeople
9. **Authenticity** (`pages/authenticity.html`) - Quality guarantee information
10. **Blog** (`pages/blog.html`) - Stories and insights
11. **About** (`pages/about.html`) - Company information
12. **Contact** (`pages/contact.html`) - Get in touch
13. **Login** (`pages/login.html`) - User authentication
14. **Register** (`pages/register.html`) - New user registration

## 📁 Project Structure

```
e-commerce/
├── index.html                 # Home page
├── README.md                  # Project documentation
├── assets/
│   ├── css/
│   │   ├── reset.css         # CSS reset
│   │   ├── variables.css     # Design tokens & CSS variables
│   │   ├── typography.css    # Typography styles
│   │   ├── layout.css        # Layout utilities
│   │   ├── components.css    # Reusable components
│   │   ├── header.css        # Header styles
│   │   └── footer.css        # Footer styles
│   ├── js/
│   │   ├── main.js           # Core functionality
│   │   ├── product.js        # Product detail interactions
│   │   ├── cart.js           # Shopping cart logic
│   │   ├── checkout.js       # Checkout form handling
│   │   └── auth.js           # Authentication logic
│   └── images/               # Product and UI images
├── components/
│   ├── header.html           # Header component
│   └── footer.html           # Footer component
└── pages/
    ├── shop.html
    ├── product-detail.html
    ├── cart.html
    ├── checkout.html
    ├── crafts.html
    ├── craft-detail.html
    ├── artisans.html
    ├── authenticity.html
    ├── blog.html
    ├── about.html
    ├── contact.html
    ├── login.html
    └── register.html
```

## 🎨 Design System

### Color Palette (Indian Heritage-Inspired)
- **Primary**: Deep Red (`#C8102E`) - Traditional Indian Red
- **Secondary**: Golden (`#D4AF37`) - Temple Gold
- **Accent**: Saffron (`#FF9933`)
- **Accent Green**: Indian Green (`#138808`)
- **Neutrals**: Cream, Beige, Gray shades

### Typography
- **Primary Font**: Poppins (sans-serif)
- **Secondary Font**: Crimson Text (serif)

### Key Features
- Clean, elegant layouts
- Indian heritage-inspired color scheme
- Mobile-first responsive design
- Modular and maintainable code
- Semantic HTML5
- Accessible UI elements

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required - pure HTML, CSS, and vanilla JavaScript

### Installation

1. **Clone or download** the repository
2. **Open** `index.html` in your web browser
3. **Navigate** through the site using the menu

### Local Development

Simply open the HTML files in your browser. For a better development experience, you can use:

```bash
# Using Python's built-in server
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using VS Code Live Server extension
# Right-click on index.html → Open with Live Server
```

Then visit `http://localhost:8000` in your browser.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## 🎯 Key Functionalities

### Shopping Cart
- Add/remove products
- Update quantities
- Persistent cart using localStorage
- Real-time total calculations
- Coupon code support

### User Authentication
- Login/Register forms
- Form validation
- Session management
- Password visibility toggle

### Product Features
- Image gallery
- Quantity selector
- Wishlist functionality
- Related products
- Artisan stories

## 🔧 Customization

### Changing Colors
Edit `assets/css/variables.css` to modify the color scheme:

```css
:root {
    --color-primary: #YourColor;
    --color-secondary: #YourColor;
    /* ... */
}
```

### Adding Products
Products are currently static. To add dynamic products:
1. Create a `products.json` file
2. Update JavaScript to fetch and render products
3. Implement backend API integration

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is created for educational purposes. Feel free to use and modify.

## 🤝 Contributing

Contributions are welcome! Areas for improvement:
- Add real product data
- Implement backend integration
- Add payment gateway
- Enhance accessibility
- Add more animations
- Implement wishlist feature
- Add product reviews

## 📧 Contact

For questions or suggestions, please reach out through the contact page.

---

**Built with ❤️ for celebrating Indian heritage and supporting artisan communities.**           # Project documentation
```

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: No frameworks for optimal performance
- **Google Fonts**: Lora & Inter typefaces
- **Unsplash Images**: Placeholder imagery (replace with actual product photos)

## 🚀 Getting Started

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/e-commerce.git
   cd e-commerce
   ```

2. **Open the website:**
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```

3. **View in browser:**
   - Navigate to `http://localhost:8000`

### No Build Process Required!
This is a static website with no dependencies. Just open and run!

## 📱 Responsive Design

Fully responsive across all devices:
- **Desktop**: 1400px+ (Full experience)
- **Laptop**: 1024px - 1399px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🎭 Sections Overview

### 1. Hero Section
- Full-screen immersive entry
- Indian texture background
- Dual CTAs: "Explore Crafts" & "Shop Now"

### 2. Craft Categories
- Grid of traditional Indian crafts
- Hover reveals "View Story" overlay
- Links to craft detail pages

### 3. Craft Story Section
- Editorial-style storytelling
- History, Process, Cultural Value
- Builds emotional connection

### 4. Meet the Artisans
- Real artisan profiles with photos
- Years of experience
- Personal quotes

### 5. Featured Products
- Handpicked originals
- Product badges (Handmade, GI Tag, Eco-friendly)
- Origin information

### 6. Authenticity & Quality
- Trust-building section
- Verification process
- Ethical pricing commitment

### 7. Culture Map of India
- Interactive SVG map
- Click markers to explore regional crafts
- Visual geography of Indian heritage

### 8. Knowledge Section
- Educational blog-style articles
- "Learn Before You Buy" philosophy
- SEO-optimized content

### 9. Footer
- Quick links & policies
- Social media integration
- Artisan partnership info

## 🎨 Customization Guide

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --color-ivory: #F5F1E8;
    --color-mud-brown: #8B7355;
    --color-indigo: #4A5F7F;
    --color-saffron: #E67E22;
    /* Modify as needed */
}
```

### Adding Products
In `index.html`, duplicate a product card:
```html
<div class="product-card reveal">
    <div class="product-image">
        <img src="your-image-url" alt="Product">
        <div class="product-badges">
            <span class="badge handmade">Handmade</span>
        </div>
    </div>
    <div class="product-info">
        <h3>Your Product Name</h3>
        <p class="product-origin">City, State</p>
        <p class="product-price">₹X,XXX</p>
        <a href="#" class="btn btn-small">View Details</a>
    </div>
</div>
```

### Adding New Crafts
Follow the same pattern in the crafts section.

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Skip to main content link
- Reduced motion support for users who prefer it

## 🚀 Performance Optimizations

- CSS custom properties for efficient styling
- RequestAnimationFrame for smooth scrolling
- Throttled scroll events
- Lazy loading support (infrastructure in place)
- No external dependencies beyond fonts

## 📊 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔮 Future Enhancements

### Phase 2 Features:
- [ ] Product detail pages with image galleries
- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Payment gateway integration
- [ ] Order tracking system
- [ ] Wishlist functionality

### Phase 3 Features:
- [ ] Artisan dashboard for direct uploads
- [ ] Blog CMS integration
- [ ] Customer reviews & ratings
- [ ] Advanced search & filters
- [ ] Personalized recommendations
- [ ] Multi-language support

### Technical Improvements:
- [ ] Convert to PWA (Progressive Web App)
- [ ] Add service worker for offline support
- [ ] Implement actual image lazy loading
- [ ] Add analytics integration
- [ ] SEO optimization with meta tags
- [ ] Backend API integration

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Code Quality

- Clean, commented code
- Consistent naming conventions
- Modular structure
- Semantic HTML
- BEM-inspired CSS organization

## 🎓 Learning Resources

This project demonstrates:
- Modern CSS techniques (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript DOM manipulation
- Scroll animations with Intersection Observer
- Responsive design principles
- Accessibility best practices
- Performance optimization

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Credits

**Design & Development**: Created with passion for Indian heritage
**Fonts**: Google Fonts (Lora & Inter)
**Images**: Unsplash (placeholders - replace with actual product photos)

## 📞 Contact

For questions or collaborations:
- Website: [Your Website]
- Email: [Your Email]
- Twitter: [@YourHandle]

## 🙏 Acknowledgments

- Inspired by India's rich craft heritage
- Dedicated to all the artisans keeping traditions alive
- Built with respect for authentic Indian craftsmanship

---

**Made with ❤️ for Sanskriti.Traditional**

*"Preserving India's heritage, one craft at a time."*
