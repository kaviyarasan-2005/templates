/* ============================================
   CALIBRATE ADAS — Footer Injection
   ============================================ */

'use strict';

(() => {
  const isSubpage = window.location.pathname.includes('/pages/') || window.location.pathname.includes('\\pages\\');
  const basePath = isSubpage ? '../' : './';
  const pagesPath = isSubpage ? '' : 'pages/';

  const footerHtml = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand Column -->
          <div class="footer-brand">
            <a href="${basePath}index.html" class="navbar-logo" style="margin-bottom: var(--space-4); text-decoration: none;">
              <div class="logo-icon">
                <i data-lucide="crosshair"></i>
              </div>
              <div class="logo-text">Nexo</div>
            </a>
            <p>Certified Mobile ADAS Calibration & Collision Avoidance Services. Precision alignment for all vehicle makes and models at your collision shop or repair center.</p>
            <div class="footer-social">
              <a href="#" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a>
              <a href="#" aria-label="Twitter"><i data-lucide="twitter"></i></a>
              <a href="#" aria-label="Facebook"><i data-lucide="facebook"></i></a>
              <a href="#" aria-label="Youtube"><i data-lucide="youtube"></i></a>
            </div>
          </div>
          
          <!-- Quick Links -->
          <div class="footer-col">
            <h4>Quick Links</h4>
            <div class="footer-links">
              <a href="${basePath}index.html" class="footer-link"><i data-lucide="chevron-right"></i> Home 1</a>
              <a href="${pagesPath}home2.html" class="footer-link"><i data-lucide="chevron-right"></i> Home 2</a>
              <a href="${pagesPath}about.html" class="footer-link"><i data-lucide="chevron-right"></i> About Us</a>
              <a href="${pagesPath}pricing.html" class="footer-link"><i data-lucide="chevron-right"></i> Pricing Plans</a>
              <a href="${pagesPath}contact.html" class="footer-link"><i data-lucide="chevron-right"></i> Book Appointment</a>
            </div>
          </div>
          
          <!-- Services -->
          <div class="footer-col">
            <h4>Our Services</h4>
            <div class="footer-links">
              <a href="${pagesPath}services.html?tab=camera" class="footer-link"><i data-lucide="chevron-right"></i> Camera Calibration</a>
              <a href="${pagesPath}services.html?tab=radar" class="footer-link"><i data-lucide="chevron-right"></i> Radar Alignment</a>
              <a href="${pagesPath}services.html?tab=lidar" class="footer-link"><i data-lucide="chevron-right"></i> LiDAR Calibration</a>
              <a href="${pagesPath}services.html?tab=diagnostic" class="footer-link"><i data-lucide="chevron-right"></i> Post-Repair Testing</a>
              <a href="${pagesPath}services.html?tab=mobile" class="footer-link"><i data-lucide="chevron-right"></i> Mobile On-Site Service</a>
            </div>
          </div>
          
          <!-- Contact / Newsletter -->
          <div class="footer-col">
            <h4>Stay Updated</h4>
            <div class="footer-newsletter">
              <p>Subscribe to our newsletter for the latest OEM calibration requirements and industry updates.</p>
              <form class="newsletter-form" onsubmit="event.preventDefault(); alert('Subscribed successfully!');">
                <input type="email" placeholder="Your Email Address" required aria-label="Email Address">
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        
        <!-- Bottom copyright bar -->
        <div class="footer-bottom">
          <div class="footer-copyright">
            &copy; ${new Date().getFullYear()} Nexo. All rights reserved. Professional ADAS Solutions.
          </div>
          <button class="back-to-top" aria-label="Back to Top">
            <i data-lucide="chevron-up"></i>
          </button>
        </div>
      </div>
    </footer>
  `;

  document.addEventListener('DOMContentLoaded', () => {
    // Check if it's a dashboard page - do not inject default footer
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    if (page.includes('dashboard')) {
      return;
    }

    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
      placeholder.outerHTML = footerHtml;
    } else {
      document.body.insertAdjacentHTML('beforeend', footerHtml);
    }

    // Refresh icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });
})();
