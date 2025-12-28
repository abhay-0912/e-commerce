// ==================== WISHLIST PAGE ==================== //

document.addEventListener('DOMContentLoaded', () => {
    checkAuthAndLoadWishlist();
});

// ==================== AUTH CHECK ==================== //
function checkAuthAndLoadWishlist() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser) {
        // User not logged in - show login prompt
        showLoginPrompt();
        return;
    }

    loadWishlistItems();
}

// ==================== SHOW LOGIN PROMPT ==================== //
function showLoginPrompt() {
    const emptyState = document.getElementById('emptyState');
    const wishlistGrid = document.getElementById('wishlistGrid');
    
    emptyState.style.display = 'block';
    wishlistGrid.style.display = 'none';
    
    emptyState.innerHTML = `
        <div class="empty-icon">🔒</div>
        <h2>Login to View Your Wishlist</h2>
        <p>Save your favorite crafts and access them from anywhere.</p>
        <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1.5rem;">
            <a href="login.html?redirect=wishlist.html" class="btn-explore">Login / Sign Up</a>
            <a href="shop.html" class="btn-explore" style="background: white; color: #8b4789; border: 2px solid #8b4789;">Browse Shop</a>
        </div>
    `;
}

// ==================== LOAD WISHLIST ITEMS ==================== //
function loadWishlistItems() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const wishlist = JSON.parse(localStorage.getItem(`wishlist_${currentUser.email}`)) || [];

    const emptyState = document.getElementById('emptyState');
    const wishlistGrid = document.getElementById('wishlistGrid');

    if (wishlist.length === 0) {
        // Restore empty state for logged-in users
        emptyState.innerHTML = `
            <div class="empty-icon">❤️</div>
            <h2>Your wishlist is empty</h2>
            <p>Save crafts you love and find them here later.</p>
            <a href="shop.html" class="btn-explore">Explore Crafts</a>
        `;
        emptyState.style.display = 'block';
        wishlistGrid.style.display = 'none';
    } else {
        emptyState.style.display = 'none';
        wishlistGrid.style.display = 'grid';
        renderWishlistItems(wishlist);
    }
}

// ==================== RENDER WISHLIST ITEMS ==================== //
function renderWishlistItems(wishlist) {
    const grid = document.getElementById('wishlistGrid');
    
    // Get product database
    if (typeof productsDatabase === 'undefined') {
        grid.innerHTML = '<p>Unable to load wishlist. Please refresh the page.</p>';
        return;
    }

    // Get full product details for each wishlist item
    const wishlistProducts = wishlist
        .map(itemId => productsDatabase.find(p => p.id === itemId))
        .filter(product => product !== undefined);

    if (wishlistProducts.length === 0) {
        document.getElementById('emptyState').style.display = 'block';
        grid.style.display = 'none';
        return;
    }

    grid.innerHTML = wishlistProducts.map(product => `
        <div class="wishlist-item">
            <div class="wishlist-item-image" style="background: ${getProductBackground(product.category)}" onclick="viewProduct(${product.id})">
                <span class="wishlist-item-emoji">${product.image}</span>
                <button class="btn-remove-wishlist" onclick="event.stopPropagation(); removeFromWishlist(${product.id})" title="Remove from wishlist">
                    ✕
                </button>
            </div>
            <div class="wishlist-item-info">
                <div class="wishlist-item-meta">${getRegionName(product.region)} • ${getCraftName(product.category)}</div>
                <div class="wishlist-item-name" onclick="viewProduct(${product.id})">${product.name}</div>
                <div class="wishlist-item-price">₹${product.price.toLocaleString('en-IN')}</div>
                <div class="wishlist-item-actions">
                    <button class="btn-move-to-cart" onclick="moveToCart(${product.id})">
                        <span>🛒</span>
                        <span>Add to Cart</span>
                    </button>
                    <a href="product.html?id=${product.id}" class="btn-view-product">View</a>
                </div>
            </div>
        </div>
    `).join('');
}

