# Handoff: Apartmani Đurišić — Apartment Rental Website

## Overview
A single-page marketing/booking website for **Apartmani Đurišić**, two short-stay apartments (each sleeps 2) in Posušje, Bosnia & Herzegovina. The page presents the property, distinguishes the two apartments (one *with kitchen*, one *cosy double*), shows amenities, a photo gallery with a modal lightbox, an embedded Google map, house rules / check-in info, a nearby-area guide, and a contact/booking section. It supports an **English ⇄ Croatian** language toggle.

## About the Design Files
The file in this bundle (`Apartmani Đurišić.dc.html`) is a **design reference created in HTML** — a working prototype that shows the intended look, content, and behavior. It is **not production code to copy directly**. It was authored in a bespoke streaming component format (`.dc.html`) that wraps a template + a small logic class; you should treat that only as a spec.

The task is to **recreate this design in the target codebase's environment** (e.g. React/Next.js, Vue/Nuxt, Astro, plain HTML/CSS, etc.) using its established patterns, component library, and conventions. If no codebase exists yet, pick the most appropriate framework — for a mostly-static marketing site, a static-site generator (Astro / Next static export / plain HTML + a little JS) is ideal.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, imagery, copy, and interactions are all specified below and present in the prototype. Recreate the UI faithfully. The only placeholders are the Booking.com / Airbnb button links (currently `#`) and the WhatsApp number (assumed same as phone).

---

## Design Tokens

### Colors
| Token | Hex | Usage |
|---|---|---|
| Ivory (page bg) | `#f6f1e8` | Main background, light text on dark |
| Sand (alt bg) | `#efe7d8` | Intro strip, location, form field wells |
| Warm placeholder | `#e7ddcd` | Image背 background before load |
| Espresso (ink) | `#33291f` | Primary text, dark sections, buttons |
| Espresso deep | `#26201a` | Footer, boutique-dark surfaces |
| Body text | `#655a49` | Paragraph copy |
| Muted text | `#8a7c68` | Captions, labels |
| Olive accent | `#7c6f45` | Links, secondary tag, hover ink |
| Tan accent | `#94734a` | Eyebrow labels, diamond markers |
| Brass accent | `#c2a86a` | Accents on dark sections |
| Dark-section body | `#c7bca6` / `#e9e0d1` | Text on espresso |

Link colors: default `#7c6f45`, hover `#33291f`.

### Typography
- **Display / headings:** `'Cormorant Garamond', serif` (weights 400/500/600/700; italic used for emphasis words). Google Fonts.
- **Body / UI:** `'Jost', sans-serif` (weights 300/400/500/600). Google Fonts.
- Font import (both families):
  `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap`
- Eyebrow/label style: Jost, 11–12px, `letter-spacing:.28em` (or `.14em`), `text-transform:uppercase`, tan `#94734a`.
- Headline sizes use `clamp()` for fluid scaling, e.g. hero `clamp(42px,6vw,66px)`, section H2 `clamp(30px,4vw,40px)`.
- Body copy: 15–16.5px, `line-height:1.6–1.7`, `font-weight:300`.

### Spacing / layout
- Content max width: **1240px**, centered, horizontal padding `clamp(20px,4vw,48px)`.
- Section vertical padding: ~80px top, 40px bottom (varies).
- Grid gaps: 12px (gallery), 20–44px (content grids).
- Sticky nav offset: `scroll-margin-top:78px` on sections.

### Borders / shadows / radius
- Hairline rules: `1px solid rgba(51,41,31,.12–.16)` (light) / `rgba(255,255,255,.14–.16)` (dark).
- Buttons/tags: mostly **square** (no radius) except pills; lightbox arrows are `border-radius:50%` 52px circles.
- Price badge shadow: `0 16px 34px -16px rgba(51,41,31,.4)`; card shadow `0 12px 40px -12px rgba(60,50,35,.28)`.
- Map frame shadow: `0 16px 40px -18px rgba(51,41,31,.35)`.

### Motion
- `@keyframes fadeUp` — `opacity 0→1`, `translateY(18px)→0`; hero uses `fadeUp .8s ease both`, modal `.28s`.
- Gallery image hover: `transform:scale(1.05)` over `transition:transform .6s ease`.

---

## Screens / Views
Single scrolling page. Sticky top nav anchors to sections: `#apartments`, `#gallery`, `#location`, `#nearby`, `#contact` (plus `#amenities`, `#rules`).

