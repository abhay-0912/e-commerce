// Checkout Page JavaScript

// Form Validation
const checkoutForm = document.getElementById('checkoutForm');

if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(checkoutForm);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        let isValid = true;
        const requiredFields = checkoutForm.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = 'var(--color-primary)';
                
                setTimeout(() => {
                    field.style.borderColor = '';
                }, 3000);
            }
        });
        
        if (!isValid) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Validate email
        const emailInput = checkoutForm.querySelector('[type="email"]');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput && !emailRegex.test(emailInput.value)) {
            alert('Please enter a valid email address');
            emailInput.focus();
            return;
        }
        
        // Validate phone
        const phoneInput = checkoutForm.querySelector('[type="tel"]');
        const phoneRegex = /^[0-9+\s-]{10,}$/;
        if (phoneInput && !phoneRegex.test(phoneInput.value)) {
            alert('Please enter a valid phone number');
            phoneInput.focus();
            return;
        }
        
        // Get selected payment method
        const paymentMethod = document.querySelector('input[name="payment"]:checked');
        if (!paymentMethod) {
            alert('Please select a payment method');
            return;
        }
        
        // Get cart items
        const cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
        
        // Create order object
        const order = {
            id: 'ORD' + Date.now(),
            date: new Date().toISOString(),
            customer: data,
            items: cart,
            paymentMethod: paymentMethod.value,
            status: 'pending'
        };
        
        // In a real app, send order to backend
        console.log('Order placed:', order);
        
        // Clear cart
        localStorage.removeItem('cartItems');
        
        // Show success message and redirect
        alert(`Order placed successfully! Order ID: ${order.id}\n\nYou will receive a confirmation email shortly.`);
        
        // Redirect to home page
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1000);
    });
}

// Payment Method Selection Visual Feedback
const paymentOptions = document.querySelectorAll('input[name="payment"]');
paymentOptions.forEach(radio => {
    radio.addEventListener('change', () => {
        // Remove border from all options
        document.querySelectorAll('label[style*="border"]').forEach(label => {
            label.style.borderColor = 'var(--color-gray-light)';
        });
        
        // Add border to selected option
        const selectedLabel = radio.closest('label');
        if (selectedLabel) {
            selectedLabel.style.borderColor = 'var(--color-primary)';
        }
    });
});

// Auto-fill functionality (for testing)
const autoFillBtn = document.createElement('button');
autoFillBtn.textContent = 'Auto-fill (Test)';
autoFillBtn.className = 'btn btn-outline btn-sm';
autoFillBtn.style.position = 'fixed';
autoFillBtn.style.bottom = '20px';
autoFillBtn.style.left = '20px';
autoFillBtn.style.zIndex = '1000';
autoFillBtn.style.display = 'none'; // Hidden by default

// Uncomment to enable test auto-fill button
// document.body.appendChild(autoFillBtn);

autoFillBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const inputs = checkoutForm.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
    const testData = [
        'John',
        'Doe',
        'john.doe@example.com',
        '+91 9876543210',
        '123 Test Street',
        'Apartment 45',
        'Mumbai',
        '400001'
    ];
    
    inputs.forEach((input, index) => {
        if (testData[index]) {
            input.value = testData[index];
        }
    });
    
    // Select a state
    const stateSelect = checkoutForm.querySelector('select');
    if (stateSelect) {
        stateSelect.value = 'Maharashtra';
    }
});

// Real-time field validation
const emailField = checkoutForm?.querySelector('[type="email"]');
if (emailField) {
    emailField.addEventListener('blur', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailField.value && !emailRegex.test(emailField.value)) {
            emailField.style.borderColor = 'var(--color-primary)';
        } else {
            emailField.style.borderColor = 'var(--color-accent-green)';
        }
    });
    
    emailField.addEventListener('focus', () => {
        emailField.style.borderColor = '';
    });
}

// Phone number formatting
const phoneField = checkoutForm?.querySelector('[type="tel"]');
if (phoneField) {
    phoneField.addEventListener('input', (e) => {
        // Allow only numbers, +, spaces, and hyphens
        e.target.value = e.target.value.replace(/[^0-9+\s-]/g, '');
    });
}

// PIN code validation
const pinField = checkoutForm?.querySelector('[type="text"]:last-of-type');
if (pinField && pinField.placeholder.includes('PIN')) {
    pinField.addEventListener('input', (e) => {
        // Allow only 6 digits
        e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 6);
    });
}

console.log('Checkout JS Loaded');
