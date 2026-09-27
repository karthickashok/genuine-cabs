# Genuine Cabs — Website

A static marketing site for **Genuine Cabs**, a local/outstation/airport taxi
service. Built with React + TypeScript + Vite. No backend — the booking form
hands off to WhatsApp with the trip details pre-filled.

## Structure

```
src/
  components/       All UI sections (Header, Hero, Services, Fleet, ...)
  data/site.ts       Business info: phone, WhatsApp number, service cities
  index.css          Design tokens (colors/type) + all styles
public/favicon.svg   Browser tab icon (the logo mark)
```

## Before you launch

Edit `src/data/site.ts` and replace with your real details:
- `phoneDisplay` / `phoneHref` — your business phone number
- `whatsappHref` — your WhatsApp number (used by the booking form and CTA button)
- `email`, `baseCity`, `serviceCities`

You may also want to edit the stats in `src/components/Hero.tsx` (years in
business, trips completed, cities, rating) and the quotes in
`src/components/Testimonials.tsx` — these are placeholder copy.

## Running it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Logo

The mark is inline SVG in `src/components/Logo.tsx` (so it stays crisp at any
size and recolors easily) and duplicated as a standalone file at
`public/favicon.svg` / `src/assets/mark.svg` for use elsewhere (business
cards, social profiles, etc.).
