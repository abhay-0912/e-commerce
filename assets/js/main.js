// Main JavaScript Module
// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const mobileOverlay = document.querySelector('.mobile-overlay');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
    });
}

if (mobileOverlay) {
    mobileOverlay.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileOverlay.classList.remove('active');
    });
}

// Close mobile menu when clicking a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            nav.classList.remove('active');
            mobileOverlay.classList.remove('active');
        }
    });
});

// Search Functionality
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            console.log('Searching for:', searchTerm);
            // Redirect to shop page with search parameter
            window.location.href = `pages/shop.html?search=${encodeURIComponent(searchTerm)}`;
        }
    });
}

if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchBtn.click();
        }
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#!') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Update Active Nav Link Based on Current Page
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

updateActiveNavLink();

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('.newsletter-input');
        const email = emailInput.value.trim();
        
        if (email) {
            alert(`Thank you for subscribing! We'll send updates to ${email}`);
            emailInput.value = '';
        }
    });
}

// Add to Cart Functionality (Basic)
const addToCartButtons = document.querySelectorAll('.btn-primary');
addToCartButtons.forEach(btn => {
    if (btn.textContent.includes('Add to Cart') || btn.textContent.includes('Add')) {
        btn.addEventListener('click', (e) => {
            // Don't interfere if it's a link
            if (btn.tagName !== 'A') {
                e.preventDefault();
                
                // Get current cart count
                const cartBadge = document.querySelector('.cart-badge');
                if (cartBadge) {
                    let count = parseInt(cartBadge.textContent) || 0;
                    count++;
                    cartBadge.textContent = count;
                }
                
                // Show feedback
                const originalText = btn.textContent;
                btn.textContent = '✓ Added';
                btn.style.background = 'var(--color-accent-green)';
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                }, 1500);
            }
        });
    }
});

// Initialize cart count from localStorage
function initializeCart() {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
        try {
            const cartItems = JSON.parse(savedCart);
            const cartBadge = document.querySelector('.cart-badge');
            if (cartBadge) {
                cartBadge.textContent = cartItems.length;
            }
        } catch (e) {
            console.error('Error loading cart:', e);
        }
    }
}

initializeCart();

// Lazy Loading Images (if needed)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Handle Window Resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Close mobile menu if window is resized to desktop
        if (window.innerWidth >= 768) {
            nav.classList.remove('active');
            mobileOverlay.classList.remove('active');
        }
    }, 250);
});

// Scroll to Top Button (Optional enhancement)
let scrollTopBtn;
function createScrollTopButton() {
    if (document.body.scrollHeight > window.innerHeight * 2) {
        scrollTopBtn = document.createElement('button');
        scrollTopBtn.innerHTML = '↑';
        scrollTopBtn.className = 'scroll-top-btn';
        scrollTopBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--color-primary);
            color: var(--color-white);
            border: none;
            font-size: 24px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all var(--transition-base);
            z-index: var(--z-fixed);
            box-shadow: var(--shadow-lg);
        `;
        
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        document.body.appendChild(scrollTopBtn);
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.style.opacity = '1';
                scrollTopBtn.style.visibility = 'visible';
            } else {
                scrollTopBtn.style.opacity = '0';
                scrollTopBtn.style.visibility = 'hidden';
            }
        });
    }
}

// Initialize scroll to top button
createScrollTopButton();

console.log('Sanskriti.Traditional - Main JS Loaded');
