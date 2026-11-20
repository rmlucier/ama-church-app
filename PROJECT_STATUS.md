# AMA Church App - Project Status & Quick Reference

## Project Overview
**Name:** Albion Ministerial Association Website
**Type:** Next.js Church Directory & Community Resource Platform
**Status:** Active
**Local Path:** `~/Desktop/ama-church-app/`
**Repository:** https://github.com/rmlucier/ama-church-app

## Technology Stack
- **Framework:** Next.js 15.5.15 with App Router and Turbopack dev
- **UI:** React 19, Tailwind CSS v4, shadcn/ui primitives (Radix Slot, vaul Drawer)
- **Language:** TypeScript (strict)
- **Data Sources:** Google Sheets (published CSV), Google Calendar API
- **Maps:** Google My Maps embed
- **Deployment Target:** Vercel

## Key Features
- **Church Directory** — AMA member + non-member churches pulled live from a published Google Sheet, with drawer detail views and "Get Directions / Visit Website / Copy Email" actions.
- **Events** — Upcoming events pulled from Google Calendar API (next 10 events).
- **Help / Resources** — Local community-assistance directory pulled from a separate Google Sheet.
- **About** — Mission, vision, 14 core values, leadership structure.
- **Contact** — Mailto-based contact form (no backend).
- **Donate** — Cash App (`$AMA1Albion`) + mail-in check instructions.
- **Night of Treasures** — Archived 2025 event page with a 2026-coming-soon banner.
- **Privacy / Terms** — Static policies, fixed effective date.

## Design System
Defined in `app/globals.css` (`@theme` block):
- **Primary:** `#6c584c` (warm brown)
- **Secondary:** `#a98467` (muted tan)
- **Neutral (background):** `#f0ead2` (warm cream)
- **Accent:** `#adc178` (sage)
- **Surface:** `#dde5b6` (pale green)
- **Font:** Space Grotesk (via Google Fonts `@import`)

## Quick Commands
```bash
# Navigate to project
cd ~/Desktop/ama-church-app

# Install / update dependencies
npm install

# Start development server (Turbopack)
npm run dev

# Production build
npm run build

# Lint
npm run lint

# Security audit
npm audit

# Git
git status
```

## Project Structure
```
ama-church-app/
├── app/                    # Next.js App Router pages
│   ├── components/         # Page-scoped components (HeroSection, ChristmasCarolingBanner)
│   ├── about/              # Mission, values, leadership
│   ├── churches/           # Church directory + map
│   ├── contact/            # Mailto form
│   ├── donate/             # Cash App + mail donations
│   ├── events/             # Google Calendar events
│   ├── help/               # Community resource directory
│   ├── night-of-treasures/ # 2025 archive / 2026 teaser
│   ├── privacy/            # Privacy policy
│   ├── terms/              # Terms of use
│   ├── volunteer/          # Get involved
│   ├── layout.tsx          # Root layout (sidebar, mobile nav, donate CTA)
│   └── page.tsx            # Home
├── components/             # Shared components (Navigation, ChurchImage, ui/)
├── lib/                    # fetchCsv, fetchGoogleCalendarEvents, imagePlaceholders, utils
├── public/
│   └── images/             # hero, events, churches
├── ADMIN_TRAINING_GUIDE.md
├── AMA_SITE_DOCUMENTATION.md
├── CHURCH_GUIDE.md
└── README.md
```

## Data Integration
- **Churches:** Published Google Sheet CSV → `lib/fetchCsv.ts` → client-side render.
- **Events:** Google Calendar API v3 → `lib/fetchGoogleCalendarEvents.ts` → client-side render.
- **Resources:** Google Sheets gviz CSV → `lib/fetchCsv.ts` → client-side render.
- **Church photos:** 6-source fallback chain in `components/ChurchImage.tsx` — Alt Photo URL → local file → denomination SVG placeholder → generic fallback.

## Environment Variables
- None required.

## Organization Details
- **Mission:** Foster unity, shared purpose, and collaboration among churches in Albion, MI.
- **Vision:** Churches of Albion walking in unity, empowered to transform lives through Christ-centered service.
- **Leadership:** President — Apostle Ruby Coats; Vice President — TBA; Treasurer — Pastor Paul Keohn; Secretary — Elvarane Showers.
- **Contact:** Albionministers@gmail.com, 517-494-0499, PO Box 481, Albion MI 49224.

## Site Basics (Nov 2026 audit)
- Brand colors were darkened for WCAG AA contrast: accent green `#596b29` (was `#adc178`), secondary tan `#82634a` (was `#a98467`).
- Each route has a `layout.tsx` that sets its page title, description, canonical URL and social preview via `lib/pageMetadata.ts`.
- `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.png` (link previews) and a branded `app/not-found.tsx`.
- Font is loaded with `next/font` (Space Grotesk) instead of a CSS import.

## Known Follow-Ups
- Google Calendar API key is hardcoded in `lib/fetchGoogleCalendarEvents.ts` (it is visible in the browser either way). As of Nov 2026 it was **not restricted**: in Google Cloud Console → Credentials, restrict it to HTTP referrers `*.albionministers.org/*` and to the Calendar API only.
- Vice President leadership slot is still TBA.
- AMA logo: the only copy available was a 720px JPEG on a blue background. It was rebuilt at 4x: background removed, compression noise smoothed, jagged edges on the shield, cross, dove and ring redrawn, and both lines of lettering re-set in Palatino Bold. Files in `public/images/brand/` (`ama-logo-full.png` 2400px for print/flyers, `ama-logo.png` for the sidebar, `ama-seal.png` the round shield badge). Site icons in `app/` (`favicon.ico`, `icon.png`, `apple-icon.png`) are made from the seal. If the designer's original file turns up, replace these.
- Night of Treasures 2026 details are not yet published — placeholder copy lives on `/night-of-treasures`.

---
*Last updated: April 16, 2026*
