// ==================== GLOBAL AUTH UTIL ==================== //

const AUTH_STORAGE = {
  currentUser: 'sanskritiCurrentUser'
};

document.addEventListener('DOMContentLoaded', () => {
  const accountLink = document.querySelector('a.nav-icon[title="Account"]');
  const isLoggedIn = Boolean(localStorage.getItem(AUTH_STORAGE.currentUser));

  if (!accountLink) return;

  if (isLoggedIn) {
    // When signed in: clicking Account goes to account.html; can also sign out via Account page
    accountLink.setAttribute('title', 'Account');
    accountLink.setAttribute('href', 'account.html');
  } else {
    // When signed out: clicking Account goes to login with redirect to checkout
    accountLink.setAttribute('title', 'Account');
    accountLink.setAttribute('href', 'login.html?redirect=checkout.html');
  }
});

function signOut() {
  try {
    localStorage.removeItem(AUTH_STORAGE.currentUser);
  } catch {}

  // Redirect to home after sign out
  window.location.href = 'index.html';
}

// Expose for other scripts if needed
window.sanskritiAuth = { signOut };
