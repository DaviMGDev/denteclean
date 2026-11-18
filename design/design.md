---
version: alpha
name: Denteclean Design System
description: "A dental clinic design language: clinical minimalism carried by one arch motif, enamel near-whites, green-black ink and a single deep surgical green accent."
colors:
  primary: "#14251F"
  primary-hover: "#22402F"
  secondary: "#4A5A52"
  muted: "#55655C"
  tertiary: "#0E6B52"
  accent: "#0E6B52"
  accent-hover: "#0A5744"
  accent-soft: "#7FBFA8"
  paper: "#F7F9F8"
  surface: "#FFFFFF"
  surface-elevated: "#FBFCFB"
  surface-muted: "#EDF1EF"
  border: "#D7DEDA"
  border-strong: "#7F8C86"
  on-primary: "#F7F9F8"
  on-surface: "#14251F"
  error: "#A3341E"
  error-light: "#F7E7E3"
  success: "#16694F"
  success-light: "#E4F0EA"
  info: "#35586B"
  info-light: "#E6EEF2"
typography:
  display-xl:
    fontFamily: Newsreader
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.01em
  display-lg:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.01em
  display-md:
    fontFamily: Newsreader
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: 0em
  headline-lg:
    fontFamily: Instrument Sans
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Instrument Sans
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0em
  headline-sm:
    fontFamily: Instrument Sans
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0em
  body-lg:
    fontFamily: Instrument Sans
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  body-md:
    fontFamily: Instrument Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  body-sm:
    fontFamily: Instrument Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-lg:
    fontFamily: Instrument Sans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.04em
  label-md:
    fontFamily: Instrument Sans
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Instrument Sans
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.06em
  caption:
    fontFamily: Instrument Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.02em
  overline:
    fontFamily: Instrument Sans
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.1em
rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  arch-sm: 24px
  arch-md: 32px
  arch-lg: 48px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  5xl: 128px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    typography: "{typography.label-lg}"
    padding: 14px 28px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-primary-disabled:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.secondary}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    typography: "{typography.label-lg}"
    padding: 14px 28px
  button-secondary-hover:
    backgroundColor: "{colors.surface-muted}"
  button-accent:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    typography: "{typography.label-lg}"
    padding: 14px 28px
  button-accent-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-ghost:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    typography: "{typography.label-md}"
    padding: 8px 16px
  button-ghost-hover:
    backgroundColor: "{colors.surface-muted}"
  input-placeholder:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    rounded: "{rounded.sm}"
    typography: "{typography.body-md}"
    padding: 12px 16px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    typography: "{typography.body-md}"
    padding: 12px 16px
  input-focus:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    typography: "{typography.body-md}"
    padding: 12px 16px
  link-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.accent-hover}"
    rounded: "{rounded.xs}"
    typography: "{typography.label-lg}"
  focus-ring:
    backgroundColor: transparent
    textColor: "{colors.border-strong}"
    rounded: "{rounded.xs}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  card-elevated:
    backgroundColor: "{colors.surface-elevated}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  badge:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.full}"
    typography: "{typography.label-sm}"
    padding: 4px 12px
  badge-accent:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.full}"
    typography: "{typography.label-sm}"
    padding: 4px 12px
  chip:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    typography: "{typography.label-sm}"
    padding: 6px 14px
  chip-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    typography: "{typography.label-sm}"
    padding: 6px 14px
  tooltip:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    typography: "{typography.caption}"
    padding: 8px 12px
  divider:
    backgroundColor: "{colors.border}"
    height: 1px
  divider-ornament:
    backgroundColor: "{colors.accent}"
    height: 2px
  divider-glass:
    backgroundColor: "{colors.accent-soft}"
    height: 1.5px
  input-error:
    backgroundColor: "{colors.error-light}"
    textColor: "{colors.error}"
    rounded: "{rounded.sm}"
    typography: "{typography.body-sm}"
    padding: 12px 16px
  input-success:
    backgroundColor: "{colors.success-light}"
    textColor: "{colors.success}"
    rounded: "{rounded.sm}"
    typography: "{typography.body-sm}"
    padding: 12px 16px
  alert-info:
    backgroundColor: "{colors.info-light}"
    textColor: "{colors.info}"
    rounded: "{rounded.md}"
    typography: "{typography.body-sm}"
    padding: 12px 16px
