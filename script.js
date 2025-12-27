// ==================== SMOOTH SCROLL & NAVIGATION ==================== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ==================== NAVBAR STICKY EFFECT ==================== //
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    lastScrollTop = scrollTop;
});

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ==================== //
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all category cards, product cards, and article cards
document.querySelectorAll('.category-card, .product-card, .article-card, .testimonial-card, .stat-box').forEach(el => {
    observer.observe(el);
});

// ==================== CTA BUTTON INTERACTIONS ==================== //
document.querySelectorAll('.cta-primary, .cta-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        // Add ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
        
        // Log the action (can be connected to actual navigation)
        console.log('CTA clicked:', this.textContent);
    });
});

// ==================== CART & WISHLIST FUNCTIONALITY ==================== //
let cart = [];
let wishlist = [];

document.querySelectorAll('.add-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;
        
        const item = {
            name: productName,
            price: productPrice,
            id: Date.now()
        };
        
        cart.push(item);
        
        // Show feedback
        const originalText = this.textContent;
        this.textContent = '✓ Added to Cart';
        this.style.background = '#4a2454';
        
        setTimeout(() => {
            this.textContent = originalText;
            this.style.background = '';
        }, 1500);
        
        console.log('Cart:', cart);
    });
});

document.querySelectorAll('.save-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        
        const index = wishlist.findIndex(item => item.name === productName);
        
        if (index > -1) {
            wishlist.splice(index, 1);
            this.style.color = '#8b4789';
        } else {
            wishlist.push({ name: productName });
            this.style.color = '#e74c3c';
            this.textContent = '❤️';
        }
        
        console.log('Wishlist:', wishlist);
    });
});

// ==================== FORM & INPUT HANDLING ==================== //
document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#8b4789';
        this.style.boxShadow = '0 0 0 3px rgba(139, 71, 137, 0.1)';
    });
    
    input.addEventListener('blur', function() {
        this.style.borderColor = '';
        this.style.boxShadow = '';
    });
});

// ==================== LAZY LOADING FOR IMAGES ==================== //
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ==================== COUNTER ANIMATION ==================== //
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat-number');
            stats.forEach(stat => {
                const target = parseInt(stat.textContent);
                if (!isNaN(target)) {
                    animateCounter(stat, target);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.social-proof');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ==================== KEYBOARD SHORTCUTS ==================== //
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + / to jump to search (can be integrated later)
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        console.log('Search shortcut triggered');
    }
    
    // Escape to close modals (can be integrated later)
    if (e.key === 'Escape') {
        console.log('Escape pressed');
    }
});

// ==================== SCROLL-TO-TOP BUTTON ==================== //
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '⬆️';
scrollToTopButton.className = 'scroll-to-top';
scrollToTopButton.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: #8b4789;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    box-shadow: 0 4px 15px rgba(139, 71, 137, 0.25);
    z-index: 999;
    pointer-events: none;
`;

document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.opacity = '1';
        scrollToTopButton.style.pointerEvents = 'auto';
    } else {
        scrollToTopButton.style.opacity = '0';
        scrollToTopButton.style.pointerEvents = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

scrollToTopButton.addEventListener('hover', function() {
    this.style.transform = 'scale(1.1)';
});

// ==================== THEME TOGGLE (FUTURE FEATURE) ==================== //
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// ==================== PERFORMANCE MONITORING ==================== //
window.addEventListener('load', () => {
    if (window.performance && window.performance.timing) {
        const pageLoadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`Page Load Time: ${pageLoadTime}ms`);
    }
});

// ==================== INITIALIZE ==================== //
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎨 Sanskriti Traditional - Landing Page Loaded');
    initializeTheme();
});
