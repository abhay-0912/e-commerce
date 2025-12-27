// ============================================
// Authentication Module
// ============================================

// Constants
const REGEX = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[+]?[0-9\s-]{10,}$/
};

const MIN_PASSWORD_LENGTH = 6;
const REDIRECT_DELAY = 500;

// ============================================
// Utility Functions
// ============================================

/**
 * Validates email format
 */
const isValidEmail = (email) => REGEX.email.test(email);

/**
 * Validates phone format
 */
const isValidPhone = (phone) => REGEX.phone.test(phone);

/**
 * Shows alert message
 */
const showMessage = (message) => alert(message);

/**
 * Stores user data in storage
 */
const storeUser = (user, remember = false) => {
    const storage = remember ? localStorage : sessionStorage;
    storage.setItem('user', JSON.stringify(user));
};

/**
 * Gets stored user data
 */
const getStoredUser = () => {
    const userData = localStorage.getItem('user') || sessionStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
};

/**
 * Redirects to home page with delay
 */
const redirectToHome = () => {
    setTimeout(() => {
        window.location.href = '../index.html';
    }, REDIRECT_DELAY);
};

// ============================================
// Login Handler
// ============================================

const handleLogin = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const email = form.querySelector('[type="email"]').value.trim();
    const password = form.querySelector('[type="password"]').value;
    const remember = form.querySelector('[type="checkbox"]')?.checked || false;
    
    // Validate inputs
    if (!email || !password) {
        return showMessage('Please fill in all fields');
    }
    
    if (!isValidEmail(email)) {
        return showMessage('Please enter a valid email address');
    }
    
    // Create user object
    const user = {
        email,
        name: email.split('@')[0],
        loggedIn: true,
        loginTime: new Date().toISOString()
    };
    
    // Store and redirect
    storeUser(user, remember);
    showMessage('Login successful!');
    redirectToHome();
};

// ============================================
// Register Handler
// ============================================

const handleRegister = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const inputs = form.querySelectorAll('input');
    
    // Extract form values
    const formData = {
        name: inputs[0].value.trim(),
        email: inputs[1].value.trim(),
        phone: inputs[2].value.trim(),
        password: inputs[3].value,
        confirmPassword: inputs[4].value,
        terms: inputs[5].checked
    };
    
    // Validate all fields filled
    if (!formData.name || !formData.email || !formData.phone || 
        !formData.password || !formData.confirmPassword) {
        return showMessage('Please fill in all fields');
    }
    
    // Validate email
    if (!isValidEmail(formData.email)) {
        return showMessage('Please enter a valid email address');
    }
    
    // Validate phone
    if (!isValidPhone(formData.phone)) {
        return showMessage('Please enter a valid phone number');
    }
    
    // Validate password length
    if (formData.password.length < MIN_PASSWORD_LENGTH) {
        return showMessage(`Password must be at least ${MIN_PASSWORD_LENGTH} characters long`);
    }
    
    // Validate password match
    if (formData.password !== formData.confirmPassword) {
        return showMessage('Passwords do not match');
    }
    
    // Validate terms acceptance
    if (!formData.terms) {
        return showMessage('Please accept the Terms & Conditions');
    }
    
    // Create user object
    const user = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        loggedIn: true,
        registrationDate: new Date().toISOString()
    };
    
    // Store and redirect
    storeUser(user, true);
    showMessage('Registration successful! Welcome to Sanskriti.Traditional!');
    redirectToHome();
};

// ============================================
// Real-time Password Validation
// ============================================

const setupPasswordMatchValidation = (form) => {
    const passwordInput = form.querySelector('[type="password"]');
    const confirmPasswordInput = form.querySelectorAll('[type="password"]')[1];
    
    if (!confirmPasswordInput) return;
    
    confirmPasswordInput.addEventListener('input', () => {
        const value = confirmPasswordInput.value;
        
        if (!value) {
            confirmPasswordInput.style.borderColor = '';
        } else if (passwordInput.value !== value) {
            confirmPasswordInput.style.borderColor = 'var(--color-primary)';
        } else {
            confirmPasswordInput.style.borderColor = 'var(--color-accent-green)';
        }
    });
};

// ============================================
// Password Visibility Toggle
// ============================================

const addPasswordToggle = () => {
    const passwordInputs = document.querySelectorAll('[type="password"]');
    
    passwordInputs.forEach(input => {
        const wrapper = input.parentElement;
        
        // Create toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.type = 'button';
        toggleBtn.innerHTML = '👁️';
        toggleBtn.className = 'password-toggle';
        toggleBtn.style.cssText = `
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            cursor: pointer;
            font-size: 20px;
        `;
        
        // Ensure wrapper has relative positioning
        if (getComputedStyle(wrapper).position === 'static') {
            wrapper.style.position = 'relative';
        }
        
        // Toggle visibility on click
        toggleBtn.addEventListener('click', () => {
            const isPassword = input.type === 'password';
            input.type = isPassword ? 'text' : 'password';
            toggleBtn.innerHTML = isPassword ? '👁️‍🗨️' : '👁️';
        });
        
        wrapper.appendChild(toggleBtn);
    });
};

// ============================================
// Login Status Check
// ============================================

const checkLoginStatus = () => {
    const user = getStoredUser();
    
    if (user?.loggedIn) {
        const currentPath = window.location.pathname;
        
        // Redirect if already logged in
        if (currentPath.includes('login.html') || currentPath.includes('register.html')) {
            showMessage('You are already logged in!');
            redirectToHome();
        }
    }
};

// ============================================
// Initialize Forms
// ============================================

const initAuth = () => {
    // Initialize login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Initialize register form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
        setupPasswordMatchValidation(registerForm);
    }
    
    // Check if user is already logged in
    checkLoginStatus();
};

// Initialize on page load
initAuth();

// Logout functionality (can be added to header)
function logout() {
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    alert('You have been logged out');
    window.location.href = '../index.html';
}

// Make logout available globally
window.logout = logout;

console.log('Auth JS Loaded');
