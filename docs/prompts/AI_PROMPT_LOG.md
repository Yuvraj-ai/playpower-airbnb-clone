# Playpower Labs Airbnb Clone — Chronological AI Development Prompt Log

> **Project:** Playpower Labs Airbnb Clone Take-Home Assignment (`playpowa`)  
> **Total Prompts Recorded:** 26  
> **Date Range:** 2026-09-16 14:19:05 UTC to 2026-09-16 20:48:42 UTC (19:49 IST to 02:18 IST)  
> **Integrity Notice:** All prompts below are preserved verbatim as entered during the development session without summarization, omission, or paraphrasing.

---

### Prompt 1 — Initial Assignment Specification & Full Requirements

**Approximate timestamp:** `2026-09-16T14:19:05Z` (UTC)

**Original prompt:**
```text
You are the lead engineer responsible for completing a take-home assignment for Playpower Labs.

We need to build a pixel-perfect desktop clone of the Airbnb-style listing application shown at:

https://airbnb-clone-umber-two.vercel.app

The assignment explicitly requires:

1. Listing Page
2. Photo Tour overlay/view
3. Lightbox single-photo viewer

The reference implementation is the SINGLE SOURCE OF TRUTH for visual appearance and behavior.

IMPORTANT:
- This is an ORIGINAL REIMPLEMENTATION.
- DO NOT copy, scrape, lift-and-shift, or reproduce the reference site's source code, HTML structure, CSS, JavaScript bundles, component names, or implementation.
- You may inspect the reference visually and behaviorally.
- Recreate the UI and behavior independently from the observed result.
- Do not copy implementation details from any existing Airbnb clone repository.
- The final code must be clearly our own implementation.

==================================================
TECHNOLOGY REQUIREMENTS
==================================================

Use a JavaScript-only stack.

MANDATORY:
- Next.js
- React
- JavaScript
- Tailwind CSS
- CSS where necessary
- Node.js only if backend/tooling functionality is actually required

DO NOT USE:
- Java
- TypeScript
- .ts files
- .tsx files
- Angular
- unnecessary backend infrastructure
- unnecessary databases
- unnecessary authentication
- unnecessary API services

Backend is optional for this assignment, so prefer a frontend-focused architecture unless there is a compelling reason otherwise.

Use Next.js App Router.

Use JavaScript files:
- .js
- .jsx

Do not introduce TypeScript.

==================================================
REFERENCE MATERIAL
==================================================

The repository contains reference screenshots in:

/references/

You MUST inspect every reference screenshot available there before implementing the UI.

Also inspect the live reference page:

https://airbnb-clone-umber-two.vercel.app

Use the screenshots as the primary visual specification.

Do NOT assume generic Airbnb design is sufficient.

Measure and reproduce:
- overall container width
- header height
- horizontal spacing
- vertical spacing
- typography scale
- font weights
- line heights
- borders
- radii
- shadows
- image aspect ratios
- grid proportions
- sidebar width
- sticky behavior
- modal dimensions
- overlay behavior
- button sizes
- icon placement
- hover behavior
- transition timing
- scrolling behavior

If the screenshots and generic Airbnb behavior disagree, the screenshots/reference behavior win.

==================================================
DESKTOP ONLY
==================================================

The assignment explicitly says desktop only.

Do not spend significant development time creating a mobile layout.

The primary target is approximately:

1920px desktop viewport.

Also test:

1440px
1536px
1920px

The layout should remain visually correct across these desktop widths.

==================================================
APPLICATION STRUCTURE
==================================================

Build the application around three major states/views:

VIEW 1:
Listing Page

VIEW 2:
Photo Tour

VIEW 3:
Lightbox

The expected interaction flow is:

Listing Page
   |
   |-- click Show all photos
   |-- click any hero image
   v
Photo Tour
   |
   |-- click any gallery image
   v
Lightbox
   |
   |-- previous
   |-- next
   |-- keyboard arrows
   |-- Escape
   v
Photo Tour

Escape from Photo Tour:
   |
   v
Listing Page

Implement this state hierarchy cleanly.

==================================================
LISTING PAGE
==================================================

Reproduce the complete property listing page from the reference.

The page should contain:

1. Top navigation/header

2. Listing title

3. Share button

4. Save button

5. Hero image mosaic

6. Listing metadata

7. Guest favourite/rating information

8. Host information

9. Sticky booking card

10. Promotional/discount card if visible in reference

11. Description section

12. Property highlights

13. Sleeping arrangements

14. Amenities

15. Location/map section

16. Host section

17. Things to know

18. Reviews

19. Nearby stays

20. Footer/end content if visible

Do not omit sections simply because they are below the initial viewport.

The page should have the same visual hierarchy as the reference.

==================================================
HEADER
==================================================

Recreate the reference header.

It should contain the observed elements such as:

- Airbnb-style logo area
- centered search pill
- location/Anywhere section
- date/Anytime section
- guests/Add guests section
- search icon
- Become a host
- globe/language icon
- account/menu control

Use icons from a suitable icon library if needed.

Prefer lucide-react if it fits the reference.

Do not use emoji as UI icons.

Icons must visually match the reference in:
- size
- stroke weight
- position
- spacing

==================================================
HERO GALLERY
==================================================

Recreate the exact desktop hero mosaic.

The reference uses:

- one large image on the left
- four smaller images on the right
- 2x2 arrangement
- rounded outer corners
- controlled gaps
- object-fit: cover

Implement the gallery using CSS Grid.

The "Show all photos" control must appear in the same location/style as the reference.

Every hero image must be clickable.

Clicking a hero image should open the Photo Tour.

==================================================
LISTING INFORMATION
==================================================

Reproduce the content visible in the screenshots/reference.

Use static local data.

Do not create a backend merely to store listing data.

Create a central data model, for example:

data/listing.js

The data model should contain:

- title
- location
- propertyType
- guests
- bedrooms
- beds
- bathrooms
- rating
- reviewCount
- host
- hostingDuration
- price
- currency
- booking dates
- description
- amenities
- sleepingSpaces
- reviews
- photo categories
- nearby properties

All UI components should consume this data rather than duplicating strings.

==================================================
BOOKING CARD
==================================================

Implement the sticky reservation card shown on the right.

It should contain:

- price
- nights
- date selection
- guest selection
- cancellation information
- Reserve button
- charge information

It must visually match the reference.

The card should remain sticky while the user scrolls through the listing, matching the reference behavior.

==================================================
CALENDAR
==================================================

Implement the calendar shown by the booking interaction.

The reference shows:

October 2026
November 2026

with a selected date range.

Recreate:

- month headers
- weekdays
- dates
- selected start date
- selected end date
- range background
- navigation arrows
- disabled dates where appropriate

The calendar must be an actual interactive component.

Users should be able to select dates.

Do not use an enormous external calendar library unless absolutely necessary.

A small custom calendar implementation is preferred for pixel fidelity.

==================================================
GUEST SELECTOR
==================================================

Implement the guest selector.

It should support:

- adults
- children
- infants
- pets if shown by reference

Use plus/minus controls.

Prevent invalid negative values.

Match the dropdown/popup styling from the reference.

==================================================
PHOTO TOUR
==================================================

This is one of the most important parts.

The Photo Tour must behave as a full-screen gallery view.

It is NOT a small centered modal.

It should cover the viewport.

It should contain:

- top navigation
- back button
- "Photo tour" heading
- share control
- save/heart control
- category navigation/overview where visible
- category title
- category description/features
- gallery images
- vertical scrolling

The Photo Tour should contain these categories observed in the reference:

1. Living room 1
2. Living room 2
3. Full kitchen
4. Bedroom
5. Full bathroom
6. Gym
7. Exterior
8. Pool
9. Additional photos

Make this data-driven.

Example:

photoTourCategories = [
  {
    id: "living-room-1",
    title: "Living room 1",
    description: "...",
    photos: [...]
  },
  ...
]

Do not hardcode gallery markup separately for every category.

==================================================
PHOTO TOUR IMAGE LAYOUT
==================================================

Different categories may use different layouts based on the reference.

Reproduce the visual arrangements shown in the screenshots.

Examples include:

- large image + smaller images
- masonry-like layouts
- stacked images
- category-specific arrangements

Do not force every category into the exact same grid if the reference differs.

Use reusable gallery layout primitives.

==================================================
PHOTO COUNT
==================================================

The reference demonstrates a total gallery count of approximately 43 photos.

Create a deterministic ordered photo array.

Every photo must have:

- id
- source
- category
- title/alt text
- global index

Example:

{
  id: "photo-01",
  src: "/images/photo-01.jpg",
  category: "living-room-1",
  index: 1,
  alt: "Living room"
}

The global order must remain stable.

This allows the lightbox to display:

1 of 43
2 of 43
...
43 of 43

==================================================
LIGHTBOX
==================================================

The lightbox is a separate visual state.

The reference lightbox has a WHITE background.

Do NOT make it a typical black/dark image viewer.

It should contain:

- category/title
- current photo count
- close button
- previous button
- next button
- large centered image

Example:

Gym

22 of 43

[X]

< image >

[previous]                 [next]

The image should maintain its aspect ratio.

Do not distort images.

==================================================
LIGHTBOX KEYBOARD NAVIGATION
==================================================

Implement:

ArrowLeft:
previous image

ArrowRight:
next image

Escape:
close lightbox and return to Photo Tour

Do not allow keyboard events to accidentally trigger page scrolling while the lightbox is active.

==================================================
MODAL / OVERLAY STATE
==================================================

Implement proper nested navigation.

Expected behavior:

Listing
  -> Photo Tour
  -> Lightbox

Lightbox
  -> Photo Tour

Photo Tour
  -> Listing

Escape behavior:

If Lightbox open:
Escape closes Lightbox only.

If Photo Tour open:
Escape closes Photo Tour.

If normal listing:
Escape does nothing.

Background document scrolling must be disabled while Photo Tour or Lightbox is active.

Restore scrolling correctly when overlays close.

==================================================
BROWSER HISTORY
==================================================

Where practical, use URL state or browser history so that opening:

Photo Tour

and then:

Lightbox

does not destroy navigation semantics.

For example:

?view=photos
?view=photos&photo=22

This is preferred, but do not over-engineer routing if it compromises visual fidelity.

Browser back should ideally return:

Lightbox
 -> Photo Tour
 -> Listing

==================================================
ACCESSIBILITY
==================================================

The assignment explicitly evaluates accessibility.

Implement:

- semantic HTML
- proper button elements
- aria-labels
- keyboard navigation
- visible focus states
- Escape handling
- focus management
- appropriate dialog semantics
- aria-modal where applicable
- meaningful image alt text

When opening a modal/lightbox:

1. move focus to the relevant control
2. trap focus inside the modal where appropriate
3. restore focus when closing

Do not implement fake buttons using divs.

==================================================
ANIMATIONS
==================================================

The assignment evaluates animations and transitions.

Inspect the reference carefully.

Recreate:

- hover transitions
- image hover behavior
- button hover behavior
- overlay opening
- overlay closing
- lightbox image transitions if present
- sticky behavior
- subtle scale/fade transitions

Animations should be subtle and production-quality.

Do not add random animations that are not present in the reference.

Use CSS transitions where possible.

Respect:

prefers-reduced-motion

==================================================
REVIEWS
==================================================

Reproduce the reviews section.

Include:

- overall rating
- category ratings
- review topic chips
- review cards
- reviewer information
- review dates/text
- Show all reviews control

Use static data.

Build reusable ReviewCard components.

If the reference opens a review modal, implement it.

==================================================
AMENITIES
==================================================

Reproduce the amenities grid.

Use reusable amenity objects.

Example:

{
  icon: "wifi",
  name: "Wifi"
}

Include the amenities visible in the reference.

If the reference has:

"Show all amenities"

implement the corresponding modal.

==================================================
SLEEPING ARRANGEMENTS
==================================================

Reproduce the "Where you'll sleep" section.

Create reusable cards for:

- Bedroom
- Living room

Use the correct reference images and labels.

==================================================
LOCATION
==================================================

Reproduce the location section.

It should include:

- Candolim / Goa location information as shown in reference
- map-style visual
- location description
- neighborhood highlights

Do not integrate a real map API unless necessary.

A styled local map placeholder is sufficient if the reference uses a static map-like visual.

==================================================
HOST SECTION
==================================================

Reproduce the host section.

Include:

- host name
- profile/avatar
- reviews
- rating
- years hosting
- response rate
- response time
- co-hosts
- Message host button

Match the reference layout.

==================================================
THINGS TO KNOW
==================================================

Reproduce:

- cancellation policy
- house rules
- check-in
- checkout
- guest limit
- safety information
- smoke alarm
- carbon monoxide alarm
- exterior cameras

Use expandable sections if the reference uses them.

==================================================
NEARBY STAYS
==================================================

Reproduce the horizontal nearby-property carousel.

It should include:

- property image
- title
- price
- rating
- navigation arrows

Make the arrows functional.

==================================================
DATA ARCHITECTURE
==================================================

Keep application content separate from UI.

Recommended:

src/
  app/
  components/
  data/
  hooks/
  lib/
  styles/
  utils/

Example:

src/data/listing.js
src/data/photos.js
src/data/reviews.js
src/data/nearbyStays.js

Do not put hundreds of lines of data directly inside JSX components.

==================================================
RECOMMENDED COMPONENT STRUCTURE
==================================================

Create reusable components such as:

Header
SearchBar
ListingPage
ListingHeader
HeroGallery
ListingSummary
BookingCard
PromoCard
Calendar
GuestSelector
DescriptionSection
HighlightsSection
SleepSection
AmenitiesSection
AmenityModal
LocationSection
HostSection
ThingsToKnow
ReviewsSection
ReviewCard
ReviewModal
NearbyStays
PhotoTour
PhotoTourHeader
PhotoTourCategory
PhotoGallery
Lightbox
IconButton
Modal

Use sensible component boundaries.

Do not split tiny pieces into pointless components.

==================================================
IMAGE HANDLING
==================================================

Keep images local.

Prefer:

public/images/

Do not depend on random external image URLs for the final application.

Use next/image where appropriate if it does not make pixel matching difficult.

The hero image should load eagerly.

Below-the-fold images should use lazy loading where appropriate.

Provide dimensions/aspect ratios to reduce layout shift.

==================================================
DESIGN SYSTEM
==================================================

Create centralized design tokens.

At minimum define:

- primary accent
- text color
- secondary text
- border
- background
- muted background
- radii
- shadows
- container width
- header height
- spacing scale

Do not scatter arbitrary values throughout the code.

However, pixel fidelity takes priority over forcing everything into a generic design system.

==================================================
RESPONSIVENESS
==================================================

Desktop only.

Prioritize:

1920px.

Ensure the layout works at:

1440px
1536px
1920px

Avoid horizontal overflow.

Do not spend time implementing mobile breakpoints unless needed to prevent catastrophic layout behavior.

==================================================
PERFORMANCE
==================================================

Keep the app fast.

Avoid unnecessary dependencies.

Avoid unnecessary client components.

Use client components only where interaction requires them.

Lazy load gallery images where appropriate.

Do not load all high-resolution images simultaneously if unnecessary.

Avoid unnecessary re-renders.

==================================================
CODE QUALITY
==================================================

The assignment explicitly evaluates AI-native development and code quality.

Write maintainable production-quality code.

Do not generate one enormous App.jsx.

Do not duplicate gallery logic.

Do not duplicate modal logic.

Do not hardcode 43 independent image components.

Use reusable data-driven components.

Add comments only where they clarify non-obvious behavior.

Do not add meaningless comments.

==================================================
AI SUBAGENT / SKILL CONFIGURATION
==================================================

The assignment specifically asks for sub-agent/skill configuration files.

Create a useful Claude Code workflow configuration inside the repository.

Create appropriate files such as:

.claude/
  agents/
  skills/

The exact Claude Code-supported structure should be verified against the installed Claude Code environment rather than guessed.

Create specialized workflows/agents for:

1. UI visual QA
2. Accessibility QA
3. Code quality review
4. Performance review
5. Architecture review

Do not create fake configuration syntax.

Before creating these files, inspect the installed Claude Code documentation or available project tooling to determine the correct supported format.

The configs should be genuinely useful and included in the final submission.

==================================================
ARCHITECTURE DIAGRAM
==================================================

The assignment requires a high-level production-scale architecture diagram for a vacation-rental marketplace.

Create:

docs/
  architecture/
    architecture-diagram.svg

and/or:

docs/
  architecture/
    architecture-diagram.png

Prefer SVG because it is editable and clear.

The architecture should cover:

CLIENT
- Web browser
- CDN
- frontend application

EDGE
- CDN
- WAF
- load balancing

FRONTEND
- Next.js application
- static assets
- SSR/SSG where appropriate

BACKEND
- API gateway
- service layer
- authentication
- listing service
- booking service
- payment service
- review service
- user service

DATA
- PostgreSQL / relational database
- Redis cache
- object storage for property images
- search index

SEARCH
- search service/index
- location/search filtering
- ranking

ASYNC
- message queue
- background workers
- notifications
- image processing

OBSERVABILITY
- logging
- metrics
- tracing
- error monitoring

DEPLOYMENT
- CI/CD
- containerization
- cloud deployment
- CDN

Clearly show how the system scales horizontally.

This is an ARCHITECTURE DELIVERABLE, not necessarily an implementation requirement.

Do not build the production backend just for the diagram.

==================================================
README
==================================================

Create a professional README.md.

Include:

- project overview
- assignment goal
- tech stack
- setup instructions
- development command
- production build command
- architecture explanation
- folder structure
- AI-assisted development workflow
- testing instructions
- accessibility notes
- known limitations
- deployment instructions

Explicitly mention that this is an independently implemented visual recreation.

==================================================
VALIDATION
==================================================

After implementation:

1. Run the development server.
2. Verify the app loads without errors.
3. Run lint.
4. Run build.
5. Fix all build errors.
6. Fix all console errors.
7. Test the listing page.
8. Test scrolling.
9. Test sticky booking card.
10. Test Photo Tour.
11. Test category navigation.
12. Test Lightbox.
13. Test previous/next.
14. Test ArrowLeft.
15. Test ArrowRight.
16. Test Escape.
17. Test background scroll lock.
18. Test focus behavior.
19. Test calendar.
20. Test guest selector.
21. Test amenity modal.
22. Test reviews.
23. Test nearby carousel.
24. Test browser back if URL state is implemented.

==================================================
VISUAL QA
==================================================

This is extremely important.

Do NOT stop when the application merely "looks similar."

Compare the implementation against the supplied screenshots and reference page.

Perform multiple visual QA passes.

For each pass inspect:

- header
- hero
- listing content
- booking card
- spacing
- typography
- image cropping
- image positioning
- border radii
- shadows
- buttons
- icons
- modal dimensions
- Photo Tour
- Lightbox
- calendar
- reviews
- nearby stays

Fix the largest visual discrepancies first.

Use screenshot comparison if browser automation/screenshot tooling is available.

Target visual parity, not merely functional parity.

==================================================
IMPORTANT DEVELOPMENT PROCESS
==================================================

Do NOT immediately generate the entire application blindly.

Follow this process:

PHASE 1:
Inspect repository and references.

PHASE 2:
Inspect the reference site visually.

PHASE 3:
Create implementation plan.

PHASE 4:
Scaffold Next.js JavaScript project.

PHASE 5:
Implement global styling and layout.

PHASE 6:
Implement listing page.

PHASE 7:
Implement Photo Tour.

PHASE 8:
Implement Lightbox.

PHASE 9:
Implement remaining interactions.

PHASE 10:
Implement accessibility.

PHASE 11:
Create architecture diagram.

PHASE 12:
Create Claude Code subagent/skill configurations.

PHASE 13:
Run QA.

PHASE 14:
Run visual comparison and polish.

Do not move to the next phase while the current phase has obvious errors.

==================================================
FINAL DELIVERABLE
==================================================

At the end, the repository should contain:

Working application

+
Architecture diagram

+
AI subagent/skill configuration

+
README

+
Local assets

+
Clean source code

+
No TypeScript

+
No Java

+
No copied reference source code

The final result should be suitable for zipping and submitting as the assignment.

Before finishing, provide me with:

1. final folder structure
2. technologies used
3. implemented views
4. implemented interactions
5. AI agent/skill configurations created
6. architecture diagram location
7. commands to run
8. remaining known limitations, if any

Start now by inspecting the repository and every file under /references/, then inspect the reference URL. Do not start coding until you have formed a concrete implementation plan based on the actual references.  , all the assets to be use are present in /home/imyuvi/projects/playpowa/extracted-assets/
```

