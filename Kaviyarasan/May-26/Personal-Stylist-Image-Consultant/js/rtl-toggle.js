/**
 * rtl-toggle.js
 * Manages RTL/LTR layout direction toggle.
 * Globe icon rotates 180° on click.
 * Persists preference in localStorage.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'lumiere-dir';
  const html = document.documentElement;

  // ── Apply direction to <html> ─────────────────────────────
  function applyDir(dir) {
    html.setAttribute('dir', dir);
    localStorage.setItem(STORAGE_KEY, dir);
    updateGlobeState(dir);
  }

  // ── Update globe button visual state ──────────────────────
  function updateGlobeState(dir) {
    const btn = document.getElementById('globe-toggle');
    if (!btn) return;
    btn.setAttribute('aria-label', dir === 'rtl' ? 'Switch to LTR layout' : 'Switch to RTL layout');
    btn.setAttribute('title', dir === 'rtl' ? 'Switch to LTR layout' : 'Switch to RTL layout');
    btn.setAttribute('aria-pressed', dir === 'rtl');

    if (dir === 'rtl') {
      btn.classList.add('rtl-active');
    } else {
      btn.classList.remove('rtl-active');
    }
  }

  // ── Toggle handler ────────────────────────────────────────
  function handleToggle(e) {
    const current = html.getAttribute('dir') || 'ltr';
    const newDir  = current === 'rtl' ? 'ltr' : 'rtl';

    // Animate globe rotation
    const btn = e.currentTarget;
    btn.classList.add('rotating');

    // Apply direction with slight delay for animation to start
    requestAnimationFrame(() => {
      applyDir(newDir);
    });

    // Remove rotating class after animation completes
    setTimeout(() => btn.classList.remove('rotating'), 400);
  }

  // ── Init ──────────────────────────────────────────────────
  function init() {
    const stored = localStorage.getItem(STORAGE_KEY) || 'ltr';
    applyDir(stored);

    function bindButton() {
      const btn = document.getElementById('globe-toggle');
      if (btn) {
        btn.addEventListener('click', handleToggle);
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', bindButton);
    } else {
      bindButton();
    }
  }

  init();
})();
