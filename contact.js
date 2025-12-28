// ==================== CONTACT / SUPPORT PAGE ==================== //

document.addEventListener('DOMContentLoaded', () => {
    setupContactForm();
    attachFooterSubscribe();
});

// ==================== CONTACT FORM HANDLING ==================== //
function setupContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleFormSubmit(form);
    });
}

function handleFormSubmit(form) {
    // Get form values
    const formData = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        subject: form.subject.value,
        message: form.message.value.trim()
    };

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
    }

    // Email validation
    if (!isValidEmail(formData.email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }

    // In a real application, this would send data to a server
    // For now, we'll simulate a successful submission
    simulateFormSubmission(formData, form);
}

function simulateFormSubmission(formData, form) {
    // Disable submit button
    const submitBtn = form.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Simulate network delay
    setTimeout(() => {
        // Store in localStorage for demonstration
        const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        messages.push({
            ...formData,
            timestamp: new Date().toISOString(),
            id: Date.now()
        });
        localStorage.setItem('contactMessages', JSON.stringify(messages));

        // Show success message
        showFormMessage('Thank you! Your message has been sent. We\'ll respond within 24 hours.', 'success');

        // Reset form
        form.reset();

        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;

        // Scroll to success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
}

function showFormMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.form-success, .form-error');
    existingMessages.forEach(msg => msg.remove());

    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'form-success show' : 'form-error show';
    messageDiv.textContent = message;

    // Insert before form
    const formContainer = document.querySelector('.form-container');
    formContainer.insertBefore(messageDiv, formContainer.firstChild);

    // Auto-hide after 5 seconds
    setTimeout(() => {
        messageDiv.classList.remove('show');
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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

// ==================== AUTO-FILL FROM URL PARAMS (OPTIONAL) ==================== //
// If user comes from Track Order or Account page with a specific issue
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const issue = params.get('issue');
    const orderId = params.get('orderId');

    if (issue) {
        const subjectDropdown = document.getElementById('subject');
        if (subjectDropdown) {
            // Map issue to subject value
            const issueMap = {
                'tracking': 'order-status',
                'return': 'returns',
                'authenticity': 'product-authenticity',
                'shipping': 'shipping'
            };
            
            if (issueMap[issue]) {
                subjectDropdown.value = issueMap[issue];
            }
        }
    }

    if (orderId) {
        const messageField = document.getElementById('message');
        if (messageField && !messageField.value) {
            messageField.value = `I have a question about order #${orderId}.\n\n`;
        }
    }
});
