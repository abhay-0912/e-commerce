// ==================== TRACK ORDER ==================== //

const STORAGE = {
    orders: 'sanskritiOrders'
};

// Simulated courier tracking (can integrate real API later)
const courierData = {
    'Express Courier': 'https://www.example.com/track',
    'FastShip': 'https://www.example.com/track',
    'National Logistics': 'https://www.example.com/track'
};

document.addEventListener('DOMContentLoaded', () => {
    const orderId = new URLSearchParams(window.location.search).get('orderId');
    
    if (!orderId) {
        showErrorState();
        return;
    }

    const order = findOrder(orderId);
    if (!order) {
        showErrorState();
        return;
    }

    renderTrackingPage(order);
    attachHandlers(order);
});

function findOrder(orderId) {
    const orders = JSON.parse(localStorage.getItem(STORAGE.orders)) || [];
    return orders.find(o => o.id === orderId);
}

function showErrorState() {
    document.getElementById('trackingContent').style.display = 'none';
    document.getElementById('errorState').classList.remove('hidden');
}

function renderTrackingPage(order) {
    // Order header
    document.getElementById('orderId').textContent = order.id;
    document.getElementById('orderDate').textContent = formatDate(order.createdAt);
    document.getElementById('estimatedDelivery').textContent = `Est. delivery ${estimatedDeliveryDate(order.createdAt)}`;
    
    // Current status badge
    const statusBadge = document.getElementById('currentStatus');
    const currentStatus = getOrderStatus(order.status);
    statusBadge.textContent = capitalizeWords(currentStatus);
    statusBadge.className = `status-badge ${currentStatus}`;

    // Timeline
    renderTimeline(currentStatus);

    // Shipment details (only if shipped or beyond)
    if (['shipped', 'delivered'].includes(currentStatus)) {
        showShipmentDetails(order);
    }

    // Order summary
    renderOrderSummary(order);
}

function renderTimeline(currentStatus) {
    const timeline = document.querySelectorAll('.timeline-item');
    const statuses = ['confirmed', 'preparing', 'packed', 'shipped', 'delivered'];
    const currentIndex = statuses.indexOf(currentStatus);

    timeline.forEach((item, idx) => {
        item.classList.remove('completed', 'current', 'pending');
        
        if (idx < currentIndex) {
            item.classList.add('completed');
        } else if (idx === currentIndex) {
            item.classList.add('current');
        } else {
            item.classList.add('pending');
        }

        // Set timestamp if completed/current
        const timeEl = item.querySelector('.timeline-time');
        if (idx <= currentIndex && timeEl.textContent === '—') {
            timeEl.textContent = formatDate(new Date());
        }
    });
}

function showShipmentDetails(order) {
    const section = document.getElementById('shipmentSection');
    section.classList.remove('hidden');

    // Simulate courier data (in real app, would come from order)
    const couriers = ['Express Courier', 'FastShip', 'National Logistics'];
    const randomCourier = couriers[Math.floor(Math.random() * couriers.length)];
    const trackingNumber = `TRK${order.id.substring(4, 14)}`;

    document.getElementById('courierName').textContent = randomCourier;
    document.getElementById('trackingNumber').textContent = trackingNumber;

    const courierLink = document.getElementById('courierLink');
    courierLink.href = courierData[randomCourier] || '#';
    courierLink.style.display = 'block';
}

function renderOrderSummary(order) {
    const itemsContainer = document.getElementById('summaryItems');
    const items = order.items || [];

    if (!items.length) {
        itemsContainer.innerHTML = '<p class="empty-state">No items in this order.</p>';
        document.getElementById('summaryTotal').textContent = order.total || '₹0';
        return;
    }

    itemsContainer.innerHTML = items.map(item => {
        const product = productsDatabase.find(p => p.id === item.id);
        if (!product) return '';

        return `
            <div class="summary-item">
                <div class="item-image">${product.image || '🎨'}</div>
                <div class="item-info">
                    <div class="item-name">${product.name}</div>
                    <div class="item-qty">Qty: ${item.quantity}</div>
                </div>
                <div class="item-total">₹${(product.price * item.quantity).toLocaleString('en-IN')}</div>
            </div>
        `;
    }).join('');

    document.getElementById('summaryTotal').textContent = order.total || '₹0';
}

function attachHandlers(order) {
    document.getElementById('contactSupportBtn').addEventListener('click', () => {
        alert(`We'll connect you about order ${order.id}. Support coming soon!`);
    });
}

// ==================== HELPERS ==================== //

function getOrderStatus(status) {
    if (!status) return 'confirmed';
    status = status.toLowerCase();
    if (status.includes('delivered')) return 'delivered';
    if (status.includes('shipped')) return 'shipped';
    if (status.includes('pack')) return 'packed';
    if (status.includes('prepar')) return 'preparing';
    return 'confirmed';
}

function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-IN', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

function estimatedDeliveryDate(timestamp) {
    const date = new Date(timestamp);
    date.setDate(date.getDate() + 5); // 5 days delivery estimate
    return date.toLocaleDateString('en-IN', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
