# DenteClean — Premium Dental Clinic Landing Page

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Language: pt-BR](https://img.shields.io/badge/content-pt--BR-green.svg)](#-language)

> ⚠️ **Language**: The site content is written in **Brazilian Portuguese**. This README documents the project in English. A [Portuguese version](README.pt-BR.md) is also available.

A static, single-page website for a fictional premium dental clinic. HTML5, CSS3, and vanilla JavaScript. **No frameworks. No build step. No backend.**

---

## Preview

| Desktop | Tablet | Mobile |
|:---:|:---:|:---:|
| ![Desktop preview](screenshots/desktop-full.png) | ![Tablet preview](screenshots/tablet-full.png) | ![Mobile preview](screenshots/mobile-full.png) |

---

## Table of Contents

- [Quick Start](#quick-start)
- [What's on the Page](#whats-on-the-page)
- [Technical Features](#technical-features)
- [Customization](#customization)
- [Design System](#design-system)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Browser Support](#browser-support)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## Quick Start

```bash
git clone https://github.com/DaviMGDev/denteclean.git
open denteclean/index.html
```

Or serve with any static file server:

```bash
npx serve denteclean/
python3 -m http.server -d denteclean/
```

No `npm install`, no build step, no dependencies.

---

## What's on the Page

- **Hero** — Full-viewport header with background image, dark overlay, two CTAs for booking and service discovery.
- **Services** — Three procedures (cleaning, whitening, implants) in alternating text/image layouts with keyword badges and detail modals.
- **About Us** — Split-screen section with clinic photo, mission statement, founder quote, and patient testimonial.
- **Team** — Three member profiles in distinct layouts (large portrait, compact text-first, offset image) plus a stats credibility strip.
- **Contact** — Two-column layout with clinic info card (address, phone, email, hours) and an appointment form.
- **Footer** — Three-column dark footer with brand, quick links, and legal references.

---

## Technical Features

- **Modal dialog system** — Accessible, keyboard-navigable (`Escape` to close, focus trap, backdrop click). Renders service details and booking CTA dynamically.
- **Client-side form validation** — Inline error states with screen-reader-visible messages. Simulated submission with toast feedback.
- **Toast notifications** — Non-intrusive, animated feedback for user interactions. Auto-dismiss after 3 seconds. ARIA `aria-live="polite"` container.
- **Scroll reveal animations** — Intersection Observer–based fade-in with staggered delays. Graceful fallback for older browsers.
- **Responsive design** — Fluid typography with `clamp()`, two breakpoints at 900px and 600px, all multi-column layouts collapse to stacked single-column on mobile.
- **Skip link** — Hidden "skip to content" link becomes visible on focus for keyboard navigation.
- **Viewport-safe scroll container** — Root element uses `100dvh` with fallback to `100vh`, handles mobile browser chrome correctly.

---

## Customization

### Replace Clinic Information

All text content lives in `index.html`. Search and replace the following to adapt for a real clinic:

- Clinic name: `DenteClean` → your name (title tag, hero, footer)
- Phone: `(41) 99842-0142` → your number (contact section, booking modal in `app.js`)
- Email: `contato@denteclean.com.br` → your email
- Address: `Rua Serenidade, 123, Sala 200` → your address (line ~440 in `index.html`)
- Hours: Edit the schedule text in the contact info card
- Team members: Replace names, roles, descriptions, and badges in the team section
- Social links: Update the toast messages in the social link buttons (real links not implemented)

### Replace Images

All images live in `assets/images/`. Replace any `.webp` file while keeping the same filename, or update the `src` attribute in `index.html`. Supported format: WebP.

### Change Colors

All colors are defined as CSS custom properties in the `:root` block at the top of `style.css`. Edit the values directly:

```css
--primary: #1B1F22;       /* Dark ink — headings, buttons */
--accent-gold: #C4A747;   /* Accent color — primary CTAs */
--tertiary: #3A4F41;      /* Sage green — section labels */
--neutral-warm: #F5F3EF;  /* Page background */
```

### Change Fonts

Google Fonts are loaded in the `<head>` of `index.html`. Swap the family names there, then update the `--font-display` and `--font-body` variables in `style.css`.

---

## Design System

The visual language is documented in two formats:

- **[`design/design.md`](design/design.md)** — A complete design system specification in [DESIGN.md](https://github.com/google/design.md) format. Defines colors, typography, spacing, elevation, shapes, components, iconography, and imagery guidelines.
- **[`design/index.is`](design/index.is)** — A wireframe prototype in [InterSpec](https://github.com/anthropics/interspec) notation describing the layout, interactions, and responsive behavior of every section.

Key principles: tonal depth instead of box shadows, top-edge arch containers, single gold accent per viewport, botanical line motifs as structural accents.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic, ARIA landmarks) |
| Styling | CSS3 (custom properties, `clamp()`, flexbox, `dvh`) |
| Scripting | JavaScript (ES6, Intersection Observer, IIFE) |
| Images | WebP |
| Design docs | DESIGN.md + InterSpec |
| Testing | Playwright |

**Zero runtime dependencies.**

---

## Project Structure

```
denteclean/
├── index.html              # Single-page site
├── style.css               # Stylesheet with design tokens
├── app.js                  # Modals, form validation, scroll reveal, toasts
├── LICENSE                 # MIT
├── design/
│   ├── design.md           # Design system specification
│   └── index.is            # InterSpec wireframe
├── assets/
│   └── images/             # 9 WebP images
├── tests/
│   └── playwright/         # E2E test structure
├── screenshots/            # README preview images
└── .gitignore
```

## Image Optimization

Raster images were converted from PNG to WebP using ImageMagick (quality 85, stripped metadata), reducing total size from 3.8 MB to 268 KB — a **93% reduction**.

---

## Browser Support

Tested and working in:

- Chrome 90+
- Firefox 90+
- Safari 15+
- Edge 90+

Requires support for CSS custom properties, `clamp()`, Intersection Observer, and `dvh` units. No IE11 support.

---

## Testing

The `tests/playwright/` directory contains the initial structure for end-to-end browser tests using [Playwright](https://playwright.dev/).

---

## Contributing

This is a personal portfolio project. Bug reports and suggestions are welcome via GitHub issues. For substantial changes, open an issue first to discuss what you'd like to change.

---

## License

[MIT](LICENSE) © 2026 DaviMGDev
