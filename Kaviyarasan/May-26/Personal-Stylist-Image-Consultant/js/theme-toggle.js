/**
 * theme-toggle.js
 * Manages Dark / Light mode with localStorage persistence
 * and prefers-color-scheme detection on first visit.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'lumiere-theme';
  const html = document.documentElement;

  // ── Read stored preference or system preference ───────────
  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // ── Apply theme to <html> ─────────────────────────────────
  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateToggleIcon(theme);
  }

  // ── Update sun/moon icon display ──────────────────────────
  function updateToggleIcon(theme) {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const sunEl  = btn.querySelector('.theme-icon-label-sun');
    const moonEl = btn.querySelector('.theme-icon-label-moon');
    if (sunEl)  sunEl.style.display = theme === 'dark' ? 'none' : 'inline';
    if (moonEl) moonEl.style.display = theme === 'dark' ? 'inline' : 'none';
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    btn.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  // ── Toggle handler ────────────────────────────────────────
  function handleToggle() {
    const current = html.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  // ── Init ──────────────────────────────────────────────────
  function init() {
    // Apply before paint to prevent flash
    const theme = getPreferredTheme();
    applyTheme(theme);

    // Bind button (works even if DOM loaded before this script)
    function bindButton() {
      const btn = document.getElementById('theme-toggle');
      if (btn) {
        btn.addEventListener('click', handleToggle);
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', bindButton);
    } else {
      bindButton();
    }

    // Listen to system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  init();
})();
