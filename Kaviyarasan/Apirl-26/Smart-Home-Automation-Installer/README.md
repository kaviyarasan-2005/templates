# SmartNest — Smart Home Automation Installer

Enterprise-grade, multi-page static website template for a smart home automation business. Built with HTML5, CSS3, and Vanilla ES6+ JavaScript.

## Quick Start

1. Clone or download the repository
2. Place your image assets in `assets/images/` (see list below)
3. Open `pages/index.html` in your browser
4. Deploy to Netlify, Vercel, or any static hosting

## Project Structure

```
smart-home-automation/
├── assets/
│   ├── css/
│   │   ├── style.css          # Main design system (CSS variables, components)
│   │   ├── dark-mode.css      # Dark theme overrides
│   │   └── rtl.css            # RTL layout fixes
│   ├── js/
│   │   ├── main.js            # Core: theme, RTL, nav, forms, accordion, etc.
│   │   └── dashboard.js       # Chart.js, sidebar, skeleton loaders
│   ├── images/                # YOUR ASSETS GO HERE (see list below)
│   └── fonts/                 # Google Fonts loaded via CDN
├── pages/
│   ├── index.html             # Home Page 1 — General Services
│   ├── home-saas.html         # Home Page 2 — SaaS/Niche Layout
│   ├── about.html             # About Us (story, team, timeline)
│   ├── services.html          # All Services (6-card grid)
│   ├── service-details.html   # Service Detail (Smart Lighting example)
│   ├── blog.html              # Blog Listing (search + filter)
│   ├── blog-details.html      # Blog Article (sidebar, tags, related)
│   ├── contact.html           # Contact (form, map, social links)
│   ├── dashboard.html         # Admin/User Dashboard (Chart.js)
│   ├── pricing.html           # 3-tier Pricing (monthly/annual toggle)
│   ├── login.html             # Login (ISOLATED — no nav/footer)
│   ├── register.html          # Register (ISOLATED — no nav/footer)
│   ├── 404.html               # Custom 404 Error Page
│   └── coming-soon.html       # Coming Soon (countdown timer)
├── site.webmanifest
├── robots.txt
├── sitemap.xml
└── README.md
```

## Features

- **Dark/Light Mode** — Toggle with localStorage persistence + prefers-color-scheme detection
- **RTL/LTR Toggle** — Globe icon switches layout direction, persisted in localStorage
- **Responsive** — Fully responsive down to 320px viewport width
- **AOS Animations** — Scroll-reveal effects on all sections
- **Form Validation** — Client-side validation with password strength indicator
- **Dashboard** — Admin/User view toggle, Chart.js charts, skeleton loaders
- **Blog Filter/Search** — JS-powered category filtering and text search
- **Pricing Toggle** — Monthly/Annual switch with animated price update
- **Countdown Timer** — Live countdown on Coming Soon page
- **Counter Animation** — Animated number counting on scroll
- **Accordion** — Smooth expand/collapse for FAQ sections
- **Semantic HTML5** — Proper heading hierarchy, ARIA labels, landmarks
- **SEO Ready** — Unique titles, meta descriptions, JSON-LD on Contact page

## Design Tokens

| Token | Value |
|-------|-------|
| Primary | `#2563EB` |
| Secondary | `#1E40AF` |
| Accent | `#38BDF8` |
| Background | `#F8FAFC` |
| Card | `#FFFFFF` |
| Border | `#E2E8F0` |
| Text Primary | `#0F172A` |
| Text Secondary | `#475569` |
| Heading Font | Space Grotesk |
| Body Font | Inter |
| Spacing Grid | 8px base |
| Nav Height | 72px desktop / 60px mobile |

## CDN Dependencies

