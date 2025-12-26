/* ============================================
   STUDIO LAS - MAIN JAVASCRIPT
   All interactive functionality for the website
   Author: Damian Krawiec
   Version: 1.0
   ============================================ */

(function() {
  'use strict';

  /* ============================================
     CONFIGURATION
     ============================================ */
  
  const CONFIG = {
    scrollOffset: 80,
    animationDelay: 100,
    counterSpeed: 2000,
    testimonialAutoplayDelay: 5000
  };

  /* ============================================
     DOM ELEMENTS
     ============================================ */
  
  const elements = {
    navbar: document.getElementById('navbar'),
    hamburger: document.getElementById('hamburger'),
    navMenu: document.getElementById('navMenu'),
    navLinks: document.querySelectorAll('.nav-link'),
    backToTop: document.getElementById('backToTop'),
    statNumbers: document.querySelectorAll('.stat-number'),
    faqItems: document.querySelectorAll('.faq-item'),
    testimonialsTrack: document.getElementById('testimonialsTrack'),
    testimonialPrev: document.getElementById('testimonialPrev'),
    testimonialNext: document.getElementById('testimonialNext'),
    testimonialDots: document.getElementById('testimonialDots'),
    galleryThumbs: document.querySelectorAll('.gallery-thumb'),
    galleryMainImage: document.getElementById('galleryMainImage')
  };

  /* ============================================
     UTILITY FUNCTIONS
     ============================================ */
  
  // Debounce function for performance
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  /* ============================================
     NAVIGATION
     ============================================ */
  
  // Sticky Navigation on Scroll
  function handleNavbarScroll() {
    if (window.scrollY > 100) {
      elements.navbar.classList.add('scrolled');
    } else {
      elements.navbar.classList.remove('scrolled');
    }
  }

  // Mobile Menu Toggle
  if (elements.hamburger && elements.navMenu) {
    elements.hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      elements.navMenu.classList.toggle('mobile-active');
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = this.classList.contains('active') ? 'hidden' : '';
    });
  }

  // Smooth Scroll to Sections
  elements.navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - CONFIG.scrollOffset;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (elements.hamburger.classList.contains('active')) {
          elements.hamburger.classList.remove('active');
          elements.navMenu.classList.remove('mobile-active');
          document.body.style.overflow = '';
        }
      }
    });
  });

  /* ============================================
     BACK TO TOP BUTTON
     ============================================ */
  
  function handleBackToTop() {
    if (window.scrollY > 500) {
      elements.backToTop.classList.add('show');
    } else {
      elements.backToTop.classList.remove('show');
    }
  }

  if (elements.backToTop) {
    elements.backToTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ============================================
     ANIMATED COUNTERS (HERO STATS)
     ============================================ */
  
  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = CONFIG.counterSpeed;
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };
    
    updateCounter();
  }

  // Initialize counters when hero section is in viewport
let countersAnimated = false;