---

### Prompt 2 — Status Check

**Approximate timestamp:** `2026-09-16T15:56:45Z` (UTC)

**Original prompt:**
```text
are you still working ?
```

---

### Prompt 3 — Dedicated Visual-Fidelity Audit

**Approximate timestamp:** `2026-09-16T16:06:16Z` (UTC)

**Original prompt:**
```text
Now perform a dedicated visual-fidelity audit.

Do NOT add new features yet.

Open the application and compare it against every reference screenshot in /references/ and the reference implementation:

https://airbnb-clone-umber-two.vercel.app

Treat the reference screenshots as the source of truth.

Inspect the application at 1920x1080 first, then 1536px and 1440px widths.

Audit:

- header dimensions
- container width
- left/right margins
- title position
- title typography
- metadata spacing
- hero gallery proportions
- image cropping
- image gaps
- image corner radii
- Share button
- Save button
- listing information
- booking card width
- booking card position
- sticky behavior
- section spacing
- divider placement
- typography
- icon size
- icon stroke weight
- buttons
- amenities
- sleeping cards
- map section
- host section
- review section
- nearby stays

Then audit Photo Tour:

- overlay size
- background
- header
- back button
- category layout
- image dimensions
- masonry/grid behavior
- scrolling
- category titles
- spacing

Then audit Lightbox:

- white background
- image size
- image positioning
- counter
- title
- close button
- previous/next buttons
- keyboard navigation
- transitions

Use browser screenshots if available.

Identify the 20 largest visual discrepancies.

Fix them systematically.

Do not rewrite working components unnecessarily.

After fixes, run another visual audit.

Continue until the remaining differences are minor.
```