---

# Denteclean Design System

## Overview

Denteclean's visual language is a treatment room, not a spa: sterile enamel
near-whites, green-black ink, and one deep surgical green used like an instrument
marking. The result should feel **exact, quiet and clinical** — not luxurious, not
warm, and never ornamental for its own sake.

The arch is the **structural** motif, not a decoration. The logo mark, the
section frames, the hero image and every eyebrow label use the same half-round
arch. The accent appears in one-pixel rules, small marks and hover states — never
as a surface fill. Together they signal care and precision without visual noise.

The system is designed for a dental clinic environment: patient-facing screens
(appointment booking, treatment information), in-office displays, and
administrative dashboards. Every token and rule should support **clarity,
accessibility, and a sense of calm**.

## Colors

Enamel and surgical green. The field is a sterile near-white with the faintest
green cast, taken from the enamel and plaster in the clinic's own photographs.
Text is a green-black ink and one deep surgical green carries the accent. Warmth
is the wrong signal for a treatment room, and the cream + gold + sage trio it
shipped with is the palette nearly every dental template lands on.

- **Primary (`#14251F`):** Green-black ink. Headlines, body text, filled button
  backgrounds. 15.1:1 against `paper`, well past WCAG AAA.

- **Primary Hover (`#22402F`):** Lifted ink for hover/active backgrounds.

- **Secondary (`#4A5A52`):** Secondary text, captions, supporting copy. 6.9:1 on
  `paper` — passes AA at any size.

- **Muted (`#55655C`):** Metadata, eyebrow labels, placeholders. 5.8:1 on `paper`.

- **Accent / Tertiary (`#0E6B52`):** Deep surgical green. The system's only
  chromatic signal: the emphasis line of the hero headline, the arch in the logo
  mark, the eyebrow arches, contact icons, link hovers, the focus tint and the
  divider ornament. 6.1:1 on `paper`, 5.7:1 on `surface-muted`, so it may carry
  text anywhere. Never a surface fill larger than a mark.

- **Accent Hover (`#0A5744`):** Deeper green for hover/active states.

- **Accent Soft (`#7FBFA8`):** The accent lifted for dark surfaces. 7.6:1 on
  `primary` — the only accent permitted on the ink panel.

- **Paper (`#F7F9F8`):** The page background. Near-white with a green-grey cast,
  matched to the enamel and plaster in the photography.

- **Surface (`#FFFFFF`):** Cards, form panels, modals. A full step above `paper`,
  so depth comes from tone and a hairline rather than from shadow.

- **Surface Elevated (`#FBFCFB`):** Nested containers and skeleton highlights.

- **Surface Muted (`#EDF1EF`):** Alternating section band, input wells, disabled
  surfaces.

- **Border (`#D7DEDA`):** The default hairline. Card edges, dividers, table
  rules. Decorative only — it sits below 3:1 and must never be the sole edge of
  an interactive control.

- **Border Strong (`#7F8C86`):** 3.3:1 against `paper`. Focus rings and any edge
  that has to meet WCAG 1.4.11.

- **State Colors:** `error` (`#A3341E`), `success` (`#16694F`), `info` (`#35586B`),
  each with a tinted `-light` variant, all meeting WCAG AA for their
  text-on-background pairings. State colour is never the only carrier of a state
  — pair it with text or an icon (WCAG 1.4.1).

### Color Application Rules

1. No screen shall use more than two hues: the ink/paper neutral ramp and the
   surgical green.
2. The accent must appear on **at most one interactive element per viewport**,
   and never as a surface fill.
3. Accent text or icons must meet 4.5:1 against their surface; use `accent-soft`
   on ink surfaces.
4. Error red shall never be used for non-error emphasis or decoration.
5. Backgrounds must always be drawn from the neutral/surface family — never from
   the accent or state palettes at full strength.
6. No hue gradients, gradient text, coloured glows or coloured shadows. A
   gradient is permitted only as a small tonal shift inside one neutral.

## Typography

