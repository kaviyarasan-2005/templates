// main.js - Core functionality for Theme, RTL, and Navigation

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initRtlToggle();
  initMobileMenu();
  initAccordion();
});

function initThemeToggle() {
  const themeToggles = document.querySelectorAll('.theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Check local storage or default to system preference
  const currentTheme = localStorage.getItem('theme') || 
                      (prefersDarkScheme.matches ? 'dark' : 'light');

  if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark-theme');
  }

  // Update icons based on current theme
  updateThemeIcons(currentTheme);

  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      document.documentElement.classList.toggle('dark-theme');
      
      let theme = 'light';
      if (document.documentElement.classList.contains('dark-theme')) {
        theme = 'dark';
      }
      
      localStorage.setItem('theme', theme);
      updateThemeIcons(theme);
    });
  });
}

function updateThemeIcons(theme) {
  const themeIcons = document.querySelectorAll('.theme-toggle i');
  themeIcons.forEach(icon => {
    if (theme === 'dark') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });
}

function initRtlToggle() {
  const rtlToggles = document.querySelectorAll('.rtl-toggle');
  // Default to LTR
  const currentDir = localStorage.getItem('dir') || 'ltr';
  
  document.documentElement.setAttribute('dir', currentDir);

  rtlToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const newDir = document.documentElement.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
      document.documentElement.setAttribute('dir', newDir);
      localStorage.setItem('dir', newDir);
    });
  });
}

function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');
  
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.classList.toggle('no-scroll'); // Prevent background scrolling
    });

    // Handle Dropdown on mobile
    const dropdowns = document.querySelectorAll('.has-dropdown > a');
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', function (e) {
        if (window.innerWidth < 1024) {
          e.preventDefault();
          this.parentElement.classList.toggle('active');
        }
      });
    });

    // Close menu when clicking a normal link
    navLinks.forEach(link => {
      if(!link.parentElement.classList.contains('has-dropdown')) {
        link.addEventListener('click', () => {
          menuBtn.classList.remove('active');
          navMenu.classList.remove('active');
          document.body.classList.remove('no-scroll');
        });
      }
    });
  }
}

function initAccordion() {
  const accordions = document.querySelectorAll('.accordion-header');
  accordions.forEach(acc => {
    acc.addEventListener('click', function() {
      this.classList.toggle('active');
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}
