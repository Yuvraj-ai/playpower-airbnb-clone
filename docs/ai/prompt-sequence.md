# Sequence of AI Prompts & Workflow Log

> **Playpower Labs Take-Home Assignment**: Airbnb-Clone App  
> **Target Reference**: `https://airbnb-clone-umber-two.vercel.app`  
> **Development Paradigm**: AI-Native Agentic Engineering (Claude Code / Autonomous Coding Agents)

---

## 1. Overview & Strategy

This document outlines the chronological prompt sequence, agent directives, and decision-making pipeline used throughout the AI-assisted engineering lifecycle of this project.

### Core Guiding Principles:
1. **Clean-Room Reimplementation**: Zero lift-and-shift or scraping of reference JavaScript bundles or HTML. Visual and behavioral analysis only.
2. **Strict Tech Constraints**: 100% pure modern JavaScript (`.js`/`.jsx`) — zero TypeScript (`.ts`/`.tsx`).
3. **Desktop-First Pixel Fidelity**: Calibrated for 1920×1080 desktop display with responsive fluidity across 1536px and 1440px.
4. **Autonomous Sub-Agent Orchestration**: Codified specialized agents for UI Visual QA, Accessibility (WCAG 2.1 AA), Code Hygiene, and Production Architecture.

---

## 2. Chronological Prompt Sequence

### Prompt 1: Project Initialization & Clean-Room Architecture
```text
Role: Principal Frontend Architect & AI-Native Engineer
Task: Initialize a pixel-perfect, desktop-only clone of the Airbnb property listing at https://airbnb-clone-umber-two.vercel.app.

Constraints:
1. Pure JavaScript (ES2022+ / JSX) ONLY. Do NOT use TypeScript (.ts/.tsx) anywhere in src/.
2. Original, clean-room implementation. Do not scrape or copy internal scripts, CSS, or component architectures from the reference site.
3. Tech Stack: Next.js 14 App Router, React 18, Tailwind CSS 3.4.
4. Scope: Implement the 3 core views:
   - Listing Page (full property view, header, hero gallery, sticky booking card, calendar, amenities, reviews, host, map)
   - Photo Tour (full-screen categorized gallery with sticky header and category jump nav)
   - Lightbox (single-photo viewer with 1..43 navigation, counter, grid icon return, keyboard support)
5. Generate the project structure and configure Tailwind with Airbnb design tokens (colors, fonts, box-shadows).
```

### Prompt 2: Asset Pipeline & Deterministic Data Modeling
```text
Task: Model the listing data, photo catalog, vector icons, and review metadata for the Candolim serviced apartment listing.

Requirements:
1. Extract and normalize the 43 photos into 9 deterministic categories matching the reference:
   - Living room 1 (photos 1-3)
   - Living room 2 / Patio Jacuzzi (photos 4-8)
   - Full kitchen (photos 9-14)
   - Bedroom (photos 15-18)
   - Full bathroom (photos 19-21)
   - Gym (photos 22-26)
   - Exterior (photos 27-31)
   - Pool (photos 32-35)
   - Additional photos (photos 36-43)
2. Build an inlined SVG icon registry (src/data/icons.js) and Icon component (src/components/common/Icon.jsx) to eliminate external icon font dependencies and prevent Cumulative Layout Shift (CLS).
3. Ensure local Airbnb Cereal variable-weight font is loaded via @font-face with font-display: swap.
```

### Prompt 3: Listing Page Implementation
```text
Task: Build the main Listing Page components matching the reference layout:
1. Header: Full-width sticky bar (80px), coral logo, 3-segment search pill ("Anywhere | Any week | Add guests"), host CTA, globe, user menu.
2. StickySubNav: Secondary navigation appearing after scrollY > 580px with 4 synchronized tabs (Photos, Amenities, Reviews, Location), price summary, and Reserve action.
3. HeroGallery: 1 large left photo + 4 right photos in 2x2 grid (470px height, 8px gap, rounded-2xl corners), "Show all photos" floating button.
4. ListingSummary: Room stats, "Guest favourite" badge with dual laurels and 4.95 rating, host summary.
5. HighlightsSection & DescriptionSection: Property highlights and expandable description with translation notice.
6. SleepSection: Bedroom cards with image previews and bed configurations.
7. AmenitiesSection & AmenityModal: 10 primary amenities and "Show all 50 amenities" modal with category grouping.
8. CalendarSection: Interactive 2-month calendar (October & November 2026) with date range selection and night counter.
9. StickyBookingCard & GuestSelector: Sticky reservation card (top-28), 10% promo callout, date trigger, guest stepper dropdown (max 3 guests, min 1 adult), and ₹28,499 total calculation.
10. ReviewsSection & ReviewModal: Overall rating hero, 6 category breakdown bars, filterable topic chips, 2-column review cards, and search modal.
11. LocationSection, HostSection, ThingsToKnow, NearbyStays, and Footer.
```

