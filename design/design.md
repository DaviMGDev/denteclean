---
version: alpha
name: Denteclean Design System
description: A dental clinic design language blending Art Nouveau structural elegance with clinical minimalism — organic arches, botanical restraint, and gilded accents against crisp whites and a neutral palette.
colors:
  primary: "#1B1F22"
  primary-hover: "#2E3338"
  secondary: "#6B6D6F"
  tertiary: "#3A4F41"
  accent-gold: "#C4A747"
  accent-gold-hover: "#D4BA5A"
  accent-glass: "#8BA59B"
  neutral-warm: "#F5F3EF"
  neutral-cool: "#F2F4F5"
  surface: "#FFFFFF"
  surface-elevated: "#FAFAF8"
  surface-muted: "#EDEDEA"
  border: "#DCDAD5"
  border-strong: "#C4C2BC"
  on-primary: "#FFFFFF"
  on-surface: "#1B1F22"
  error: "#C23B22"
  error-light: "#FCEEEB"
  success: "#1F5B3E"
  success-light: "#EBF5F0"
  info: "#3B6F8C"
  info-light: "#EDF3F7"
typography:
  display-xl:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.01em
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.01em
  display-md:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: 0em
  headline-lg:
    fontFamily: DM Sans
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.01em
  headline-md:
    fontFamily: DM Sans
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0em
  headline-sm:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0em
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  body-sm:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  label-lg:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.04em
  label-md:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.05em
  label-sm:
    fontFamily: DM Sans
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.06em
  caption:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.02em
  overline:
    fontFamily: DM Sans
    fontSize: 10px
    fontWeight: 600
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
    backgroundColor: transparent
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    typography: "{typography.label-lg}"
    padding: 14px 28px
  button-secondary-hover:
    backgroundColor: "{colors.neutral-cool}"
  button-accent:
    backgroundColor: "{colors.accent-gold}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    typography: "{typography.label-lg}"
    padding: 14px 28px
  button-accent-hover:
    backgroundColor: "{colors.accent-gold-hover}"
    textColor: "{colors.primary}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    typography: "{typography.label-md}"
    padding: 8px 16px
  button-ghost-hover:
    backgroundColor: "{colors.neutral-cool}"
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
    backgroundColor: "{colors.neutral-warm}"
    textColor: "{colors.tertiary}"
    rounded: "{rounded.full}"
    typography: "{typography.label-sm}"
    padding: 4px 12px
  badge-accent:
    backgroundColor: "{colors.accent-gold}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    typography: "{typography.label-sm}"
    padding: 4px 12px
  chip:
    backgroundColor: "{colors.neutral-cool}"
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
    backgroundColor: "{colors.accent-gold}"
    height: 2px
  divider-glass:
    backgroundColor: "{colors.accent-glass}"
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

Denteclean's visual language reconciles two seemingly opposed traditions: the
organic, flowing structuralism of Art Nouveau and the disciplined restraint of
clinical minimalism. The result is a design system that feels **calm, trustworthy,
and human** — never cold, never ornamental for its own sake.

The Art Nouveau influence is **structural, not decorative**. Arched frames,
curving section dividers, and botanical line motifs replace conventional
rectangular containers. Gold and stained-glass accent colors appear sparingly —
as one-pixel rules, as hover-state transitions, as the single accent element on
an otherwise neutral screen. Together they signal care, heritage, and precision
without overwhelming the patient with visual noise.

The system is designed for a dental clinic environment: patient-facing screens
(appointment booking, treatment information), in-office displays, and
administrative dashboards. Every token and rule should support **clarity,
accessibility, and a sense of calm**.

## Colors

The palette is rooted in a deep ink primary paired with warm, architectural
neutrals. Gold and botanical green serve as accent signals — never both on the
same component, and never exceeding 5% of a screen's surface area.

- **Primary (`#1B1F22`):** Deep charcoal ink. Used for headlines, body text, and
  filled button backgrounds. Avoids pure black's harshness while maintaining
  WCAG AAA contrast against surface white (ratio 15.4:1).

- **Primary Hover (`#2E3338`):** Slightly lifted ink for interactive states.
  Used only on hover/active backgrounds.

- **Secondary (`#6B6D6F`):** Muted slate for supporting text, captions, placeholder
  copy, and secondary metadata. Passes WCAG AA at 4.7:1 against white at 16px.

- **Tertiary (`#3A4F41`):** Deep sage green for botanical motif elements,
  success-related labels, and subtle organic accents in line work. Never used as
  a background fill larger than a badge.

