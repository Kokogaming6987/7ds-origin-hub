// ==========================================
// 7DS ORIGIN HUB - JavaScript
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
  // Toggle sidebar
  const toggleBtn = document.getElementById('toggleSidebar');
  const sidebar = document.querySelector('.sidebar');
  const mainContent = document.querySelector('.main-content');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', function() {
      sidebar.classList.toggle('active');
    });
  }

  // Close sidebar when clicking outside on mobile
  if (mainContent) {
    mainContent.addEventListener('click', function() {
      if (window.innerWidth <= 992 && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Dynamic year in footer
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Character card tooltip interactions
  const charCards = document.querySelectorAll('.char-card');
  charCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.borderColor = 'var(--color-accent)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.borderColor = 'transparent';
    });
  });

  // Quick cards click animation
  const quickCards = document.querySelectorAll('.quick-card');
  quickCards.forEach(card => {
    card.addEventListener('click', function(e) {
      if (this.getAttribute('href') === '#') {
        e.preventDefault();
        // Animation only, no navigation for placeholder
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = '';
        }, 150);
      }
    });
  });

  // Search functionality
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase();
      // Search in navigation items
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        const text = link.textContent.toLowerCase();
        if (text.includes(query)) {
          link.style.opacity = '1';
          link.style.background = 'rgba(255,255,255,0.1)';
        } else {
          link.style.opacity = '0.3';
          link.style.background = '';
        }
      });
    });
  }

  // Stats counter animation
  const statElements = document.querySelectorAll('.stat-badge .num');
  statElements.forEach(el => {
    const target = parseInt(el.textContent);
    let current = 0;
    const increment = Math.ceil(target / 20);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = current;
      }
    }, 50);
  });

  console.log('7DS Origin Hub initialized');
});

// Page loader
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});