### Prompt 4: Photo Tour & Lightbox Overlay Views
```text
Task: Implement the Photo Tour full-screen overlay and the single-photo Lightbox viewer with bidirectional URL synchronization.

Requirements:
1. PhotoTour:
   - Fullscreen overlay with sticky header (< Back, "Photo tour", Share, Save).
   - 9-category thumbnail jump navigation bar.
   - Categorized sections with sticky left titles and responsive right image grids (full and half-width layouts).
   - Clicking any photo opens Lightbox at that photo's global index.
2. Lightbox:
   - Clean white background (#FFFFFF).
   - Header with grid icon (return to Photo Tour), category title, "X of 43" counter, and close button.
   - Large centered image with priority preloading.
   - Previous and Next circular arrow buttons with boundary disabled states.
   - Full keyboard navigation: ArrowLeft, ArrowRight, and Escape.
3. URL State Synchronization:
   - Synchronize view states with URL search parameters (?view=photos, ?view=photos&photo=N).
   - Listen to window popstate events to handle browser back and forward buttons gracefully.
```

### Prompt 5: Visual Fidelity Audit & Discrepancy Elimination
```text
Task: Conduct a rigorous visual comparison against all 24 reference screenshots in /references/ at 1920x1080, 1536px, and 1440px desktop viewports.

Target Checkpoints:
1. Header user avatar: Replace dark generic avatar with authentic white silhouette on #717171 circle with white hamburger icon.
2. Booking card Reserve CTA: Apply authentic multi-stop coral gradient (from-[#E61E4D] via-[#E31C5F] to-[#D70466]).
3. Booking calculation: Match exact ₹28,499 for 5 nights figure.
4. Photo Tour thumbnails: Ensure 8 items display on row 1 with item 9 wrapping to row 2.
5. Lightbox photo #22: Ensure gym cable equipment photo is correctly indexed.
6. Verify sticky headers, margins, borders, typography, and divider placements.
```

### Prompt 6: Behavioral QA & Edge Case Hardening
```text
Task: Test the application interactively across all interaction states like an evaluator:
1. Listing Page: Header search trigger, date range selection in CalendarSection, guest selector increment/decrement with minimum 1 adult and maximum 3 guests cap.
2. Modals: Open/close Amenity Modal (50 items) and Review Modal (search filtering, category ratings) with backdrop click and Escape key.
3. Photo Tour: Verify all 43 photos are reachable, category jump buttons scroll smoothly, and back button returns to listing.
4. Lightbox: Test keyboard ArrowLeft, ArrowRight, and Escape navigation; verify counter updates synchronously.
5. Nearby Stays: Verify 1/2 pagination forward and backward.
```

### Prompt 7: Production-Quality Code Review (25 Criteria)
```text
Task: Perform a production-grade code review across all 25 criteria:
1. Component architecture & state management.
2. Fix Lightbox history pollution: Use replaceState for intra-lightbox photo navigation and pushState for view transitions.
3. Reference-counted scroll locking: Implement src/utils/scrollLock.js and src/hooks/useScrollLock.js with scrollbar width compensation to eliminate desktop layout jump.
4. Accessibility: Add role="button", tabIndex={0}, and onKeyDown handlers to SleepSection cards and Header search pill.
5. Rendering performance: Memoize PhotoTour category layout rows (useMemo); hoist pure calendar helper functions and static arrays outside component scope.
6. Clean up: Remove unused lucide-react dependency from package.json and remove redundant "use client" directives from static components.
7. Verify npm run lint and npm run build pass with zero warnings and zero errors.
```

