# Apartmani Đurišić

Marketing & booking site for **Apartmani Đurišić** — two short-stay apartments in
Posušje, Bosnia & Herzegovina. Built with Next.js (App Router) + TypeScript.

## Features

- Faithful recreation of the design handoff (Cormorant Garamond + Jost, warm ivory/espresso palette)
- **English ⇄ Croatian** language toggle
- Photo gallery with keyboard-accessible lightbox
- Embedded Google map, enquiry form, house rules, area guide
- SEO: rich metadata, bilingual keywords, Open Graph/Twitter, `LodgingBusiness` JSON-LD, sitemap & robots
- Subtle, motion-reduced-friendly scroll animations

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy

Configured for **Netlify** via `netlify.toml` (`@netlify/plugin-nextjs`).

## Before going live

- Replace the Booking.com / Airbnb placeholder links in `lib/site.ts`
- Set the real production domain in `lib/site.ts` (`site.url`)
- Swap the prototype `mailto:` form for a real backend (Formspree / serverless)
