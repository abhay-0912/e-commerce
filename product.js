// ==================== PRODUCT DETAIL PAGE ==================== //

document.addEventListener('DOMContentLoaded', () => {
    loadProductDetails();
    setupEventListeners();
});

// ==================== GET PRODUCT ID FROM URL ==================== //
function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// ==================== LOAD PRODUCT DETAILS ==================== //
function loadProductDetails() {
    const productId = getProductIdFromURL();
    
    // Get product database from shop.js
    if (typeof productsDatabase === 'undefined') {
        console.error('Product database not loaded');
        return;
    }

    const product = productsDatabase.find(p => p.id == productId);
    
    if (!product) {
        document.querySelector('.product-page').innerHTML = '<p>Product not found</p>';
        return;
    }

    // Update all product information
    updateProductInfo(product);
    loadRelatedProducts(product);
}

// ==================== UPDATE PRODUCT INFO ==================== //
function updateProductInfo(product) {
    // Update page title
    document.title = `${product.name} | Sanskriti Traditional`;

    // Update breadcrumb
    document.getElementById('breadcrumbProduct').textContent = product.name;

    // Update main product details
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productRegion').textContent = getRegionName(product.region);
    document.getElementById('productCraft').textContent = getCraftName(product.category);
    document.getElementById('productPrice').textContent = `₹${product.price.toLocaleString('en-IN')}`;
    document.getElementById('productAuthenticity').textContent = product.origin;
    document.getElementById('productRating').textContent = product.rating;
    document.getElementById('productReviews').textContent = product.reviews;

    // Update gallery
    updateGallery(product);

    // Update craft story
    updateCraftStory(product);

    // Update artisan info
    updateArtisanInfo(product);

    // Store current product in window for later use
    window.currentProduct = product;
}

// ==================== UPDATE GALLERY ==================== //
function updateGallery(product) {
    const mainImage = document.getElementById('mainImage');
    const mainEmoji = document.getElementById('mainEmoji');
    const zoomEmoji = document.getElementById('zoomEmoji');
    
    mainEmoji.textContent = product.image;
    zoomEmoji.textContent = product.image;

    // Set background color based on product
    const colors = {
        textiles: 'linear-gradient(135deg, #8b4789 0%, #4a2454 100%)',
        embroidery: 'linear-gradient(135deg, #f5d5b8 0%, #d4a574 100%)',
        art: 'linear-gradient(135deg, #f4e4c1 0%, #e8d4a8 100%)',
        pottery: 'linear-gradient(135deg, #c99a7d 0%, #a17660 100%)',
        accessories: 'linear-gradient(135deg, #d4a574 0%, #b8956f 100%)'
    };

    mainImage.style.background = colors[product.category] || colors.textiles;

    // Create thumbnail gallery
    const thumbnailsContainer = document.querySelector('.gallery-thumbnails');
    thumbnailsContainer.innerHTML = '';

    // Add main thumbnail
    const mainThumb = document.createElement('div');
    mainThumb.className = 'thumbnail active';
    mainThumb.innerHTML = `<span>${product.image}</span>`;
    mainThumb.addEventListener('click', () => {
        mainEmoji.textContent = product.image;
        updateActiveThumbnail(mainThumb);
    });
    thumbnailsContainer.appendChild(mainThumb);

    // Add related craft thumbnail
    const craftThumb = document.createElement('div');
    craftThumb.className = 'thumbnail';
    craftThumb.innerHTML = `<span>🎨</span>`;
    craftThumb.addEventListener('click', () => {
        mainEmoji.textContent = '🎨';
        updateActiveThumbnail(craftThumb);
    });
    thumbnailsContainer.appendChild(craftThumb);

    // Add artisan thumbnail
    const artisanThumb = document.createElement('div');
    artisanThumb.className = 'thumbnail';
    artisanThumb.innerHTML = `<span>👩‍🎨</span>`;
    artisanThumb.addEventListener('click', () => {
        mainEmoji.textContent = '👩‍🎨';
        updateActiveThumbnail(artisanThumb);
    });
    thumbnailsContainer.appendChild(artisanThumb);
}

function updateActiveThumbnail(thumb) {
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
}

