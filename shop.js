// ==================== SAMPLE PRODUCT DATABASE ==================== //
const productsDatabase = [
    // BANARASI SAREES (Varanasi)
    {
        id: 1,
        name: "Royal Blue Banarasi Saree",
        price: 8500,
        category: "textiles",
        region: "varanasi",
        image: "👗",
        origin: "Handwoven silk from Varanasi",
        description: "A stunning royal blue Banarasi saree with golden zari work. Woven on traditional handlooms with pure silk threads. This piece took 18 days to complete.",
        rating: 4.9,
        reviews: 128,
        inStock: true
    },
    {
        id: 2,
        name: "Maroon Banarasi Silk Saree",
        price: 9200,
        category: "textiles",
        region: "varanasi",
        image: "👗",
        origin: "Traditional silk weaving, Varanasi",
        description: "Deep maroon with intricate gold brocade. A timeless piece perfect for special occasions.",
        rating: 4.8,
        reviews: 95,
        inStock: true
    },
    {
        id: 3,
        name: "Cream & Gold Banarasi Saree",
        price: 10500,
        category: "textiles",
        region: "varanasi",
        image: "👗",
        origin: "Handwoven Varanasi silk",
        description: "Classic cream base with elaborate gold zari patterns. An heirloom quality piece.",
        rating: 5.0,
        reviews: 87,
        inStock: true
    },

    // CHIKANKARI (Lucknow)
    {
        id: 4,
        name: "Chikankari Embroidered Kurta",
        price: 3200,
        category: "embroidery",
        region: "lucknow",
        image: "🧵",
        origin: "Hand-embroidered cotton, Lucknow",
        description: "Delicate white cotton kurta with intricate Chikankari embroidery. Perfect for everyday wear with an artistic touch.",
        rating: 4.7,
        reviews: 156,
        inStock: true
    },
    {
        id: 5,
        name: "Chikankari Anarkali Dress",
        price: 4800,
        category: "embroidery",
        region: "lucknow",
        image: "👗",
        origin: "Lucknow embroidery tradition",
        description: "Elegant Anarkali with all-over Chikankari work. A traditional design with contemporary appeal.",
        rating: 4.8,
        reviews: 142,
        inStock: true
    },
    {
        id: 6,
        name: "Chikankari Dupatta (Scarf)",
        price: 1800,
        category: "accessories",
        region: "lucknow",
        image: "🧣",
        origin: "Hand-embroidered muslin, Lucknow",
        description: "Lightweight muslin dupatta with elegant Chikankari embroidery. Versatile and timeless.",
        rating: 4.6,
        reviews: 98,
        inStock: true
    },

    // MADHUBANI ART (Bihar)
    {
        id: 7,
        name: "Madhubani Wall Art Canvas",
        price: 2800,
        category: "art",
        region: "bihar",
        image: "🎨",
        origin: "Hand-painted Madhubani, Bihar",
        description: "Traditional folk art painting on canvas. Features mythological motifs with vibrant natural colors.",
        rating: 4.9,
        reviews: 203,
        inStock: true
    },
    {
        id: 8,
        name: "Madhubani Paper Painting",
        price: 1200,
        category: "art",
        region: "bihar",
        image: "🎨",
        origin: "Traditional Bihar craft",
        description: "Authentic Madhubani painting on handmade paper. Perfect for framing or gifting.",
        rating: 4.7,
        reviews: 167,
        inStock: true
    },
    {
        id: 9,
        name: "Madhubani Art Silk Saree",
        price: 5500,
        category: "textiles",
        region: "bihar",
        image: "👗",
        origin: "Madhubani motifs on silk",
        description: "Silk saree with hand-painted Madhubani patterns. A fusion of traditional art and fashion.",
        rating: 4.8,
        reviews: 76,
        inStock: true
    },

    // POTTERY & TERRACOTTA (Odisha)
    {
        id: 10,
        name: "Handmade Terracotta Vases",
        price: 1500,
        category: "pottery",
        region: "odisha",
        image: "🏺",
        origin: "Hand-molded clay, Odisha",
        description: "Set of 3 natural terracotta vases. Perfect for traditional or modern decor.",
        rating: 4.6,
        reviews: 234,
        inStock: true
    },
    {
        id: 11,
        name: "Terracotta Lamp (Diya)",
        price: 450,
        category: "pottery",
        region: "odisha",
        image: "🏺",
        origin: "Traditional clay work",
        description: "Handcrafted terracotta lamp for festivals or daily use. Natural, eco-friendly lighting.",
        rating: 4.5,
        reviews: 189,
        inStock: true
    },
    {
        id: 12,
        name: "Odisha Ikat Fabric (Saree Length)",
        price: 2200,
        category: "textiles",
        region: "odisha",
        image: "🪡",
        origin: "Handwoven Ikat, Odisha",
        description: "Traditional resist-dye woven fabric. Pure cotton with tribal patterns. 6 meters length.",
        rating: 4.7,
        reviews: 112,
        inStock: true
    },

    // PASHMINA (Kashmir)
    {
        id: 13,
        name: "Kashmiri Pashmina Shawl",
        price: 6500,
        category: "accessories",
        region: "kashmir",
        image: "🧣",
        origin: "Pure Pashmina wool, Kashmir",
        description: "Luxuriously soft Pashmina shawl. Hand-embroidered with traditional Kashmiri designs.",
        rating: 4.9,
        reviews: 267,
        inStock: true
    },
    {
        id: 14,
        name: "Pashmina Stole - Cream",
        price: 5200,
        category: "accessories",
        region: "kashmir",
        image: "🧣",
        origin: "Kashmiri wool weaving",
        description: "Elegant cream Pashmina stole. Lightweight and versatile for any season.",
        rating: 4.8,
        reviews: 145,
        inStock: true
    },
    {
        id: 15,
        name: "Embroidered Pashmina Shawl",
        price: 8000,
        category: "accessories",
        region: "kashmir",
        image: "🧣",
        origin: "Hand-embroidered Pashmina",
        description: "Premium Pashmina with intricate Kashmiri embroidery on all four sides.",
        rating: 5.0,
        reviews: 98,
        inStock: true
    },

    // BLOCK PRINT (Rajasthan)
    {
        id: 16,
        name: "Block Print Cotton Saree",
        price: 2500,
        category: "textiles",
        region: "rajasthan",
        image: "👗",
        origin: "Hand-block printed, Rajasthan",
        description: "Pure cotton saree with traditional Rajasthani block print patterns. Breathable and comfortable.",
        rating: 4.6,
        reviews: 178,
        inStock: true
    },
    {
        id: 17,
        name: "Block Print Cushion Cover",
        price: 850,
        category: "accessories",
        region: "rajasthan",
        image: "🎨",
        origin: "Hand-block print cotton",
        description: "Decorative cushion cover with vibrant Rajasthani patterns. Perfect for home decor.",
        rating: 4.7,
        reviews: 143,
        inStock: true
    },
    {
        id: 18,
        name: "Block Print Bed Sheet Set",
        price: 3500,
        category: "textiles",
        region: "rajasthan",
        image: "🛏️",
        origin: "Rajasthan textile tradition",
        description: "Double bed sheet set with coordinated pillowcases. Hand-block printed on pure cotton.",
        rating: 4.8,
        reviews: 201,
        inStock: true
    },

    // ADDITIONAL PRODUCTS
    {
        id: 19,
        name: "Indigo Dyed Cotton Fabric",
        price: 1200,
        category: "textiles",
        region: "rajasthan",
        image: "🧵",
        origin: "Natural indigo dyeing, Rajasthan",
        description: "Pure cotton fabric dyed with natural indigo. 2 meters length. Eco-friendly and sustainable.",
        rating: 4.5,
        reviews: 89,
        inStock: true
    },
    {
        id: 20,
        name: "Handmade Ceramic Bowls",
        price: 1800,
        category: "pottery",
        region: "odisha",
        image: "🏺",
        origin: "Hand-thrown ceramics",
        description: "Set of 4 ceramic bowls. Each piece is unique with natural glaze finish.",
        rating: 4.7,
        reviews: 156,
        inStock: true
    },
    {
        id: 21,
        name: "Madhubani Greeting Cards",
        price: 300,
        category: "art",
        region: "bihar",
        image: "🎨",
        origin: "Hand-painted cards",
        description: "Set of 10 unique hand-painted greeting cards with traditional motifs.",
        rating: 4.6,
        reviews: 112,
        inStock: true
    },
    {
        id: 22,
        name: "Kantha Embroidered Throw",
        price: 3800,
        category: "embroidery",
        region: "lucknow",
        image: "🧶",
        origin: "Running stitch embroidery",
        description: "Beautiful Kantha embroidery on cotton. Perfect as a throw blanket or wall hanging.",
        rating: 4.8,
        reviews: 134,
        inStock: true
    },
    {
        id: 23,
        name: "Brass & Copper Artifacts",
        price: 2200,
        category: "accessories",
        region: "rajasthan",
        image: "🪔",
        origin: "Traditional metalwork",
        description: "Set of decorative brass and copper pieces. Hand-crafted and hand-finished.",
        rating: 4.6,
        reviews: 98,
        inStock: true
    },
    {
        id: 24,
        name: "Woven Jute Bag",
        price: 950,
        category: "accessories",
        region: "odisha",
        image: "👜",
        origin: "Hand-woven jute, Odisha",
        description: "Eco-friendly jute bag with traditional weaving. Perfect for daily use or gifting.",
        rating: 4.7,
        reviews: 215,
        inStock: true
    }
];

