# Skill: Keyboard Navigation Verification

## Description
Verifies comprehensive keyboard navigation, arrow keys, Escape key dismissal, and focus management across Lightbox, Photo Tour, and listing modals.

## Steps
1. Navigate to Lightbox (`/?view=photos&photo=1`).
2. Press `ArrowRight` — verify the current photo increments to `photo=2`.
3. Press `ArrowLeft` — verify current photo decrements to `photo=1`.
4. Press `Escape` — verify Lightbox dismisses and returns to either Photo Tour or Listing Page.
5. In Photo Tour, press `Escape` — verify Photo Tour dismisses and returns to Listing Page.
6. Verify all interactive elements are reachable via `Tab` with visible focus rings.
