// Checkout Page JavaScript

let cart = [];

// DOM Elements
const checkoutForm = document.getElementById('checkoutForm');
const summaryItemsContainer = document.getElementById('summaryItems');
const subtotalElement = document.getElementById('subtotal');
const shippingElement = document.getElementById('shipping');
const totalElement = document.getElementById('total');

// Constants
const SHIPPING_COST = 150;

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    
    if (cart.length === 0) {
        // Redirect to cart if empty
        alert('Your cart is empty!');
        window.location.href = 'cart.html';
        return;
    }
    
    renderOrderSummary();
    attachFormHandlers();
});

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    cart = savedCart ? JSON.parse(savedCart) : [];
}

// Render order summary
function renderOrderSummary() {
    // Render items
    summaryItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const itemElement = createSummaryItem(item);
        summaryItemsContainer.appendChild(itemElement);
    });
    
    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = SHIPPING_COST;
    const total = subtotal + shipping;
    
    subtotalElement.textContent = `₹${subtotal.toLocaleString()}`;
    shippingElement.textContent = `₹${shipping.toLocaleString()}`;
    totalElement.textContent = `₹${total.toLocaleString()}`;
}

// Create summary item element
function createSummaryItem(item) {
    const div = document.createElement('div');
    div.className = 'summary-item';
    div.innerHTML = `
        <div class="item-details">
            <div class="item-name">${item.name}</div>
            <div class="item-quantity">Quantity: ${item.quantity}</div>
        </div>
        <div class="item-price">₹${(item.price * item.quantity).toLocaleString()}</div>
    `;
    return div;
}

// Attach form handlers
function attachFormHandlers() {
    // Form submission
    checkoutForm.addEventListener('submit', handleFormSubmit);
    
    // Real-time validation
    const inputs = checkoutForm.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('focus', () => clearFieldError(input));
    });
    
    // Payment method selection
    const paymentOptions = document.querySelectorAll('.payment-option');
    paymentOptions.forEach(option => {
        option.addEventListener('click', () => {
            paymentOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            option.querySelector('input[type="radio"]').checked = true;
        });
    });
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Clear all errors
    clearAllErrors();
    
    // Get form values
    const formData = {
        fullName: document.getElementById('fullName').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        address: document.getElementById('address').value.trim(),
        city: document.getElementById('city').value.trim(),
        state: document.getElementById('state').value.trim(),
        pincode: document.getElementById('pincode').value.trim(),
        paymentMethod: document.querySelector('input[name="payment"]:checked')?.value
    };
    
    // Validate all fields
    let isValid = true;
    
    if (!formData.fullName || formData.fullName.length < 3) {
        showError('fullName', 'Please enter your full name (minimum 3 characters)');
        isValid = false;
    }
    
    if (!formData.email || !isValidEmail(formData.email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!formData.phone || !isValidPhone(formData.phone)) {
        showError('phone', 'Please enter a valid 10-digit phone number');
        isValid = false;
    }
    
    if (!formData.address || formData.address.length < 10) {
        showError('address', 'Please enter complete address (minimum 10 characters)');
        isValid = false;
    }
    
    if (!formData.city) {
        showError('city', 'Please enter your city');
        isValid = false;
    }
    
    if (!formData.state) {
        showError('state', 'Please enter your state');
        isValid = false;
    }
    
    if (!formData.pincode || !isValidPincode(formData.pincode)) {
        showError('pincode', 'Please enter a valid 6-digit PIN code');
        isValid = false;
    }
    
    if (!formData.paymentMethod) {
        alert('Please select a payment method');
        isValid = false;
    }
    
    // If valid, process order
    if (isValid) {
        processOrder(formData);
    }
}

// Process order
function processOrder(formData) {
    const submitBtn = document.querySelector('.btn-place-order');
    const originalText = submitBtn.textContent;
    
    // Show loading
    submitBtn.textContent = 'Processing Order...';
    submitBtn.disabled = true;
    
    // Simulate order processing
    setTimeout(() => {
        // Calculate order total
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const total = subtotal + SHIPPING_COST;
        
        // Create order
        const order = {
            orderId: 'ORD' + Date.now(),
            customer: formData,
            items: cart,
            subtotal: subtotal,
            shipping: SHIPPING_COST,
            total: total,
            date: new Date().toISOString()
        };
        
        // Save order (in real app, send to backend)
        localStorage.setItem('lastOrder', JSON.stringify(order));
        
        // Clear cart
        localStorage.removeItem('cart');
        
        // Show success message
        showSuccessMessage(order.orderId);
        
        // Redirect to home after 3 seconds
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 3000);
    }, 1500);
}

// Show success message
function showSuccessMessage(orderId) {
    let successDiv = document.querySelector('.success-message');
    if (!successDiv) {
        successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        checkoutForm.insertAdjacentElement('beforebegin', successDiv);
    }
    
    successDiv.innerHTML = `
        <h3 style="margin-bottom: 0.5rem;">✓ Order Placed Successfully!</h3>
        <p style="margin: 0;">Order ID: <strong>${orderId}</strong></p>
        <p style="margin: 0.5rem 0 0 0; font-size: 0.9rem;">Redirecting to home page...</p>
    `;
    successDiv.classList.add('show');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Validation helpers
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^[6-9]\d{9}$/.test(phone.replace(/\s/g, ''));
}

function isValidPincode(pincode) {
    return /^\d{6}$/.test(pincode);
}

// Field validation
function validateField(input) {
    const value = input.value.trim();
    const fieldName = input.id;
    
    switch(fieldName) {
        case 'fullName':
            if (!value || value.length < 3) {
                showError(fieldName, 'Name must be at least 3 characters');
                return false;
            }
            break;
        case 'email':
            if (!isValidEmail(value)) {
                showError(fieldName, 'Invalid email format');
                return false;
            }
            break;
        case 'phone':
            if (!isValidPhone(value)) {
                showError(fieldName, 'Invalid phone number');
                return false;
            }
            break;
        case 'pincode':
            if (!isValidPincode(value)) {
                showError(fieldName, 'Invalid PIN code');
                return false;
            }
            break;
    }
    
    return true;
}

// Show error message
function showError(fieldId, message) {
    const input = document.getElementById(fieldId);
    if (!input) return;
    
    input.classList.add('error');
    
    let errorDiv = input.parentElement.querySelector('.error-message');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        input.parentElement.appendChild(errorDiv);
    }
    
    errorDiv.textContent = message;
    errorDiv.classList.add('show');
}

// Clear field error
function clearFieldError(input) {
    input.classList.remove('error');
    const errorDiv = input.parentElement.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.classList.remove('show');
    }
}

// Clear all errors
function clearAllErrors() {
    document.querySelectorAll('.form-input').forEach(input => {
        input.classList.remove('error');
    });
    
    document.querySelectorAll('.error-message').forEach(error => {
        error.classList.remove('show');
    });
}