// ==================== SHOP STATE ==================== //
let currentProducts = [...productsDatabase];
let selectedFilters = {
    category: ['all'],
    maxPrice: 20000,
    region: []
};
let currentSort = 'newest';

// ==================== INITIALIZE SHOP ==================== //
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupFilterListeners();
    setupSortListener();
});

// ==================== RENDER PRODUCTS ==================== //
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const productCount = document.getElementById('productCount');

    productsGrid.innerHTML = currentProducts.map(product => `
        <div class="product-item">
            <div class="product-image">
                <span class="product-emoji">${product.image}</span>
                <button class="wishlist-btn" data-id="${product.id}">❤️</button>
            </div>
            <div class="product-details">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-origin">${product.origin}</p>
                <div class="product-rating">
                    <span class="stars">★★★★★</span>
                    <span class="review-text">(${product.reviews})</span>
                </div>
                <p class="product-price">₹${product.price.toLocaleString('en-IN')}</p>
                <div class="product-actions">
                    <button class="btn-cart" data-id="${product.id}">🛒 Add</button>
                    <button class="btn-quickview" data-id="${product.id}">Quick View</button>
                </div>
            </div>
        </div>
    `).join('');

    productCount.textContent = currentProducts.length;

    // Add event listeners
    document.querySelectorAll('.btn-quickview').forEach(btn => {
        btn.addEventListener('click', (e) => openQuickView(e.target.dataset.id));
    });

    document.querySelectorAll('.btn-cart').forEach(btn => {
        btn.addEventListener('click', (e) => addToCart(e.target.dataset.id));
    });

    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => toggleWishlist(e.target, e.target.dataset.id));
    });
}

