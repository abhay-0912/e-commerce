// ==================== MOBILE MENU TOGGLE ==================== //

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Close menu on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// ==================== STICKY ADD TO CART (Product Page Mobile) ==================== //
document.addEventListener('DOMContentLoaded', () => {
    const addToCartBtn = document.getElementById('addToCartBtn');
    const productActions = document.querySelector('.product-actions');

    if (addToCartBtn && window.innerWidth <= 480) {
        // Create sticky bottom button for mobile
        const stickyButton = document.createElement('div');
        stickyButton.className = 'sticky-add-to-cart';
        stickyButton.innerHTML = `
            <button class="btn-cart-sticky" id="stickyAddToCartBtn">
                <span>🛒</span>
                <span>Add to Cart</span>
            </button>
        `;
        document.body.appendChild(stickyButton);

        const stickyAddBtn = document.getElementById('stickyAddToCartBtn');
        
        stickyAddBtn.addEventListener('click', () => {
            // Trigger the main add to cart button
            addToCartBtn.click();
        });

        // Hide sticky button when main button is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    stickyButton.style.display = 'none';
                } else {
                    stickyButton.style.display = 'flex';
                }
            });
        });

        if (productActions) {
            observer.observe(productActions);
        }
    }
});

// ==================== PREVENT ZOOM ON INPUT FOCUS (iOS) ==================== //
// Prevent automatic zoom when inputs are focused on mobile iOS
if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.fontSize = '16px'; // iOS won't zoom if font-size is 16px or more
        });
    });
}

// ==================== SAFE AREA INSETS (Notch Support) ==================== //
if (typeof CSS !== 'undefined' && CSS.supports('padding', 'max(0px)')) {
    document.documentElement.style.setProperty(
        '--safe-area-inset-top',
        'max(0px, env(safe-area-inset-top))'
    );
    document.documentElement.style.setProperty(
        '--safe-area-inset-bottom',
        'max(0px, env(safe-area-inset-bottom))'
    );
}
