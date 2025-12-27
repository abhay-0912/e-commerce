// ================================================
// SMOOTH SCROLL & NAVIGATION
// ================================================

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class when scrolling down
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a non-dropdown link
    const navItems = document.querySelectorAll('.nav-links > li > a:not(.dropdown-toggle)');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
    
    // Handle dropdowns in mobile menu
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) {
            toggle.addEventListener('click', (e) => {
                // Only prevent default and toggle on mobile
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                    
                    // Close other dropdowns
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                }
            });
        }
        
        // Close dropdown when clicking on a menu item
        const menuItems = dropdown.querySelectorAll('.dropdown-menu a');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                dropdown.classList.remove('active');
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    });
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// ================================================
// SCROLL REVEAL ANIMATIONS
// ================================================

const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

// Initial check for elements already in viewport
revealOnScroll();

// Throttle scroll event for better performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(() => {
        revealOnScroll();
    });
});

// ================================================
// CRAFT CARD INTERACTIONS
// ================================================

const craftCards = document.querySelectorAll('.craft-card');

craftCards.forEach(card => {
    card.addEventListener('click', () => {
        const craftName = card.querySelector('h3').textContent;
        console.log(`Navigating to ${craftName} story page...`);
        // In a real implementation, this would navigate to a craft detail page
        // window.location.href = `/crafts/${craftName.toLowerCase()}`;
    });
});

// ================================================
// INDIA MAP INTERACTIONS
// ================================================

const craftMarkers = document.querySelectorAll('.craft-marker');

craftMarkers.forEach(marker => {
    marker.addEventListener('click', function() {
        const craftName = this.getAttribute('data-craft');
        const location = this.getAttribute('data-location');
        
        // Show a tooltip or modal with craft information
        showCraftInfo(craftName, location);
    });
    
    marker.addEventListener('mouseenter', function() {
        this.style.fill = '#E67E22';
        this.setAttribute('r', '12');
    });
    
    marker.addEventListener('mouseleave', function() {
        this.style.fill = '#C1554C';
        this.setAttribute('r', '8');
    });
});

function showCraftInfo(craftName, location) {
    // Create a simple tooltip effect
    const existingTooltip = document.querySelector('.map-tooltip');
    if (existingTooltip) {
        existingTooltip.remove();
    }
    
    const tooltip = document.createElement('div');
    tooltip.className = 'map-tooltip';
    tooltip.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        text-align: center;
        max-width: 400px;
        animation: fadeIn 0.3s ease;
    `;
    
    tooltip.innerHTML = `
        <h3 style="font-family: 'Lora', serif; color: #5D4E37; margin-bottom: 1rem;">${craftName}</h3>
        <p style="color: #8B7355; margin-bottom: 1.5rem;">From ${location}</p>
        <button onclick="this.parentElement.remove()" style="padding: 0.8rem 2rem; background: #4A5F7F; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">Close</button>
    `;
    
    document.body.appendChild(tooltip);
    
    // Add overlay
    const overlay = document.createElement('div');
    overlay.className = 'map-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9999;
    `;
    overlay.addEventListener('click', () => {
        tooltip.remove();
        overlay.remove();
    });
    
    document.body.appendChild(overlay);
}

// ================================================
// PRODUCT CARD INTERACTIONS
// ================================================

const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    // Add to cart functionality (placeholder)
    const viewButton = card.querySelector('.btn-small');
    if (viewButton) {
        viewButton.addEventListener('click', (e) => {
            e.preventDefault();
            const productName = card.querySelector('h3').textContent;
            console.log(`Viewing product: ${productName}`);
            // In a real implementation, this would open a product detail modal or page
        });
    }
});

// ================================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ================================================
// PARALLAX EFFECT FOR HERO SECTION
// ================================================

const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroHeight = hero.offsetHeight;
    
    if (scrolled < heroHeight) {
        const parallaxSpeed = 0.5;
        heroContent.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        heroContent.style.opacity = 1 - (scrolled / heroHeight) * 1.5;
    }
});

// ================================================
// LAZY LOADING IMAGES
// ================================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    // This would be used if we implemented lazy loading with data-src attributes
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ================================================
// CART FUNCTIONALITY (Placeholder)
// ================================================

let cart = [];

function addToCart(product) {
    cart.push(product);
    updateCartCount();
    showCartNotification();
}

function updateCartCount() {
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon && cart.length > 0) {
        cartIcon.textContent = `🛒 Cart (${cart.length})`;
    }
}

function showCartNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #2ECC71;
        color: white;
        padding: 1rem 2rem;
        border-radius: 4px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = 'Added to cart!';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// ================================================
// KEYBOARD NAVIGATION ACCESSIBILITY
// ================================================

// Add keyboard navigation for cards
const allCards = document.querySelectorAll('.craft-card, .product-card, .knowledge-card');

allCards.forEach(card => {
    card.setAttribute('tabindex', '0');
    
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
});

// ================================================
// PERFORMANCE OPTIMIZATIONS
// ================================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ================================================
// FORM VALIDATION (For future newsletter/contact forms)
// ================================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ================================================
// ANALYTICS TRACKING (Placeholder)
// ================================================

function trackEvent(category, action, label) {
    console.log(`Analytics Event - Category: ${category}, Action: ${action}, Label: ${label}`);
    // In production, this would send data to your analytics service
    // Example: gtag('event', action, { 'event_category': category, 'event_label': label });
}

// Track page view
trackEvent('Page', 'View', 'Homepage');

// Track section views
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id || 'unnamed-section';
            trackEvent('Section', 'View', sectionId);
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => {
    sectionObserver.observe(section);
});

// ================================================
// INITIALIZE ON PAGE LOAD
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Sanskriti.Traditional website loaded successfully!');
    
    // Animate hero content on load
    const heroElements = document.querySelectorAll('.fade-in');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
        }, 200 * (index + 1));
    });
    
    // Initial reveal check
    revealOnScroll();
});

// ================================================
// ACCESSIBILITY: SKIP TO MAIN CONTENT
// ================================================

const skipLink = document.createElement('a');
skipLink.href = '#crafts';
skipLink.textContent = 'Skip to main content';
skipLink.className = 'skip-link';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #4A5F7F;
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 10001;
`;

skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});

skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});

document.body.insertBefore(skipLink, document.body.firstChild);

// ================================================
// ERROR HANDLING
// ================================================

window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
    // In production, send error to logging service
});

// ================================================
// SERVICE WORKER REGISTRATION (For PWA in future)
// ================================================

if ('serviceWorker' in navigator) {
    // Uncomment when you have a service worker file
    /*
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => console.log('SW registered:', registration))
            .catch(error => console.log('SW registration failed:', error));
    });
    */
}
