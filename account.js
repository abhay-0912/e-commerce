// ==================== ACCOUNT DASHBOARD ==================== //

const STORAGE = {
    currentUser: 'sanskritiCurrentUser',
    orders: 'sanskritiOrders',
    addresses: 'sanskritiAddresses',
    wishlist: 'sanskritiWishlist'
};

let currentUser = null;
let addresses = [];
let editingAddressId = null;

document.addEventListener('DOMContentLoaded', () => {
    // Require auth
    currentUser = JSON.parse(localStorage.getItem(STORAGE.currentUser));
    if (!currentUser) {
        window.location.href = 'login.html?redirect=account.html';
        return;
    }

    // Set welcome message
    document.getElementById('welcomeMessage').textContent = `Welcome back, ${currentUser.name || currentUser.identifier}`;

    // Load data
    loadOrders();
    loadAddresses();
    loadWishlist();
    loadProfile();

    // Attach handlers
    attachTabHandlers();
    attachAddressHandlers();
    attachProfileHandlers();
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
});

// ==================== ORDERS ==================== //

function loadOrders() {
    const orders = JSON.parse(localStorage.getItem(STORAGE.orders)) || [];
    const container = document.getElementById('ordersList');
    document.getElementById('orderCount').textContent = orders.length;

    if (!orders.length) {
        container.innerHTML = '<p class="empty-state">No orders yet. <a href="shop.html" class="link-plain">Start shopping</a>.</p>';
        return;
    }

    container.innerHTML = orders.map(order => `
        <div class="order-card">
            <div class="order-info">
                <div class="order-id">${order.id}</div>
                <div class="order-meta">
                    <span>${new Date(order.createdAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    <span class="order-status ${getStatusClass(order.status)}">${order.status}</span>
                    <span><strong>${order.total}</strong></span>
                </div>
                <div class="order-meta">
                    ${order.items ? order.items.length + ' item' + (order.items.length !== 1 ? 's' : '') : ''}
                </div>
            </div>
            <div class="order-actions">
                <button class="btn-secondary" onclick="trackOrder('${order.id}')">Track Order</button>
                <button class="btn-secondary" onclick="viewOrderDetails('${order.id}')">View Details</button>
            </div>
        </div>
    `).join('');
}

function getStatusClass(status) {
    if (!status) return 'processing';
    status = status.toLowerCase();
    if (status.includes('delivered')) return 'delivered';
    if (status.includes('shipped')) return 'shipped';
    return 'processing';
}

function trackOrder(orderId) {
    window.location.href = `track-order.html?orderId=${orderId}`;
}

function viewOrderDetails(orderId) {
    const orders = JSON.parse(localStorage.getItem(STORAGE.orders)) || [];
    const order = orders.find(o => o.id === orderId);
    if (order) {
        alert(`Order ID: ${order.id}\nTotal: ${order.total}\nStatus: ${order.status || 'Processing'}`);
    }
}

// ==================== WISHLIST ==================== //

function loadWishlist() {
    const wishlist = JSON.parse(localStorage.getItem(STORAGE.wishlist)) || [];
    const container = document.getElementById('wishlistList');
    document.getElementById('wishlistCount').textContent = wishlist.length;

    if (!wishlist.length) {
        container.innerHTML = '<p class="empty-state">Your wishlist is empty. <a href="shop.html" class="link-plain">Explore products</a>.</p>';
        return;
    }

    container.innerHTML = wishlist.map(item => {
        const product = productsDatabase.find(p => p.id === item.id);
        if (!product) return '';
        return `
            <div class="wishlist-item">
                <div class="item-image">${product.image || '🎨'}</div>
                <div class="item-name">${product.name}</div>
                <div class="item-price">₹${product.price.toLocaleString('en-IN')}</div>
                <div class="item-actions">
                    <button class="btn-primary" onclick="addWishlistToCart(${item.id})">Add to cart</button>
                    <button class="btn-secondary" onclick="removeFromWishlist(${item.id})">Remove</button>
                </div>
            </div>
        `;
    }).join('');
}

function addWishlistToCart(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = productsDatabase.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}

function removeFromWishlist(id) {
    let wishlist = JSON.parse(localStorage.getItem(STORAGE.wishlist)) || [];
    wishlist = wishlist.filter(item => item.id !== id);
    localStorage.setItem(STORAGE.wishlist, JSON.stringify(wishlist));
    loadWishlist();
}

// ==================== ADDRESSES ==================== //

function loadAddresses() {
    addresses = JSON.parse(localStorage.getItem(STORAGE.addresses)) || [];
    const container = document.getElementById('addressList');
    document.getElementById('addressCount').textContent = addresses.length;

    if (!addresses.length) {
        container.innerHTML = '<p class="empty-state">No saved addresses. <a href="#" id="addAddressLink" class="link-plain">Add one</a>.</p>';
        document.getElementById('addAddressLink').addEventListener('click', (e) => {
            e.preventDefault();
            openAddressModal();
        });
        return;
    }

    container.innerHTML = addresses.map((addr, idx) => `
        <div class="address-card ${addr.isDefault ? 'default' : ''}">
            <div class="address-name">${addr.name}</div>
            <div class="address-text">
                ${addr.address}<br>
                ${addr.city}, ${addr.state} ${addr.pincode}<br>
                ${addr.phone}
            </div>
            <div class="address-actions">
                <button class="btn-secondary" onclick="editAddress(${idx})">Edit</button>
                <button class="btn-secondary" onclick="deleteAddress(${idx})">Delete</button>
            </div>
        </div>
    `).join('');
}

