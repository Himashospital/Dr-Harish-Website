# Dr. Harish Gowda — Website (Next.js rebuild)

This is the Next.js + TypeScript + Tailwind rebuild of the static HTML site,
built from `drharishgowda-website-fixed.zip` per the project handoff doc.

## What's in here
- `app/` — one folder per page (Next.js App Router). Each maps 1:1 to the
  original static HTML pages, but with real, clean URLs (`/about` instead of
  `/about.html`) and per-page SEO metadata + JSON-LD schema wired through
  Next.js's Metadata API.
- `components/Header.tsx`, `Footer.tsx`, `StickyMobileBar.tsx` — shared
  layout pieces used on every page (previously duplicated 18 times in the
  static HTML).
- `components/FaqEnhancer.tsx` — powers the FAQ accordions site-wide.
- `next.config.ts` — configured with `output: "export"` for static hosting
  (Vercel, Netlify, or any static host — no server required).

## Run it locally
```
npm install
npm run dev
```
Then open http://localhost:3000

## Build for deployment
```
npm run build
```
This produces a fully static site in the `out/` folder — you can drag-and-drop
that folder onto Netlify, or connect the repo to Vercel/Netlify and it will
build automatically.

## Still open (see original handoff doc, Section 6)
1. Decide: keep the 7 procedure detail pages on this site, or migrate them to
   the hospital site.
2. Decide: delete `/book-appointment` (currently orphaned, no CTA links to it)
   or build it into a real page.
3. Wire real himashospital.in/.com URLs into the Procedures page condition
   cards (currently linking to the hospital site's homepage as a placeholder).
4. Confirm domain registrar for drharishgowda.in.
5. Full mobile responsiveness pass on every page (design system carried over
   1:1 from the static build, but worth a re-check).
6. About page Phase 2 content (full MBBS→MS→fellowships bio).
7. Confirm blog post copy is final.