Two families, both outside the Playfair Display / DM Sans default the page
shipped with. **Newsreader** (an editorial serif with an optical-size axis)
carries the editorial voice: the hero headline, the brand wordmark, team names
and the figures in the stat panel. A high-contrast Didone was tried first and
rejected: its hyphens, plus signs and hairline joins disappear at display sizes,
and the page's Portuguese copy needs both. **Instrument Sans** carries the interface:
navigation, buttons, form labels, body copy and every small label. The tension
is high-contrast display against a low-contrast grotesque — a drawing pair, not
a template pair.

`font-size-adjust: from-font` is set on `body` so the Georgia serif fallback and
any system sans hold the web fonts' x-height while they load. Baseline since
July 2024; browsers without support ignore the declaration.

### Type Scale

| Token | Family | Size | Weight | Line | Spacing | Use |
|-------|--------|------|--------|------|---------|-----|
| `display-xl` | Newsreader | 64px | 400 | 1.05 | -0.01em | Hero headings, brand statements |
| `display-lg` | Newsreader | 48px | 400 | 1.1 | -0.01em | Page titles, section heroes |
| `display-md` | Newsreader | 36px | 400 | 1.15 | 0 | Sub-page titles, feature headers |
| `headline-lg` | Instrument Sans | 28px | 500 | 1.25 | -0.01em | Card titles, modal headings |
| `headline-md` | Instrument Sans | 22px | 500 | 1.3 | 0 | Section headers, form group labels |
| `headline-sm` | Instrument Sans | 18px | 500 | 1.35 | 0 | List group headers, sidebar titles |
| `body-lg` | Instrument Sans | 18px | 400 | 1.6 | 0 | Lead paragraphs, treatment descriptions |
| `body-md` | Instrument Sans | 16px | 400 | 1.6 | 0 | Default body, form labels, table cells |
| `body-sm` | Instrument Sans | 14px | 400 | 1.55 | 0 | Secondary text, metadata, legal |
| `label-lg` | Instrument Sans | 14px | 500 | 1.2 | 0 | Button text, navigation, tab labels |
| `label-md` | Instrument Sans | 12px | 500 | 1.2 | 0 | Input labels, table headers, badges |
| `label-sm` | Instrument Sans | 11px | 500 | 1.2 | 0 | Chips, tags, micro-labels |
| `caption` | Instrument Sans | 12px | 400 | 1.4 | 0.02em | Image captions, footnotes, timestamps |
| `overline` | Instrument Sans | 10px | 500 | 1.2 | 0.02em | Section overlines, category markers |

### Typography Rules

1. **Newsreader** is display only: 20px and above, except the wordmark lockup,
   which sets it at 1.35rem beside the logo mark.
2. Hierarchy comes from size and colour, not weight. Nothing above weight 500,
   with 600 at most for a single rare emphasis.
3. Body text shall never be set lighter than `body-sm` (14px) at any breakpoint.
4. Labels are sentence case with normal tracking. No `text-transform: uppercase`
   and no wide letter-spacing — that combination is the clearest template tell.
5. Line-height for body tokens is unitless and always `1.5` or above — never
   compressed for aesthetic effect.
6. Font weight on Instrument Sans shall never drop below 400. No light or thin
   weights.
7. No italic styles shall be used in this system. Emphasis is conveyed through
   colour and size instead.
8. Small text never carries negative letter-spacing. Tight tracking belongs to
   display sizes only.
9. Figures use `font-variant-numeric: tabular-nums` where they sit in a column.

## Layout

The layout model is built on a **12-column fluid grid** with a maximum content
width of 1200px. A secondary 8-column grid serves form-heavy layouts (patient
intake, treatment plans) where larger column proportions improve label/input
pairing.

### Spacing Scale

| Token | Value | Use |
|-------|-------|-----|
| `xs` | 4px | Icon-to-label gaps, inline separation |
| `sm` | 8px | Tight component padding, list item gaps |
| `md` | 16px | Default padding, card internals, form row gaps |
| `lg` | 24px | Section padding, card margins, component separation |
| `xl` | 32px | Page section spacing, modal padding |
| `2xl` | 48px | Hero section breathing room |
| `3xl` | 64px | Major content block separation |
| `4xl` | 96px | Page-level section breaks |
| `5xl` | 128px | Full-viewport hero spacing |

