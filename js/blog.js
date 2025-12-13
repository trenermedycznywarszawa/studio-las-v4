/* ============================================
   STUDIO LAS - BLOG JAVASCRIPT
   Functionality for blog page
   ============================================ */

(function() {
  'use strict';

  /* ============================================
     BLOG CATEGORY FILTER
     ============================================ */

  const filterButtons = document.querySelectorAll('.filter-btn');
  const blogCards = document.querySelectorAll('.blog-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('data-category');

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Filter cards
      blogCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (category === 'all' || cardCategory === category) {
          card.classList.remove('hidden');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.classList.add('hidden');
          }, 300);
        }
      });
    });
  });

  /* ============================================
     NEWSLETTER FORM
     ============================================ */

  const newsletterForm = document.getElementById('newsletterForm');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value;

      // Basic validation
      if (!email || !email.includes('@')) {
        alert('Proszę podać poprawny adres email.');
        return;
      }

      // Here you would normally send data to your backend
      console.log('Newsletter signup:', email);

      // Show success message
      alert('Dziękujemy! Sprawdź swoją skrzynkę mailową.');
      emailInput.value = '';
    });
  }

  /* ============================================
     PAGINATION
     ============================================ */

  const paginationButtons = document.querySelectorAll('.pagination-number');

  paginationButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active state
      paginationButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Scroll to top of articles
      const articlesSection = document.querySelector('.blog-articles');
      if (articlesSection) {
        window.scrollTo({
          top: articlesSection.offsetTop - 150,
          behavior: 'smooth'
        });
      }

      // Here you would normally load new articles via AJAX
      console.log('Load page:', this.textContent);
    });
  });

  /* ============================================
     SOCIAL SHARE BUTTONS (for article pages)
     ============================================ */

  const shareButtons = document.querySelectorAll('.share-btn');

  shareButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();

      const platform = this.getAttribute('data-platform');
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(document.title);

      let shareUrl = '';

      switch(platform) {
        case 'facebook':
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
          break;
        case 'twitter':
          shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
          break;
        case 'linkedin':
          shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
          break;
        case 'email':
          shareUrl = `mailto:?subject=${title}&body=${url}`;
          break;
      }

      if (shareUrl && platform !== 'email') {
        window.open(shareUrl, '_blank', 'width=600,height=400');
      } else if (platform === 'email') {
        window.location.href = shareUrl;
      }
    });
  });

  /* ============================================
     READING PROGRESS BAR (for article pages)
     ============================================ */

  function updateReadingProgress() {
    const article = document.querySelector('.article-content');
    if (!article) return;

    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const articleTop = article.offsetTop;
    const articleHeight = article.offsetHeight;

    const progress = Math.min(
      100,
      Math.max(0, ((scrollTop - articleTop + windowHeight) / articleHeight) * 100)
    );

    const progressBar = document.querySelector('.reading-progress-bar');
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }
  }

  window.addEventListener('scroll', updateReadingProgress, { passive: true });

  // FADE-IN FIX FOR LAZY-LOADED IMAGES (naprawa niewidocznych zdjęć na blogu)
  document.querySelectorAll('img[loading="lazy"]').forEach(function(img) {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', function() {
        img.classList.add('loaded');
      });
    }
  });

  console.log('✅ Blog JS - Initialized');

})();
