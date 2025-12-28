// ==================== HERITAGE PAGE ==================== //

document.addEventListener('DOMContentLoaded', () => {
    attachNavbarEventListeners();
    attachFooterSubscribe();
});

// ==================== NAVBAR INTERACTIONS ==================== //
function attachNavbarEventListeners() {
    const ctaButtons = document.querySelectorAll('.closing-cta-buttons a');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Smooth transition to shop or artisans page
            // No additional interactivity needed—links handle navigation
        });
    });
}

// ==================== FOOTER SUBSCRIBE ==================== //
function attachFooterSubscribe() {
    const subscribeBtn = document.querySelector('.footer-subscribe');
    const emailInput = document.querySelector('.footer-email');

    if (subscribeBtn && emailInput) {
        subscribeBtn.addEventListener('click', () => {
            const email = emailInput.value.trim();
            if (email && email.includes('@')) {
                alert('Thank you for subscribing! 🙏');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });

        emailInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                subscribeBtn.click();
            }
        });
    }
}