### 1. Nav (sticky)
- Full-width sticky bar, `background:rgba(246,241,232,.9)` + `backdrop-filter:blur(10px)`, bottom hairline. z-index 50.
- Left: wordmark "Apartmani Đurišić" (Cormorant, 23px, 600).
- Center: 5 uppercase links (13px, `.08em`, `#6b5f4f`). Hidden below 880px.
- Right: **language toggle** button (outline, shows the *other* language code — "HR" in EN mode, "EN" in HR mode) + solid espresso **Book** button linking to `#contact`.

### 2. Hero
- Two-column grid `1.05fr / 1fr`, min-height 560px; collapses to 1 col below 880px.
- Left text column: eyebrow "Posušje · Bosnia & Herzegovina", H1 "Two calm rooms in the heart of Posušje." (Posušje word in olive italic), lead paragraph, two CTAs (solid "Book your stay" → `#contact`, outline "View gallery" → `#gallery`).
- Right: full-bleed cover image (`IMG-20260702-WA0055.jpg`) with a **price badge** absolutely positioned bottom-left (`left:28px;bottom:28px`), translucent ivory + blur: "€100 / night" (Cormorant 38px) over "Sleeps 2 · per apartment". Below 560px the badge shrinks (`left:16px;bottom:16px;padding:15px 18px`).

### 3. Intro strip
- Sand background, centered, max-width 1000px. Eyebrow "Welcome" + large Cormorant paragraph (`clamp(24px,3.2vw,32px)`, color `#4a3f30`).

### 4. The two apartments (`#apartments`)
- Section header row: H2 "The two apartments" + flexible hairline + "01 — 02" label.
- Two-column grid (`.g2`, collapses <880px). Each apartment card:
  - Lead image (320px tall) with a corner tag badge — Apt 1 = espresso "With kitchen", Apt 2 = olive "Cosy double".
  - Two 110px thumbnail images below.
  - H3 name (Cormorant 28px), description paragraph, and a row of outline feature chips.

### 5. Amenities (`#amenities`)
- Espresso `#33291f` section, ivory text. Header "Everything included" + hairline.
- Responsive auto-fit grid (`minmax(190px,1fr)`) of 9 items, each a hairline-topped row prefixed with a "◈" diamond: Free WiFi, Air conditioning, Private bathroom, Kitchenette (Apt 1), Smart TV, Free parking, Washing machine, Near city centre, Non-smoking.

### 6. Gallery (`#gallery`)
- Centered header "A closer look" + "Click any photo to view it larger."
- **Two labelled blocks** — "Apartment 1 · With kitchen" and "Apartment 2 · Cosy double", each intro'd by a tag badge + H3 + hairline.
- Each block is a masonry-ish grid: `grid-template-columns:repeat(auto-fit,minmax(230px,1fr)); grid-auto-rows:210px; gap:12px`. The first image spans `2×2` (feature), the rest are 1×1.
- Every image is clickable and opens the lightbox (see Interactions). Images carry `data-cap` (which apartment) for the modal caption.
- Apartment 1 photos: `WA0002, WA0060, WA0058, WA0061, WA0056, WA0059, WA0007, WA0006`. Apartment 2 photos: `WA0049, WA0000, WA0052, WA0050, WA0051, WA0001`.

### 7. Lightbox modal (overlay)
- Fixed full-screen overlay, `background:rgba(28,20,14,.94)`, z-index 200, `fadeUp .28s`.
- Close "×" top-right; circular prev/next arrows (52px) vertically centered left/right; contained image (`max-width:min(1100px,90vw); max-height:80vh; object-fit:contain`).
- Caption row under image: Cormorant caption (which apartment) · brass dot · counter "n / total".
- Clicking the backdrop or × closes; clicking the image/caption does not.

### 8. Location (`#location`)
- Sand background. Two-col grid `1fr / 1.15fr` (collapses <880px).
- Left: eyebrow "Location", H2 "Where to find us", paragraph, an Address + Parking list (◈ markers), and an outline "Open in Google Maps →" link to `https://maps.app.goo.gl/Pz1w7w1fs3aDFY3S8`.
- Right: 420px-tall embedded Google map iframe:
  `https://www.google.com/maps?q=Posu%C5%A1je,%20Bosnia%20and%20Herzegovina&z=14&output=embed`

### 9. House rules & check-in (`#rules`)
- Two-col grid. Left "Your arrival": Check-in **from 14:00**, Check-out **until 10:00** (big Cormorant figures) + paragraph. Right "A few gentle asks": hairline list — No smoking inside; Quiet hours 22:00–07:00; Up to 2 guests per apartment; Pets on request; Please treat the space as your own home.