---

### Prompt 4 — Dedicated Behavioral QA Pass

**Approximate timestamp:** `2026-09-16T16:52:18Z` (UTC)

**Original prompt:**
```text
Now perform a dedicated behavioral QA pass.

Do not focus primarily on visual styling.

Test the application like an evaluator.

LISTING PAGE:

- page loads without errors
- header controls work appropriately
- hero images are clickable
- Show all photos works
- Share interaction works if implemented
- Save interaction works if implemented
- booking card remains sticky
- calendar opens
- month navigation works
- date selection works
- selected range displays correctly
- guest selector opens
- plus/minus controls work
- invalid guest counts are prevented
- Reserve button behaves sensibly

PHOTO TOUR:

- opens from Show all photos
- opens from every hero image
- back button returns to listing
- Escape returns to listing
- scrolling works
- category sections work
- gallery images are clickable
- all photos are reachable

LIGHTBOX:

- opens from every gallery photo
- correct image is displayed
- correct global photo number is displayed
- previous button works
- next button works
- ArrowLeft works
- ArrowRight works
- first image handles previous correctly
- last image handles next correctly
- Escape closes only the lightbox
- closing lightbox returns to Photo Tour
- background page does not scroll
- focus is managed correctly
- close button works

ACCESSIBILITY:

- keyboard-only navigation works
- buttons are actual buttons
- aria labels exist where needed
- focus is visible
- modal focus behavior is correct
- Escape behavior is correct
- images have meaningful alt text

NEARBY STAYS:

- arrows work
- carousel does not break layout

REVIEWS:

- Show all reviews works if present

AMENITIES:

- Show all amenities works if present

Fix every issue you find.

Then run:

npm run lint
npm run build

and fix all errors.
```