- **Accent Gold (`#C4A747`):** The Art Nouveau gilded accent. Reserved for the
  single highest-priority action per screen, decorative rules, and the brand
  mark. On white, passes WCAG AA large text at 3.0:1 — pair with dark ink for
  body-sized text. Use only as a foreground, never a text color against light
  backgrounds.

- **Accent Gold Hover (`#D4BA5A`):** Lifted gold for hover/active states.

- **Accent Glass (`#8BA59B`):** Muted stained-glass green for subtle structural
  accents, selected-state highlights, and botanical illustration tints. Use at
  low opacity (8–15%) for background washes; at full strength only for icons
  and decorative rules.

- **Neutral Warm (`#F5F3EF`):** Warm off-white with a whisper of ochre. The
  default page background. Warmer than pure gray to feel welcoming rather than
  clinical.

- **Neutral Cool (`#F2F4F5`):** Cool off-white for alternating surfaces — table
  stripes, secondary panels, disabled state backgrounds. The subtle temperature
  shift distinguishes functional zones without relying on borders.

- **Surface (`#FFFFFF`):** Pure white for cards, modals, and elevated containers.
  Always paired with neutral-warm surroundings to create depth through tonal
  contrast.

- **Surface Elevated (`#FAFAF8`):** Slightly warm white for layered cards and
  nested containers.

- **Surface Muted (`#EDEDEA`):** Disabled surface backgrounds and skeleton
  loading states.

- **Border (`#DCDAD5`):** The default hairline rule. Visible but unobtrusive.
  Used for card edges, input borders, and table dividers.

- **Border Strong (`#C4C2BC`):** Emphasized borders for active inputs, focus
  rings, and section dividers.

- **State Colors:** `error` (`#C23B22`), `success` (`#2E7D5B`), `info` (`#3B6F8C`),
  each with a tinted `-light` variant for backgrounds. All meet WCAG AA for
  their respective text-on-background pairings.

### Color Application Rules

1. No screen shall use more than three distinct hues simultaneously (counting
   the warm/cool neutral pair as one).
2. Gold accent must appear on **at most one interactive element per viewport**.
3. Botanical green and accent glass must never exceed 5% of a screen's pixel area.
4. Error red shall never be used for non-error emphasis or decoration.
5. Backgrounds must always be drawn from the neutral/surface family — never
   from the accent or state palettes at full strength.

## Typography

Two type families serve distinct roles: **Playfair Display** for editorial
presence and **DM Sans** for clinical readability. The pairing creates a
controlled tension — the display face carries Art Nouveau's elegance in large
headlines and the brand wordmark, while the body face ensures every patient form
and treatment detail is legible at a glance.

### Type Scale

| Token | Family | Size | Weight | Line | Spacing | Use |
|-------|--------|------|--------|------|---------|-----|
| `display-xl` | Playfair Display | 64px | 700 | 1.05 | -0.01em | Hero headings, brand statements |
| `display-lg` | Playfair Display | 48px | 700 | 1.1 | -0.01em | Page titles, section heroes |
| `display-md` | Playfair Display | 36px | 600 | 1.15 | 0 | Sub-page titles, feature headers |
| `headline-lg` | DM Sans | 28px | 600 | 1.25 | -0.01em | Card titles, modal headings |
| `headline-md` | DM Sans | 22px | 600 | 1.3 | 0 | Section headers, form group labels |
| `headline-sm` | DM Sans | 18px | 600 | 1.35 | 0 | List group headers, sidebar titles |
| `body-lg` | DM Sans | 18px | 400 | 1.6 | 0 | Lead paragraphs, treatment descriptions |
| `body-md` | DM Sans | 16px | 400 | 1.6 | 0 | Default body, form labels, table cells |
| `body-sm` | DM Sans | 14px | 400 | 1.55 | 0 | Secondary text, metadata, legal |
| `label-lg` | DM Sans | 14px | 500 | 1.2 | 0.04em | Button text, navigation, tab labels |
| `label-md` | DM Sans | 12px | 500 | 1.2 | 0.05em | Input labels, table headers, badges |
| `label-sm` | DM Sans | 11px | 500 | 1.2 | 0.06em | Chips, tags, micro-labels |
| `caption` | DM Sans | 12px | 400 | 1.4 | 0.02em | Image captions, footnotes, timestamps |
| `overline` | DM Sans | 10px | 600 | 1.2 | 0.1em | Section overlines, category markers |

### Typography Rules

