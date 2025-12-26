/**
 * Studio Las - Main JavaScript
 * Mobile Navigation, Animations, Form Handling
 */

// ========================================
// MOBILE NAVIGATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('navMobile');
  const navLinks = navMobile.querySelectorAll('a');

  // Toggle mobile menu
  hamburger.addEventListener('click', function() {
    navMobile.classList.toggle('active');
  });

  // Close menu when link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMobile.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('header')) {
      navMobile.classList.remove('active');
    }
  });
});

// ========================================
// SCROLL ANIMATIONS
// ========================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-on-scroll');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .service-card, .blog-card').forEach(el => {
  observer.observe(el);
});

// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========================================
// STATS COUNTER ANIMATION
// ========================================

function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + '+';
    }
  }, 16);
}

// Trigger counters when section comes into view
const statsObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll('.stat-number');
      statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        if (!stat.classList.contains('animated')) {
          animateCounter(stat, target);
          stat.classList.add('animated');
        }
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

const aboutSection = document.querySelector('.about');
if (aboutSection) {
  statsObserver.observe(aboutSection);
}

// ========================================
// FORM HANDLING (for future contact form)
// ========================================

function handleFormSubmit(e) {
  e.preventDefault();
  // Handle form submission here
  console.log('Form submitted');
}

const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', handleFormSubmit);
});

// ========================================
// LAZY LOADING IMAGES
// ========================================

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

console.log('Studio Las - Ready!');