### Prompt 8: Production Architecture Specification & Deliverables
```text
Task: Generate high-level production architecture deliverables for a vacation-rental marketplace:
1. Create a detailed architectural diagram (docs/architecture/architecture-diagram.svg) illustrating Edge CDN, RSC App Router shell, API Gateway, Microservices, Distributed Caching, Storage, Search Cluster, and Observability.
2. Render high-resolution PNG (architecture-diagram.png) and vector PDF (architecture-diagram.pdf) versions for formal submission.
3. Document Claude Code sub-agent and skill configurations (.claude/agents/, .claude/skills/).
4. Prepare prompt sequence documentation (docs/ai/prompt-sequence.md) and verify final project build.
```

### Prompt 9: Nearby Stays Trackpad Horizontal Scrolling
```text
Task: Enable horizontal trackpad and mouse-wheel scrolling for the "More stays nearby" section.
1. Transform NearbyStays into an overflow-x-auto container with snap-x snap-mandatory.
2. Add a custom wheel listener translating vertical wheel gestures (deltaY) to horizontal scroll.
3. Synchronize the 1 / 2 pagination indicator and chevron buttons with scroll position.
```

### Prompt 10: Smooth Transitions & Lifecycle Animations
```text
Task: Add entrance and exit animations across the application:
1. Secondary header (StickySubNav): Smooth slide-down from top upon scrolling past the hero gallery and slide-up on scroll-up.
2. Main Header: Clean relative flow that scrolls off-screen without stacking.
3. Modals (AmenityModal & ReviewModal): Fade-in and float-up on open, subtle float-down and fade-out on exit before unmounting.
4. Photo Tour & Lightbox: Smooth enter/exit transitions with useAnimatedModal.
5. Hero gallery image hover zoom, heart pop animation, and clipboard toast slide-in.
```

### Prompt 11: Final Verification & Submission Preparation
```text
Task: Audit and prepare the repository for final submission:
1. Remove all unused files, test screenshots, and temporary extraction artifacts.
2. Verify strict zero TypeScript (.ts/.tsx) and zero Java code constraints.
3. Confirm all assets are local in public/ and no external fonts/CDNs are needed.
4. Verify npm install, npm run lint, and npm run build pass cleanly with 0 errors.
```

---

## 3. Sub-Agent Orchestration Architecture

```
                       ┌────────────────────────┐
                       │   Lead Coding Agent    │
                       │     (Antigravity)      │
                       └───────────┬────────────┘
                                   │
         ┌─────────────────────────┼─────────────────────────┐
         │                         │                         │
┌────────▼────────┐       ┌────────▼────────┐       ┌────────▼────────┐
│  ui-visual-qa   │       │ accessibility-qa│       │  code-quality   │
│ (Pixel Parity)  │       │ (WCAG 2.1 AA)   │       │(Pure JS/Clean)  │
└─────────────────┘       └─────────────────┘       └─────────────────┘
         │                         │                         │
         └─────────────────────────┼─────────────────────────┘
                                   │
         ┌─────────────────────────┴─────────────────────────┐
         │                                                   │
┌────────▼────────┐                                 ┌────────▼────────┐
│performance-rev. │                                 │ architecture-rev│
│(CLS / LCP / Web)│                                 │ (Scaling Spec)  │
└─────────────────┘                                 └─────────────────┘
```

---

## 4. Key Engineering Insights & Lessons Learned

1. **Scroll Lock Reference Counting**:
   - In single-page applications with multi-level overlays (e.g., Listing → Photo Tour → Lightbox), naive assignment to `document.body.style.overflow = "hidden"` and restoration in component unmount effects results in race conditions.
   - Introducing a reference-counted lock manager (`lockCount`) ensures that transitioning between overlays maintains the scroll lock until all active overlays are dismissed.
2. **Scrollbar Layout Shift Compensation**:
   - Desktop operating systems that display permanent scrollbars (Windows, Linux, non-overlay macOS) experience an 8–17px layout jump when `overflow: hidden` is applied.
   - Calculating `window.innerWidth - document.documentElement.clientWidth` and setting compensation `paddingRight` on `body` completely eliminates this visual jump.
3. **History Stack Hygiene**:
   - Pushing a new browser history entry (`pushState`) on every individual photo change in a Lightbox viewer creates a frustrating user experience where pressing "Back" steps through individual photos rather than closing the Lightbox.
   - Using `replaceState` for photo index navigation within the Lightbox and reserving `pushState` for view transitions preserves clean back navigation.
