# Playpower Labs Take-Home Assignment: Airbnb Desktop Listing Clone

> A pixel-perfect, desktop-first reimplementation of the Airbnb property listing page, built from scratch with Next.js 14 App Router, React 18, Tailwind CSS, and pure JavaScript.

---

## 📑 Table of Contents
1. [Overview & Reimplementation Statement](#overview--reimplementation-statement)
2. [Technology Stack](#technology-stack)
3. [Architecture Overview](#architecture-overview)
4. [Implemented Views & Core Features](#implemented-views--core-features)
   - [1. Listing Page](#1-listing-page)
   - [2. Photo Tour Overlay](#2-photo-tour-overlay)
   - [3. Lightbox Viewer](#3-lightbox-viewer)
5. [Keyboard Navigation & Accessibility](#keyboard-navigation--accessibility)
6. [AI-Assisted Workflow & Claude Code Agents](#ai-assisted-workflow--claude-code-agents)
7. [Quick Start & Setup](#quick-start--setup)
8. [Directory Structure](#directory-structure)
9. [Verification & Test Checklist](#verification--test-checklist)

---

## Overview & Reimplementation Statement

This application is an **original, independent clean-room reimplementation** of the Airbnb-style property listing shown at `https://airbnb-clone-umber-two.vercel.app`.

### Key Directives Upheld:
* **Zero Scraped or Lifted Code**: The application was authored independently by observing visual appearance and user interactions from ground-truth captures. No internal bundles, minified scripts, or proprietary HTML structures were copied.
* **JavaScript ONLY (`.js` / `.jsx`)**: Per project requirements, **no TypeScript (`.ts`, `.tsx`) is used in the codebase**. The entire application is written in clean, idiomatic modern JavaScript.
* **Desktop-First Optimization**: Designed and calibrated for high-resolution desktop viewports (1920×1080 primary target, with responsive fluidity down to 1440px and 1280px).

---

## Technology Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | Next.js 14 (App Router) | High-performance React framework supporting React Server Components, instant hydration, and static pre-rendering. |
| **Language** | Pure JavaScript (ES2022+ / JSX) | Strict compliance with project constraints (no TypeScript). |
| **Styling** | Tailwind CSS 3.4 + Custom CSS | Atomic utility classes matching exact Airbnb spacing, borders, shadows, and transitions. |
| **Typography** | Airbnb Cereal VF (`.woff2`) | Authentic variable-weight typeface loaded locally via `@font-face` with `font-display: swap`. |
| **Icons** | Custom Inlined SVG Architecture | 91 authentic vector icons mapped in `src/data/icons.js`, eliminating external network font roundtrips and layout shifts. |
| **Image Pipeline** | `next/image` | Dynamic responsive srcset, blur-up placeholders, layout stability, and zero Cumulative Layout Shift (CLS). |

---

## Architecture Overview

Production-grade architectural specification diagrams are located in `docs/architecture/` in multiple standard formats:
* 📁 **SVG (Interactive/Vector)**: [`docs/architecture/architecture-diagram.svg`](docs/architecture/architecture-diagram.svg)
* 📁 **PNG (High-Resolution 2400px)**: [`docs/architecture/architecture-diagram.png`](docs/architecture/architecture-diagram.png)
* 📁 **PDF (Print/Document Vector)**: [`docs/architecture/architecture-diagram.pdf`](docs/architecture/architecture-diagram.pdf)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                             CLIENT LAYER                                    │
│  • Desktop Browser (1920x1080)  • React 18 Hydration  • URL State Sync      │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ HTTPS / HTTP/3
┌──────────────────────────────────────▼──────────────────────────────────────┐
│                         EDGE CDN & SECURITY LAYER                           │
│  • Cloudflare Anycast CDN  • WAF DDoS Protection  • Stale-While-Revalidate   │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
┌──────────────────────────────────────▼──────────────────────────────────────┐
│                    NEXT.JS APP ROUTER (SSR / ISR TIER)                      │
│  • React Server Components  • Static Shell  • Client Interaction Subtrees   │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ gRPC / Internal RPC
┌──────────────────────────────────────▼──────────────────────────────────────┐
│                         CORE BACKEND SERVICES                               │
│  • Listing Service  • Booking Engine  • Pricing Engine  • Reviews Service   │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
┌──────────────────────────────────────▼──────────────────────────────────────┐
│                        DATA & STORAGE PERSISTENCE                           │
│  • PostgreSQL (Aurora Multi-AZ)  • Redis Cluster (Locks)  • S3 Media Bucket │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Key Architectural Highlights:
1. **Shallow URL State Management**:
   The three primary views (Listing, Photo Tour, Lightbox) synchronize bidirectionally with the URL search parameters (`?view=photos`, `?view=photos&photo=22`) using `window.history.pushState` and `popstate` listeners. This provides browser back/forward button support and deep linking without triggering full page reloads.
2. **Scroll Lock Engine**:
   Whenever a full-screen overlay (Photo Tour, Lightbox, Amenity Modal, Review Modal) opens, `document.body.style.overflow` is set to `"hidden"`. On dismissal, the original overflow style is safely restored, eliminating secondary background scrolling.
3. **Deterministic Image Hierarchy**:
   All 43 listing images are categorized into 9 distinct physical areas (Living Room 1, Living Room 2, Full Kitchen, Bedroom, Full Bathroom, Gym, Exterior, Pool, Additional Photos) with explicit layouts (`full` and `half` widths).

---

## Implemented Views & Core Features

### 1. Listing Page
* **Global Navigation Header**:
  * Coral Airbnb brand logo with hover micro-interaction.
  * 3-segment search pill: *"Anywhere | Any week | Add guests"* with authentic house search glyph and coral search button.
  * Right utility menu with *"Airbnb your home"*, globe language picker, and rounded user profile pill (hamburger + avatar).
* **Sticky Sub-Navigation (`StickySubNav`)**:
  * Smoothly animates into view once the user scrolls past the hero gallery (`scrollY > 580px`).
  * 4 synchronized navigation tabs (*Photos, Amenities, Reviews, Location*) with active underline indicators.
  * Right-hand summary display showing current night rate (`₹24,800 / night`), star rating (`4.95`), and a compact *"Reserve"* action button that smoothly scrolls to the booking card.
* **Hero Photo Mosaic (`HeroGallery`)**:
  * Prominent 1-large + 4-smaller image grid with an exact height of `470px` and `8px` grid gutters.
  * Outer corner rounding (`rounded-2xl`).
  * Preloaded with `priority` flags to ensure instant LCP.
  * Floating *"Show all photos"* button with authentic 3×3 grid icon.
* **Property Highlights & Summary**:
  * Room metadata (*10 guests · 4 bedrooms · 5 beds · 4.5 bathrooms*).
  * Authentic **"Guest favourite"** card featuring authentic twin laurel branch graphics (`laurel-left.png`, `laurel-right.png`), rating score (`4.95`), and review count (`19 reviews`).
  * Host badge (*"Hosted by Mirashya Homes"* · 7 years hosting).
  * Key amenity highlights (*Outdoor entertainment, Dedicated workspace, Self check-in*).
* **Sleeping Arrangements Carousel**:
  * Detailed bedroom and living room bed breakdowns with double bed and sofa glyphs.
* **Interactive 2-Month Calendar Engine (`CalendarSection`)**:
  * Displays two concurrent months (October 2026 and November 2026).
  * Date range selection with start date, hover state, and end date pill highlights.
  * Active night counter with *"Clear dates"* button.
* **Sticky Booking Card (`StickyBookingCard`)**:
  * Floats alongside property details and locks into viewport during scroll.
  * Prominent **10% Weekly Discount Card** with discount tag vector.
  * Interactive Check-in / Checkout trigger and **Guest Selector Dropdown** with independent stepper controls for Adults, Children, Infants, and Pets (enforcing the maximum 10-guest rule).
  * Dynamic price breakdown calculation (`Base rate x N nights - 10% discount + Cleaning fee + Service fee + Taxes`).
* **Amenities Section & 50-Item Modal (`AmenitiesSection` / `AmenityModal`)**:
  * Top 10 listing amenities with original SVG icons.
  * *"Show all 50 amenities"* button launching a categorized modal with full focus trap and Escape key dismissal.
* **Reviews Section & Review Modal (`ReviewsSection` / `ReviewModal`)**:
  * Dual-laurel rating header with 4.95 score.
  * 6 category breakdown bars (*Cleanliness, Accuracy, Communication, Location, Check-in, Value*).
  * Filterable topic chips (*Sparkling clean, Great location, Responsive host, Beautiful views*).
  * Modal with search bar and scrollable review list.
* **Interactive Location Section (`LocationSection`)**:
  * Vector-rendered Candolim, Goa map with custom pin marker and zoom controls.
* **Host Profile & Co-Hosts (`HostSection`)**:
  * Verified Superhost badge, hosting stats, and avatar carousel for 8 co-hosts.
* **Nearby Stays Carousel (`NearbyStays`)**:
  * 8 nearby property cards with working 1/2 pagination controls.

---

### 2. Photo Tour Overlay
* Triggered by clicking *"Show all photos"*, any hero photo, or navigating to `?view=photos`.
* **Full-Screen Sticky Header**:
  * Back navigation button (`< Photo tour`).
  * Share button with automated clipboard copy notification toast.
  * Save heart button with interactive toggle.
* **9-Category Quick-Jump Thumbnail Navigation**:
  * Displays 8 category thumbnails on the top line with the 9th wrapping gracefully.
  * Clicking any category smoothly scrolls the viewport directly to that section.
* **Categorized Photo Sections**:
  * 9 sections: Living room 1, Living room 2, Full kitchen, Bedroom, Full bathroom, Gym, Exterior, Pool, and Additional photos.
  * Left column: Sticky section title and amenity tag subtitles (*"Sofa · Air conditioning · Ceiling fan · TV"*).
  * Right column: Responsive photo grid with `full` (16:10.5 aspect ratio) and `half` (pairs) photo layouts.
  * Clicking any photo opens the Lightbox directly at that exact image index.

---

### 3. Lightbox Viewer
* Single-photo full-viewport viewer with clean **white background** (`#FFFFFF`), matching the reference design.
* **Header Controls**:
  * Top-Left: **3×3 Grid Icon** to return to the Photo Tour overview.
  * Top-Center: Category name of the currently active photo (*"Gym"*, *"Living room 1"*).
  * Top-Right: Dynamic counter (*"22 of 43"*) and close `X` button.
* **Navigation**:
  * Floating circular Previous (`<`) and Next (`>`) buttons with subtle drop shadows and disabled states at boundaries.
  * Full keyboard arrow navigation (`ArrowLeft` / `ArrowRight`).
  * `Escape` key dismisses back to previous state.

---

## Keyboard Navigation & Accessibility

The application is engineered in strict accordance with WCAG 2.1 Level AA standards:

| Key | Context | Action |
|---|---|---|
| `ArrowRight` | Lightbox | Navigates to the next photo (1 → 43). |
| `ArrowLeft` | Lightbox | Navigates to the previous photo (43 → 1). |
| `Escape` | Lightbox | Closes the single photo viewer and returns to the previous view. |
| `Escape` | Photo Tour | Closes the full-screen photo tour and returns to the listing page. |
| `Escape` | Modals | Closes the Amenity Modal or Review Modal. |
| `Tab` / `Shift+Tab` | Modals & Overlays | Traps focus within active dialog boundaries; restores focus to trigger upon close. |
| `Enter` / `Space` | Buttons & Cards | Activates photo viewer or toggle state. |

---

## AI-Assisted Workflow & Claude Code Agents

The project was developed using a multi-agent architectural workflow. Specialized sub-agent configurations and skills are codified in the repository:

### Sub-Agent Configurations (`.claude/agents/`):
* **`ui-visual-qa.md`**: Evaluates rendered DOM output against reference ground truth screenshots, checking element geometry, spacing, borders, and colors.
* **`accessibility-qa.md`**: Verifies WCAG 2.1 AA compliance, ARIA attributes, keyboard navigation handlers, and scroll lock behavior.
* **`code-quality.md`**: Enforces pure JavaScript (zero TypeScript), modular React architecture, and code cleanliness.
* **`performance-review.md`**: Monitors Core Web Vitals, image preloading, layout stability (CLS: 0.00), and bundle sizes.
* **`architecture-review.md`**: Validates multi-tier production architecture, edge caching, and distributed booking hold strategies.

### Domain Skills (`.claude/skills/`):
* **`pixel-perfect-audit.md`**: Standard operating procedure for viewport screenshot audits.
* **`scroll-lock-verification.md`**: Automated checks for `document.body.style.overflow` handling.
* **`keyboard-nav-check.md`**: Keyboard interaction verification routines.

---

## Quick Start & Setup

### Prerequisites
* Node.js 18.17.0 or higher
* npm 9.0.0 or higher

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd playpowa

# Install dependencies
npm install
```

### Development Mode
```bash
npm run dev
# Server starts at http://localhost:3000
```

### Production Build & Launch
```bash
# Build optimized static and server bundles
npm run build

# Start production server
npm run start
# Server listens at http://localhost:3000
```

---

## Directory Structure

```
playpowa/
├── .claude/                           # Claude Code AI Agent System
│   ├── agents/
│   │   ├── accessibility-qa.md        # A11y & WCAG 2.1 AA auditor
│   │   ├── architecture-review.md     # Production architecture reviewer
│   │   ├── code-quality.md            # Pure JS & code hygiene auditor
│   │   ├── performance-review.md      # Core Web Vitals & bundle optimizer
│   │   └── ui-visual-qa.md            # Pixel parity & visual QA engineer
│   ├── skills/
│   │   ├── keyboard-nav-check.md      # Keyboard navigation check skill
│   │   ├── pixel-perfect-audit.md     # Visual screenshot audit skill
│   │   └── scroll-lock-verification.md# Scroll lock verification skill
│   └── settings.json                  # Claude agent settings & constraints
├── docs/
│   ├── ai/
│   │   └── prompt-sequence.md         # Chronological AI prompts & engineering log
│   └── architecture/
│       ├── architecture-diagram.svg   # High-level architecture (SVG vector)
│       ├── architecture-diagram.png   # High-level architecture (2400px PNG)
│       └── architecture-diagram.pdf   # High-level architecture (Vector PDF)
├── public/
│   ├── fonts/
│   │   └── AirbnbCerealVF.woff2       # Authentic local Airbnb variable font
│   └── images/                        # 43 listing photos, avatars & vector UI assets
├── src/
│   ├── app/
│   │   ├── globals.css                # Tailwind base, typography & animations
│   │   ├── layout.jsx                 # Root HTML shell & metadata
│   │   └── page.jsx                   # Master state orchestrator (Listing/Tour/Lightbox)
│   ├── components/
│   │   ├── booking/
│   │   │   ├── GuestSelector.jsx      # Guest count stepper dropdown
│   │   │   └── StickyBookingCard.jsx  # Sticky reservation card with 10% promo
│   │   ├── common/
│   │   │   └── Icon.jsx               # SVG icon renderer with strict bounds
│   │   ├── layout/
│   │   │   ├── Footer.jsx             # Comprehensive desktop footer
│   │   │   ├── Header.jsx             # Header with 3-segment search pill
│   │   │   └── StickySubNav.jsx       # Scroll-triggered navigation sub-bar
│   │   ├── lightbox/
│   │   │   └── Lightbox.jsx           # Single-photo viewer (white background)
│   │   ├── listing/
│   │   │   ├── AmenityModal.jsx       # 50-amenity categorized modal dialog
│   │   │   ├── AmenitiesSection.jsx   # Top 10 amenities preview
│   │   │   ├── CalendarSection.jsx    # Interactive 2-month range selector
│   │   │   ├── DescriptionSection.jsx # Expandable property overview
│   │   │   ├── HeroGallery.jsx        # 5-photo mosaic with priority loading
│   │   │   ├── HighlightsSection.jsx  # Feature callouts (outdoor, check-in)
│   │   │   ├── HostSection.jsx        # Host profile & 8 co-host avatars
│   │   │   ├── ListingHeader.jsx      # Title, share toast, save heart toggle
│   │   │   ├── ListingSummary.jsx     # Bed counts, Guest favourite laurel card
│   │   │   ├── LocationSection.jsx    # Vector Candolim map with custom pin
│   │   │   ├── NearbyStays.jsx        # 8-stay paginated carousel
│   │   │   ├── ReviewCard.jsx         # Individual review item
│   │   │   ├── ReviewModal.jsx        # Full review search & filter modal
│   │   │   ├── ReviewsSection.jsx     # 4.95 rating, laurel banner, category bars
│   │   │   ├── SleepSection.jsx       # Bedroom & living room card breakdown
│   │   │   └── ThingsToKnow.jsx       # House rules, safety & cancellation
│   │   └── photoTour/
│   │       └── PhotoTour.jsx          # Full-screen photo tour with 9 categories
│   ├── data/
│   │   ├── icons.js                   # 91 pure JavaScript SVG icon paths
│   │   ├── listing.js                 # Complete listing metadata & amenities
│   │   ├── nearbyStays.js             # 8 nearby properties data
│   │   ├── photos.js                  # 43 photos mapped across 9 categories
│   │   └── reviews.js                 # 19 reviews, category scores & topic chips
│   ├── hooks/
│   │   ├── useAnimatedModal.js        # Smooth modal entrance & exit animation lifecycle
│   │   └── useScrollLock.js           # Custom hook for reference-counted scroll locking
│   └── utils/
│       └── scrollLock.js              # Reference-counted lock manager + scrollbar compensation
├── package.json                       # Clean dependencies (pure JavaScript, zero TypeScript)
├── postcss.config.js                  # PostCSS configuration
├── tailwind.config.js                 # Custom design tokens, colors & fonts
└── README.md                          # Comprehensive project documentation

---

## Verification & Test Checklist

- [x] **Zero TypeScript**: Verified with `find src -name "*.ts" -o -name "*.tsx"`; returns 0 files.
- [x] **Clean Production Build**: `npm run build` generates optimized static pages with 0 errors and 0 warnings.
- [x] **Zero Lint Warnings**: `npm run lint` passes cleanly with 0 errors and 0 warnings.
- [x] **Listing Page Fidelity**: Matched to reference across hero mosaic, guest favourite laurel card, sticky sub-nav, sticky booking card, calendar, amenities, reviews, host, and nearby stays.
- [x] **Photo Tour Parity**: 9 categories, centered thumbnail navigation with authentic wrapping, sticky category headers, and responsive image rows.
- [x] **Lightbox Parity**: Clean white background, 3×3 grid icon, category name, "X of 43" counter, previous/next circular buttons, and full keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`).
- [x] **Document Scroll Locking**: Reference-counted scroll locking with automatic scrollbar width compensation (`src/utils/scrollLock.js`).
- [x] **Accessible Focus Management**: Focus traps, visible focus rings, keyboard activation (`Enter`/`Space`), and proper ARIA role attributes.
- [x] **High-Level Architecture Diagrams**: Available in SVG, PNG (2400px), and PDF formats (`docs/architecture/`).
- [x] **Claude Code Sub-Agents & Skills**: Fully configured in `.claude/agents/` and `.claude/skills/`.
- [x] **AI Prompt Sequence**: Documented in `docs/ai/prompt-sequence.md`.

---

*Authored for the Playpower Labs Technical Take-Home Assignment.*
