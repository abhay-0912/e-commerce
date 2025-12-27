// Sample Products Data
const products = [
    {
        id: 1,
        name: "Embroidered Chikankari Kurta",
        price: 2499,
        craft: "Chikankari",
        region: "Lucknow",
        emoji: "👗"
    },
    {
        id: 2,
        name: "Banarasi Silk Saree",
        price: 8999,
        craft: "Banarasi",
        region: "Varanasi",
        emoji: "🧣"
    },
    {
        id: 3,
        name: "Madhubani Wall Art",
        price: 3299,
        craft: "Madhubani",
        region: "Bihar",
        emoji: "🖼️"
    },
    {
        id: 4,
        name: "Silver Filigree Jewelry",
        price: 5799,
        craft: "Filigree",
        region: "Odisha",
        emoji: "💍"
    },
    {
        id: 5,
        name: "Pashmina Shawl",
        price: 12999,
        craft: "Pashmina",
        region: "Kashmir",
        emoji: "🧥"
    },
    {
        id: 6,
        name: "Blue Pottery Vase",
        price: 1899,
        craft: "Blue Pottery",
        region: "Jaipur",
        emoji: "🏺"
    },
    {
        id: 7,
        name: "Kantha Embroidered Dupatta",
        price: 1599,
        craft: "Kantha",
        region: "West Bengal",
        emoji: "🧣"
    },
    {
        id: 8,
        name: "Warli Art Painting",
        price: 2799,
        craft: "Warli",
        region: "Maharashtra",
        emoji: "🎨"
    },
    {
        id: 9,
        name: "Handwoven Chanderi Suit",
        price: 4599,
        craft: "Chanderi",
        region: "Madhya Pradesh",
        emoji: "👗"
    },
    {
        id: 10,
        name: "Terracotta Tea Set",
        price: 899,
        craft: "Terracotta",
        region: "West Bengal",
        emoji: "☕"
    },
    {
        id: 11,
        name: "Kalamkari Cotton Stole",
        price: 1299,
        craft: "Kalamkari",
        region: "Andhra Pradesh",
        emoji: "🧣"
    },
    {
        id: 12,
        name: "Bidriware Decorative Box",
        price: 3499,
        craft: "Bidriware",
        region: "Karnataka",
        emoji: "📦"
    },
    {
        id: 13,
        name: "Phulkari Embroidered Dupatta",
        price: 2199,
        craft: "Phulkari",
        region: "Punjab",
        emoji: "🌺"
    },
    {
        id: 14,
        name: "Dhokra Brass Figurine",
        price: 1799,
        craft: "Dhokra",
        region: "Chhattisgarh",
        emoji: "🗿"
    },
    {
        id: 15,
        name: "Ajrakh Block Print Saree",
        price: 3999,
        craft: "Ajrakh",
        region: "Gujarat",
        emoji: "🧣"
    },
    {
        id: 16,
        name: "Pattachitra Scroll Painting",
        price: 4299,
        craft: "Pattachitra",
        region: "Odisha",
        emoji: "📜"
    }
];

// Store filtered products
let filteredProducts = [...products];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const productsCount = document.getElementById('productsCount');
const craftFilter = document.getElementById('craftFilter');
const regionFilter = document.getElementById('regionFilter');
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const applyFiltersBtn = document.getElementById('applyFilters');
const resetFiltersBtn = document.getElementById('resetFilters');
const filtersToggle = document.getElementById('filtersToggle');
const filtersSidebar = document.getElementById('filtersSidebar');
const filtersClose = document.getElementById('filtersClose');

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    populateFilters();
    renderProducts(products);
    attachEventListeners();
});

// Populate filter dropdowns
function populateFilters() {
    // Get unique crafts
    const crafts = [...new Set(products.map(p => p.craft))].sort();
    crafts.forEach(craft => {
        const option = document.createElement('option');
        option.value = craft;
        option.textContent = craft;
        craftFilter.appendChild(option);
    });
    
    // Get unique regions
    const regions = [...new Set(products.map(p => p.region))].sort();
    regions.forEach(region => {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionFilter.appendChild(option);
    });
}

// Render products to grid
function renderProducts(productsToRender) {
    filteredProducts = productsToRender;
    
    // Update count
    productsCount.innerHTML = `Showing <strong>${productsToRender.length}</strong> products`;
    
    // Clear grid
    productsGrid.innerHTML = '';
    
    // Check if empty
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <div class="no-products-icon">🔍</div>
                <p class="no-products-text">No products found matching your filters.</p>
                <p style="color: var(--color-gray); font-size: var(--font-size-sm); margin-top: var(--space-sm);">
                    Try adjusting your search criteria.
                </p>
            </div>
        `;
        return;
    }
    
    // Render product cards
    productsToRender.forEach(product => {
        const card = createProductCard(product);
        productsGrid.appendChild(card);
    });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image-wrapper">
            <span class="product-emoji">${product.emoji}</span>
            <span class="craft-badge">${product.craft}</span>
        </div>
        <div class="product-details">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-region">📍 ${product.region}</p>
            <div class="product-footer">
                <span class="product-price">₹${product.price.toLocaleString()}</span>
                <a href="product-detail.html?id=${product.id}" class="btn-view">View Product</a>
            </div>
        </div>
    `;
    return card;
}

// Apply filters
function applyFilters() {
    const selectedCraft = craftFilter.value;
    const selectedRegion = regionFilter.value;
    const minPrice = parseFloat(minPriceInput.value) || 0;
    const maxPrice = parseFloat(maxPriceInput.value) || Infinity;
    
    const filtered = products.filter(product => {
        const matchesCraft = !selectedCraft || product.craft === selectedCraft;
        const matchesRegion = !selectedRegion || product.region === selectedRegion;
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        
        return matchesCraft && matchesRegion && matchesPrice;
    });
    
    renderProducts(filtered);
    
    // Close mobile filters
    if (window.innerWidth <= 768) {
        filtersSidebar.classList.remove('active');
    }
}

// Reset filters
function resetFilters() {
    craftFilter.value = '';
    regionFilter.value = '';
    minPriceInput.value = '';
    maxPriceInput.value = '';
    
    renderProducts(products);
    
    // Close mobile filters
    if (window.innerWidth <= 768) {
        filtersSidebar.classList.remove('active');
    }
}

// Attach event listeners
function attachEventListeners() {
    applyFiltersBtn.addEventListener('click', applyFilters);
    resetFiltersBtn.addEventListener('click', resetFilters);
    
    // Mobile filters toggle
    if (filtersToggle) {
        filtersToggle.addEventListener('click', () => {
            filtersSidebar.classList.add('active');
        });
    }
    
    if (filtersClose) {
        filtersClose.addEventListener('click', () => {
            filtersSidebar.classList.remove('active');
        });
    }
    
    // Apply filters on Enter key in price inputs
    minPriceInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') applyFilters();
    });
    
    maxPriceInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') applyFilters();
    });
}

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { products, filteredProducts };
}
