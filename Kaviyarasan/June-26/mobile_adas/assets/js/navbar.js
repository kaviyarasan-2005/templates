/* ============================================
   CALIBRATE ADAS — Navbar Injection
   ============================================ */

'use strict';

(() => {
  const isSubpage = window.location.pathname.includes('/pages/') || window.location.pathname.includes('\\pages\\');
  const basePath = isSubpage ? '../' : './';
  const pagesPath = isSubpage ? '' : 'pages/';

  // Get active page name to set active class
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';

  const navbarHtml = `
    <header class="navbar-wrapper">
      <nav class="navbar">
        <div class="container">
          <a href="${basePath}index.html" class="navbar-logo">
            <div class="logo-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crosshair"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>
            </div>
            <span class="logo-text">Nexo<span>.</span></span>
          </a>
          
          <div class="nav-menu">
            <div class="nav-item">
              <a href="#" class="nav-link ${page === 'index.html' || page === 'home2.html' ? 'active' : ''}">Home <i data-lucide="chevron-down"></i></a>
              <div class="dropdown-menu">
                <a href="${basePath}index.html" class="dropdown-link ${page === 'index.html' ? 'active' : ''}"><i data-lucide="home"></i> Home 1 (Landing)</a>
                <a href="${pagesPath}home2.html" class="dropdown-link ${page === 'home2.html' ? 'active' : ''}"><i data-lucide="layout"></i> Home 2 (Alternate)</a>
              </div>
            </div>
            <div class="nav-item">
              <a href="${pagesPath}about.html" class="nav-link ${page === 'about.html' ? 'active' : ''}">About</a>
            </div>
            <div class="nav-item">
              <a href="${pagesPath}services.html" class="nav-link ${page === 'services.html' ? 'active' : ''}">Services</a>
            </div>
            <div class="nav-item">
              <a href="${pagesPath}pricing.html" class="nav-link ${page === 'pricing.html' ? 'active' : ''}">Pricing</a>
            </div>
            <div class="nav-item">
              <a href="${pagesPath}contact.html" class="nav-link ${page === 'contact.html' ? 'active' : ''}">Contact</a>
            </div>
            <div class="nav-item">
              <a href="#" class="nav-link ${page.includes('dashboard') || page === 'login.html' || page === 'signup.html' ? 'active' : ''}">Dashboard <i data-lucide="chevron-down"></i></a>
              <div class="dropdown-menu">
                <a href="${pagesPath}user-dashboard.html" class="dropdown-link ${page === 'user-dashboard.html' ? 'active' : ''}"><i data-lucide="user"></i> User Dashboard</a>
                <a href="${pagesPath}admin-dashboard.html" class="dropdown-link ${page === 'admin-dashboard.html' ? 'active' : ''}"><i data-lucide="shield"></i> Admin Dashboard</a>
                <a href="${pagesPath}login.html" class="dropdown-link ${page === 'login.html' ? 'active' : ''}"><i data-lucide="log-in"></i> Sign In</a>
                <a href="${pagesPath}signup.html" class="dropdown-link ${page === 'signup.html' ? 'active' : ''}"><i data-lucide="user-plus"></i> Register Shop</a>
              </div>
            </div>
          </div>
          
          <div class="navbar-actions">
            <button class="nav-toggle-btn rtl-toggle" aria-label="Toggle RTL Mode">
              <span class="toggle-label" style="font-size: var(--text-xs); font-weight: var(--weight-bold);">RTL</span>
            </button>
            <button class="nav-toggle-btn theme-toggle" aria-label="Toggle Theme">
              <i data-lucide="moon"></i>
            </button>
            <button class="hamburger" aria-label="Open Menu">
              <i data-lucide="menu"></i>
            </button>
          </div>
        </div>
      </nav>

      <!-- Mobile Navigation Drawer -->
      <div class="mobile-overlay"></div>
      <div class="mobile-nav">
        <div class="mobile-nav-header">
          <a href="${basePath}index.html" class="navbar-logo">
            <div class="logo-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crosshair"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>
            </div>
            <span class="logo-text">Nexo<span>.</span></span>
          </a>
          <button class="mobile-nav-close" aria-label="Close Menu">
            <i data-lucide="x"></i>
          </button>
        </div>
        <div class="mobile-nav-links">
          <a href="#" class="mobile-nav-link mobile-dropdown-trigger">Home <i data-lucide="chevron-down"></i></a>
          <div class="mobile-dropdown">
            <a href="${basePath}index.html"><i data-lucide="home"></i> Home 1 (Landing)</a>
            <a href="${pagesPath}home2.html"><i data-lucide="layout"></i> Home 2 (Alternate)</a>
          </div>
          
          <a href="${pagesPath}about.html" class="mobile-nav-link ${page === 'about.html' ? 'active' : ''}">About</a>
          <a href="${pagesPath}services.html" class="mobile-nav-link ${page === 'services.html' ? 'active' : ''}">Services</a>
          <a href="${pagesPath}pricing.html" class="mobile-nav-link ${page === 'pricing.html' ? 'active' : ''}">Pricing</a>
          <a href="${pagesPath}contact.html" class="mobile-nav-link ${page === 'contact.html' ? 'active' : ''}">Contact</a>
          
          <a href="#" class="mobile-nav-link mobile-dropdown-trigger">Dashboard <i data-lucide="chevron-down"></i></a>
          <div class="mobile-dropdown">
            <a href="${pagesPath}user-dashboard.html"><i data-lucide="user"></i> User Dashboard</a>
            <a href="${pagesPath}admin-dashboard.html"><i data-lucide="shield"></i> Admin Dashboard</a>
            <a href="${pagesPath}login.html"><i data-lucide="log-in"></i> Sign In</a>
            <a href="${pagesPath}signup.html"><i data-lucide="user-plus"></i> Register Shop</a>
        </div>
      </div>
    </header>
  `;

  // Inject navbar as first child of body or before page-hero / main-content
  document.addEventListener('DOMContentLoaded', () => {
    // If it's a dashboard page, it might have its own header or layout. Let's still inject if needed, or check if the layout requires it.
    // Dashboard pages usually have a custom layout with sidebar, but let's make sure the script runs nicely.
    const isDashboard = page.includes('dashboard');
    if (isDashboard) {
      // Dashboards might not need the standard site navbar, or they have a specialized dashboard header
      return;
    }

    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
      placeholder.outerHTML = navbarHtml;
    } else {
      document.body.insertAdjacentHTML('afterbegin', navbarHtml);
    }

    // Refresh icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });
})();
