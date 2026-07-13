# DenteClean — Image Asset Registry

> **Purpose:** Single source of truth for all image assets used in `index.html`.
> **Workflow:** Review each image → mark adequate or provide replacement → update references.

---

## Image Slots

---

### `hero` ✅

- **Current Reference:** `1783979723492.png`
- **Description:** Modern dental clinic interior with teal dental chair, clean white cabinetry, large windows with natural light, and a sanctuary-like atmosphere.

## Section Text

> Welcome to DenteClean
>
> **Your Smile, Our Masterpiece**
>
> Experience dentistry where precision meets compassion. Modern technology, timeless care — all in a space designed for your comfort.
>
> CTAs: "Book Your Visit" (gold accent button) · "Explore Our Services" (text link with arrow)

**Evaluation:**
- ✅ **Adequate.** Premium dental operatory with teal chair, natural daylight, clean cabinetry — matches the sanctuary aesthetic perfectly.

---

### `service_cleaning` ✅

- **Current Reference:** `1783983553020.png`
- **Description:** Dental hygienist in blue scrubs performing a teeth cleaning on a relaxed patient — hygienist holds a dental explorer near the patient's teeth, warm lighting, calm atmosphere.

## Section Text

> **Professional Cleaning**
>
> Our gentle, thorough cleaning removes plaque and tartar buildup, leaving your teeth feeling smooth and looking brilliantly clean. We use ultrasonic technology for a comfortable, anxiety-free experience.
>
> Badges: Painless · 30 min · Recommended biannually

**Evaluation:**
- ✅ **Adequate.** Professional cleaning scene with a relaxed patient — conveys gentleness and clinical competence.

---

### `service_whitening` ✅

- **Current Reference:** `1783979755153.png`
- **Description:** A confident woman with a bright, natural-looking white smile, dental clinic environment blurred in the background.

## Section Text

> **Laser Whitening**
>
> Transform your smile in just one session. Our advanced laser-activated whitening system is up to 8x more effective than store-bought kits, with zero sensitivity — even on enamel-sensitive teeth.
>
> Badges: 1 session · Zero sensitivity · Lasts 12+ months

**Evaluation:**
- ✅ **Adequate.** Bright, natural-looking smile result — conveys the whitening outcome perfectly.

---

### `service_implants` ✅

- **Current Reference:** `1783979752119.png`
- **Description:** Dental implant model showing titanium post fused into a jawbone cross-section with a natural-looking ceramic crown, held in gloved hands.

## Section Text

> **Dental Implants**
>
> Permanent, natural-looking replacements that restore both function and confidence. Our titanium posts fuse with your jawbone for a solution that feels, looks, and lasts like the real thing — for a lifetime.
>
> Badges: Lifetime warranty · Natural look · Same-day option

**Evaluation:**
- ✅ **Adequate.** Clear implant model with titanium post and crown — conveys permanence and precision.

---

### `about_clinic` ✅

- **Current Reference:** `1783979748595.png`
- **Description:** Warm, inviting dental clinic interior — teal chair, wood accents, "Smile Clinic" signage, pendant lighting, natural light from large windows.

## Section Text

> **Our Story**
>
> For over a decade, DenteClean has been redefining what a dental visit can feel like. Founded by Dr. Elena Vasquez, our practice was built on a simple belief: great oral health should never come at the expense of your comfort.
>
> **Our Mission**
>
> To provide world-class dental care in an environment that feels less like a clinic and more like a sanctuary. Every tool, every technique, every interaction — designed with your well-being in mind.

**Evaluation:**
- ✅ **Adequate.** Warm, sanctuary-like clinic interior with teal and wood tones — matches the brand aesthetic.

---

### `avatar_sarah` ✅

- **Current Reference:** `1783979745476.png`
- **Description:** Circular portrait of a friendly, approachable woman with a warm, genuine smile — natural lighting, soft background.

## Section Text

> **Sarah M.** · Patient since 2019
>
> (Testimonial avatar — circular portrait, 48px, gold border, placed next to Dr. Vasquez's quote about creating a space where patients look forward to their dental visits.)

**Evaluation:**
- ✅ **Adequate.** Friendly, trustworthy portrait — conveys a real, satisfied patient.

---

### `team_vasquez` ✅

- **Current Reference:** `1783979742333.png`
- **Description:** Professional portrait of Dr. Elena Vasquez — female dentist in white dental coat, confident yet warm expression, modern dental clinic background.

## Section Text

> **Dr. Elena Vasquez** · Lead Dentist & Founder
>
> Specializing in cosmetic and restorative dentistry. 15+ years of experience. Graduate of Harvard School of Dental Medicine. Fellow of the International Congress of Oral Implantologists.
>
> Badges: 15+ years · Harvard trained · ICOI Fellow

**Evaluation:**
- ✅ **Adequate.** Confident, warm professional portrait — name badge visible, clinic setting, conveys authority and care.

---

### `team_park` ✅

- **Current Reference:** `1783979738253.png`
- **Description:** Professional headshot of Dr. James Park — male orthodontist in white coat with "Oral Care Clinic" branding, friendly expression, clinic background.

## Section Text

> **Dr. James Park** · Orthodontics Specialist
>
> Expert in Invisalign and traditional braces. Certified by the American Board of Orthodontics. Dr. Park has transformed over 1,200 smiles using precision digital planning.
>
> Badge: Invisalign Elite Provider

**Evaluation:**
- ✅ **Adequate.** Friendly, approachable professional portrait — coat branding visible, clinic setting, conveys expertise.

---

### `team_chen` ✅

- **Current Reference:** `1783979734199.png`
- **Description:** Female dental professional in light blue scrubs holding a dental tool, warm smile, modern clinic background with teal chairs.

## Section Text

> **Lisa Chen, RDH** · Lead Dental Hygienist
>
> Gentle care specialist. Known for her calming presence and meticulous cleanings. Lisa has a gift for putting even the most anxious patients at ease — her chairside manner is legendary among our patients.
>
> Badges: Patient favourite · Gentle specialist

**Evaluation:**
- ✅ **Adequate.** Warm, approachable hygienist in clinical attire — conveys gentleness and professionalism.

---

## Verification

```bash
# Should return 9 — one for each image slot
grep -c 'src="' /home/davi/Projects/denteclean/index.html | head -1
```

All 9 slots mapped to local assets. No external image dependencies remain.