// ==================== REMOVE FROM WISHLIST ==================== //
function removeFromWishlist(productId) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let wishlist = JSON.parse(localStorage.getItem(`wishlist_${currentUser.email}`)) || [];

    // Remove product from wishlist
    wishlist = wishlist.filter(id => id !== productId);
    localStorage.setItem(`wishlist_${currentUser.email}`, JSON.stringify(wishlist));

    // Show message
    showMessage('Removed from wishlist');

    // Reload wishlist
    loadWishlistItems();
}

// ==================== MOVE TO CART ==================== //
function moveToCart(productId) {
    const product = productsDatabase.find(p => p.id === productId);
    
    if (!product) {
        showMessage('Product not found', 'error');
        return;
    }

    // Get current cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if product already in cart
    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1,
            addedAt: new Date().toISOString()
        });
    }

    // Save cart
    localStorage.setItem('cart', JSON.stringify(cart));

    // Remove from wishlist
    removeFromWishlist(productId);

    // Show message
    showMessage('Moved to cart! 🛒');
}

// ==================== VIEW PRODUCT ==================== //
function viewProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// ==================== UTILITY: Get Product Background ==================== //
function getProductBackground(category) {
    const backgrounds = {
        textiles: 'linear-gradient(135deg, #8b4789 0%, #4a2454 100%)',
        embroidery: 'linear-gradient(135deg, #f5d5b8 0%, #d4a574 100%)',
        art: 'linear-gradient(135deg, #f4e4c1 0%, #e8d4a8 100%)',
        pottery: 'linear-gradient(135deg, #c99a7d 0%, #a17660 100%)',
        accessories: 'linear-gradient(135deg, #d4a574 0%, #b8956f 100%)'
    };
    return backgrounds[category] || backgrounds.textiles;
}

// ==================== UTILITY: Get Region Name ==================== //
function getRegionName(region) {
    const regions = {
        varanasi: 'Varanasi',
        lucknow: 'Lucknow',
        bihar: 'Bihar',
        kashmir: 'Kashmir',
        rajasthan: 'Rajasthan',
        odisha: 'Odisha'
    };
    return regions[region] || region;
}

// ==================== UTILITY: Get Craft Name ==================== //
function getCraftName(category) {
    const crafts = {
        textiles: 'Banarasi Silk',
        embroidery: 'Chikankari',
        art: 'Madhubani Art',
        pottery: 'Terracotta',
        accessories: 'Accessories'
    };
    return crafts[category] || category;
}

// ==================== SHOW MESSAGE ==================== //
function showMessage(message, type = 'success') {
    // Remove existing message
    const existingMessage = document.querySelector('.wishlist-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `wishlist-message ${type} show`;
    messageDiv.textContent = message;

    // Append to body
    document.body.appendChild(messageDiv);

    // Auto-hide after 3 seconds
    setTimeout(() => {
        messageDiv.classList.remove('show');
        setTimeout(() => messageDiv.remove(), 300);
    }, 3000);
}

// ==================== GLOBAL WISHLIST FUNCTIONS (for use from other pages) ==================== //
window.addToWishlist = function(productId) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser) {
        // Redirect to login
        window.location.href = `login.html?redirect=${encodeURIComponent(window.location.pathname + window.location.search)}`;
        return;
    }

    let wishlist = JSON.parse(localStorage.getItem(`wishlist_${currentUser.email}`)) || [];

    // Check if already in wishlist
    if (wishlist.includes(productId)) {
        showMessage('Already in wishlist', 'error');
        return;
    }

    // Add to wishlist
    wishlist.push(productId);
    localStorage.setItem(`wishlist_${currentUser.email}`, JSON.stringify(wishlist));

    showMessage('Added to wishlist! ❤️');
    return true;
};

window.removeFromWishlist = removeFromWishlist;

window.isInWishlist = function(productId) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) return false;

    const wishlist = JSON.parse(localStorage.getItem(`wishlist_${currentUser.email}`)) || [];
    return wishlist.includes(productId);
};
