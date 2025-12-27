// Product Detail Page JavaScript

// Quantity Controls
const decreaseQtyBtn = document.getElementById('decreaseQty');
const increaseQtyBtn = document.getElementById('increaseQty');
const quantityInput = document.getElementById('quantity');

if (decreaseQtyBtn && increaseQtyBtn && quantityInput) {
    decreaseQtyBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value) || 1;
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    increaseQtyBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value) || 1;
        if (currentValue < 99) {
            quantityInput.value = currentValue + 1;
        }
    });

    quantityInput.addEventListener('change', () => {
        let value = parseInt(quantityInput.value) || 1;
        if (value < 1) value = 1;
        if (value > 99) value = 99;
        quantityInput.value = value;
    });
}

// Image Gallery (thumbnail click)
const thumbnails = document.querySelectorAll('.grid-4 > div');
const mainImage = document.querySelector('.grid > div:first-child > div');

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        // Remove active border from all thumbnails
        thumbnails.forEach(t => {
            t.style.border = 'none';
        });
        
        // Add active border to clicked thumbnail
        thumb.style.border = '2px solid var(--color-primary)';
        
        // Update main image (in a real app, you'd swap the actual image)
        console.log(`Switched to image ${index + 1}`);
    });
});

// Add to Wishlist
const wishlistBtn = document.querySelector('button[aria-label="Add to Wishlist"]');
if (wishlistBtn) {
    wishlistBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Toggle wishlist state
        const svg = wishlistBtn.querySelector('svg path');
        const isFilled = svg.getAttribute('fill') !== 'none';
        
        if (isFilled) {
            svg.setAttribute('fill', 'none');
            alert('Removed from wishlist');
        } else {
            svg.setAttribute('fill', 'currentColor');
            alert('Added to wishlist!');
        }
    });
}

// Add to Cart with Product Details
const addToCartBtn = document.querySelector('.btn-primary.btn-lg');
if (addToCartBtn && addToCartBtn.textContent.includes('Add to Cart')) {
    addToCartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const productName = document.querySelector('h1').textContent;
        const productPrice = document.querySelector('.product-price').textContent;
        const quantity = parseInt(quantityInput?.value || 1);
        
        // Get or create cart
        let cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
        
        // Add product to cart
        const existingItem = cart.find(item => item.name === productName);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                name: productName,
                price: productPrice,
                quantity: quantity,
                id: Date.now()
            });
        }
        
        // Save cart
        localStorage.setItem('cartItems', JSON.stringify(cart));
        
        // Update cart badge
        const cartBadge = document.querySelector('.cart-badge');
        if (cartBadge) {
            cartBadge.textContent = cart.length;
        }
        
        // Visual feedback
        addToCartBtn.textContent = '✓ Added to Cart!';
        addToCartBtn.style.background = 'var(--color-accent-green)';
        
        setTimeout(() => {
            addToCartBtn.textContent = 'Add to Cart';
            addToCartBtn.style.background = '';
        }, 2000);
    });
}

// Product Review Stars (if implementing reviews)
const stars = document.querySelectorAll('.flex.gap-xs span');
if (stars.length > 0) {
    stars.forEach(star => {
        star.style.cursor = 'pointer';
        star.addEventListener('click', () => {
            console.log('Review functionality - to be implemented');
        });
    });
}

console.log('Product Detail JS Loaded');