---

### Prompt 5 — Production-Quality Code Review

**Approximate timestamp:** `2026-09-16T17:42:48Z` (UTC)

**Original prompt:**
```text
Perform a production-quality code review of the entire repository.

Do not redesign the application.

Review:

1. Component architecture
2. State management
3. Data modeling
4. React rendering behavior
5. unnecessary re-renders
6. duplicated code
7. duplicated gallery logic
8. modal logic
9. keyboard event handling
10. event listener cleanup
11. body scroll locking
12. image loading
13. layout shift
14. accessibility
15. semantic HTML
16. unused dependencies
17. unnecessary client components
18. dead code
19. console errors
20. build warnings
21. hardcoded values that should be data-driven
22. fragile CSS
23. incorrect z-index layering
24. overflow problems
25. desktop viewport behavior

Pay particular attention to the Photo Tour and Lightbox because they have complex state transitions.

Make only changes that improve correctness, maintainability, performance, or accessibility.

Do not over-engineer.

Run the complete build and lint process after the changes.
```

---

### Prompt 6 — Audit Against Original Playpower Labs Requirements

**Approximate timestamp:** `2026-09-16T18:18:15Z` (UTC)

**Original prompt:**
```text
Now audit the project against the original Playpower Labs assignment requirements.

The assignment requires:

- pixel-perfect Airbnb listing clone
- Listing Page
- Photo Tour
- Lightbox
- desktop-only implementation
- visual fidelity
- behavioral parity
- animations/transitions
- accessibility
- production-scale architecture diagram
- AI-native development workflow
- sub-agent/skill configuration files
- clean complete implementation
- no direct lift-and-shift of reference code
- final code + architecture diagram
- sequence of AI prompts

Check every requirement individually.

Create a checklist:

REQUIREMENT
STATUS
EVIDENCE / LOCATION
REMAINING WORK

Do not assume a requirement is complete just because something vaguely similar exists.

If something is missing, implement it.

Pay particular attention to:

1. architecture diagram
2. Claude Code agent/skill configuration
3. accessibility
4. keyboard navigation
5. visual parity
6. Photo Tour
7. Lightbox
8. animation/transition behavior
9. README
10. clean submission structure

After completing the audit, fix every missing requirement that can reasonably be completed within the assignment scope.

Then run the final build.
```

