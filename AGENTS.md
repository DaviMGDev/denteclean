# Repository Guidelines

## Project Structure

DenteClean is a static, single-page clinic website built with HTML, CSS, and vanilla JavaScript. The page markup is in `index.html`, styles and design tokens are in `style.css`, and interactions (modals, form feedback, and scroll reveals) are in `app.js`. Store images in `assets/images/`; keep design references in `design/` and preview captures in `screenshots/`. There is no source build tree or configured test directory.

## Development

No install or build step is required. Open `index.html` directly, or serve the repository root locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. Stop the server with Ctrl+C. There are no package scripts, lint commands, or automated test runner configured in this repository.

## Style and Changes

Use semantic HTML and preserve accessible labels, landmarks, keyboard behavior, and reduced-motion considerations. Keep CSS values aligned with the custom properties near the top of `style.css`; add responsive rules alongside the existing breakpoints. Use plain ES6 JavaScript and follow the existing IIFE organization in `app.js`. Indent HTML, CSS, and JavaScript consistently with the surrounding file (two spaces); use descriptive kebab-case for CSS classes and IDs. Keep the website’s user-facing copy in Brazilian Portuguese.

When changing images, update their references in `index.html` and retain optimized, appropriately sized assets. Update relevant design documentation in `design/` when changing shared visual rules.

## Verification

For each UI change, serve the site locally and inspect the affected section at desktop and mobile widths. Check navigation, modals, and form feedback when their behavior changes, and confirm keyboard access and visible focus states. Automated browser tests are not currently set up; do not assume a test command exists.

## Commits and Pull Requests

Recent history uses short, imperative Conventional Commit subjects, such as `feat: ...`, `fix(ui): ...`, and `docs(design): ...`. Follow that pattern and keep each commit focused. Pull requests should explain the user-facing change, list manual verification performed, link any related issue, and include before/after screenshots for visual changes. Keep documentation in English and Portuguese aligned when editing project guidance in either README.
