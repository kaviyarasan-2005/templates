/**
 * animations.js
 * Scroll-reveal via IntersectionObserver,
 * animated counters, process timeline, accordions.
 */

(function () {
  'use strict';

  // ----------------------------------------------------------
  // 1. SCROLL REVEAL — IntersectionObserver
  // ----------------------------------------------------------
  function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // run once
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    elements.forEach(el => observer.observe(el));
  }

  // ----------------------------------------------------------
  // 2. COUNT-UP ANIMATION
  // ----------------------------------------------------------
  function animateCounter(el) {
    const target   = parseInt(el.getAttribute('data-target') || el.textContent, 10);
    const duration = parseInt(el.getAttribute('data-duration') || '2000', 10);
    const suffix   = el.getAttribute('data-suffix') || '';
    const prefix   = el.getAttribute('data-prefix') || '';
    const start    = Date.now();

    function update() {
      const elapsed  = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = prefix + current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  function initCounters() {
    const counters = document.querySelectorAll('.stat-counter');
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(el => observer.observe(el));
  }

  // ----------------------------------------------------------
  // 3. PROCESS TIMELINE LINE ANIMATION
  // ----------------------------------------------------------
  function initTimelineLine() {
    const fills = document.querySelectorAll('.process-line__fill');
    if (!fills.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    fills.forEach(el => observer.observe(el));
  }

  // ----------------------------------------------------------
  // 4. ACCORDION
  // ----------------------------------------------------------
  function initAccordions() {
    document.querySelectorAll('.accordion-trigger').forEach(trigger => {
      trigger.addEventListener('click', function () {
        const item    = this.closest('.accordion-item');
        const body    = item.querySelector('.accordion-body');
        const isOpen  = item.classList.contains('open');

        // Close siblings in same accordion group
        const accordion = item.closest('.accordion');
        if (accordion) {
          accordion.querySelectorAll('.accordion-item.open').forEach(sibling => {
            if (sibling !== item) {
              sibling.classList.remove('open');
              const sibBody = sibling.querySelector('.accordion-body');
              if (sibBody) sibBody.style.maxHeight = null;
            }
          });
        }

        if (isOpen) {
          item.classList.remove('open');
          body.style.maxHeight = null;
        } else {
          item.classList.add('open');
          // Set exact height for smooth animation
          body.style.maxHeight = body.scrollHeight + 'px';
          setTimeout(() => {
            if (item.classList.contains('open')) {
              body.style.maxHeight = body.scrollHeight + 'px';
            }
          }, 50);
        }
      });
    });
  }

  // ----------------------------------------------------------
  // 5. STICKY HEADER ON SCROLL
  // ----------------------------------------------------------
  function initStickyHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastScroll = 0;
    let ticking = false;

    function updateHeader() {
      const scrollY = window.scrollY;
      if (scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      lastScroll = scrollY;
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    }, { passive: true });

    updateHeader(); // run on load
  }

  // ----------------------------------------------------------
  // 6. MOBILE MENU & DROPBOXES
  // ----------------------------------------------------------
  function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const backdrop   = document.getElementById('menu-backdrop');
    const closeBtn   = document.getElementById('mobile-menu-close');

    function openMenu() {
      mobileMenu?.classList.add('open');
      hamburger?.classList.add('open');
      backdrop?.classList.add('visible');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      mobileMenu?.classList.remove('open');
      hamburger?.classList.remove('open');
      backdrop?.classList.remove('visible');
      document.body.style.overflow = '';
    }

    hamburger?.addEventListener('click', () => {
      mobileMenu?.classList.contains('open') ? closeMenu() : openMenu();
    });

    closeBtn?.addEventListener('click', closeMenu);
    backdrop?.addEventListener('click', closeMenu);

    // Close on ESC
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMenu();
    });

    // Mobile Dropboxes (Accordions)
    const mobileDropboxes = document.querySelectorAll('.mobile-dropbox');
    mobileDropboxes.forEach(db => {
      const trigger = db.querySelector('.mobile-dropbox__trigger');
      trigger?.addEventListener('click', () => {
        const isOpen = db.classList.contains('open');
        // Optional: close other dropboxes
        mobileDropboxes.forEach(other => {
          if (other !== db) other.classList.remove('open');
        });
        db.classList.toggle('open');
      });
    });
  }

  // ----------------------------------------------------------
  // 7. FORM VALIDATION (inline)
  // ----------------------------------------------------------
  function initForms() {
    document.querySelectorAll('form.validated-form').forEach(form => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        let valid = true;

        this.querySelectorAll('[required]').forEach(field => {
          if (!field.value.trim()) {
            field.classList.remove('success');
            field.classList.add('error', 'shake');
            valid = false;
            setTimeout(() => field.classList.remove('shake'), 600);
          } else {
            field.classList.remove('error');
            field.classList.add('success');
          }
        });

        // Email validation
        this.querySelectorAll('[type="email"]').forEach(field => {
          if (field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
            field.classList.remove('success');
            field.classList.add('error', 'shake');
            valid = false;
            setTimeout(() => field.classList.remove('shake'), 600);
          }
        });

        if (valid) {
          const msg = this.querySelector('.form-success-msg');
          if (msg) {
            msg.style.display = 'block';
            msg.style.animation = 'fadeIn 0.4s ease';
          }
          this.reset();
          this.querySelectorAll('.success').forEach(f => f.classList.remove('success'));
        }
      });
    });
  }

  // ----------------------------------------------------------
  // 8. TESTIMONIAL SLIDER
  // ----------------------------------------------------------
  function initTestimonialSlider() {
    document.querySelectorAll('.testimonial-slider').forEach(slider => {
      const track   = slider.querySelector('.testimonial-track');
      const dots    = slider.querySelectorAll('.slider-dot');
      const prevBtn = slider.querySelector('.slider-prev');
      const nextBtn = slider.querySelector('.slider-next');
      if (!track) return;

      let current = 0;
      const count = slider.querySelectorAll('.testimonial-slide').length;

      function goTo(index) {
        current = (index + count) % count;
        track.style.transform = `translateX(${-current * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
      }

      prevBtn?.addEventListener('click', () => goTo(current - 1));
      nextBtn?.addEventListener('click', () => goTo(current + 1));
      dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

      // Auto advance
      let autoplay = setInterval(() => goTo(current + 1), 5000);
      slider.addEventListener('mouseenter', () => clearInterval(autoplay));
      slider.addEventListener('mouseleave', () => {
        autoplay = setInterval(() => goTo(current + 1), 5000);
      });
    });
  }

  // ----------------------------------------------------------
  // 9. BILLING TOGGLE (Pricing Page)
  // ----------------------------------------------------------
  function initBillingToggle() {
    const toggle = document.getElementById('billing-toggle');
    if (!toggle) return;

    toggle.addEventListener('change', function () {
      const isYearly = this.checked;
      document.querySelectorAll('[data-monthly]').forEach(el => {
        el.textContent = isYearly
          ? el.getAttribute('data-yearly')
          : el.getAttribute('data-monthly');
      });
    });
  }

  // ----------------------------------------------------------
  // 10. SMOOTH SCROLL FOR ANCHOR LINKS
  // ----------------------------------------------------------
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ----------------------------------------------------------
  // 11. SEARCH BAR EXPAND
  // ----------------------------------------------------------
  function initSearchBars() {
    document.querySelectorAll('.search-bar').forEach(bar => {
      const input = bar.querySelector('input');
      const btn   = bar.querySelector('.search-btn');
      if (!input || !btn) return;

      btn.addEventListener('click', () => {
        if (!input.value.trim()) {
          input.focus();
          return;
        }
        // Simulate search feedback
      });
    });
  }

  // ----------------------------------------------------------
  // 12. DASHBOARD SIDEBAR TOGGLE (MOBILE)
  // ----------------------------------------------------------
  function initDashboardSidebar() {
    const sidebarToggle   = document.getElementById('sidebar-toggle');
    const sidebar         = document.querySelector('.dashboard-sidebar');
    const sidebarBackdrop = document.getElementById('sidebar-backdrop');

    if (!sidebarToggle || !sidebar) return;

    function openSidebar() {
      sidebar.classList.add('open');
      sidebarBackdrop?.classList.add('visible');
      document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
      sidebar.classList.remove('open');
      sidebarBackdrop?.classList.remove('visible');
      document.body.style.overflow = '';
    }

    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
    });

    sidebarBackdrop?.addEventListener('click', closeSidebar);
  }

  // ----------------------------------------------------------
  // 13. TABLE SORT
  // ----------------------------------------------------------
  function initTableSort() {
    document.querySelectorAll('.data-table').forEach(table => {
      table.querySelectorAll('th[data-sort]').forEach(th => {
        th.style.cursor = 'pointer';
        th.addEventListener('click', function () {
          const col = Array.from(th.parentElement.children).indexOf(th);
          const tbody = table.querySelector('tbody');
          const rows  = Array.from(tbody?.querySelectorAll('tr') || []);
          const asc   = this.classList.toggle('sort-asc');

          rows.sort((a, b) => {
            const aText = a.children[col]?.textContent.trim() || '';
            const bText = b.children[col]?.textContent.trim() || '';
            const aNum  = parseFloat(aText.replace(/[^0-9.]/g,''));
            const bNum  = parseFloat(bText.replace(/[^0-9.]/g,''));
            if (!isNaN(aNum) && !isNaN(bNum)) {
              return asc ? aNum - bNum : bNum - aNum;
            }
            return asc
              ? aText.localeCompare(bText)
              : bText.localeCompare(aText);
          });

          rows.forEach(row => tbody.appendChild(row));
        });
      });
    });
  }

  // ----------------------------------------------------------
  // 14. IMAGE LAZY LOADING FALLBACK
  // ----------------------------------------------------------
  function initLazyImages() {
    if ('loading' in HTMLImageElement.prototype) return;

    const images = document.querySelectorAll('img[loading="lazy"]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src') || img.src;
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => observer.observe(img));
  }

  // ----------------------------------------------------------
  // INIT ALL
  // ----------------------------------------------------------
  function init() {
    initScrollReveal();
    initCounters();
    initTimelineLine();
    initAccordions();
    initStickyHeader();
    initMobileMenu();
    initForms();
    initTestimonialSlider();
    initBillingToggle();
    initSmoothScroll();
    initSearchBars();
    initDashboardSidebar();
    initTableSort();
    initLazyImages();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
