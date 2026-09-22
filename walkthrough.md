# Globizhub.com — Next.js 15 & React 19 Application Walkthrough

## Overview

We have successfully transitioned the **Globizhub.com** platform into the exact production stack specified in [Globizhub.com_Technical_Architecture_and_Product_B.pdf](file:///Users/anupamsaha/Desktop/GHPL%20Projects/GHPL%20Main%20Website/imprt/Globizhub.com_Technical_Architecture_and_Product_B.pdf):
**React 19 + TypeScript + Next.js 15 + Tailwind CSS 4 + Drizzle ORM Schema + Typed API Routes**.

The website combines:
1. **The "Signal Grid" Design System:** Deep obsidian canvas (`#070A0F`), Electric Cyan (`#20E3D2`), Electric Violet (`#8B5CF6`), and Neon Lime (`#B9F227`) with `Space Grotesk`, `Inter`, and `IBM Plex Mono` typography.
2. **The Appventurez Conversion Engine:** Strategic path selector, outcome-driven case studies, enterprise FAQ accordion, and interactive lead qualification wizard.
3. **Real Globizhub SaaS Platforms:** Featured showcase of **[Patholab.cloud v3.0](https://patholab.cloud)** (LIMS), **Bungzo** (Logistics), **GlobizLibrary** (Education SaaS), and **IMS Core** (Inventory).

---

## 1. Technology Stack Architecture

| Layer | Technology | Status | Purpose |
| :--- | :--- | :--- | :--- |
| **Frontend Framework** | **Next.js 15.2 (App Router)** | ✅ Implemented | Server-side rendering, streaming, and fast routing |
| **UI Library** | **React 19** | ✅ Implemented | Modern hooks, concurrent rendering, and server components |
| **Styling** | **Tailwind CSS 4 (@tailwindcss/postcss)** | ✅ Implemented | Token-driven CSS, responsive classes, and glassmorphism |
| **Type System** | **TypeScript 5.7** | ✅ Verified | Strict type safety across all components and data models |
| **Database Models** | **Drizzle ORM (`src/db/schema.ts`)** | ✅ Implemented | Typed schemas for users, orgs, leads, proposals, and projects |
| **API Endpoints** | **Next.js Route Handlers (`src/app/api/leads/route.ts`)** | ✅ Implemented | Lead ingestion and validation |

---

## 2. Component Hierarchy

```text
src/
├── app/
│   ├── api/
│   │   └── leads/
│   │       └── route.ts             # Lead ingestion API handler
│   ├── globals.css                  # Tailwind 4 & Signal Grid tokens
│   ├── layout.tsx                   # Root layout, Google Fonts, SEO metadata
│   └── page.tsx                     # Main public platform page
├── components/
│   ├── layout/
│   │   ├── SiteHeader.tsx           # Sticky frosted glass navbar & mobile drawer
│   │   └── SiteFooter.tsx           # Corporate presence & office coordinates
│   ├── marketing/
│   │   ├── HeroSection.tsx          # Headline, live telemetry HUD & interactive SVG canvas
│   │   ├── TrustStrip.tsx           # ISO 9001, 27001, 20000 & Cloud Partner badges
│   │   ├── StrategicPathways.tsx    # 3-segment switcher (Startups, Scaleups, Enterprise)
│   │   ├── BentoCapabilities.tsx    # 4 core disciplines bento grid
│   │   ├── ProductsShowcase.tsx     # Patholab.cloud, Bungzo, GlobizLibrary, IMS
│   │   ├── CaseStudies.tsx          # FinTech, HealthTech, Logistics outcome cards
│   │   ├── EnterpriseFAQ.tsx        # Interactive collapsible FAQ accordion
│   │   └── ProposalWizard.tsx       # 5-step guided proposal intake wizard
│   └── ui/
│       └── CommandModal.tsx         # ⌘K search dialog modal
├── db/
│   └── schema.ts                    # Drizzle ORM data models (Modular Monolith)
└── lib/
    └── utils.ts                     # cn helper (clsx + tailwind-merge)
```

---

## 3. Verification & Build Results

1. **Production Build (`next build`):**
   - Successfully compiled in **6.6 seconds**.
   - Type checking & linting passed with **0 errors**.
   - 4/4 static pages generated and optimized.
2. **Development Server:**
   - Active on **`http://localhost:3000`**.
