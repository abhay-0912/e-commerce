// ==================== GLOBAL AUTH UTIL ==================== //

const AUTH_STORAGE = {
  currentUser: 'sanskritiCurrentUser'
};

document.addEventListener('DOMContentLoaded', () => {
  const accountLink = document.querySelector('a.nav-icon[title="Account"]');
  const isLoggedIn = Boolean(localStorage.getItem(AUTH_STORAGE.currentUser));

  if (!accountLink) return;

  if (isLoggedIn) {
    // Turn the Account icon into Sign out action
    accountLink.setAttribute('title', 'Sign out');
    accountLink.setAttribute('href', '#');
    accountLink.addEventListener('click', (e) => {
      e.preventDefault();
      signOut();
    });
  } else {
    // Keep pointing to login with redirect to checkout
    accountLink.setAttribute('title', 'Account');
    accountLink.setAttribute('href', 'login.html?redirect=checkout.html');
  }
});

function signOut() {
  try {
    localStorage.removeItem(AUTH_STORAGE.currentUser);
  } catch {}

  // Decide sensible redirect: if on checkout, go back to login for checkout; else go home
  const path = (window.location.pathname || '').toLowerCase();
  if (path.includes('checkout.html')) {
    window.location.href = 'login.html?redirect=checkout.html';
  } else {
    window.location.href = 'index.html';
  }
}

// Expose for other scripts if needed
window.sanskritiAuth = { signOut };