---

### Prompt 7 — Client-Side Exception Debugging (ReferenceError: rows is not defined)

**Approximate timestamp:** `2026-09-16T18:31:02Z` (UTC)

**Original prompt:**
```text
Application error: a client-side exception has occurred (see the browser console for more information). 
i am getting this error
console -- > ReferenceError: rows is not defined
    NextJS 12
        children
        G
        rE
        l$
        iZ
        ia
        il
        il
        oJ
        nb
        nw
        nC
117-aaea4c25072554b2.js:1:4044
    NextJS 28
        error
        l_
        callback
        nB
        nV
        aq
        aY
        a9
        aY
        a9
        aY
        a9
        aY
        a9
        aY
        a9
        aY
        a9
        aY
        a9
        aY
        a9
        aY
        is
        is
        nb
        nw
        nC
```

---

### Prompt 8 — Pixel Perfection Audit — Home Icon Size & Search Bar Shadow

**Approximate timestamp:** `2026-09-16T18:58:26Z` (UTC)

**Original prompt:**
```text
for the sake of pixel perfection i will be pointing out some differences that you have to close untill i am satisfied,
starting with the first one  --> the home icon beside "Anywhere" is very very small as compared to the to "https://airbnb-clone-umber-two.vercel.app/" which we are trying to replicate and also increase the background shadow by very little bit behind the "<div role="button" tabindex="0" aria-label="Search destinations, dates, and guests" class="flex items-center border border-surface-border rounded-full shadow-sm hover:shadow-md transition-shadow py-2 px-3 sm:px-4 cursor-pointer text-sm font-medium bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"><div class="flex items-center space-x-2 pr-3 pl-1"><img alt="Property" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="w-5 h-5 object-contain" style="color:transparent" src="/images/ui/searchbar-house.png"><span class="text-ink-primary font-semibold text-[14px]">Anywhere</span></div><div class="h-5 w-[1px] bg-surface-divider mx-1" aria-hidden="true"></div><div class="px-3"><span class="text-ink-primary font-semibold text-[14px]">Anytime</span></div><div class="h-5 w-[1px] bg-surface-divider mx-1" aria-hidden="true"></div><div class="flex items-center pl-3 space-x-3"><span class="text-ink-secondary font-normal text-[14px]">Add guests</span><button type="button" aria-label="Search" class="w-8 h-8 rounded-full bg-airbnb text-white flex items-center justify-center hover:bg-airbnb-dark transition-colors focus-visible:ring-2 focus-visible:ring-black"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-3.5 h-3.5 fill-current stroke-current stroke-2" aria-hidden="true"><path d="M13 2a11 11 0 0 1 8.6 17.86l8.83 8.84-1.42 1.41-8.83-8.83A11 11 0 1 1 13 2zm0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"></path></svg></button></div></div>" element i.e the whole tab of (Anywhere | Anytime | Add guests) button
```

