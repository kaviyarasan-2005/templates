/**
 * BIND - Main JavaScript
 * Handles global functionality: Theme, RTL, Navigation, Animations
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initRTL();
    initNavigation();
    initScrollAnimations();
});

/**
 * Theme Toggle Implementation
 */
function initTheme() {
    const themeToggles = document.querySelectorAll('.js-theme-toggle');
    if (!themeToggles.length) return;

    // Check local storage or system preference
    const savedTheme = localStorage.getItem('bind_theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    // Apply initial theme
    applyTheme(currentTheme);

    // Add click listeners to all theme toggles
    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(currentTheme);
            localStorage.setItem('bind_theme', currentTheme);
        });
    });
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
}

/**
 * RTL/LTR Toggle Implementation
 */
function initRTL() {
    const rtlToggles = document.querySelectorAll('.js-rtl-toggle');
    if (!rtlToggles.length) return;

    // Check local storage
    const savedDir = localStorage.getItem('bind_dir');
    let currentDir = savedDir || 'ltr';

    // Apply initial direction
    applyDir(currentDir);

    // Add click listeners
    rtlToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            currentDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
            applyDir(currentDir);
            localStorage.setItem('bind_dir', currentDir);
            updateRtlToggleText(currentDir);
        });
    });
    
    updateRtlToggleText(currentDir);
}

function applyDir(dir) {
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', dir === 'rtl' ? 'ar' : 'en');
}

function updateRtlToggleText(dir) {
    const rtlToggles = document.querySelectorAll('.js-rtl-toggle');
    rtlToggles.forEach(toggle => {
        toggle.textContent = dir === 'ltr' ? 'EN / AR' : 'AR / EN';
    });
}

/**
 * Mobile Navigation Implementation
 */
function initNavigation() {
    const mobileBtn = document.querySelector('.js-mobile-btn');
    const navMenu = document.querySelector('.js-nav-menu');
    
    if (!mobileBtn || !navMenu) return;

    mobileBtn.addEventListener('click', () => {
        const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
        mobileBtn.setAttribute('aria-expanded', !isExpanded);
        
        // Toggle display logic here (in CSS, we can toggle a class on the body or nav)
        navMenu.style.display = isExpanded ? 'none' : 'flex';
        if (!isExpanded) {
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.backgroundColor = 'var(--color-surface)';
            navMenu.style.padding = 'var(--spacing-3)';
            navMenu.style.boxShadow = '0 10px 15px var(--color-shadow)';
        } else {
            // Reset to css defaults
            navMenu.style = '';
        }
    });
}

/**
 * Scroll Reveal Animations Implementation
 */