// ==================== FILTER SETUP ==================== //
function setupFilterListeners() {
    // Category filter
    document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            if (e.target.value === 'all') {
                document.querySelectorAll('.filter-checkbox').forEach(cb => cb.checked = e.target.checked);
                selectedFilters.category = e.target.checked ? ['all'] : [];
            } else {
                const allCheckbox = document.querySelector('input[value="all"]');
                if (e.target.checked) {
                    selectedFilters.category = Array.from(
                        document.querySelectorAll('.filter-checkbox:checked:not([value="all"])')
                    ).map(cb => cb.value);
                    allCheckbox.checked = false;
                } else {
                    selectedFilters.category = Array.from(
                        document.querySelectorAll('.filter-checkbox:checked:not([value="all"])')
                    ).map(cb => cb.value);
                }
            }
            applyFilters();
        });
    });

    // Price slider
    const priceSlider = document.getElementById('priceSlider');
    const priceValue = document.getElementById('priceValue');
    
    priceSlider.addEventListener('input', (e) => {
        selectedFilters.maxPrice = parseInt(e.target.value);
        priceValue.textContent = `₹${parseInt(e.target.value).toLocaleString('en-IN')}`;
        applyFilters();
    });

    // Clear filters button
    document.querySelector('.clear-filters').addEventListener('click', () => {
        selectedFilters = { category: ['all'], maxPrice: 20000, region: [] };
        document.querySelectorAll('.filter-checkbox').forEach(cb => cb.checked = cb.value === 'all');
        priceSlider.value = 20000;
        priceValue.textContent = '₹20,000';
        applyFilters();
    });
}