1. **Playfair Display** must never appear below 28px. It is a display-only face.
2. A single screen shall use at most three sizes from the scale (e.g., `display-lg`
   + `headline-md` + `body-md`).
3. Body text shall never be set lighter than `body-sm` (14px) at any breakpoint.
4. Label tokens must always carry `text-transform: uppercase` in implementation.
5. Line-height for body tokens is unitless and always `1.5` or above — never
   compressed for aesthetic effect.
6. Font weight on DM Sans shall never drop below 400. No light or thin weights.
7. No italic styles shall be used in this system. Emphasis is conveyed through
   weight and size shifts only.

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

1. **Tonal contrast:** Cards sit on `surface` white against a `neutral-warm`
   page background. Elevated cards use `surface-elevated` (`#FAFAF8`) nested
   inside `surface` — a 1% luminosity shift that reads as a physical layer
   without perceptible shadow.
2. **Ornamental rules:** A 2px gold line (`divider-ornament`) marks the
   boundary between major page zones (hero/body, header/content). It functions
   as a structural seam, not decoration.
3. **Border layers:** Modals and drawers use a 1px `border` on all sides,
   distinguishing them from shadowless surfaces below.
4. **No box-shadow tokens exist.** If an implementation framework requires one,
   use `0px 0px 0px 0px transparent`. Depth is achieved through color,
   not simulated light.
5. **Background texture:** A subtle grain texture is applied across the entire
   page background. This is a material treatment — not a decorative overlay.
   It gives the `neutral-warm` surface a tactile, paper-like quality without
   introducing visible pattern. Implementation uses an SVG `<filter>` with
   `feTurbulence` at 3–4% opacity, applied as a full-viewport pseudo-element
   with `pointer-events: none`. The grain is uniform across both light content
   sections and the dark hero — it adds depth without calling attention to itself.

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
  when a warmer tone is desired). Stroke: 1.5px, color: `accent-glass` at 30%
  opacity.
- As a subtle background watermark on hero sections. Opacity: 4–6%, color:
  `tertiary` or `accent-glass`.
- As a corner detail on large image frames. Stroke: 2px, color: `accent-gold`
  at 50% opacity, limited to one corner per frame.

The motif itself shall be a simplified, geometric interpretation of a vine —
never a photorealistic or hand-drawn rendering. It must read as a structural
line, not an illustration. SVG path only; no raster images.

## Components

Every component below references tokens from the frontmatter. Use `{path.token}`
references in implementation to guarantee consistency.

### Buttons

Three tiers of button, differentiated by visual weight. Only one primary
(accent-gold) action per screen.

| Variant | Background | Text | Use |
|---------|------------|------|-----|
| `button-accent` | Gold filled | Ink | Single highest-priority action per screen |
| `button-primary` | Ink filled | White | Default primary action when gold is absent |
| `button-secondary` | Transparent with 1px `border` | Ink | Paired alternative, form cancellation |
| `button-ghost` | Transparent | Ink | Tertiary actions, nav items, icon buttons |

All buttons share `rounded: md` (8px) and a minimum hit area of 44×44px.
Padding is 14px vertical, 28px horizontal for standard buttons and 8px/16px
for ghost.

**States:** Each variant defines `-hover` backgrounds. Focus state uses a 2px
`border-strong` outline offset 2px from the button edge. Disabled state uses
`surface-muted` background with `border-strong` text.

### Form Controls

- **Input/Textarea:** `surface` background, 1px `border`, `rounded: sm` (4px),
  `typography: body-md`, padding 12px/16px. On focus: border shifts to
  `border-strong` with a 2px `accent-glass` glow (box-shadow, 0 0 0 2px at
  40% opacity — the single permitted shadow in the system, and only on focus).
- **Select/Dropdown:** Matches input styling. Custom chevron icon: 1.5px stroke
  weight, 16×16px, color `secondary`.
- **Checkbox/Radio:** 20×20px hit area. Unchecked: 1.5px `border` stroke,
  `rounded: xs` (2px). Checked: `primary` fill, white checkmark, 2px stroke.
  Radio uses `rounded: full`.
- **Label:** `typography: label-md`, color `primary`, sits 4px above the input.

### Cards

Two levels of card elevation:

| Token | Background | Radius | Padding | Border |
|-------|------------|--------|---------|--------|
| `card` | `surface` | `lg` (12px) | `xl` (32px) | 1px `border` |
| `card-elevated` | `surface-elevated` | `lg` (12px) | `xl` (32px) | 1px `border` |

