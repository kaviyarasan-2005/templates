# 🏡 BuildPro - Home Renovation & Contracting Company Website Template

A fully responsive, modern, premium HTML template for home renovation and contracting companies. Built with TailwindCSS, featuring dark mode, RTL support, and an admin dashboard.

## ✨ Features

### 🎨 Design Features
- **Premium UI/UX** - ThemeForest-level quality design
- **Fully Responsive** - Mobile-first approach, works on all devices
- **Dark Mode** - Toggle between light and dark themes
- **RTL Support** - Right-to-left language support
- **Modern Animations** - Smooth transitions and hover effects
- **Glassmorphism Effects** - Modern glass-like UI elements
- **Gradient Backgrounds** - Eye-catching color schemes

### 🛠 Technical Features
- **TailwindCSS** - Utility-first CSS framework
- **Alpine.js** - Lightweight JavaScript framework
- **Chart.js** - Interactive charts for dashboard
- **Font Awesome** - Comprehensive icon library
- **Clean Code** - Well-commented and organized
- **SEO Friendly** - Semantic HTML structure
- **Fast Loading** - Optimized assets and code

### 📱 Pages Included (14 Total)

#### Main Pages
1. **index.html** - Home Page 1 (General Renovation Landing)
2. **index2.html** - Home Page 2 (Project Showcase)
3. **about.html** - About Us Page
4. **services.html** - Services Listing Page
5. **service-details.html** - Service Details Page
6. **blog.html** - Blog Listing Page
7. **blog-details.html** - Blog Article Page
8. **contact.html** - Contact Us Page
9. **pricing.html** - Pricing Packages Page

#### Authentication Pages
10. **login.html** - Login Page
11. **register.html** - Registration Page

#### Admin Dashboard
12. **dashboard.html** - Full Admin Dashboard with Charts

#### Special Pages
13. **404.html** - Custom 404 Error Page
14. **coming-soon.html** - Coming Soon Page with Countdown

### 🧭 Navigation Features
- **Sticky Navbar** - Fixed navigation on scroll
- **Dropdown Menus** - Animated dropdown menus
- **Mobile Menu** - Hamburger menu for mobile devices
- **Active Page Highlight** - Current page indication
- **Smooth Scrolling** - Smooth anchor link scrolling

### 🎯 Special Components
- **Before/After Slider** - Interactive image comparison
- **Animated Counters** - Number counting animations
- **Testimonial Cards** - Client review sections
- **Pricing Tables** - Service package comparisons
- **Contact Forms** - Validated form submissions
- **Cost Estimator** - Interactive pricing calculator
- **Filter System** - Category-based filtering
- **Search Functionality** - Real-time search
- **Modal Popups** - Quote request modals
- **Timeline Component** - Company history display
- **Progress Bars** - Visual progress indicators
- **Accordions** - Expandable FAQ sections
- **Charts & Graphs** - Data visualization

### 📊 Dashboard Features
- **Overview Cards** - Key metrics at a glance
- **Project Growth Chart** - Line chart visualization
- **Revenue Analytics** - Bar chart displays
- **Service Distribution** - Pie/doughnut charts
- **Recent Projects** - Project status tracking
- **Client Management** - Customer information
- **Service Inquiries** - Lead management
- **Activity Feed** - Recent actions log
- **Responsive Sidebar** - Collapsible navigation

## 📁 Project Structure

```
Home Renovation & Contracting Company/
│
├── assets/
│   ├── css/
│   │   └── styles.css          # Custom styles & TailwindCSS
│   ├── js/
│   │   └── main.js             # Main JavaScript functionality
│   └── images/                 # Image assets
│
└── pages/
    ├── index.html              # Home Page 1
    ├── index2.html             # Home Page 2
    ├── about.html              # About Page
    ├── services.html           # Services Page
    ├── service-details.html    # Service Details
    ├── blog.html               # Blog Listing
    ├── blog-details.html       # Blog Article
    ├── contact.html            # Contact Page
    ├── pricing.html            # Pricing Page
    ├── login.html              # Login Page
    ├── register.html           # Register Page
    ├── dashboard.html          # Admin Dashboard
    ├── 404.html                # 404 Error Page
    └── coming-soon.html        # Coming Soon Page
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)

### Installation

1. **Download/Clone the repository**
   ```bash
   cd "Home Renovation & Contracting Company"
   ```

2. **Open in Browser**
   - Simply open `pages/index.html` in your web browser
   - Or use a local server for better experience:
   
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Access the website**
   - Navigate to `http://localhost:8000/pages/index.html`

## 🎨 Customization

### Colors
Edit the color palette in `assets/css/styles.css`:

```css
:root {
  --primary: #2563eb;      /* Blue */
  --secondary: #f97316;    /* Orange */
  --dark: #1e293b;         /* Dark Slate */
  --light: #f8fafc;        /* Light Gray */
}
```

### Branding
- Update logo in navbar (search for "BuildPro")
- Change company name across all pages
- Replace placeholder images with your own
- Update contact information in footer

### Content
All content is static HTML - simply edit the text directly in each page file.

## 🔧 JavaScript Features

### Dark Mode
Automatically saves user preference to localStorage:
```javascript
// Toggles dark mode
document.getElementById('darkModeToggle').click();
```

### RTL Support
Switch between LTR and RTL layouts:
```javascript
// Toggles RTL direction
document.getElementById('rtlToggle').click();
```

### Before/After Slider
Interactive image comparison on home pages and portfolio.

### Animated Counters
Numbers animate when scrolled into view:
```html
<div class="counter" data-target="500">0</div>
```

### Form Validation
All forms include client-side validation with error messages.

### Modal System
Open/close modals programmatically:
```javascript
openModal('quoteModal');
closeModal('quoteModal');
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📝 License

This template is free to use for personal and commercial projects.

## 🤝 Support

For questions or issues:
- Check the code comments for inline documentation
- Review the JavaScript file for feature implementations
- All components are well-commented and self-explanatory

## 🎯 Key Highlights

✅ **14 Complete Pages** - Everything you need  
✅ **Admin Dashboard** - Full-featured backend UI  
✅ **Dark + Light Mode** - User preference toggle  
✅ **RTL Support** - Multi-language ready  
✅ **Mobile Responsive** - Works on all devices  
✅ **Modern Design** - ThemeForest quality  
✅ **Easy to Customize** - Clean, organized code  
✅ **No Dependencies** - CDN-based, no build required  
✅ **Fast Performance** - Optimized loading  
✅ **SEO Ready** - Semantic HTML  

## 🔄 Updates & Maintenance

To update the template:
1. Modify CSS in `assets/css/styles.css`
2. Update JavaScript in `assets/js/main.js`
3. Edit HTML content in individual page files
4. Replace images in `assets/images/` folder

## 💡 Tips

1. **Images**: Replace Unsplash URLs with your own images
2. **Forms**: Connect forms to your backend or form service
3. **Charts**: Customize Chart.js data in `main.js`
4. **Colors**: Update Tailwind config in each HTML file
5. **Content**: All text is editable directly in HTML

## 📞 Contact

For customizations or support, feel free to modify the template as needed.

---

**Built with ❤️ for Home Renovation Companies**

Enjoy building your website! 🚀
