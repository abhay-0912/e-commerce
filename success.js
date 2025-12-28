// ==================== ORDER SUCCESS ==================== //

document.addEventListener('DOMContentLoaded', () => {
  const order = JSON.parse(localStorage.getItem('sanskritiLastOrder'));
  const container = document.getElementById('orderDetails');
  if (!order) {
    container.innerHTML = '<p>No recent order found. If you just placed one, it will appear here.</p>';
    document.getElementById('trackOrderLink').style.display = 'none';
    return;
  }

  const items = order.items || [];
  const itemLines = items.map(i => {
    return `<div class="line"><span>${i.quantity} × ${getName(i.id)}</span><strong>₹${getPrice(i.id, i.quantity)}</strong></div>`;
  }).join('');

  container.innerHTML = `
    <div class="order-row"><span>Order ID</span><strong>${order.id}</strong></div>
    <div class="order-row"><span>Recipient</span><strong>${order.user?.name || 'You'}</strong></div>
    <div class="order-row"><span>Subtotal</span><strong>${order.subtotal}</strong></div>
    <div class="order-row"><span>Shipping</span><strong>${order.shippingFee}</strong></div>
    <div class="order-row"><span>Taxes</span><strong>${order.taxes}</strong></div>
    <div class="order-row total"><span>Total</span><strong>${order.total}</strong></div>
    <div class="item-list">${itemLines}</div>
  `;

  // Wire track order button
  document.getElementById('trackOrderLink').href = `track-order.html?orderId=${order.id}`;
});

function getName(id) {
  try {
    const db = window.productsDatabase || [];
    const p = db.find(x => x.id === id);
    return p?.name || 'Craft item';
  } catch {
    return 'Craft item';
  }
}

function getPrice(id, qty) {
  try {
    const db = window.productsDatabase || [];
    const p = db.find(x => x.id === id);
    const price = (p?.price || 0) * qty;
    return price.toLocaleString('en-IN');
  } catch {
    return '0';
  }
}