// ==================== UPDATE CRAFT STORY ==================== //
function updateCraftStory(product) {
    const storyText = {
        1: {
            description: "This Banarasi saree was crafted using techniques passed down through generations of master weavers in Varanasi. Each saree tells the story of countless hours of meticulous handwork, traditional knowledge, and artistic vision.",
            time: "18 days",
            technique: "Handweaving on traditional looms",
            significance: "Symbol of elegance and tradition in Indian culture",
            materials: "100% silk with gold zari work"
        },
        4: {
            description: "This Chikankari embroidered piece showcases the delicate artistry of Lucknow's embroidery tradition. Each stitch is made by hand, creating ethereal patterns that have enchanted royalty and commoners alike for centuries.",
            time: "7-10 days",
            technique: "Hand embroidery using running stitch",
            significance: "Symbol of grace and feminine elegance in Indian tradition",
            materials: "Pure cotton with hand embroidery"
        },
        7: {
            description: "This Madhubani painting is a window into Bihar's ancient folk art tradition. Created on handmade paper or canvas, each brushstroke tells stories of mythology, nature, and the artist's connection to their heritage.",
            time: "5-8 days",
            technique: "Hand-painted traditional folk art",
            significance: "Records mythology and cultural narratives passed through generations",
            materials: "Handmade paper or canvas with natural colors"
        },
        10: {
            description: "These terracotta pieces are molded by hand from clay, each one unique and organic. Rooted in Odisha's ancient pottery tradition, they represent a connection to the earth and the wisdom of traditional craftspeople.",
            time: "3-5 days",
            technique: "Hand-molding and natural firing",
            significance: "Essential part of Indian home culture and festivals",
            materials: "Natural clay with traditional finish"
        },
        13: {
            description: "This Pashmina shawl is woven from the world's finest wool, transformed into fabric of legendary softness. Each piece undergoes meticulous craftsmanship to create warmth and elegance that lasts generations.",
            time: "10-15 days",
            technique: "Hand-weaving fine Pashmina wool",
            significance: "Luxury and heritage symbol in Indian culture",
            materials: "100% pure Pashmina wool"
        }
    };

    const story = storyText[product.id] || storyText[1];

    document.getElementById('storyDescription').textContent = story.description;
    document.getElementById('craftTime').textContent = story.time;
    document.getElementById('craftTechnique').textContent = story.technique;
    document.getElementById('craftSignificance').textContent = story.significance;
    document.getElementById('craftMaterials').textContent = story.materials;
}

// ==================== UPDATE ARTISAN INFO ==================== //
function updateArtisanInfo(product) {
    // Map products to artisan IDs from artisans.js
    const productToArtisanId = {
        1: 1,  // Banarasi Saree -> Asha Sharma
        4: 2,  // Chikankari -> Rajesh Kumar
        7: 3,  // Madhubani -> Priya Devi
        10: 4, // Terracotta -> Deepak Singh
        13: 5  // Pashmina -> Meera Nair
    };

    const artisanData = {
        1: { name: "Priya Sharma", region: "Varanasi, Uttar Pradesh", experience: "22 years", specialty: "Banarasi Silk Weaving", quote: "Every thread that passes through my loom carries the legacy of my family. This is not just work—this is our heritage." },
        4: { name: "Kavya Nair", region: "Lucknow, Uttar Pradesh", experience: "18 years", specialty: "Chikankari Embroidery", quote: "The delicacy of Chikankari is not just in the stitches, but in the patience and love we pour into each creation." },
        7: { name: "Meera Devi", region: "Bihar", experience: "25 years", specialty: "Madhubani Art", quote: "These paintings are my conversation with the gods and the earth. Each brush stroke is a prayer." },
        10: { name: "Ravi Kumar", region: "Odisha", experience: "20 years", specialty: "Terracotta Pottery", quote: "Clay has been my teacher and my canvas. Through pottery, I connect generations." },
        13: { name: "Aisha Khan", region: "Kashmir", experience: "30 years", specialty: "Pashmina Weaving", quote: "Pashmina is not just wool—it is the softness of Kashmir's mountains woven into fabric." }
    };

    const artisan = artisanData[product.id] || artisanData[1];
    const artisanId = productToArtisanId[product.id] || 1;

    document.getElementById('artisanName').textContent = artisan.name;
    document.getElementById('artisanRegion').textContent = artisan.region;
    document.getElementById('artisanExperience').textContent = artisan.experience;
    document.getElementById('artisanSpecialty').textContent = artisan.specialty;
    document.getElementById('artisanQuote').textContent = `"${artisan.quote}"`;
    
    // Update artisan profile link with artisanId parameter
    const profileLink = document.getElementById('artisanProfileLink');
    if (profileLink) {
        profileLink.href = `artisans.html?artisanId=${artisanId}`;
    }
}

