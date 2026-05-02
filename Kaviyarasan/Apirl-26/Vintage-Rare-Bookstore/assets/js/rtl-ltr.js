/**
 * VINTAGE RARE BOOKSTORE — RTL-LTR.JS
 * Language direction toggle (Right-To-Left / Left-To-Right)
 */

'use strict';

const DirectionManager = {
  KEY: 'vrb_direction',
  ATTR: 'dir',

  init() {
    const saved = localStorage.getItem(this.KEY) || 'ltr';
    this.apply(saved);
    this.bindToggle();
  },

  apply(dir) {
    document.documentElement.setAttribute(this.ATTR, dir);
    localStorage.setItem(this.KEY, dir);

    // Update buttons
    const buttons = document.querySelectorAll('#rtl-toggle');
    buttons.forEach(btn => {
      btn.setAttribute('aria-label', dir === 'rtl' ? 'Switch to LTR layout' : 'Switch to RTL layout');
      btn.setAttribute('title', dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL');
      
      const indicator = btn.querySelector('.rtl-indicator');
      if (indicator) {
        indicator.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
      }
    });

    // Adjust dropdown direction in RTL
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      const parent = menu.closest('.nav-item');
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      if (dir === 'rtl') {
        menu.style.left = 'auto';
        menu.style.right = '0';
      } else {
        menu.style.left = '0';
        menu.style.right = 'auto';
      }
    });
  },

  toggle() {
    const current = document.documentElement.getAttribute(this.ATTR) || 'ltr';
    this.apply(current === 'rtl' ? 'ltr' : 'rtl');
  },

  bindToggle() {
    const buttons = document.querySelectorAll('#rtl-toggle');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggle();
      });
    });
  }
};

document.addEventListener('DOMContentLoaded', () => DirectionManager.init());