### Structural Rules

1. Every content block must be separated from its neighbor by at least `lg` (24px).
   Micro-spacing below `md` (16px) is for intra-component use only.
2. The primary content column on desktop shall be 8 of 12 grid columns, leaving
   4 columns for asymmetric negative space on one side. Center-aligned layouts
   are the exception, not the rule.
3. Form labels sit above inputs, never beside them, ensuring a single vertical
   reading axis. Label-to-input gap: `xs` (4px). Input-to-input gap: `md` (16px).
4. All screens must preserve a minimum 24px safe area from the viewport edge.
5. Asymmetric layouts are preferred over centered symmetry — the Art Nouveau
   voice manifests in unbalanced yet stable compositions.

## Elevation & Depth

Shadows are deliberately absent from this system. Depth is conveyed through
**tonal layering and ornamental rules**, aligning with the Art Nouveau principle
that structure should be visible through surface rather than cast in silhouette.

### Depth Cues

1. **Tonal contrast:** Cards sit on `surface` against a `paper`
   page background. Elevated cards use `surface-elevated` (`#F7F7F2`) nested
   inside `surface` — a 1% luminosity shift that reads as a physical layer
   without perceptible shadow.
2. **Ornamental rules:** A 1px accent line (`divider-ornament`) marks the
   boundary between major page zones (hero/body, header/content). It functions
   as a structural seam, not decoration.
3. **Border layers:** Modals and drawers use a 1px `border` on all sides,
   distinguishing them from shadowless surfaces below.
4. **No box-shadow tokens exist.** Depth is a surface step plus a hairline. The
   one exception is a neutral, soft shadow under the hero image frame, which
   lifts it off the paper.
   use `0px 0px 0px 0px transparent`. Depth is achieved through color,
   not simulated light.
5. **Background texture:** A subtle grain texture is applied across the entire
   page background. This is a material treatment — not a decorative overlay.
   It gives the `paper` surface a tactile, paper-like quality without
   introducing visible pattern. Implementation uses an SVG `<filter>` with
   `feTurbulence` at 3–4% opacity, applied as a full-viewport pseudo-element
   with `pointer-events: none`. The grain is uniform across both light content
   sections and the dark hero — it adds depth without calling attention to itself.
   It paints at the base layer (`--z-base`) so it sits above section fills but
   below the header, drawers, dialogs and toasts: raising the opacity can never
   paint grain over a modal.

### Z-Index Scale (Implementation Reference)

| Layer | z-index | Use |
|-------|---------|-----|
| Base | 0 | Page content |
| Overlay | 100 | Sticky headers, floating action buttons |
| Drawer | 200 | Slide-out panels |
| Modal | 300 | Dialog overlays |
| Tooltip | 400 | Hover tooltips, popovers |
| Notification | 500 | Toast messages |

## Shapes

The shape language rejects the hard rectangle in favor of **soft arches and
organic terminals**. This is where Art Nouveau most visibly shapes the system
without becoming decorative.

### Corner Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `none` | 0px | Data tables, code blocks, diagnostic readouts |
| `xs` | 2px | Icon terminals, focus rings |
| `sm` | 4px | Input fields, dropdowns, compact cards |
| `md` | 8px | Buttons, standard cards, modals |
| `lg` | 12px | Large cards, hero containers, image frames |
| `xl` | 16px | Feature cards, service panels |
| `arch-sm` | 24px | Small arched frames, header bars, navigation tabs |
| `arch-md` | 32px | Section arch containers, testimonial panels |
| `arch-lg` | 48px | Hero arches, brand containers, large framed images |
| `full` | 9999px | Badges, chips, status indicators |

### Shape Rules

1. Arch tokens (`arch-sm` through `arch-lg`) must be applied as `border-radius`
   on the **top edge only** (`border-radius: 24px 24px 0 0`), producing an
   arched aperture — the system's defining structural motif. Bottom edges remain
   straight.
2. Rectangular `none` corners are reserved for data-dense surfaces where
   precision reading is required (tables, charts, diagnostic panels). They
   shall never appear on patient-facing interactive elements.
