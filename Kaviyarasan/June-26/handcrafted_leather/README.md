# BIND — Handcrafted Leather Journal & Sketchbook Bindery

A complete, multi-page artisan e-commerce website template built with **HTML5, CSS3, and Vanilla JavaScript (ES6+)**. No frameworks, no libraries, no dependencies.

---

## Technology Stack

| Layer       | Technology                           |
|-------------|--------------------------------------|
| Structure   | HTML5 (Semantic)                     |
| Styling     | CSS3 (Custom Properties, Grid, Flex) |
| Logic       | JavaScript ES6+ (Vanilla)           |
| Charts      | Custom SVG (No libraries)           |
| Fonts       | Google Fonts (Playfair Display, Inter, Noto Sans Arabic) |

---

## Design System

- **Primary:** Deep Leather Brown `#3E2723`
- **Secondary:** Cream `#F5F5DC`
- **Accent:** Antique Gold `#C5A059`
- Light & Dark mode via `data-theme` attribute
- RTL support via `dir="rtl"` toggle

---

## Pages (21 Total)

### Public Content
| Page                  | File                    |
|-----------------------|-------------------------|
| Home (Artisan)        | `pages/index.html`      |
| Home (Product Gallery)| `pages/home-variant-2.html` |
| About                 | `pages/about.html`      |
| Services & Pricing    | `pages/services.html`   |
| Contact + FAQ         | `pages/contact.html`    |
| Blog Listing          | `pages/blog.html`       |
| Blog Post             | `pages/blog-post.html`  |
| Portfolio Gallery     | `pages/portfolio.html`  |
| Portfolio Detail      | `pages/portfolio-detail.html` |

### E-Commerce
| Page                  | File                    |
|-----------------------|-------------------------|
| Shop (Product Grid)   | `pages/shop.html`       |
| Product Detail        | `pages/product-detail.html` |
| Cart                  | `pages/cart.html`       |
| Checkout              | `pages/checkout.html`   |

### Custom Order
| Page                  | File                    |
|-----------------------|-------------------------|
| Booking (Multi-step)  | `pages/booking.html`    |

### Authentication & Utility
| Page                  | File                    |
|-----------------------|-------------------------|
| Login                 | `pages/login.html`      |
| Sign Up               | `pages/signup.html`     |
| 404 Error             | `pages/404.html`        |
| Coming Soon           | `pages/coming-soon.html`|

### Dashboards & User
| Page                  | File                    |
|-----------------------|-------------------------|
| Admin Dashboard       | `pages/admin-dashboard.html` |
| User Dashboard        | `pages/user-dashboard.html` |
| Profile               | `pages/profile.html`    |

---

## Features

- **Theme Toggle:** Light/Dark mode persisted via `localStorage`
- **RTL Toggle:** Full right-to-left layout support for Arabic
- **Custom SVG Charts:** Line, Pie, Bar, Doughnut, Funnel — zero dependencies
- **Scroll Animations:** Intersection Observer-based reveal effects
- **Password Strength Meter:** Real-time visual feedback on signup
- **Multi-step Booking Form:** 4-step wizard with live summary
- **FAQ Accordion:** Expandable/collapsible sections
- **Contact Form Validation:** Client-side required field checking
- **Masonry Gallery:** CSS column-based responsive masonry layout
- **Product Image Gallery:** Thumbnail-to-main image swap

---

## Directory Structure

```
handcrafted_leather/
├── assets/
│   ├── css/
│   │   ├── style.css          # Core design system
│   │   ├── dark-mode.css      # Dark theme overrides
│   │   └── rtl.css            # RTL layout overrides
│   ├── js/
│   │   ├── main.js            # Global logic (theme, RTL, animations, forms)
│   │   └── dashboard.js       # Custom SVG chart engine
│   └── images/                # Placeholder for user-uploaded images
├── pages/                     # All HTML pages
├── documentation/             # Additional project docs
├── sitemap.xml
├── robots.txt
└── README.md
```

---

## Getting Started

1. Open `pages/index.html` in any modern browser.
2. No build step, no `npm install`, no server required.
3. Replace placeholder image URLs with your own assets.

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## License

Template designed for BIND. All rights reserved.