// ==================== APPLY FILTERS ==================== //
function applyFilters() {
    currentProducts = productsDatabase.filter(product => {
        // Category filter
        const categoryMatch = selectedFilters.category.includes('all') || 
                            selectedFilters.category.length === 0 ||
                            selectedFilters.category.includes(product.category);
        
        // Price filter
        const priceMatch = product.price <= selectedFilters.maxPrice;

        // Region filter (coming from region checkboxes in sidebar)
        const regionCheckboxes = Array.from(
            document.querySelectorAll('.filter-checkbox:checked')
        ).map(cb => cb.value).filter(v => 
            ['lucknow', 'varanasi', 'bihar', 'odisha', 'kashmir', 'rajasthan'].includes(v)
        );
        
        const regionMatch = regionCheckboxes.length === 0 || 
                           regionCheckboxes.includes(product.region);

        return categoryMatch && priceMatch && regionMatch;
    });

    applySorting();
    renderProducts();
}

// ==================== SORT SETUP ==================== //
function setupSortListener() {
    document.getElementById('sortBy').addEventListener('change', (e) => {
        currentSort = e.target.value;
        applySorting();
        renderProducts();
    });
}

// ==================== APPLY SORTING ==================== //
function applySorting() {
    switch(currentSort) {
        case 'newest':
            currentProducts.sort((a, b) => b.id - a.id);
            break;
        case 'price-low':
            currentProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            currentProducts.sort((a, b) => b.price - a.price);
            break;
        case 'popular':
            currentProducts.sort((a, b) => b.reviews - a.reviews);
            break;
        case 'name':
            currentProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
}

// ==================== QUICK VIEW MODAL ==================== //
function openQuickView(productId) {
    const product = productsDatabase.find(p => p.id == productId);
    if (!product) return;

    const modal = document.getElementById('quickViewModal');
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductEmoji').textContent = product.image;
    document.getElementById('modalProductOrigin').textContent = product.origin;
    document.getElementById('modalProductPrice').textContent = `₹${product.price.toLocaleString('en-IN')}`;
    document.getElementById('modalProductDescription').textContent = product.description;
    document.querySelector('.review-count').textContent = `(${product.reviews} reviews)`;
    document.querySelector('.view-details-link').href = `product.html?id=${productId}`;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Add to cart from modal
    document.querySelector('.btn-add-cart').onclick = () => addToCart(productId);
    
    // Save to wishlist from modal
    document.querySelector('.btn-save-wishlist').onclick = () => {
        const btn = document.querySelector(`.wishlist-btn[data-id="${productId}"]`);
        if (btn) toggleWishlist(btn, productId);
        alert('✓ Added to wishlist!');
    };
}

// ==================== MODAL CLOSE ==================== //
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('quickViewModal');
    const closeBtn = document.querySelector('.modal-close');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// ==================== CART FUNCTIONALITY ==================== //
function addToCart(productId) {
    const product = productsDatabase.find(p => p.id == productId);
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id == productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Visual feedback
    const btn = document.querySelector(`[data-id="${productId}"].btn-cart`);
    if (btn) {
        const originalText = btn.textContent;
        btn.textContent = '✓ Added';
        btn.style.background = '#4a2454';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 1500);
    }
}

// ==================== WISHLIST FUNCTIONALITY ==================== //
function toggleWishlist(btn, productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const index = wishlist.findIndex(item => item.id == productId);

    if (index > -1) {
        wishlist.splice(index, 1);
        btn.style.color = '#8b4789';
        btn.style.opacity = '0.6';
    } else {
        const product = productsDatabase.find(p => p.id == productId);
        wishlist.push(product);
        btn.style.color = '#e74c3c';
        btn.style.opacity = '1';
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// ==================== NAV LINK ACTIVE STATE ==================== //
document.addEventListener('DOMContentLoaded', () => {
    const shopLink = document.querySelector('a[href="shop.html"]');
    if (shopLink) {
        shopLink.classList.add('active');
    }
});