### 10. Nearby / area guide (`#nearby`)
- Espresso section. Centered header "Things to do around Posušje".
- Auto-fit grid (`minmax(230px,1fr)`) of 4 hairline-bordered cards: Posušje town centre (5 min walk), Blidinje Nature Park (≈45 min drive), Kravica Waterfalls (≈50 min drive), Adriatic coast (≈1 h drive). Each: Cormorant title, brass uppercase distance, description. *(Distances are estimates.)*

### 11. Contact / booking (`#contact`)
- Two-col grid. Left: eyebrow "Contact", H2 "Reserve your dates", paragraph, contact list (tel `+38762592672`, mailto `milan.durisic79@gmail.com`, WhatsApp `https://wa.me/38762592672`), and Booking.com / Airbnb buttons (**links are placeholders → replace with real listing URLs**).
- Right: enquiry **form** on a sand well — Name, Email, Dates + Apartment (side-by-side), Message, submit "Send enquiry". Submits via a prefilled `mailto:` to `milan.durisic79@gmail.com` (see State/Behavior).

### 12. Footer
- Deep espresso `#26201a`. Three-column grid (`.g3`, collapses): wordmark + blurb; Contact (phone/email); Find us (Google Maps link, Booking · Airbnb). Bottom bar: "© 2026 Apartmani Đurišić · Posušje".

---

## Interactions & Behavior

### Language toggle (EN ⇄ HR)
- Every translatable element carries a `data-hr="<croatian text>"` attribute; its default (English) text is the element's initial content.
- On mount, cache each element's English text (e.g. into `data-en`). Toggling swaps `textContent` between English and the `data-hr` value for all `[data-hr]` elements, flips the toggle button label, and sets `document.documentElement.lang`.
- **Recreation guidance:** in a component framework, model this as a `lang` state + a translation map (`{ en, hr }`) per string rather than DOM text-swapping. All EN/HR string pairs are recoverable from the prototype's markup (`data-hr` attributes).
- Lightbox captions are currently **not** translated (English only) — optional enhancement.

### Lightbox
- State: current image index (`null` = closed).
- Open: collect all `[data-lb]` images in DOM order; set index to the clicked one.
- Prev/Next: wrap-around modulo list length. Close: set index `null`.
- **Keyboard:** Esc closes, ← previous, → next (only when open).
- Caption from clicked image's `data-cap`; counter is `index+1 / total`.

### Booking form
- On submit: `preventDefault`, build a `mailto:milan.durisic79@gmail.com` with subject `Booking enquiry — <apartment>` and a body containing Name / Email / Dates / Apartment / Message, then navigate to it.
- **Production note:** replace with a real form backend (e.g. serverless function, Formspree, or the booking platform) — `mailto:` is a prototype stand-in. Add validation (required name + email) and a success/error state.

### Navigation
- In-page anchor links with `scroll-behavior:smooth` on `<html>`; sections use `scroll-margin-top:78px` to clear the sticky nav.

### Responsive behavior
- ≤880px: all two-col grids (`.g2`, `.g3`, hero) collapse to one column; center nav links hidden (add a mobile menu in production); hero image min-height drops to 340px.
- ≤560px: price badge shrinks/repositions.
- Headings scale fluidly via `clamp()`.
- Gallery & amenity grids are `auto-fit` and reflow naturally.

## State Management
- `lang: 'en' | 'hr'` — drives all copy.
- `lightboxIndex: number | null` — open image / closed; plus a derived ordered list of gallery images.
- Form fields: name, email, dates, apartment, message (local/controlled).

## Assets
All photography lives in `assets/` (copied into this bundle from the project's `uploads/assets/`). They are the owner's real interior photos (JPEG). Filenames are referenced verbatim in the Screens section. No icons are used — the "◈" diamond is a Unicode character; if you prefer an icon set, substitute a small diamond/lozenge glyph. Fonts are from Google Fonts (Cormorant Garamond + Jost).

Real contact data (safe to hardcode or move to config):
- Phone / WhatsApp: `+387 62 592 672`
- Email: `milan.durisic79@gmail.com`
- Google Maps pin: `https://maps.app.goo.gl/Pz1w7w1fs3aDFY3S8`
- Price: €100 / night, sleeps 2, per apartment.

## Files
- `Apartmani Đurišić.dc.html` — the design reference (template markup + a logic class near the bottom of the file describing the toggle / lightbox / form behavior).
- `assets/` — all images used by the design.

## Open items to confirm with the owner
1. Real Booking.com and Airbnb listing URLs (buttons currently `#`).
2. Confirm WhatsApp uses the same number as the phone.
3. Verify nearby-attraction drive times.
4. Whether Croatian lightbox captions / any additional translated copy are wanted.
5. A production form backend + validation.