function initCounters() {
  if (countersAnimated) return;
  
  const heroSection = document.querySelector('.hero');
  // ZMIENIONE: usuń warunek isInViewport - animuj zawsze
  if (heroSection) {
    elements.statNumbers.forEach(animateCounter);
    countersAnimated = true;
    }
  }

  /* ============================================
     FAQ ACCORDION
     ============================================ */
  
  elements.faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    if (question) {
      question.addEventListener('click', function() {
        // Close other items
        elements.faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
        
        // Toggle current item
        item.classList.toggle('active');
      });
    }
  });

  /* ============================================
     TESTIMONIALS SLIDER
     ============================================ */

  /* ZAKOMENTOWANE - NIE UŻYWAMY JUŻ SLIDERA
  let currentTestimonial = 0;
  let testimonialAutoplay;

  function initTestimonialSlider() {
    if (!elements.testimonialsTrack) return;
    
    const cards = elements.testimonialsTrack.querySelectorAll('.testimonial-card');
    const totalCards = cards.length;
    
    // Create dots
    if (elements.testimonialDots) {
      for (let i = 0; i < totalCards; i++) {
        const dot = document.createElement('button');
        dot.classList.add('slider-dot');
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('data-index', i);
        dot.addEventListener('click', () => goToTestimonial(i));
        elements.testimonialDots.appendChild(dot);
      }
    }
    
    // Update slider position
    function updateSlider() {
      const cardWidth = cards[0].offsetWidth;
      const gap = 32; // var(--spacing-4)
      const offset = currentTestimonial * (cardWidth + gap);
      
      elements.testimonialsTrack.style.transform = `translateX(-${offset}px)`;
      
      // Update dots
      const dots = elements.testimonialDots.querySelectorAll('.slider-dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonial);
      });
    }
    
    function goToTestimonial(index) {
      currentTestimonial = index;
      updateSlider();
      resetAutoplay();
    }
    
    function nextTestimonial() {
      currentTestimonial = (currentTestimonial + 1) % totalCards;
      updateSlider();
    }
    
    function prevTestimonial() {
      currentTestimonial = (currentTestimonial - 1 + totalCards) % totalCards;
      updateSlider();
    }
    
    function resetAutoplay() {
      clearInterval(testimonialAutoplay);
      testimonialAutoplay = setInterval(nextTestimonial, CONFIG.testimonialAutoplayDelay);
    }
    
    // Event listeners
    if (elements.testimonialNext) {
      elements.testimonialNext.addEventListener('click', () => {
        nextTestimonial();
        resetAutoplay();
      });
    }
    
    if (elements.testimonialPrev) {
      elements.testimonialPrev.addEventListener('click', () => {
        prevTestimonial();
        resetAutoplay();
      });
    }
    
    // Start autoplay
    testimonialAutoplay = setInterval(nextTestimonial, CONFIG.testimonialAutoplayDelay);
    
    // Pause autoplay on hover
    elements.testimonialsTrack.addEventListener('mouseenter', () => {
      clearInterval(testimonialAutoplay);
    });
    
    elements.testimonialsTrack.addEventListener('mouseleave', () => {
      resetAutoplay();
    });
  }
*/ // KONIEC ZAKOMENTOWANEGO KODU

  /* ============================================
     GALLERY
     ============================================ */
  
  elements.galleryThumbs.forEach(thumb => {
    thumb.addEventListener('click', function() {
      const imageSrc = this.getAttribute('data-image');
      
      if (elements.galleryMainImage && imageSrc) {
        elements.galleryMainImage.src = imageSrc;
        
        // Update active state
        elements.galleryThumbs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });
  /* ============================================
     SCROLL ANIMATIONS
     ============================================ */
  
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe all elements with animation classes
  function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    '.service-card, .pricing-card, .testimonial-card, .blog-card, .process-step, .faq-item'
  );
  
  animatedElements.forEach((element, index) => {
    // ZMIENIONE: dodaj klasę 'visible' od razu dla elementów w viewport
    element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    
    // Sprawdź czy element jest już widoczny
    if (isInViewport(element)) {
      element.classList.add('visible');
    } else {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
    }
    
    observer.observe(element);
    });
  }

  /* ============================================
     LAZY LOADING IMAGES
     ============================================ */
  
  function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach(img => {
    // Jeśli obrazek się już załadował (np. z cache), przypisz klasę natychmiast
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', function() {
        this.classList.add('loaded');
      });
    }
        });
      });
      // Fallback for browsers that don't support lazy loading
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });
      
      lazyImages.forEach(img => imageObserver.observe(img));

  /* ============================================
     SMOOTH SCROLL BEHAVIOR
     ============================================ */
  
  // Handle all anchor links with smooth scroll
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        // Skip if it's just '#'
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          const offsetTop = targetElement.offsetTop - CONFIG.scrollOffset;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /* ============================================
     ACTIVE NAVIGATION LINK
     ============================================ */
  
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + CONFIG.scrollOffset + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        elements.navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  /* ============================================
     PERFORMANCE OPTIMIZATION
     ============================================ */
  
  // Debounced scroll handler
  const handleScroll = debounce(() => {
    handleNavbarScroll();
    handleBackToTop();
    initCounters();
    updateActiveNavLink();
  }, 10);

  /* ============================================
     EVENT LISTENERS
     ============================================ */
  
  // Scroll events
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Resize events
  window.addEventListener('resize', debounce(() => {
    // Recalculate testimonial slider positions if needed
    if (elements.testimonialsTrack) {
      const cards = elements.testimonialsTrack.querySelectorAll('.testimonial-card');
      if (cards.length > 0) {
        const cardWidth = cards[0].offsetWidth;
        const gap = 32;
        const offset = currentTestimonial * (cardWidth + gap);
        elements.testimonialsTrack.style.transform = `translateX(-${offset}px)`;
      }
    }
  }, 250));

  // Load events
  window.addEventListener('load', () => {
    // Initialize counters immediately if hero is visible
    initCounters();
    
    // Mark all images as loaded
    document.querySelectorAll('img').forEach(img => {
      if (img.complete) {
        img.classList.add('loaded');
      }
    });
  });

  /* ============================================
     FORM VALIDATION (Optional - if you add contact form later)
     ============================================ */
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePhone(phone) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/;
    return re.test(phone);
  }

  // Example form validation (add form element if needed)
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = this.querySelector('input[type="email"]');
      const phone = this.querySelector('input[type="tel"]');
      
      let isValid = true;
      
      if (email && !validateEmail(email.value)) {
        email.classList.add('error');
        isValid = false;
      }
      
      if (phone && !validatePhone(phone.value)) {
        phone.classList.add('error');
        isValid = false;
      }
      
      if (isValid) {
        // Submit form
        console.log('Form is valid, submitting...');
        // Add your form submission logic here
      }
    });
  }

  /* ============================================
     CONSOLE MESSAGE
     ============================================ */
  
  console.log('%c🌲 Studio Las - Website loaded successfully! 🌲', 
    'color: #1a4d2e; font-size: 16px; font-weight: bold; padding: 10px;');
  console.log('%cDeveloped by Damian Krawiec', 
    'color: #b8965f; font-size: 12px;');

  /* ============================================
     INITIALIZATION
     ============================================ */
  
  function init() {
  // Initialize all functionality
  handleNavbarScroll();
  // initTestimonialSlider(); // WYŁĄCZONE - statyczne karty
  initScrollAnimations();
  initLazyLoading();
  initSmoothScroll();
  console.log('✅ Studio Las - All systems initialized');
  } else {
    init();
  }

  /* ============================================
     EXPOSE PUBLIC API (if needed)
     ============================================ */
  
  window.StudioLas = {
    version: '1.0',
    scrollToSection: (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const offsetTop = section.offsetTop - CONFIG.scrollOffset;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

})();

/* ============================================
   END OF MAIN.JS
   ============================================ */
