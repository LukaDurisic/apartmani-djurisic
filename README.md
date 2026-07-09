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

Static export (`output: "export"`) deployed to **Netlify** as plain files
(`netlify.toml` → `publish = "out"`):

```bash
npm run build
netlify deploy --dir=out --prod
```

## Enquiry form

Self-hosted: the form posts to a **Netlify serverless function**
(`netlify/functions/send-enquiry.mjs`) that emails enquiries via your own Gmail
and sends the guest an auto-reply. No third-party form service. Setup (Google
App Password + Netlify env vars) is in [`SETUP-EMAIL.md`](./SETUP-EMAIL.md).

## Before going live

- Set up the enquiry email — see `SETUP-EMAIL.md` (App Password + env vars)
- Replace the Booking.com / Airbnb placeholder links in `lib/site.ts`
- Set the real production domain in `lib/site.ts` (`site.url`) if you add one
