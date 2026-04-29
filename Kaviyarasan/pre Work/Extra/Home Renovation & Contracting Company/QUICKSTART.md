# 🚀 Quick Start Guide - BuildPro Template

## Getting Started in 3 Easy Steps

### Step 1: Open the Website
Simply open `pages/index.html` in your web browser, or use a local server:

**Option A - Direct Open:**
- Navigate to the `pages` folder
- Double-click `index.html`

**Option B - Local Server (Recommended):**
```bash
# Python 3
cd pages
python -m http.server 8000

# Then visit: http://localhost:8000/index.html
```

### Step 2: Explore the Pages
All pages are interconnected through the navigation menu:

**Main Pages:**
- 🏠 Home Page 1: `index.html`
- 🏠 Home Page 2: `index2.html`
- ℹ️ About: `about.html`
- 🛠 Services: `services.html`
- 📰 Blog: `blog.html`
- 💰 Pricing: `pricing.html`
- 📞 Contact: `contact.html`

**Admin & Auth:**
- 🔐 Login: `login.html`
- 📝 Register: `register.html`
- 📊 Dashboard: `dashboard.html`

**Special Pages:**
- ❌ 404 Error: `404.html`
- ⏳ Coming Soon: `coming-soon.html`

### Step 3: Customize
Edit any HTML file to change content, colors, and images.

---

## 🎨 Common Customizations

### Change Company Name
Search and replace "BuildPro" with your company name in all files.

### Update Colors
Edit `assets/css/styles.css`:
```css
:root {
  --primary: #2563eb;      /* Your primary color */
  --secondary: #f97316;    /* Your secondary color */
}
```

### Replace Images
Replace Unsplash URLs with your own image paths:
```html
<!-- Before -->
<img src="https://images.unsplash.com/..." />

<!-- After -->
<img src="assets/images/your-image.jpg" />
```

### Update Contact Info
Find and update in footer sections:
- Phone number
- Email address
- Physical address
- Social media links

---

## 🧪 Testing Features

### Dark Mode
Click the moon icon (🌙) in the navbar to toggle dark mode.

### RTL Support
Click the RTL button (🌍) in the navbar to switch text direction.

### Mobile Menu
Resize browser to mobile size (< 768px) and click the hamburger menu.

### Before/After Slider
On home pages, drag the slider to compare before/after images.

### Forms
Try submitting forms - they include validation (no backend required for demo).

### Dashboard Charts
Login page → Dashboard to see Chart.js visualizations.

---

## 📱 View on Different Devices

**Desktop:** Full experience with all features
**Tablet:** Responsive layout adapts automatically
**Mobile:** Hamburger menu, stacked layouts

Test by resizing your browser window or using browser DevTools.

---

## 🔧 Troubleshooting

### Styles Not Loading?
- Make sure you're opening from the `pages` folder
- Check that `assets` folder is in the parent directory
- Verify file paths are correct

### JavaScript Not Working?
- Ensure `main.js` is loaded (check browser console)
- Clear browser cache and refresh
- Check for JavaScript errors in console (F12)

### Images Not Showing?
- Images use Unsplash CDN (requires internet)
- Replace with local images if working offline

---

## 💡 Pro Tips

1. **Use Browser DevTools** (F12) to inspect and test changes
2. **Start with index.html** - it's the most complete example
3. **Copy sections** between pages to maintain consistency
4. **Test on multiple browsers** for cross-compatibility
5. **Use the search feature** in your code editor to find elements quickly

---

## 📚 File Organization

```
pages/           ← All HTML files here
assets/
  ├── css/      ← styles.css (all custom styles)
  ├── js/       ← main.js (all JavaScript)
  └── images/   ← Add your images here
```

---

## 🎯 Next Steps

1. ✅ Open and explore all pages
2. ✅ Test responsive design (resize browser)
3. ✅ Try dark mode and RTL toggles
4. ✅ Customize content and branding
5. ✅ Replace placeholder images
6. ✅ Update contact information
7. ✅ Deploy to your web host

---

## 🌟 Key Features Checklist

- [x] Fully responsive design
- [x] Dark mode support
- [x] RTL language support
- [x] Mobile-friendly navigation
- [x] Interactive charts (dashboard)
- [x] Form validation
- [x] Smooth animations
- [x] Before/after sliders
- [x] Modal popups
- [x] Filter systems
- [x] Search functionality
- [x] Cost estimator
- [x] Countdown timer
- [x] Sticky navigation
- [x] Scroll-to-top button

---

**Need Help?** All code is well-commented. Check the README.md for detailed documentation.

**Happy Building! 🏡✨**
