// Cart Page JavaScript - localStorage Integration

// Cart data structure
let cart = [];

// DOM Elements
const cartItemsContainer = document.getElementById('cartItems');
const emptyCartSection = document.getElementById('emptyCart');
const cartSummarySection = document.getElementById('cartSummary');
const subtotalElement = document.getElementById('subtotal');
const shippingElement = document.getElementById('shipping');
const totalElement = document.getElementById('total');
const itemCountElement = document.getElementById('itemCount');

// Constants
const SHIPPING_COST = 150; // ₹150 flat shipping

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderCart();
});

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    cart = savedCart ? JSON.parse(savedCart) : [];
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
}

// Update cart badge
function updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    if (badge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// Render cart
function renderCart() {
    if (cart.length === 0) {
        showEmptyCart();
        return;
    }
    
    showCart();
    renderCartItems();
    updateSummary();
}

// Show empty cart message
function showEmptyCart() {
    if (emptyCartSection) emptyCartSection.style.display = 'block';
    if (cartItemsContainer) cartItemsContainer.style.display = 'none';
    if (cartSummarySection) cartSummarySection.style.display = 'none';
}

// Show cart with items
function showCart() {
    if (emptyCartSection) emptyCartSection.style.display = 'none';
    if (cartItemsContainer) cartItemsContainer.style.display = 'block';
    if (cartSummarySection) cartSummarySection.style.display = 'block';
}

// Render cart items
function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    
    cart.forEach((item, index) => {
        const cartItem = createCartItemElement(item, index);
        cartItemsContainer.appendChild(cartItem);
    });
}

// Create cart item HTML element
function createCartItemElement(item, index) {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
        <div class="cart-item-image">
            <span>${item.emoji || '🎁'}</span>
        </div>
        <div class="cart-item-details">
            <h3 class="cart-item-name">${item.name}</h3>
            <p class="cart-item-craft">Craft: ${item.craft || 'Handmade'}</p>
            <p class="cart-item-price">₹${item.price.toLocaleString()}</p>
        </div>
        <div class="cart-item-actions">
            <div class="quantity-controls">
                <button class="qty-btn" onclick="decreaseQuantity(${index})" aria-label="Decrease quantity">−</button>
                <span class="qty-value">${item.quantity}</span>
                <button class="qty-btn" onclick="increaseQuantity(${index})" aria-label="Increase quantity">+</button>
            </div>
            <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        </div>
    `;
    return div;
}

// Increase quantity
function increaseQuantity(index) {
    if (cart[index].quantity < 10) { // Max 10 items
        cart[index].quantity++;
        saveCart();
        renderCart();
    }
}

// Decrease quantity
function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
        saveCart();
        renderCart();
    }
}

// Remove item from cart
function removeItem(index) {
    if (confirm('Remove this item from cart?')) {
        cart.splice(index, 1);
        saveCart();
        renderCart();
    }
}

// Update cart summary
function updateSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = cart.length > 0 ? SHIPPING_COST : 0;
    const total = subtotal + shipping;
    
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (subtotalElement) subtotalElement.textContent = `₹${subtotal.toLocaleString()}`;
    if (shippingElement) shippingElement.textContent = `₹${shipping.toLocaleString()}`;
    if (totalElement) totalElement.textContent = `₹${total.toLocaleString()}`;
    if (itemCountElement) itemCountElement.textContent = `${itemCount} item${itemCount !== 1 ? 's' : ''}`;
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Redirect to checkout page
    window.location.href = 'checkout.html';
}

// Add to cart function (can be called from other pages)
function addToCart(product) {
    // Load current cart
    const savedCart = localStorage.getItem('cart');
    const cart = savedCart ? JSON.parse(savedCart) : [];
    
    // Check if product already exists
    const existingIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingIndex > -1) {
        // Increase quantity if already in cart
        cart[existingIndex].quantity++;
    } else {
        // Add new item with quantity 1
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Save updated cart
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Show notification
    alert('Product added to cart!');
    
    // Update badge
    updateCartBadge();
    
    return true;
}

// Export functions for global use
if (typeof window !== 'undefined') {
    window.addToCart = addToCart;
    window.increaseQuantity = increaseQuantity;
    window.decreaseQuantity = decreaseQuantity;
    window.removeItem = removeItem;
    window.proceedToCheckout = proceedToCheckout;
}