---

### Prompt 9 — Pixel Perfection — Rendered Size of Home Icon (48x48 px)

**Approximate timestamp:** `2026-09-16T19:22:45Z` (UTC)

**Original prompt:**
```text
the rendered size of that home icon should be 48 x 48 px
```

---

### Prompt 10 — Header Layout — Padding Adjustment (48px horizontal, 8px top)

**Approximate timestamp:** `2026-09-16T19:28:33Z` (UTC)

**Original prompt:**
```text
the padding of this sections is 48 both left and right and and 8 on top
```

---

### Prompt 11 — Header Spacing — 28px Padding Top and Bottom

**Approximate timestamp:** `2026-09-16T19:40:21Z` (UTC)

**Original prompt:**
```text
now apply 28 padding top and bottom of that header , no need to do playwright tests just skip building it if there is something wrong i will tell you to revert it
```

---

### Prompt 12 — Header Spacing — Revert 8px Top Padding

**Approximate timestamp:** `2026-09-16T19:42:23Z` (UTC)

**Original prompt:**
```text
remove that 8 padding that i told you apply earlier
```

---

### Prompt 13 — Search Bar Sizing & Layout Matching (336.183 x 46)

**Approximate timestamp:** `2026-09-16T19:47:22Z` (UTC)

**Original prompt:**
```text
<div role="button" tabindex="0" aria-label="Search destinations, dates, and guests" class="flex items-center border border-surface-border rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.08),0_3px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)] transition-shadow py-1 pl-2 pr-2.5 sm:pr-3 cursor-pointer text-sm font-medium bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"><div class="flex items-center space-x-2 pr-3 pl-0.5"><div class="w-[48px] h-[48px] relative flex-shrink-0 flex items-center justify-center"><img alt="Property" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" class="w-[48px] h-[48px] object-contain" style="color:transparent" src="/images/ui/searchbar-house.png"></div><span class="text-ink-primary font-semibold text-[14px]">Anywhere</span></div><div class="h-6 w-[1px] bg-surface-divider mx-1" aria-hidden="true"></div><div class="px-3"><span class="text-ink-primary font-semibold text-[14px]">Anytime</span></div><div class="h-6 w-[1px] bg-surface-divider mx-1" aria-hidden="true"></div><div class="flex items-center pl-3 space-x-3"><span class="text-ink-secondary font-normal text-[14px]">Add guests</span><button type="button" aria-label="Search" class="w-8 h-8 rounded-full bg-airbnb text-white flex items-center justify-center hover:bg-airbnb-dark transition-colors focus-visible:ring-2 focus-visible:ring-black"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-3.5 h-3.5 fill-current stroke-current stroke-2" aria-hidden="true"><path d="M13 2a11 11 0 0 1 8.6 17.86l8.83 8.84-1.42 1.41-8.83-8.83A11 11 0 1 1 13 2zm0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"></path></svg></button></div></div> make it  336.183 x 46 instead of 366.891  x 48
```

