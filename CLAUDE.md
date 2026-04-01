# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate website for SKYNEX DIGITAL — a data-driven growth consultancy specializing in AI search visibility (GEO/SEO), brand reputation monitoring, and growth automation. Built with Next.js 15 App Router, React 18, TypeScript, and Tailwind CSS. Deployed on Vercel.

The site is intentionally minimal (Stripe/Linear-inspired): one main page with anchor sections, light-only theme, no heavy animations.

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

- `app/page.tsx` — Single-page homepage with 5 sections: Hero, Core Service, Also, GeoGrade.ai, About + Contact
- `app/(routes)/privacy/` — Privacy policy
- `app/(routes)/terms/` — Terms of service
- No API routes, no blog, no separate product/about/contact pages

### Components

Only two components:
- `components/Header.tsx` — Client component. Sticky header with wordmark + anchor nav links (Services, GeoGrade.ai, Contact). Mobile hamburger menu.
- `components/Footer.tsx` — Server component. Minimal: copyright + Privacy/Terms links.

### Styling

- **Tailwind CSS** (no dark mode — light-only)
- **Accent color**: `#2563EB` (blue) defined in `tailwind.config.js`
- **Custom utility**: `.container-page` (max-w-3xl, centered, px-6) and `.prose-custom` (for legal page typography)
- No animations, no glassmorphism, no gradients
- **Font**: Inter only (via `next/font/google`)

### SEO

Root layout defines `title.template: '%s | SKYNEX DIGITAL'`. `sitemap.ts` and `opengraph-image.tsx` are auto-generated. No JSON-LD schema (removed for simplicity).

## Environment Variables

In `.env.local`:
- `NEXT_PUBLIC_LINKEDIN_URL` — LinkedIn profile link (used in homepage contact section)
- `NEXT_PUBLIC_WEBSITE_URL` — Set in next.config.js as `https://skynexdigital.com`

## Conventions

- Path alias: `@/*` maps to the project root
- TypeScript strict mode is OFF (`strict: false` in tsconfig)
- Components use PascalCase filenames
- Git commits follow conventional format: `feat:`, `fix:`, `docs:`, etc.
- `next.config.js` adds security headers and strips console logs in production
- Use "we" or company name in copy — position as a small professional team, not a one-person shop
