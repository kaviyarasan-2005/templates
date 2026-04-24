// animations.js - Intersection Observers and visual enhancements

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initStickyHeader();
});

function initScrollAnimations() {
  const fadeUpElements = document.querySelectorAll('.fade-up');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);
  
  fadeUpElements.forEach(el => observer.observe(el));
}

function initStickyHeader() {
  const header = document.querySelector('.navbar');
  if(!header) return;
  
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow when scrolled
    if (scrollTop > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Optional: Hide header on scroll down, show on scroll up
    // if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
    //   header.style.transform = `translateY(-100%)`;
    // } else {
    //   header.style.transform = 'translateY(0)';
    // }
    
    lastScrollTop = scrollTop;
  }, { passive: true });
}
