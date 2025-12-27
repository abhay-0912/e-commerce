// ==================== CART PAGE ==================== //

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    document.getElementById('checkoutBtn').addEventListener('click', handleCheckout);
});

// Load cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Save cart
function setCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {
    const cartContainer = document.getElementById('cartItems');
    const cart = getCart();

    if (!cart.length) {
        const tpl = document.getElementById('emptyStateTemplate');
        cartContainer.innerHTML = '';
        cartContainer.appendChild(tpl.content.cloneNode(true));
        updateSummary([]);
        return;
    }

    cartContainer.innerHTML = cart.map(item => {
        const product = productsDatabase.find(p => p.id === item.id) || item;
        const background = getBackgroundForCategory(product.category);
        const craft = getCraftName(product.category);
        const region = getRegionName(product.region);
        return `
            <article class="cart-item" data-id="${product.id}">
                <div class="item-media" style="background:${background};">
                    <span class="item-emoji">${product.image || '🧵'}</span>
                </div>
                <div class="item-details">
                    <h3 class="item-name">${product.name}</h3>
                    <p class="item-meta">${craft} • ${region}</p>
                    <button class="item-remove" data-id="${product.id}">Remove</button>
                </div>
                <div class="item-price">₹${product.price.toLocaleString('en-IN')}</div>
                <div class="item-qty">
                    <button class="qty-btn" data-action="decrease" data-id="${product.id}">−</button>
                    <input type="text" value="${item.quantity}" readonly aria-label="Quantity">
                    <button class="qty-btn" data-action="increase" data-id="${product.id}">+</button>
                </div>
                <div class="item-total">₹${(product.price * item.quantity).toLocaleString('en-IN')}</div>
            </article>
        `;
    }).join('');

    attachItemHandlers();
    updateSummary(cart);
}

function attachItemHandlers() {
    // Quantity buttons
    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id);
            const action = btn.dataset.action;
            adjustQuantity(id, action === 'increase' ? 1 : -1);
        });
    });

    // Remove buttons
    document.querySelectorAll('.item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id);
            removeItem(id);
        });
    });
}

function adjustQuantity(id, delta) {
    const cart = getCart();
    const item = cart.find(p => p.id === id);
    if (!item) return;

    item.quantity = Math.max(1, (item.quantity || 1) + delta);
    setCart(cart);
    renderCart();
}

function removeItem(id) {
    let cart = getCart();
    cart = cart.filter(p => p.id !== id);
    setCart(cart);
    renderCart();
}

function updateSummary(cart) {
    const subtotal = cart.reduce((sum, item) => {
        const product = productsDatabase.find(p => p.id === item.id) || item;
        return sum + product.price * item.quantity;
    }, 0);

    const shipping = subtotal > 0 ? 199 : 0; // estimated flat shipping
    const taxes = 0; // keep calm and transparent
    const total = subtotal + shipping + taxes;

    document.getElementById('summarySubtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    document.getElementById('summaryShipping').textContent = `₹${shipping.toLocaleString('en-IN')}`;
    document.getElementById('summaryTaxes').textContent = `₹${taxes.toLocaleString('en-IN')}`;
    document.getElementById('summaryTotal').textContent = `₹${total.toLocaleString('en-IN')}`;
}

function handleCheckout() {
    const cart = getCart();
    if (!cart.length) {
        alert('Your cart is empty. Add a handcrafted piece to proceed.');
        return;
    }
    const redirectUrl = isUserLoggedIn() ? 'checkout.html' : 'login.html?redirect=checkout.html';
    window.location.href = redirectUrl;
}

function isUserLoggedIn() {
    return Boolean(localStorage.getItem('sanskritiCurrentUser'));
}

// Helpers
function getBackgroundForCategory(category) {
    const colors = {
        textiles: 'linear-gradient(135deg, #8b4789 0%, #4a2454 100%)',
        embroidery: 'linear-gradient(135deg, #f5d5b8 0%, #d4a574 100%)',
        art: 'linear-gradient(135deg, #f4e4c1 0%, #e8d4a8 100%)',
        pottery: 'linear-gradient(135deg, #c99a7d 0%, #a17660 100%)',
        accessories: 'linear-gradient(135deg, #d4a574 0%, #b8956f 100%)'
    };
    return colors[category] || colors.textiles;
}

function getRegionName(region) {
    const regionMap = {
        varanasi: 'Varanasi',
        lucknow: 'Lucknow',
        bihar: 'Bihar',
        odisha: 'Odisha',
        kashmir: 'Kashmir',
        rajasthan: 'Rajasthan'
    };
    return regionMap[region] || region;
}

function getCraftName(category) {
    const craftMap = {
        textiles: 'Textiles',
        embroidery: 'Embroidery',
        art: 'Art',
        pottery: 'Pottery',
        accessories: 'Accessories'
    };
    return craftMap[category] || category;
}
