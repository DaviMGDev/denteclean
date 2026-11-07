# DenteClean Website Template

A configurable, static clinic website built with HTML, CSS, and vanilla JavaScript. All clinic-facing copy, contact details, images, and accessibility text live in `site.config.json`; HTML and JavaScript define the reusable structure and behavior.

## Preview

Requires Node.js 18 or newer. From this directory run:

```bash
npm run preview
```

Open `http://127.0.0.1:4173`. The local server is only for preview; the website itself is static.

## Customize

Edit `site.config.json` directly, or run `npm run setup` for prompts to update clinic name, phone, WhatsApp, email, and address. Setup preserves existing content and blank answers. The JSON file is documented by its keys and example values; `site.config.json.example` is a starter copy.

The config contains clinic-facing content only. Static page text is in `copy` (original text snippet → replacement), dynamic dialog and form feedback in `ui`, and alt text, placeholders, accessible labels, titles, and toast notices in `attributeText`. `attributes` supports selector-specific text attribute overrides. `images` maps selectors to local image paths. Clinic identity and contact values are in `clinic`; social and other destinations are in `clinic.social` and `links`, with `links.whatsapp` setting the WhatsApp action. `services`, `team`, and `stats` are repeatable lists that can be added, removed, or reordered. Services use `title`, `description`, `image`, `alt`, `badges`, and `dialog`; team entries use `name`, `role`, `description`, `image`, and `badges`; stats use `value` and `label`. Page structure and appearance are defined in the HTML and CSS. Adding structural components requires code changes.

The appointment form is a front-end demonstration only: it validates fields and displays simulated feedback, but sends no information. Use the displayed phone or WhatsApp link to make real appointments.

Invalid values are reported on the page with the config path to fix. Colors use six-digit hex values, telephone values are checked, and external destinations must use HTTP or HTTPS. Contact actions and booking dialogs use configured clinic details.

## Build

```bash
npm run build
```

The self-contained static site is written to `dist/`. Serve that directory with any static web server, for example `npm run preview -- dist`.

## Project structure

```text
index.html              Page structure
style.css               Styling and responsive layout
app.js                  Interactions and config rendering
site.config.json        Clinic-specific content
site.config.json.example Starter config
scripts/                Preview, build, and setup utilities
assets/images/          Website images
```

There is no automated test suite configured. For visual verification, preview at desktop and mobile widths and check navigation, dialogs, contact links, and form feedback.

## License

[MIT](LICENSE) © 2026 DaviMGDev
