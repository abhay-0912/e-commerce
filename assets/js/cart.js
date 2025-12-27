// Cart Page JavaScript

// Load cart items from localStorage
function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    return cart;
}

// Save cart items to localStorage
function saveCartItems(cart) {
    localStorage.setItem('cartItems', JSON.stringify(cart));
    updateCartBadge();
}

// Update cart badge
function updateCartBadge() {
    const cart = loadCartItems();
    const cartBadge = document.querySelector('.cart-badge');
    if (cartBadge) {
        cartBadge.textContent = cart.length;
    }
}

// Calculate cart totals
function calculateTotals() {
    const cart = loadCartItems();
    let subtotal = 0;
    
    cart.forEach(item => {
        // Remove ₹ and commas, then parse
        const price = parseFloat(item.price.replace(/[₹,]/g, ''));
        subtotal += price * item.quantity;
    });
    
    const shipping = subtotal > 0 ? 150 : 0;
    const tax = subtotal * 0.18; // 18% GST
    const total = subtotal + shipping + tax;
    
    return {
        subtotal: subtotal.toFixed(0),
        shipping: shipping.toFixed(0),
        tax: tax.toFixed(0),
        total: total.toFixed(0)
    };
}

// Update cart display
function updateCartDisplay() {
    const totals = calculateTotals();
    
    // Update subtotal
    const subtotalEl = document.querySelector('.flex.justify-between.mb-md:nth-child(1) .font-semibold');
    if (subtotalEl) subtotalEl.textContent = `₹${totals.subtotal}`;
    
    // Update shipping
    const shippingEl = document.querySelector('.flex.justify-between.mb-md:nth-child(2) .font-semibold');
    if (shippingEl) shippingEl.textContent = `₹${totals.shipping}`;
    
    // Update tax
    const taxEl = document.querySelector('.flex.justify-between.mb-md:nth-child(3) .font-semibold');
    if (taxEl) taxEl.textContent = `₹${totals.tax}`;
    
    // Update total
    const totalEl = document.querySelector('.flex.justify-between.mb-xl .text-primary');
    if (totalEl) totalEl.textContent = `₹${totals.total}`;
}

// Quantity controls for cart items
const decreaseButtons = document.querySelectorAll('.card-body .btn-outline:first-of-type');
const increaseButtons = document.querySelectorAll('.card-body .btn-outline:last-of-type');

decreaseButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const quantitySpan = btn.nextElementSibling;
        let quantity = parseInt(quantitySpan.textContent);
        if (quantity > 1) {
            quantity--;
            quantitySpan.textContent = quantity;
            
            // Update cart in localStorage
            const cart = loadCartItems();
            if (cart[index]) {
                cart[index].quantity = quantity;
                saveCartItems(cart);
                updateCartDisplay();
            }
        }
    });
});

increaseButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const quantitySpan = btn.previousElementSibling;
        let quantity = parseInt(quantitySpan.textContent);
        if (quantity < 99) {
            quantity++;
            quantitySpan.textContent = quantity;
            
            // Update cart in localStorage
            const cart = loadCartItems();
            if (cart[index]) {
                cart[index].quantity = quantity;
                saveCartItems(cart);
                updateCartDisplay();
            }
        }
    });
});

// Remove item from cart
const removeButtons = document.querySelectorAll('.card-body button.text-sm');
removeButtons.forEach((btn, index) => {
    if (btn.textContent === 'Remove') {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (confirm('Remove this item from cart?')) {
                const cart = loadCartItems();
                cart.splice(index, 1);
                saveCartItems(cart);
                
                // Remove the card element
                btn.closest('.card').remove();
                
                updateCartDisplay();
                
                // If cart is empty, show message
                if (cart.length === 0) {
                    location.reload();
                }
            }
        });
    }
});

// Clear cart
const clearCartBtn = document.querySelector('.btn-outline.text-primary');
if (clearCartBtn && clearCartBtn.textContent === 'Clear Cart') {
    clearCartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (confirm('Are you sure you want to clear your cart?')) {
            localStorage.removeItem('cartItems');
            updateCartBadge();
            location.reload();
        }
    });
}

// Apply coupon code
const couponForm = document.querySelector('.mt-md');
if (couponForm) {
    const couponInput = couponForm.querySelector('.form-input');
    const applyBtn = couponForm.querySelector('.btn-outline');
    
    if (applyBtn) {
        applyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const code = couponInput.value.trim().toUpperCase();
            
            if (!code) {
                alert('Please enter a coupon code');
                return;
            }
            
            // Sample coupon codes
            const validCoupons = {
                'WELCOME10': 10,
                'HERITAGE15': 15,
                'ARTISAN20': 20
            };
            
            if (validCoupons[code]) {
                const discount = validCoupons[code];
                alert(`Coupon applied! ${discount}% discount added.`);
                couponInput.value = '';
                // In a real app, apply the discount to totals
            } else {
                alert('Invalid coupon code');
            }
        });
    }
}

// Initialize cart display
updateCartDisplay();

console.log('Cart JS Loaded');
