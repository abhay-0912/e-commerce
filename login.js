// ==================== LOGIN / SIGN UP (PROGRESSIVE) ==================== //

const STORAGE_KEYS = {
    users: 'sanskritiUsers',
    currentUser: 'sanskritiCurrentUser'
};

const redirectTarget = new URLSearchParams(window.location.search).get('redirect') || 'checkout.html';

let currentIdentifier = '';
let currentUserExists = false;

document.addEventListener('DOMContentLoaded', () => {
    const existingUser = getCurrentUser();
    if (existingUser) {
        showMessage(document.getElementById('message1'), `Signed in as ${existingUser.name || existingUser.identifier}. Taking you to checkout.`, 'success');
        setTimeout(redirectToCheckout, 500);
        return;
    }

    attachEventHandlers();
});

function attachEventHandlers() {
    document.getElementById('continueBtn').addEventListener('click', handleContinueEmail);
    document.getElementById('submitBtn').addEventListener('click', handleSubmitPassword);
    document.getElementById('createBtn').addEventListener('click', handleCreateAccount);
    document.getElementById('backBtn').addEventListener('click', backToEmail);
    document.getElementById('backBtn3').addEventListener('click', backToEmail);
    document.getElementById('googleButton').addEventListener('click', handleGoogle);
    document.getElementById('forgotPasswordLink').addEventListener('click', handleForgotPassword);

    // Allow Enter to continue on step 1
    document.getElementById('identifier').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleContinueEmail();
    });

    // Allow Enter to submit on password/create steps
    document.getElementById('password').addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !document.getElementById('step2').classList.contains('hidden')) {
            handleSubmitPassword();
        }
    });

    document.getElementById('name').addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !document.getElementById('step3').classList.contains('hidden')) {
            handleCreateAccount();
        }
    });
}

function handleContinueEmail() {
    const identifier = document.getElementById('identifier').value.trim();
    const messageEl = document.getElementById('message1');

    if (!identifier) {
        return showMessage(messageEl, 'Please enter your email or phone to continue.', 'error');
    }

    currentIdentifier = identifier;
    const users = getUsers();
    const user = users.find(u => normalize(u.identifier) === normalize(identifier));
    currentUserExists = !!user;

    if (currentUserExists) {
        // Existing user: show password field
        showStep(2);
        document.getElementById('stepContext').textContent = `Welcome back. Enter your password to continue.`;
        document.getElementById('passwordLabel').textContent = 'Password';
        document.getElementById('forgotContainer').style.display = 'flex';
        document.getElementById('submitBtn').textContent = 'Continue';
        document.getElementById('password').value = '';
        document.getElementById('password').focus();
        document.getElementById('googleContainer').classList.add('hidden');
    } else {
        // New user: ask for name first, then password
        showStep(3);
        document.getElementById('stepContext').textContent = 'Complete your account to track your order.';
        document.getElementById('name').value = '';
        document.getElementById('name').focus();
        document.getElementById('googleContainer').classList.add('hidden');
    }
}

function handleSubmitPassword() {
    const password = document.getElementById('password').value.trim();
    const messageEl = document.getElementById('message2');

    if (!password) {
        return showMessage(messageEl, 'Please enter your password.', 'error');
    }

    const users = getUsers();
    const user = users.find(u => normalize(u.identifier) === normalize(currentIdentifier));

    if (!user) {
        return showMessage(messageEl, 'Account not found. Please try again.', 'error');
    }

    if (user.password !== password) {
        return showMessage(messageEl, 'Incorrect password. Please try again.', 'error');
    }

    setCurrentUser(user);
    showMessage(messageEl, 'Welcome back! Taking you to checkout...', 'success');
    setTimeout(redirectToCheckout, 500);
}

function handleCreateAccount() {
    const name = document.getElementById('name').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageEl = document.getElementById('message3');

    if (!name) {
        return showMessage(messageEl, 'Please enter your name.', 'error');
    }

    // Move to password step for new user
    if (!password) {
        showStep(2);
        document.getElementById('stepContext').textContent = 'Create a password to track your order.';
        document.getElementById('passwordLabel').textContent = 'Create password';
        document.getElementById('forgotContainer').style.display = 'none';
        document.getElementById('submitBtn').textContent = 'Create account & continue';
        document.getElementById('password').placeholder = 'At least 6 characters';
        document.getElementById('password').value = '';
        document.getElementById('password').focus();
        return;
    }

    if (password.length < 6) {
        return showMessage(messageEl, 'Password should be at least 6 characters.', 'error');
    }

    const users = getUsers();
    const exists = users.some(u => normalize(u.identifier) === normalize(currentIdentifier));

    if (exists) {
        return showMessage(messageEl, 'This email/phone is already in use. Please log in instead.', 'error');
    }

    const newUser = {
        name,
        identifier: currentIdentifier,
        password,
        createdAt: Date.now()
    };

    users.push(newUser);
    setUsers(users);
    setCurrentUser(newUser);
    showMessage(messageEl, 'Account created! Taking you to checkout...', 'success');
    setTimeout(redirectToCheckout, 500);
}

function backToEmail() {
    showStep(1);
    document.getElementById('identifier').focus();
    document.getElementById('googleContainer').classList.remove('hidden');
}

function handleGoogle() {
    const user = {
        name: 'Google shopper',
        identifier: `google-${Date.now()}`,
        method: 'google',
        createdAt: Date.now()
    };
    setCurrentUser(user);
    showMessage(document.getElementById('message1'), 'Signed in with Google. Taking you to checkout...', 'success');
    setTimeout(redirectToCheckout, 400);
}

function handleForgotPassword(event) {
    event.preventDefault();
    const messageEl = document.getElementById('message2');
    showMessage(messageEl, 'Password reset is coming soon. For now, try another email or contact support.', 'error');
}

function showStep(stepNum) {
    document.getElementById('step1').classList.toggle('hidden', stepNum !== 1);
    document.getElementById('step2').classList.toggle('hidden', stepNum !== 2);
    document.getElementById('step3').classList.toggle('hidden', stepNum !== 3);
}

function redirectToCheckout() {
    window.location.href = redirectTarget;
}

function getUsers() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.users)) || [];
}

function setUsers(users) {
    localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.currentUser));
}

function setCurrentUser(user) {
    localStorage.setItem(STORAGE_KEYS.currentUser, JSON.stringify(user));
}

function showMessage(element, text, type) {
    if (!element) return;
    element.textContent = text;
    element.classList.remove('success', 'error');
    if (type) {
        element.classList.add(type);
    }
}

function normalize(value) {
    return (value || '').toString().trim().toLowerCase();
}
