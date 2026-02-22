# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate website for SKYNEX DIGITAL — an AI-powered marketing automation company. Products include GeoGrade.ai (AI search visibility), CollabZen.ai (lightweight CRM), and Real Return Analyzer (inflation calculator). Built with Next.js 15 App Router, React 18, TypeScript, and Tailwind CSS. Deployed on Vercel.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # Run Next.js ESLint
```

No test framework is configured.

## Architecture

### Routing (App Router)

- `app/(routes)/` — Route group that doesn't affect URL paths. Contains `/about`, `/contact`, `/products`, `/privacy`, `/terms`. `/tools` redirects to `/products`
- `app/blog/` — Blog section with a parallel route `@modal/` for intercepted modal navigation (subscribe modal)
- `app/api/contact/route.ts` — POST endpoint for contact form submissions
- `app/page.tsx` — Homepage with inline hero, services, products, and CTA sections

### Client vs Server Components

Pages are server components by default. Client components (`'use client'`) are used for: `Header.tsx`, `Footer.tsx`, `components/contact/ContactForm.tsx`, `components/ui/ResponsiveImage.tsx`, `components/seo/OrganizationSchema.tsx`.

### Data Flow — Contact Form

`ContactForm.tsx` → `POST /api/contact` → `lib/supabase/client.ts` (Supabase insert) + `lib/email/resend.ts` (Resend email dispatch). Email routing varies by subject type (general/feedback/support/sales).

### Styling

- **Tailwind CSS** with `darkMode: 'class'` (manual toggle via localStorage + classList on `<html>`)
- **Glassmorphism design**: `backdrop-blur`, semi-transparent backgrounds (`bg-white/5`), `border-white/10`
- **Brand colors** defined in `tailwind.config.js`: `skynex-blue: #0047AB`, `skynex-dark: #121826`, `skynex-light: #F8FAFC`, `skynex-accent: #00D4FF`
- **Custom utility classes** in `styles/globals.css`: `.btn-primary`, `.btn-secondary`, `.heading-xl/lg/md`, `.container-custom`
- Dark mode initial theme detection runs in an inline `<script>` in `<head>` within `app/layout.tsx` to prevent FOUC

### Key Libraries

- `framer-motion` — Used in `ResponsiveImage.tsx` for viewport-triggered lazy loading; homepage animations are pure CSS/Tailwind keyframes
- `clsx` + `tailwind-merge` — For conditional/merged class names
- `class-variance-authority` — For component variant definitions
- `zustand` — Installed but not actively used; currently local state only via `useState`

### SEO

Each page exports a `metadata` object. Root layout defines `title.template: '%s | SKYNEX DIGITAL'`. `OrganizationSchema.tsx` provides JSON-LD structured data. `sitemap.ts` and `opengraph-image.tsx` are auto-generated.

## Environment Variables

Required in `.env.local` (see `.env.example`):
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase connection
- `RESEND_API_KEY` — Email sending via Resend
- `NEXT_PUBLIC_REAL_RETURN_ANALYZER_NAME`, `NEXT_PUBLIC_REAL_RETURN_ANALYZER_URL` — Product link config
- `NEXT_PUBLIC_LINKEDIN_URL`, `NEXT_PUBLIC_TWITTER_URL` — Social links

## Conventions

- Path alias: `@/*` maps to the project root
- TypeScript strict mode is OFF (`strict: false` in tsconfig)
- Components use PascalCase filenames; utilities use camelCase
- Boolean variables use `is`/`has`/`should` prefixes; event handlers use `handle` prefix
- Git commits follow conventional format: `feat:`, `fix:`, `docs:`, etc.
- `next.config.js` adds security headers (X-Frame-Options, X-Content-Type-Options, etc.) and strips console logs in production

## Known Quirks

- Several stub components (`ContactCTA.tsx`, `HeroSection.tsx`, `FeaturedProducts.tsx`, `ServiceSection.tsx`) return `null` — they were replaced by inline implementations in page files
- Two Supabase client files exist: `lib/supabase.ts` (unused legacy) and `lib/supabase/client.ts` (active)
- `/tools` now redirects to `/products` (both via `next.config.js` 301 redirect and `redirect()` in the page component)