function openAddressModal(idx) {
    editingAddressId = idx !== undefined ? idx : null;
    const form = document.getElementById('addressForm');
    const modalTitle = document.getElementById('modalTitle');
    const deleteBtn = document.getElementById('deleteAddressBtn');

    if (idx !== undefined) {
        const addr = addresses[idx];
        modalTitle.textContent = 'Edit Address';
        form.name.value = addr.name;
        form.phone.value = addr.phone;
        form.address.value = addr.address;
        form.city.value = addr.city;
        form.state.value = addr.state;
        form.pincode.value = addr.pincode;
        form.isDefault.checked = addr.isDefault || false;
        deleteBtn.style.display = 'block';
    } else {
        modalTitle.textContent = 'Add Address';
        form.reset();
        deleteBtn.style.display = 'none';
    }

    document.getElementById('addressModal').classList.remove('hidden');
}

function editAddress(idx) {
    openAddressModal(idx);
}

function deleteAddress(idx) {
    if (confirm('Delete this address?')) {
        addresses.splice(idx, 1);
        localStorage.setItem(STORAGE.addresses, JSON.stringify(addresses));
        loadAddresses();
        closeAddressModal();
    }
}

function closeAddressModal() {
    document.getElementById('addressModal').classList.add('hidden');
    editingAddressId = null;
}

function attachAddressHandlers() {
    document.getElementById('addAddressBtn').addEventListener('click', openAddressModal);
    document.getElementById('closeModal').addEventListener('click', closeAddressModal);

    document.getElementById('addressForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        const addr = {
            name: form.name.value.trim(),
            phone: form.phone.value.trim(),
            address: form.address.value.trim(),
            city: form.city.value.trim(),
            state: form.state.value.trim(),
            pincode: form.pincode.value.trim(),
            isDefault: form.isDefault.checked
        };

        if (editingAddressId !== null) {
            addresses[editingAddressId] = addr;
        } else {
            addresses.push(addr);
        }

        // Only one default
        if (addr.isDefault) {
            addresses.forEach((a, i) => {
                if (i !== editingAddressId) a.isDefault = false;
            });
        }

        localStorage.setItem(STORAGE.addresses, JSON.stringify(addresses));
        loadAddresses();
        closeAddressModal();
    });

    document.getElementById('deleteAddressBtn').addEventListener('click', () => {
        if (editingAddressId !== null && confirm('Delete this address?')) {
            deleteAddress(editingAddressId);
        }
    });
}

// ==================== PROFILE ==================== //

function loadProfile() {
    document.getElementById('profileName').value = currentUser.name || '';
    document.getElementById('profileIdentifier').value = currentUser.identifier || '';
}

function attachProfileHandlers() {
    document.getElementById('saveProfileBtn').addEventListener('click', saveProfile);
}

function saveProfile() {
    const name = document.getElementById('profileName').value.trim();
    const newPassword = document.getElementById('newPassword').value.trim();
    const messageEl = document.getElementById('profileMessage');

    if (!name) {
        return showMessage(messageEl, 'Please enter your name.', 'error');
    }

    currentUser.name = name;

    if (newPassword) {
        if (newPassword.length < 6) {
            return showMessage(messageEl, 'Password should be at least 6 characters.', 'error');
        }
        currentUser.password = newPassword;
    }

    localStorage.setItem(STORAGE.currentUser, JSON.stringify(currentUser));

    // Also update in users list
    const users = JSON.parse(localStorage.getItem('sanskritiUsers')) || [];
    const userIdx = users.findIndex(u => u.identifier === currentUser.identifier);
    if (userIdx !== -1) {
        users[userIdx] = currentUser;
        localStorage.setItem('sanskritiUsers', JSON.stringify(users));
    }

    showMessage(messageEl, 'Profile updated!', 'success');
    document.getElementById('newPassword').value = '';

    setTimeout(() => {
        document.getElementById('welcomeMessage').textContent = `Welcome back, ${currentUser.name}`;
    }, 500);
}

// ==================== TABS ==================== //

function attachTabHandlers() {
    const tabs = document.querySelectorAll('.tab-btn');
    const panes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;

            // Update active tab button
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update active pane
            panes.forEach(pane => pane.classList.remove('active'));
            document.getElementById(tabName).classList.add('active');
        });
    });
}

// ==================== LOGOUT ==================== //

function handleLogout() {
    localStorage.removeItem(STORAGE.currentUser);
    window.location.href = 'index.html';
}

// ==================== HELPERS ==================== //

function showMessage(element, text, type) {
    if (!element) return;
    element.textContent = text;
    element.classList.remove('success', 'error');
    if (type) {
        element.classList.add(type);
    }
}
