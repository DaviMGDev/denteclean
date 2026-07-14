# DenteClean — Premium Dental Clinic Landing Page

A static, single-page website for a fictional premium dental clinic. Built with semantic HTML5, modern CSS (design tokens, Art Nouveau–inspired aesthetics), and vanilla JavaScript for interactive components. Zero frameworks, zero build step, zero backend.

---

## Features

- **Hero section** — Full-viewport splash with background image, dark vignette overlay, dual CTAs (booking modal + service scroll)
- **Services** — Three dental services (cleaning, whitening, implants) presented in an alternating editorial layout with inline badges and detail modals
- **About Us** — Split-screen composition with clinic imagery, mission statement, and patient testimonial
- **Meet the Team** — Three distinct per-member layouts (large prominent, compact text-first, offset image) with a stats credibility strip
- **Contact Form** — Two-column layout with contact info card (address, phone, email, hours) and appointment form with client-side validation and toast feedback
- **Footer** — Dark three-column footer with brand, quick links, and legal references
- **Modal dialog system** — Accessible, keyboard-friendly modal for service details and booking CTA
- **Toast notifications** — Non-intrusive feedback messages for user interactions
- **Scroll reveal** — Intersection Observer–based fade-in animations on scroll
- **Responsive** — Fluid typography (`clamp()`), two breakpoints (900px, 600px), mobile-first collapse

---

## Design System

The visual language reconciles **Art Nouveau structural elegance** with **clinical minimalism**:

- **Tokens-driven:** colors, typography, spacing, border radii, z-index — all defined as CSS custom properties in `:root`
- **DESIGN.md specification:** full design system documented in [`design/design.md`](design/design.md) (compatible with `@google/design.md` CLI)
- **InterSpec prototype:** wireframe defined in [`design/index.is`](design/index.is) using InterSpec notation
- **Key principles:** tonal depth over shadows, arched top-edge containers, botanical vine motifs, single gold accent per viewport, warm-neutral color palette

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Markup** | HTML5 (semantic, ARIA landmarks) |
| **Styling** | CSS3 (custom properties, `clamp()`, flexbox, `dvh` units) |
| **Interactivity** | JavaScript (ES6, Intersection Observer, IIFE pattern) |
| **Images** | WebP |
| **Design docs** | DESIGN.md + InterSpec |

**Zero runtime dependencies.** No npm, no bundlers, no frameworks.

---

## Project Structure

```
denteclean/
├── index.html              # Landing page
├── style.css               # Complete stylesheet (~1366 lines)
├── app.js                  # Client-side logic (~223 lines)
├── LICENSE                 # MIT license
├── design/
│   ├── design.md           # Full design system specification
│   └── index.is            # InterSpec wireframe
├── assets/
│   └── images/             # 9 WebP images (optimized)
└── .gitignore
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/DaviMGDev/denteclean.git

# Open directly — no build step required
open denteclean/index.html
```

Or simply serve the directory with any static file server:

```bash
npx serve denteclean/
```

---

## Preview

| Desktop | Tablet | Mobile |
|:---:|:---:|:---:|
| ![Desktop screenshot](screenshots/desktop-full.png) | ![Tablet screenshot](screenshots/tablet-full.png) | ![Mobile screenshot](screenshots/mobile-full.png) |

---

## License

[MIT](LICENSE) © 2026 DaviMGDev
