// ===========================
// RTL/LTR Toggle Script
// ===========================

// Initialize RTL Toggle
function initRTLToggle() {
    const rtlToggle = document.querySelector('.rtl-toggle');
    const html = document.documentElement;
    
    // Check for saved direction preference or default to 'ltr'
    const currentDir = localStorage.getItem('direction') || 'ltr';
    html.setAttribute('dir', currentDir);
    
    if (rtlToggle) {
        rtlToggle.textContent = currentDir === 'rtl' ? 'LTR' : 'RTL';
        
        rtlToggle.addEventListener('click', () => {
            const dir = html.getAttribute('dir');
            const newDir = dir === 'rtl' ? 'ltr' : 'rtl';
            
            html.setAttribute('dir', newDir);
            localStorage.setItem('direction', newDir);
            rtlToggle.textContent = newDir === 'rtl' ? 'LTR' : 'RTL';
            
            // Optionally reload the page to ensure all styles are applied correctly
            // location.reload();
        });
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initRTLToggle);

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initRTLToggle };
}