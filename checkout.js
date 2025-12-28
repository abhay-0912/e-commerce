// ==================== CHECKOUT ==================== //

const STORAGE = {
  users: 'sanskritiUsers',
  currentUser: 'sanskritiCurrentUser',
  cart: 'cart',
  orders: 'sanskritiOrders',
  lastOrder: 'sanskritiLastOrder'
};

document.addEventListener('DOMContentLoaded', () => {
  // Require auth
  const currentUser = getCurrentUser();
  if (!currentUser) {
    window.location.href = 'login.html?redirect=checkout.html';
    return;
  }

  // Render summary and wire actions
  const cart = getCart();
  renderSummary(cart);
  document.getElementById('placeOrderBtn').addEventListener('click', () => placeOrder(currentUser, cart));
});

function getCart() {
  return JSON.parse(localStorage.getItem(STORAGE.cart)) || [];
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem(STORAGE.currentUser));
}

function saveOrders(orders) {
  localStorage.setItem(STORAGE.orders, JSON.stringify(orders));
}

function getOrders() {
  return JSON.parse(localStorage.getItem(STORAGE.orders)) || [];
}

function renderSummary(cart) {
  const itemsEl = document.getElementById('summaryItems');
  if (!cart.length) {
    itemsEl.innerHTML = '<p>Your cart is empty. <a class="link-plain" href="shop.html">Add a handcrafted piece</a>.</p>';
    updateTotals([]);
    return;
  }

  itemsEl.innerHTML = cart.map(item => {
    const product = productsDatabase.find(p => p.id === item.id) || item;
    const craft = getCraftName(product.category);
    const region = getRegionName(product.region);
    const bg = getBackgroundForCategory(product.category);
    return `
      <div class="summary-item">
        <div class="media" style="background:${bg}">${product.image || '🧵'}</div>
        <div>
          <div class="name">${product.name}</div>
          <div class="meta">${craft} • ${region} • Qty ${item.quantity}</div>
        </div>
        <div class="price">₹${(product.price * item.quantity).toLocaleString('en-IN')}</div>
      </div>
    `;
  }).join('');

  updateTotals(cart);
}

function updateTotals(cart) {
  const subtotal = cart.reduce((sum, item) => {
    const product = productsDatabase.find(p => p.id === item.id) || item;
    return sum + product.price * item.quantity;
  }, 0);
  const shipping = subtotal > 0 ? 199 : 0;
  const taxes = 0;
  const total = subtotal + shipping + taxes;
  setText('summarySubtotal', `₹${subtotal.toLocaleString('en-IN')}`);
  setText('summaryShipping', `₹${shipping.toLocaleString('en-IN')}`);
  setText('summaryTaxes', `₹${taxes.toLocaleString('en-IN')}`);
  setText('summaryTotal', `₹${total.toLocaleString('en-IN')}`);
}

function placeOrder(user, cart) {
  const msgEl = document.getElementById('checkoutMessage');
  if (!cart.length) {
    return showMessage(msgEl, 'Your cart is empty.', 'error');
  }

  // Validate minimal shipping
  const form = document.getElementById('shippingForm');
  const fields = ['name', 'phone', 'address', 'city', 'state', 'pincode'];
  for (const f of fields) {
    if (!form[f].value.trim()) {
      form[f].focus();
      return showMessage(msgEl, 'Please complete your shipping details.', 'error');
    }
  }

  // Validate phone (10 digits)
  const phone = form.phone.value.trim().replace(/\D/g, '');
  if (phone.length !== 10 || !phone.match(/^\d{10}$/)) {
    form.phone.focus();
    return showMessage(msgEl, 'Please enter a valid 10-digit phone number.', 'error');
  }

  // Validate PIN (6 digits in India)
  const pincode = form.pincode.value.trim().replace(/\D/g, '');
  if (pincode.length !== 6 || !pincode.match(/^\d{6}$/)) {
    form.pincode.focus();
    return showMessage(msgEl, 'Please enter a valid 6-digit PIN code.', 'error');
  }

  // Check terms acceptance
  const agreeTerms = document.getElementById('agreeTerms');
  if (!agreeTerms.checked) {
    return showMessage(msgEl, 'Please agree to the Terms & Conditions and Privacy Policy.', 'error');
  }

  // Payment method
  const payment = document.querySelector('input[name="payment"]:checked')?.value || 'cod';

  const order = {
    id: `ORD-${Date.now()}`,
    user: { name: form.name.value.trim(), identifier: user.identifier },
    shipping: {
      phone: form.phone.value.trim(),
      address: form.address.value.trim(),
      city: form.city.value.trim(),
      state: form.state.value.trim(),
      pincode: form.pincode.value.trim()
    },
    payment,
    items: cart,
    total: document.getElementById('summaryTotal').textContent,
    subtotal: document.getElementById('summarySubtotal').textContent,
    shippingFee: document.getElementById('summaryShipping').textContent,
    taxes: document.getElementById('summaryTaxes').textContent,
    createdAt: Date.now(),
    status: 'placed'
  };

  const orders = getOrders();
  orders.push(order);
  saveOrders(orders);
  localStorage.setItem(STORAGE.lastOrder, JSON.stringify(order));

  // Clear cart after successful placement
  localStorage.setItem(STORAGE.cart, JSON.stringify([]));

  window.location.href = 'order-success.html';
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function showMessage(element, text, type) {
  if (!element) return;
  element.textContent = text;
  element.classList.remove('success', 'error');
  if (type) element.classList.add(type);
}

// Helpers reused from cart
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