- [Google Fonts](https://fonts.google.com/) — Inter + Space Grotesk
- [AOS](https://michalsnik.github.io/aos/) v2.3.4 — Scroll animations
- [Chart.js](https://www.chartjs.org/) v4.4.0 — Dashboard charts (dashboard page only)

---

## Required Image Assets

Place all images in `assets/images/`. Use WebP format for best performance.

### Branding & Favicons
| Filename | Description | Recommended Size |
|----------|-------------|-----------------|
| `logo.svg` | Main logo (navbar, light theme) | 36×36px SVG |
| `logo-white.svg` | White logo variant (footer, dark areas) | 36×36px SVG |
| `favicon-16x16.png` | Browser tab icon | 16×16px |
| `favicon-32x32.png` | Browser tab icon (retina) | 32×32px |
| `apple-touch-icon.png` | iOS home screen icon | 180×180px |
| `android-chrome-192x192.png` | Android/PWA icon | 192×192px |

### Hero & Page Backgrounds
| Filename | Description | Recommended Size |
|----------|-------------|-----------------|
| `hero-home.jpg` | Home page hero background (smart home interior) | 1920×1080px |
| `dashboard-mockup.jpg` | SaaS hero — app/dashboard screenshot | 800×500px |

### Service Images
| Filename | Description | Recommended Size |
|----------|-------------|-----------------|
| `service-lighting.jpg` | Smart lighting system / room with smart lights | 600×400px |
| `service-security.jpg` | Security camera / smart lock setup | 600×400px |
| `service-climate.jpg` | Smart thermostat / HVAC panel | 600×400px |
| `service-entertainment.jpg` | Home theatre / multi-room audio | 600×400px |
| `service-energy.jpg` | Energy monitoring dashboard / solar panels | 600×400px |
| `service-custom.jpg` | Custom smart home panel / wiring | 600×400px |
| `service-lighting-detail.jpg` | Large hero for service details page | 1200×500px |

### About Page
| Filename | Description | Recommended Size |
|----------|-------------|-----------------|
| `about-story.jpg` | Founders / team working (story section) | 600×500px |

### Team Members
| Filename | Description | Recommended Size |
|----------|-------------|-----------------|
| `team-marcus.jpg` | Marcus Chen headshot | 400×300px |
| `team-elena.jpg` | Elena Chen headshot | 400×300px |
| `team-jordan.jpg` | Jordan Mills headshot | 400×300px |
| `team-priya.jpg` | Priya Nair headshot | 400×300px |

### Testimonial Avatars
| Filename | Description | Recommended Size |
|----------|-------------|-----------------|
| `testimonial-avatar-1.jpg` | Michael R. avatar | 80×80px |
| `testimonial-avatar-2.jpg` | Sarah L. avatar | 80×80px |
| `testimonial-avatar-3.jpg` | James K. avatar | 80×80px |
| `testimonial-avatar-4.jpg` | Priya M. avatar | 80×80px |
| `testimonial-avatar-5.jpg` | Alex T. avatar | 80×80px |
| `testimonial-avatar-6.jpg` | Rachel W. avatar | 80×80px |
| `testimonial-avatar-7.jpg` | David C. avatar | 80×80px |
| `testimonial-avatar-8.jpg` | Mia S. avatar | 80×80px |

### Blog Images
| Filename | Description | Recommended Size |
|----------|-------------|-----------------|
| `blog-1.jpg` | Smart lighting guide thumbnail | 600×400px |
| `blog-1-detail.jpg` | Smart lighting article hero image | 1200×500px |
| `blog-2.jpg` | Home security tips | 600×400px |
| `blog-3.jpg` | Energy savings / bills | 600×400px |
| `blog-4.jpg` | Smart thermostat comparison | 600×400px |
| `blog-5.jpg` | Matter protocol / connectivity | 600×400px |
| `blog-6.jpg` | Voice assistants (Alexa/Google/Siri) | 600×400px |

### Auth Pages
| Filename | Description | Recommended Size |
|----------|-------------|-----------------|
| `auth-visual.png` | Login page visual (dashboard preview) | 500×400px |
| `auth-register-visual.png` | Register page visual (devices collage) | 500×400px |

### Dashboard
| Filename | Description | Recommended Size |
|----------|-------------|-----------------|
| `avatar-admin.jpg` | Admin user avatar (top-right) | 72×72px |

**Total: 37 image assets**

## Customisation

### Changing Colors
Edit CSS variables in `assets/css/style.css` under `:root { }` section.

### Changing Fonts
Update Google Fonts link in each HTML `<head>` and the `--font-body` / `--font-heading` variables.

### Adding Pages
Copy any existing page as a template. The navbar and footer are embedded in each file (no build step required).

## License

Template for commercial use. Replace branding, content, and images before deployment.