---

### Prompt 14 — Search Bar — Enlarge House Icon Size

**Approximate timestamp:** `2026-09-16T19:56:02Z` (UTC)

**Original prompt:**
```text
the house has become smaller make it a little big bigger in size
```

---

### Prompt 15 — Search Bar — Fix Break Line & Uneven Item Spacing

**Approximate timestamp:** `2026-09-16T20:03:00Z` (UTC)

**Original prompt:**
```text
there is a break line in <div role="button" tabindex="0" aria-label="Search destinations, dates, and guests" class="flex items-center border border-surface-border rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.08),0_3px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)] transition-shadow py-1 pl-2 pr-2.5 sm:pr-3 cursor-pointer text-sm font-medium bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"><div class="flex items-center space-x-2 pr-3 pl-0.5"><div class="w-[48px] h-[48px] relative flex-shrink-0 flex items-center justify-center"><img alt="Property" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" class="w-[48px] h-[48px] object-contain" style="color:transparent" src="/images/ui/searchbar-house.png"></div><span class="text-ink-primary font-semibold text-[14px]">Anywhere</span></div><div class="h-6 w-[1px] bg-surface-divider mx-1" aria-hidden="true"></div><div class="px-3"><span class="text-ink-primary font-semibold text-[14px]">Anytime</span></div><div class="h-6 w-[1px] bg-surface-divider mx-1" aria-hidden="true"></div><div class="flex items-center pl-3 space-x-3"><span class="text-ink-secondary font-normal text-[14px]">Add guests</span><button type="button" aria-label="Search" class="w-8 h-8 rounded-full bg-airbnb text-white flex items-center justify-center hover:bg-airbnb-dark transition-colors focus-visible:ring-2 focus-visible:ring-black"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-3.5 h-3.5 fill-current stroke-current stroke-2" aria-hidden="true"><path d="M13 2a11 11 0 0 1 8.6 17.86l8.83 8.84-1.42 1.41-8.83-8.83A11 11 0 1 1 13 2zm0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"></path></svg></button></div></div> the space between the "|"(vertical break line) and  "Anywhere", "Anytime" and "Add guests" is not even ,it should be even with enough space between them
```

---

### Prompt 16 — Search Bar — Fix Add Guests Text Wrap & Bold Styling

**Approximate timestamp:** `2026-09-16T20:06:33Z` (UTC)

**Original prompt:**
```text
the "add guests" buttons's "guest" has shift to second line fix that and make bold like the others as "Anywhere" and "anytime"
```

---

### Prompt 17 — Search Bar — Fix Search Icon Overflowing Border

**Approximate timestamp:** `2026-09-16T20:08:38Z` (UTC)

**Original prompt:**
```text
now the search icon is going outside the borders , do proper tests and mcp and fix it properly
```

---

### Prompt 18 — Header Actions — Remove Language Globe & Separate Profile/Menu Buttons

**Approximate timestamp:** `2026-09-16T20:12:28Z` (UTC)