3. No component may combine `none` corners with any `arch-*` token in a single
   container — the tension is too severe.
4. `full` rounding is reserved for elements under 40px in height: badges, chips,
   status dots. It shall not be used on cards or containers.

### Botanical Motif Usage

A single botanical line motif — a continuous, single-stroke vine or stem path —
may appear as a structural accent in these locations only:

- As a decorative rule beneath the primary page heading (replacing `divider-ornament`
  when a warmer tone is desired). Stroke: 1.5px, color: `accent-soft` at 30%
  opacity.
- As a subtle background watermark on hero sections. Opacity: 4–6%, color:
  `tertiary` or `accent-soft`.
- As a corner detail on large image frames. Stroke: 2px, color: `accent`
  at 50% opacity, limited to one corner per frame.

The motif itself shall be a simplified, geometric interpretation of a vine —
never a photorealistic or hand-drawn rendering. It must read as a structural
line, not an illustration. SVG path only; no raster images.

## Components

Every component below references tokens from the frontmatter. Use `{path.token}`
references in implementation to guarantee consistency.

### Buttons

Three tiers of button, differentiated by visual weight. Only one primary
(ink-filled) action per screen; the accent is never a button fill in this system.

| Variant | Background | Text | Use |
|---------|------------|------|-----|
| `button-accent` | Ink filled | `on-primary` | Single highest-priority action per screen |
| `button-primary` | Ink filled | `on-primary` | Default primary action |
| `button-secondary` | Transparent with 1px `border` | Ink | Paired alternative, form cancellation |
| `button-ghost` | Transparent | Ink | Tertiary actions, nav items, icon buttons |

All buttons share `rounded: md` (8px) and a minimum hit area of 44×44px.
Padding is 14px vertical, 28px horizontal for standard buttons and 8px/16px
for ghost.

**States:** Each variant defines `-hover` backgrounds. Focus state uses a 2px
`border-strong` outline offset 2px from the button edge. Disabled state uses
`surface-muted` background with `secondary` text.

### Form Controls

- **Input/Textarea:** `surface` background, 1px `border-strong` (3.2:1, so the
  control edge meets WCAG 1.4.11), `rounded: sm` (4px), `typography: body-md`,
  padding 12px/16px. On focus the border shifts to `accent` with a green tint
  ring at 26% opacity.
- **Select/Dropdown:** Matches input styling. Custom chevron icon: 1.5px stroke
  weight, 16×16px, color `secondary`.
- **Checkbox/Radio:** 20×20px hit area. Unchecked: 1.5px `border` stroke,
  `rounded: xs` (2px). Checked: `primary` fill, `paper` checkmark, 2px stroke.
  Radio uses `rounded: full`.
- **Label:** `typography: label-md`, color `primary`, sits 4px above the input.

### Cards

Two levels of card elevation:

| Token | Background | Radius | Padding | Border |
|-------|------------|--------|---------|--------|
| `card` | `surface` | `lg` (12px) | `xl` (32px) | 1px `border` |
| `card-elevated` | `surface-elevated` | `lg` (12px) | `xl` (32px) | 1px `border` |

Card headers use `headline-lg` with an optional accent rule (1px, `accent`,
48px wide, left-aligned) placed 8px below the title. Cards
shall never carry the arch corner radius — arch frames are structural page
elements, not container treatments.

### Badges & Chips

- **Badge:** `rounded: full`, `typography: label-sm`, 4px/12px padding.
  In this build badges are quiet text facts: no fill, no pill, no border —
  `body-sm` in `secondary`, separated by a middle dot. Colour is reserved for
  states that genuinely need attention.
- **Chip:** `rounded: full`, `typography: label-sm`, 6px/14px padding.
  Default uses `surface-muted` background. Selected state uses `primary`
  background with white text. Used for filter tags and multi-select options.

### Dividers & Ornaments

- **Standard divider:** 1px `border`, full width, 16px vertical margin.
- **Ornamental divider:** 1px `accent` at 70% opacity, full width, used once
  between the hero and the first section.
  Limited to one per page section transition.
- **Soft divider:** 1.5px `accent-soft` at 50% opacity, full width, 16px
  vertical margin.
  Used for subtle separation within card bodies or form sections.
