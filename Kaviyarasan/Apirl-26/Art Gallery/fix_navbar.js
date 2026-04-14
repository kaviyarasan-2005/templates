const fs = require('fs');
const path = require('path');

const masterNavbar = `  <nav class="navbar" id="main-navbar" role="navigation" aria-label="Main navigation">
    <div class="navbar__inner">
      <a href="home-main.html" class="navbar__logo"><svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="8" fill="#D4AF37"/><path d="M18 8L26 28H10L18 8Z" fill="white" opacity="0.9"/><circle cx="18" cy="20" r="4" fill="white" opacity="0.7"/></svg><span>Aurelia</span> <span class="navbar__logo-suffix">Gallery</span></a>
      <div class="navbar__links">
        <div class="navbar__dropdown">
          <a href="#" class="navbar__link navbar__dropdown-trigger" aria-expanded="false">Home <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></a>
          <div class="navbar__dropdown-menu" role="menu">
            <a href="home-main.html" class="navbar__dropdown-item" role="menuitem">Home 1</a>
            <a href="home-exhibition.html" class="navbar__dropdown-item" role="menuitem">Home 2</a>
          </div>
        </div>
        <a href="about.html" class="navbar__link">About Us</a>
        <div class="navbar__dropdown">
          <a href="#" class="navbar__link navbar__dropdown-trigger" aria-expanded="false">Services <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></a>
          <div class="navbar__dropdown-menu" role="menu">
            <a href="services.html" class="navbar__dropdown-item" role="menuitem">Services Overview</a>
            <a href="service-detail.html" class="navbar__dropdown-item" role="menuitem">Service Details</a>
          </div>
        </div>
        <div class="navbar__dropdown">
          <a href="#" class="navbar__link navbar__dropdown-trigger" aria-expanded="false">Blog <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></a>
          <div class="navbar__dropdown-menu" role="menu">
            <a href="blog.html" class="navbar__dropdown-item" role="menuitem">Blog Grid</a>
            <a href="blog-detail.html" class="navbar__dropdown-item" role="menuitem">Blog Details</a>
          </div>
        </div>
        <a href="pricing.html" class="navbar__link">Pricing</a>
        <a href="contact.html" class="navbar__link">Contact</a>
        <div class="navbar__dropdown">
          <a href="#" class="navbar__link navbar__dropdown-trigger" aria-expanded="false">Dashboard <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></a>
          <div class="navbar__dropdown-menu" role="menu">
            <a href="dashboard.html#user" class="navbar__dropdown-item" role="menuitem">User Dashboard</a>
            <a href="dashboard.html#admin" class="navbar__dropdown-item" role="menuitem">Admin Dashboard</a>
          </div>
        </div>
      </div>
      <div class="navbar__actions">
        <button class="navbar__icon-btn" id="rtl-toggle" aria-label="Toggle RTL/LTR">
          <svg style="pointer-events:none" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        </button>
        <button class="navbar__icon-btn" id="theme-toggle" aria-label="Toggle dark mode">
          <svg style="pointer-events:none" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
        <a href="login.html" class="btn btn--primary btn--sm mobile-hidden">Login</a>
      </div>
      <button class="navbar__hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="navbar__mobile-menu" aria-hidden="true">
      <a href="home-main.html" class="navbar__link">Home 1</a>
      <a href="home-exhibition.html" class="navbar__link">Home 2</a>
      <a href="about.html" class="navbar__link">About Us</a>
      <div style="border-top:1px solid var(--color-border); width:100%; margin:8px 0;"></div>
      <a href="services.html" class="navbar__link">Services Overview</a>
      <a href="service-detail.html" class="navbar__link">Service Details</a>
      <div style="border-top:1px solid var(--color-border); width:100%; margin:8px 0;"></div>
      <a href="blog.html" class="navbar__link">Blog Grid</a>
      <a href="blog-detail.html" class="navbar__link">Blog Details</a>
      <div style="border-top:1px solid var(--color-border); width:100%; margin:8px 0;"></div>
      <a href="pricing.html" class="navbar__link">Pricing</a>
      <a href="contact.html" class="navbar__link">Contact</a>
      <div style="border-top:1px solid var(--color-border); width:100%; margin:8px 0;"></div>
      <a href="dashboard.html#user" class="navbar__link">User Dashboard</a>
      <a href="dashboard.html#admin" class="navbar__link">Admin Dashboard</a>
      <div style="display:flex;gap:12px;margin-top:16px;">
        <button class="navbar__icon-btn" onclick="document.getElementById('rtl-toggle').click()"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></button>
        <button class="navbar__icon-btn" onclick="document.getElementById('theme-toggle').click()"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg></button>
      </div>
      <a href="login.html" class="btn btn--primary" style="margin-top:8px;">Login</a>
    </div>
  </nav>`;

const rtlToggleAddon = `
          <button class="navbar__icon-btn" id="rtl-toggle" aria-label="Toggle RTL"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></button>
`;

const pagesDir = path.join(__dirname, 'pages');
const exclude = ['login.html', 'register.html', 'dashboard.html'];

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  if (!exclude.includes(file)) {
    // Standard page: replace navbar
    const navRegex = /<nav class="navbar".*?<\/nav>/s;
    if (navRegex.test(content)) {
      content = content.replace(navRegex, masterNavbar);
    } else {
        // If it doesn't have a navbar at all, maybe add it after <body>?
        // Let's assume they all do, or if they don't, it's 404 which should.
        const bodyStart = /<body.*?>/i;
        content = content.replace(bodyStart, "$&\n" + masterNavbar);
    }
  } else if (file === 'login.html' || file === 'register.html') {
    // Ensure rtl-toggle is added next to theme-toggle
    if (!content.includes('id="rtl-toggle"')) {
        const themeBtnRegex = /(<button.*?id="theme-toggle".*?<\/button>)/s;
        content = content.replace(themeBtnRegex, rtlToggleAddon + "$1");
    }
  }
  
  fs.writeFileSync(filePath, content);
  console.log('Processed', file);
}