// ==================== LOAD RELATED PRODUCTS ==================== //
function loadRelatedProducts(product) {
    const relatedGrid = document.getElementById('relatedProductsGrid');
    
    // Find products from same region or category, excluding current product
    const related = productsDatabase.filter(p => 
        p.id !== product.id && 
        (p.region === product.region || p.category === product.category)
    ).slice(0, 4);

    relatedGrid.innerHTML = related.map(p => `
        <div class="related-product-card">
            <div class="related-image">
                <span>${p.image}</span>
            </div>
            <h3>${p.name}</h3>
            <p class="related-origin">${p.origin}</p>
            <p class="related-price">₹${p.price.toLocaleString('en-IN')}</p>
            <a href="product.html?id=${p.id}" class="related-view-link">View Details →</a>
        </div>
    `).join('');
}

// ==================== SETUP EVENT LISTENERS ==================== //
function setupEventListeners() {
    // Add to cart
    document.getElementById('addToCartBtn').addEventListener('click', () => {
        if (window.currentProduct) {
            addToCartFromPDP(window.currentProduct.id);
        }
    });

    // Add to wishlist
    document.getElementById('addToWishlistBtn').addEventListener('click', () => {
        if (window.currentProduct) {
            addToWishlistFromPDP(window.currentProduct.id);
        }
    });

    // Zoom button
    document.getElementById('zoomBtn').addEventListener('click', () => {
        document.getElementById('zoomModal').style.display = 'flex';
    });

    // Zoom modal close
    document.querySelector('.zoom-modal-close').addEventListener('click', () => {
        document.getElementById('zoomModal').style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        const modal = document.getElementById('zoomModal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// ==================== ADD TO CART (PDP VERSION) ==================== //
function addToCartFromPDP(productId) {
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
    const btn = document.getElementById('addToCartBtn');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<span>✓</span><span>Added to Cart!</span>';
    btn.style.background = '#4a2454';

    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.background = '';
    }, 2000);
}

// ==================== ADD TO WISHLIST (PDP VERSION) ==================== //
function addToWishlistFromPDP(productId) {
    const product = productsDatabase.find(p => p.id == productId);
    if (!product) return;

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const index = wishlist.findIndex(item => item.id == productId);

    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(product);
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    // Visual feedback
    const btn = document.getElementById('addToWishlistBtn');
    if (index > -1) {
        btn.innerHTML = '<span>❤️</span><span>Removed from Wishlist</span>';
    } else {
        btn.innerHTML = '<span>❤️</span><span>Saved to Wishlist!</span>';
        btn.style.color = '#e74c3c';
    }

    setTimeout(() => {
        btn.innerHTML = '<span>❤️</span><span>Save to Wishlist</span>';
        btn.style.color = '';
    }, 2000);
}

// ==================== HELPER FUNCTIONS ==================== //
function getRegionName(region) {
    const regionMap = {
        'varanasi': 'Varanasi',
        'lucknow': 'Lucknow',
        'bihar': 'Bihar',
        'odisha': 'Odisha',
        'kashmir': 'Kashmir',
        'rajasthan': 'Rajasthan'
    };
    return regionMap[region] || region;
}

function getCraftName(category) {
    const craftMap = {
        'textiles': 'Textiles',
        'embroidery': 'Embroidery',
        'art': 'Art',
        'pottery': 'Pottery',
        'accessories': 'Accessories'
    };
    return craftMap[category] || category;
}

// ==================== SMOOTH SCROLL FOR LINKS ==================== //
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