function initScrollAnimations() {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const revealElements = document.querySelectorAll('.reveal');
    
    if (!revealElements.length || !('IntersectionObserver' in window)) {
        // Fallback: show everything if no IntersectionObserver
        revealElements.forEach(el => el.classList.add('active'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => observer.observe(el));
}

/**
 * Authentication Forms Logic
 */
document.addEventListener('DOMContentLoaded', () => {
    // Password Visibility Toggle
    const togglePasswordBtns = document.querySelectorAll('.js-toggle-password');
    togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.previousElementSibling;
            if (input && input.tagName === 'INPUT') {
                const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                input.setAttribute('type', type);
                
                // Toggle SVG (Eye / Eye Off)
                if (type === 'text') {
                    this.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>';
                } else {
                    this.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
                }
            }
        });
    });

    // Password Strength Indicator
    const passwordInput = document.querySelector('.js-password-strength');
    const strengthBar = document.querySelector('.js-strength-bar');
    const strengthText = document.querySelector('.js-strength-text');
    
    if (passwordInput && strengthBar && strengthText) {
        passwordInput.addEventListener('input', function() {
            const val = this.value;
            let strength = 0;
            
            if (val.length > 5) strength += 1;
            if (val.length > 8) strength += 1;
            if (/[A-Z]/.test(val)) strength += 1;
            if (/[0-9]/.test(val)) strength += 1;
            if (/[^A-Za-z0-9]/.test(val)) strength += 1;

            strengthBar.className = 'js-strength-bar strength-bar';
            
            if (val.length === 0) {
                strengthBar.style.width = '0';
                strengthText.textContent = '';
            } else if (strength < 3) {
                strengthBar.style.width = '33.33%';
                strengthBar.classList.add('strength-weak');
                strengthText.textContent = 'Weak';
                strengthText.style.color = 'var(--color-error)';
            } else if (strength < 5) {
                strengthBar.style.width = '66.66%';
                strengthBar.classList.add('strength-medium');
                strengthText.textContent = 'Medium';
                strengthText.style.color = '#F57F17'; // Yellow-Orange
            } else {
                strengthBar.style.width = '100%';
                strengthBar.classList.add('strength-strong');
                strengthText.textContent = 'Strong';
                strengthText.style.color = 'var(--color-success)';
            }
        });
    }

    // Accordion Logic
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(acc => {
        const header = acc.querySelector('.accordion__header');
        if (header) {
            header.addEventListener('click', () => {
                const isActive = acc.classList.contains('active');
                
                // Close all others
                accordions.forEach(a => a.classList.remove('active'));
                
                if (!isActive) {
                    acc.classList.add('active');
                }
            });
        }
    });

    // Simple Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Basic validation
            let isValid = true;
            const requiredInputs = contactForm.querySelectorAll('[required]');
            
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.closest('.form-group').classList.add('has-error');
                } else {
                    input.closest('.form-group').classList.remove('has-error');
                }
            });

            if (isValid) {
                alert('Thank you for reaching out. We will get back to you shortly.');
                contactForm.reset();
            }
        });

        // Remove error state on input
        contactForm.addEventListener('input', function(e) {
            if (e.target.hasAttribute('required')) {
                e.target.closest('.form-group').classList.remove('has-error');
            }
        });
    }

    // Multi-step Booking Form Logic
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        let currentStep = 1;
        const totalSteps = 4;
        
        const updateSteps = () => {
            // Update dots
            document.querySelectorAll('.step-dot').forEach((dot, index) => {
                dot.classList.remove('active', 'completed');
                if (index + 1 === currentStep) {
                    dot.classList.add('active');
                } else if (index + 1 < currentStep) {
                    dot.classList.add('completed');
                }
            });
            
            // Update panels
            document.querySelectorAll('.booking-step').forEach((step, index) => {
                if (index + 1 === currentStep) {
                    step.classList.add('active');
                } else {
                    step.classList.remove('active');
                }
            });

            // Update Summary (if on last step)
            if (currentStep === totalSteps) {
                updateSummary();
            }
        };

        const updateSummary = () => {
            const summaryDiv = document.getElementById('bookingSummary');
            if (!summaryDiv) return;
            
            const formData = new FormData(bookingForm);
            
            let html = '<ul style="list-style: none; padding: 0;">';
            html += `<li style="margin-bottom: 8px;"><strong>Size:</strong> ${formData.get('size') || 'Not selected'}</li>`;
            html += `<li style="margin-bottom: 8px;"><strong>Leather:</strong> ${formData.get('leather') || 'Not selected'}</li>`;
            html += `<li style="margin-bottom: 8px;"><strong>Paper:</strong> ${formData.get('paper') || 'Not selected'}</li>`;
            html += `<li style="margin-bottom: 8px;"><strong>Embellishment:</strong> ${formData.get('embellishment') || 'Not selected'}</li>`;
            html += `</ul>`;
            
            summaryDiv.innerHTML = html;
        };

        document.querySelectorAll('.js-next-step').forEach(btn => {
            btn.addEventListener('click', () => {
                if (currentStep < totalSteps) {
                    // Simple validation could go here
                    currentStep++;
                    updateSteps();
                }
            });
        });

        document.querySelectorAll('.js-prev-step').forEach(btn => {
            btn.addEventListener('click', () => {
                if (currentStep > 1) {
                    currentStep--;
                    updateSteps();
                }
            });
        });

        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Custom order request submitted successfully! Our artisans will review and contact you shortly.');
            window.location.href = 'user-dashboard.html';
        });
    }
});