**Original prompt:**
```text
remove the button <button type="button" aria-label="Choose a language and currency" class="p-2.5 hover:bg-surface-muted rounded-full text-ink-primary transition-colors focus-visible:ring-2 focus-visible:ring-black"><span class="inline-flex items-center justify-center shrink-0 overflow-hidden [&amp;&gt;svg]:w-full [&amp;&gt;svg]:h-full [&amp;&gt;svg]:block w-4 h-4" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="display:block;height:100%;width:100%;fill:currentColor"><path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path></svg></span></button> beside "Become a host" and <div class="w-7 h-7 bg-[#717171] text-white rounded-full flex items-center justify-center overflow-hidden"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-7 h-7 fill-white translate-y-0.5" aria-hidden="true"><path d="M16 1a15 15 0 1 0 0 30 15 15 0 0 0 0-30zm0 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 24a12.94 12.94 0 0 1-9.17-3.83A8.99 8.99 0 0 1 16 19a8.99 8.99 0 0 1 9.17 6.17A12.94 12.94 0 0 1 16 29z"></path></svg></div> and <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="display:block;height:100%;width:100%;fill:none;stroke:currentColor;stroke-width:3;overflow:visible"><g fill="none"><path d="M2 16h28M2 24h28M2 8h28"></path></g></svg> should be two individual round icons not combined with eaqual distance of gap between them
```

---

### Prompt 19 — Continuation Request

**Approximate timestamp:** `2026-09-16T20:14:10Z` (UTC)

**Original prompt:**
```text
continue
```

---

### Prompt 20 — Hero Gallery — Aspect Ratio & Square Dimensions (560x560 & 272x280)

**Approximate timestamp:** `2026-09-16T20:21:03Z` (UTC)

**Original prompt:**
```text
the images on our page are a slight rectangles but should actually be square with the big pictures being 560 x 560 and small pictures being 272 x 280
```

---

### Prompt 21 — Header Navigation — User Profile & Hamburger Grey Background (#F1F1F1)

**Approximate timestamp:** `2026-09-16T20:25:22Z` (UTC)

**Original prompt:**
```text
the ham burger menu and user profile icons are pure white bg right now i want them to be grey like these buttons
```

---

### Prompt 22 — Nearby Stays — Horizontal Trackpad Scroll Support

**Approximate timestamp:** `2026-09-16T20:27:20Z` (UTC)

**Original prompt:**
```text
the more stays nearby section items should be scrollable left to right using trackpad
```

---

### Prompt 23 — Interactive Animations — Header Slide-Down & Modal Transitions

**Approximate timestamp:** `2026-09-16T20:32:00Z` (UTC)

**Original prompt:**
```text
our website lacks a lot of animations such as header changes when scrolled but there shoould be an animation of it coming down smoothly also when click of photos or show all 50 amenities thhey should open with fade and content coming up and when exiting them the content fading and going down subtly , add all the missing animations
```

---

### Prompt 24 — Header Scroll Transition — Hide Main Header & Sticky Subnav Behavior

**Approximate timestamp:** `2026-09-16T20:39:27Z` (UTC)

**Original prompt:**
```text
this header remains even after scrolled down and the second head stacks upon it , while the actaul implementation should be that the first one should go away when scrolled down and the second should one shoud appear after
```

---

### Prompt 25 — Final Submission Preparation — Cleanup, Lint, Build & Documentation

**Approximate timestamp:** `2026-09-16T20:41:40Z` (UTC)

**Original prompt:**
```text
Prepare this repository for final submission.

DO NOT change the visual design unless a critical bug requires it.

Perform the following:

1. Remove unused files.
2. Remove unused dependencies.
3. Remove debug console.logs.
4. Remove temporary scripts that are not part of the intended workflow.
5. Verify there are no TypeScript files.
6. Verify there is no Java code.
7. Verify no copied reference source code exists.
8. Verify all required assets are local.
9. Verify the application builds.
10. Verify lint passes.
11. Verify all reference views work.
12. Verify Photo Tour works.
13. Verify Lightbox works.
14. Verify keyboard navigation.
15. Verify accessibility.
16. Verify architecture diagram exists.
17. Verify Claude Code agent/skill configuration exists.
18. Verify README is complete.
19. Verify the project can be started from a clean environment.

Run:

npm install
npm run lint
npm run build

If the project uses another required command, document it in README.

Then provide:

FINAL PROJECT STRUCTURE

SETUP COMMANDS

BUILD COMMAND

ARCHITECTURE DIAGRAM PATH

AI CONFIGURATION PATH

MAIN COMPONENTS

KNOWN LIMITATIONS

SUBMISSION CHECKLIST

Do not create a public GitHub repository.

The assignment specifically requires the code and architecture diagram to be submitted as a zip, and the sequence of AI prompts may be requested during submission.
```

---

### Prompt 26 — Project Timeline & Time Breakdown Inquiry

**Approximate timestamp:** `2026-09-16T20:48:42Z` (UTC)

**Original prompt:**
```text
How long did it take, and what took the most time to complete this project
```

---