- **Section arch rule:** A semi-elliptical SVG path, 2px stroke in
  `accent-soft` at 25% opacity, spanning the content column width. Used to
  separate hero from body content on landing pages only.

### Form State Variants

- **Input error:** `error-light` background, `error` text/border. Used when
  validation fails — replaces the standard input appearance entirely.
- **Input success:** `success-light` background, `success` text/border. Used
  for confirmed-valid states where positive feedback is required (e.g.,
  insurance verification passed).
- **Alert info:** `info-light` background, `info` text. Used for informational
  banners, system messages, and non-critical notifications. Rounded `md` (8px),
  typography `body-sm`, padding 12px/16px.

### Navigation

Primary navigation items use `typography: label-lg`, color `secondary`. Hover
shifts colour to `primary` over a 7% ink tint; there is no underline indicator
and no coloured fill.

### Tooltip

`backgroundColor: primary`, `textColor: on-primary`, `rounded: sm` (4px),
`typography: caption`, padding 8px/12px. Appears 8px above the trigger element.
No arrow/pointer — the rounded rectangle alone provides sufficient affordance.

### Contrast Note on Transparent Backgrounds

Several components (`button-secondary`, `button-ghost`) specify `transparent`
as their background color. In practice, they inherit the background of their
parent container (typically `surface`, `paper`, or `surface-muted`),
against which their `primary` ink text meets WCAG AAA standards. When placing
these components on any non-standard background, verify the resulting text
contrast against the actual rendered surface.

### Focus Ring

All interactive elements share a single focus style: 2px solid outline in
`border-strong`, offset 2px from the element edge. No color variation by
component — consistency is the priority for accessibility.

## Iconography

Icons are custom-produced for this system. They must read as **refined medical
utility** — precise enough for clinical use, warm enough for patient comfort.

### Production Specifications

| Property | Value |
|----------|-------|
| Grid size | 24 × 24px |
| Live area | 20 × 20px (2px internal padding) |
| Stroke weight | 1.5px |
| Stroke alignment | Center |
| Stroke caps | Round |
| Stroke joins | Round |
| Corner radius | 2px (applied to any angled join that exceeds 60°) |
| Fill rule | Outlined by default; filled variants for `selected`/`active` states only |
| Minimum stroke gap | 2px between parallel strokes |
| Export format | SVG, optimized (no inline styles, viewBox `0 0 24 24`) |

### Style Guidance

1. Icons are **line-art only**. No filled shapes in the default state. No
   gradients, no opacity variations within a single icon.
2. All icon paths must use continuous strokes — avoid dashed lines, dotted
   lines, or broken paths.
3. Corners are softly rounded (2px radius) but never fully circular. The
   terminal should feel organic without reading as "bubbly."
4. Medical cross symbols shall use the Swiss cross proportions (equal-length
   arms, arm width = 20% of arm length), not the Red Cross emblem.
5. Anatomical references (tooth shapes, gum lines) must be simplified to
   geometric forms — a tooth icon should read as a rounded arch form, not a
   literal illustration.
6. **Never use emoji or photographic icons.** All icons must be produced from
   the SVG spec above.

### Icon Color Mapping

| Context | Stroke Color |
|---------|-------------|
| Default, inactive | `secondary` |
| Active, selected | `primary` |
| On dark backgrounds (primary ink) | `on-primary` |
| Error states | `error` |
| Success states | `success` |
| Disabled | `border` |

## Imagery

Photography and illustration in this system must reinforce the **calm, clinical,
human** tone. Patients are the subject; the clinic is the context.

### Photography Guidelines

1. **Color treatment:** Leave the photographs as shot. The palette was moved to
   a near-white enamel paper precisely so the blues and greens in the imagery
   sit beside it instead of fighting it. Do not warm-grade them.
2. **Composition:** Subjects (patients, practitioners, facilities) must occupy
   no more than 60% of the frame. The remaining 40% is negative space — a clean
   wall, a soft-focus background, an architectural detail. This breathing room
   is the visual translation of clinical calm.
3. **Depth of field:** Shallow (f/2.8 equivalent or wider). Backgrounds should
   blur into soft tonal washes, never compete with the subject.
