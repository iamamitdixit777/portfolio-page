// Update current time
function updateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    
    document.getElementById('current-time').textContent = now.toLocaleDateString('en-US', options);
}

// Update time every second
setInterval(updateTime, 1000);
updateTime(); // Initial call

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('header nav');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('header nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Form validation
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const formSuccess = document.getElementById('form-success');
const sendAnother = document.getElementById('send-another');

// Clear error when user starts typing
nameInput.addEventListener('input', () => {
    nameError.textContent = '';
});

emailInput.addEventListener('input', () => {
    emailError.textContent = '';
});

messageInput.addEventListener('input', () => {
    messageError.textContent = '';
});

// Form submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    // Validate name
    if (!nameInput.value.trim()) {
        nameError.textContent = 'Name is required';
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    }
    
    // Validate message
    if (!messageInput.value.trim()) {
        messageError.textContent = 'Message is required';
        isValid = false;
    } else if (messageInput.value.trim().length < 10) {
        messageError.textContent = 'Message must be at least 10 characters';
        isValid = false;
    }
    
    if (isValid) {
        // In a real application, you would send the form data to a server here
        console.log('Form submitted:', {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        });
        
        // Show success message
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
        
        // Reset form
        contactForm.reset();
    }
});

// Send another message button
if (sendAnother) {
    sendAnother.addEventListener('click', () => {
        formSuccess.style.display = 'none';
        contactForm.style.display = 'block';
    });
}

// Add animations to elements when they come into view
document.addEventListener('DOMContentLoaded', function() {
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Elements to animate
    const sections = document.querySelectorAll('section');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Add initial animations
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('fade-in');
        }
    });
    
    projectCards.forEach(card => {
        if (isInViewport(card)) {
            card.classList.add('slide-up');
        }
    });
    
    // Add animations on scroll
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            if (isInViewport(section) && !section.classList.contains('fade-in')) {
                section.classList.add('fade-in');
            }
        });
        
        projectCards.forEach(card => {
            if (isInViewport(card) && !card.classList.contains('slide-up')) {
                card.classList.add('slide-up');
            }
        });
    });
});