Card headers use `headline-lg` with an optional gold ornamental rule (2px,
`accent-gold`, 48px wide, left-aligned) placed 8px below the title. Cards
shall never carry the arch corner radius — arch frames are structural page
elements, not container treatments.

### Badges & Chips

- **Badge:** `rounded: full`, `typography: label-sm`, 4px/12px padding.
  Default uses `neutral-warm` background with `tertiary` text. The accent
  variant uses `accent-gold` background — reserved for appointment statuses
  requiring patient attention.
- **Chip:** `rounded: full`, `typography: label-sm`, 6px/14px padding.
  Default uses `neutral-cool` background. Selected state uses `primary`
  background with white text. Used for filter tags and multi-select options.

### Dividers & Ornaments

- **Standard divider:** 1px `border`, full width, 16px vertical margin.
- **Ornamental divider:** 2px `accent-gold`, full width, 24px vertical margin.
  Limited to one per page section transition.
- **Glass divider:** 1.5px `accent-glass`, full width, 16px vertical margin.
  Used for subtle separation within card bodies or form sections.
- **Section arch rule:** A semi-elliptical SVG path, 2px stroke in
  `accent-glass` at 25% opacity, spanning the content column width. Used to
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

Primary navigation items use `typography: label-lg`, color `secondary`, with
an 8px underline indicator in `accent-gold` on the active item. Hover state
shifts color to `primary`. No background fill on hover — the system relies on
typographic weight, not surface changes, to indicate interactivity.

### Tooltip

`backgroundColor: primary`, `textColor: on-primary`, `rounded: sm` (4px),
`typography: caption`, padding 8px/12px. Appears 8px above the trigger element.
No arrow/pointer — the rounded rectangle alone provides sufficient affordance.

### Contrast Note on Transparent Backgrounds

Several components (`button-secondary`, `button-ghost`) specify `transparent`
as their background color. In practice, they inherit the background of their
parent container (typically `surface`, `neutral-warm`, or `neutral-cool`),
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
| On dark backgrounds (primary, accent-gold) | `on-primary` |
| Error states | `error` |
| Success states | `success` |
| Disabled | `border` |

## Imagery

Photography and illustration in this system must reinforce the **calm, clinical,
human** tone. Patients are the subject; the clinic is the context.

### Photography Guidelines

1. **Color treatment:** All photography must carry a warm-neutral color grade.
   Cool clinical blues are prohibited. Apply a subtle warming filter (+200K
   color temperature shift) and reduce saturation by 15% to harmonize with the
   `neutral-warm` palette.
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

- Hero section watermarks (SVG, 4–6% opacity, `tertiary` or `accent-glass` color)
- Decorative section rules (SVG path, 1.5px stroke, `accent-glass` at 30%)
- Corner details on image frames (SVG, 2px stroke, `accent-gold` at 50%)

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
- **Portrait images:** Circular crop (`rounded: full`) with a 2px `accent-gold`
  ring — the only permitted use of gold as a full perimeter border.
- **No image shall appear without a containing frame.** Unbounded imagery is
  the single fastest way to erode the system's structural voice.

## Do's and Don'ts

### Do

- Do use the arch corner radius tokens (`arch-sm` through `arch-lg`) as
  top-edge-only arches on structural page elements — they are the system's
  signature gesture.
- Do let the `neutral-warm` page background (not a card or border) carry the
  majority of every screen's surface area. White space is the system's primary
  material.
- Do place exactly one gold accent per viewport — on the single most important
  action, rule, or brand mark. No more.
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
- Don't use the gold accent as a text color against white or light backgrounds.
  Gold text fails WCAG contrast requirements at all sizes.
- Don't place more than one botanical motif on a single viewport. One vine
  watermark or one ornamental rule is structural; two is decoration.
- Don't use italic, oblique, light (300), or thin (100) font weights anywhere
  in the system. DM Sans at 400 and 500; Playfair Display at 600 and 700 only.
- Don't let the display face (Playfair Display) appear below 28px or in
  sentence-case body copy. It is a heading and brand face only.
- Don't combine `rounded: none` elements with `arch-*` elements in the same
  visual zone — the contrast between sharp data tables and soft arches must
  be mediated by spatial distance (at least `2xl`, 48px).
- Don't use photography with cool blue color grading. All imagery must carry
  the warm-neutral treatment defined in the Imagery section.
- Don't exceed three type sizes on a single screen. The scale has 14 steps for
  system-wide flexibility, not per-screen variety.
- Don't implement without linting this document first. Run `design.md lint
  design.md` and resolve every error before handing off to implementation.