4. **Lighting:** Natural, diffused daylight. No direct flash, no dramatic
   chiaroscuro, no backlit silhouettes. The light must feel like a sunlit
   consultation room.
5. **Subject posture:** Patients should appear relaxed, never in treatment
   positions. Practitioners should appear engaged, never looming over the
   camera.
6. **Aspect ratios on web:** 16:9 for hero images, 4:3 for card thumbnails,
   1:1 for practitioner portraits. All images must be delivered at 2x
   resolution for Retina displays.

### Botanical Illustration Usage

Botanical line illustrations (simplified vines, leaf forms, stem paths) may
appear in these contexts only:

- Not used in this build. The arch, not the vine, is the motif; botanical
  watermarks were removed as decoration.
- Decorative section rules (SVG path, 1.5px stroke, `accent-soft` at 30%)
- Corner details on image frames (SVG, 2px stroke, `accent` at 50%)

These illustrations must be **geometrically reduced** — a vine should read as
three to five connected arcs, not a botanical study. The goal is a structural
line that evokes organic growth, not a picture of a plant. All botanical assets
must be delivered as inline SVG with no raster fallback.

### Image Frame Treatments

Images in cards and heroes must be contained within frames that echo Art
Nouveau structure:

- **Hero images:** Rendered inside a soft-arch container (`arch-lg` on top
  edge only), framed by a 1px `border` rule. The arch ascends; the base is
  flat. This is the system's defining spatial gesture.
- **Card images:** `rounded: md` (8px) on all corners with a 1px `border`.
- **Portrait images:** Circular crop (`rounded: full`) with a 2px `accent`
  ring — the only place the accent forms a full perimeter.
- **No image shall appear without a containing frame.** Unbounded imagery is
  the single fastest way to erode the system's structural voice.

## Do's and Don'ts

### Do

- Do use the arch corner radius tokens (`arch-sm` through `arch-lg`) as
  top-edge-only arches on structural page elements — they are the system's
  signature gesture.
- Do let the `paper` page background (not a card or border) carry the
  majority of every screen's surface area. White space is the system's primary
  material.
- Do place the accent on marks, rules and single figures — never on more
  than one interactive element per viewport.
- Do let the arch carry the identity: logo mark, section frames, hero image and
  eyebrow bullets all use the same half-round.
- Do use the `label-*` token family for all buttons, navigation, tabs, and
  form inputs. UI chrome text should never use a `body-*` token.
- Do maintain the 24px viewport safe area on all sides, at all breakpoints.
- Do deliver every icon as a 24×24px SVG with 1.5px round-capped strokes.
- Do test all text/background pairings against WCAG AA (4.5:1 for normal text,
  3:1 for large text). The primary/white pair exceeds AAA — do not dilute it.

### Don't

- Don't use drop shadows, box shadows, or any simulated depth via shadow.
  Depth is tonal, not luminous.
- Don't apply the `arch-*` corner radius to cards, buttons, inputs, or badges.
  Arch tokens belong to structural frames and page sections only.
- Don't use the accent below 4.5:1. On `paper` it measures 6.1:1 and is safe at
  any size; on `surface-muted` it is 5.7:1. On ink use `accent-soft`, never the
  accent itself.
- Don't place more than one botanical motif on a single viewport. One vine
  watermark or one ornamental rule is structural; two is decoration.
- Don't use italic, oblique, light (300), or thin (100) font weights anywhere
  in the system. Instrument Sans at 400–500 (600 for a rare emphasis); Bodoni
  Moda at 400–500 only.
- Don't let the display face (Newsreader) run in body copy, or below 20px
  outside the wordmark lockup.
- Don't combine `rounded: none` elements with `arch-*` elements in the same
  visual zone — the contrast between sharp data tables and soft arches must
  be mediated by spatial distance (at least `2xl`, 48px).
- Don't use photography with cool blue color grading. All imagery must carry
  the warm-neutral treatment defined in the Imagery section.
- Don't exceed three type sizes on a single screen. The scale has 14 steps for
  system-wide flexibility, not per-screen variety.
- Don't implement without linting this document first. Run `design.md lint
  design.md` and resolve every error before handing off to implementation.
