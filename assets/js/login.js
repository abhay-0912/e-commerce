// Login Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    // Form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Clear previous errors
        clearErrors();
        
        // Get values
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        // Validate
        let isValid = true;
        
        if (!email) {
            showError(emailInput, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError(emailInput, 'Please enter a valid email');
            isValid = false;
        }
        
        if (!password) {
            showError(passwordInput, 'Password is required');
            isValid = false;
        } else if (password.length < 6) {
            showError(passwordInput, 'Password must be at least 6 characters');
            isValid = false;
        }
        
        // If valid, simulate login
        if (isValid) {
            handleLogin(email, password);
        }
    });
    
    // Real-time validation on blur
    emailInput.addEventListener('blur', () => {
        const email = emailInput.value.trim();
        if (email && !isValidEmail(email)) {
            showError(emailInput, 'Please enter a valid email');
        }
    });
    
    // Clear error on focus
    emailInput.addEventListener('focus', () => {
        clearError(emailInput);
    });
    
    passwordInput.addEventListener('focus', () => {
        clearError(passwordInput);
    });
});

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show error message
function showError(input, message) {
    input.classList.add('error');
    input.classList.remove('success');
    
    // Find or create error message element
    let errorDiv = input.parentElement.querySelector('.error-message');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        input.parentElement.appendChild(errorDiv);
    }
    
    errorDiv.textContent = message;
    errorDiv.classList.add('show');
}

// Clear specific error
function clearError(input) {
    input.classList.remove('error');
    const errorDiv = input.parentElement.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.classList.remove('show');
    }
}

// Clear all errors
function clearErrors() {
    document.querySelectorAll('.form-input').forEach(input => {
        input.classList.remove('error', 'success');
    });
    
    document.querySelectorAll('.error-message').forEach(error => {
        error.classList.remove('show');
    });
}

// Handle login (simulate authentication)
function handleLogin(email, password) {
    // Show loading state
    const submitBtn = document.querySelector('.btn-login');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Logging in...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Mark inputs as success
        document.getElementById('email').classList.add('success');
        document.getElementById('password').classList.add('success');
        
        // Store user data (simulate successful login)
        const userData = {
            email: email,
            name: email.split('@')[0],
            loginTime: new Date().toISOString()
        };
        
        localStorage.setItem('user', JSON.stringify(userData));
        
        // Show success message
        showSuccessMessage('Login successful! Redirecting...');
        
        // Redirect to home page
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1500);
    }, 1000);
}

// Show success message
function showSuccessMessage(message) {
    let successDiv = document.querySelector('.success-message');
    if (!successDiv) {
        successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        document.querySelector('.auth-form').insertAdjacentElement('beforebegin', successDiv);
    }
    
    successDiv.textContent = message;
    successDiv.classList.add('show');
}
