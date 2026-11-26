# Repository Guidelines

## Project Structure

DenteClean is a configurable, static, single-page clinic website built with HTML, CSS, and vanilla JavaScript. Page content (copy, contact details, images, and accessibility text) is defined in `site.config.json`; `index.html` holds the structure, `style.css` the styles and design tokens, and `app.js` the rendering, modals, form feedback, and scroll reveals. Reusable scripts live in `scripts/`. Store images in `assets/images/`; keep design references in `design/`, preview captures in `screenshots/`, and product context in `PRODUCT.md`. There is no configured test directory.

## Development

Requires Node.js 18 or newer; there are no dependencies to install. Serve the site over HTTP rather than opening `index.html` directly, because `app.js` fetches `site.config.json`:

```bash
npm run preview
```

Then visit `http://127.0.0.1:4173`; set `PORT` to use another port. `npm run build` writes the static site to `dist/`, and `npm run setup` prompts for the core clinic contact fields. There are no lint commands or automated test runner configured.

## Style and Changes

Use semantic HTML and preserve accessible labels, landmarks, keyboard behavior, and reduced-motion considerations. Keep CSS values aligned with the custom properties near the top of `style.css`; add responsive rules alongside the existing breakpoints. Use plain ES6 JavaScript and follow the existing IIFE organization in `app.js`. Indent HTML, CSS, and JavaScript consistently with the surrounding file (two spaces); use descriptive kebab-case for CSS classes and IDs. Keep the website’s user-facing copy in Brazilian Portuguese.

When changing images, update their references in `site.config.json` and `index.html` and retain optimized, appropriately sized assets. Update relevant design documentation in `design/` when changing shared visual rules.

## Verification

For each UI change, serve the site with `npm run preview` and inspect the affected section at desktop and mobile widths; the page reports invalid config values with the path to fix. Check navigation, modals, contact links, and form feedback when their behavior changes, and confirm keyboard access and visible focus states. Refresh the captures in `screenshots/` after visual changes. Automated browser tests are not currently set up; do not assume a test command exists.

## Commits and Pull Requests

Recent history uses short, imperative Conventional Commit subjects, such as `feat: ...`, `fix(ui): ...`, and `docs(design): ...`. Follow that pattern and keep each commit focused. Pull requests should explain the user-facing change, list manual verification performed, link any related issue, and include before/after screenshots for visual changes. Keep documentation in English and Portuguese aligned when editing project guidance in either README.
