// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fa-solid fa-sun';
    } else {
        icon.className = 'fa-solid fa-moon';
    }
}

// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isExpanded = navLinks.classList.contains('active');
    menuBtn.setAttribute('aria-expanded', isExpanded);
    const icon = menuBtn.querySelector('i');
    if (isExpanded) {
        icon.className = 'fa-solid fa-xmark';
    } else {
        icon.className = 'fa-solid fa-bars';
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.querySelector('i').className = 'fa-solid fa-bars';
    });
});

// Dynamic Copyright Year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Countdown Timer for January 2027 Batch
const batchStartDate = new Date('January 1, 2027 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = batchStartDate - now;

    if (distance < 0) {
        document.getElementById('daysCount').textContent = '00';
        document.getElementById('hoursCount').textContent = '00';
        document.getElementById('minsCount').textContent = '00';
        document.getElementById('secsCount').textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('daysCount').textContent = String(days).padStart(2, '0');
    document.getElementById('hoursCount').textContent = String(hours).padStart(2, '0');
    document.getElementById('minsCount').textContent = String(minutes).padStart(2, '0');
    document.getElementById('secsCount').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();