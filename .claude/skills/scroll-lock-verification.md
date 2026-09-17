# Skill: Scroll Lock Verification

## Description
Verifies that background scrolling is disabled when an overlay or modal dialog is opened, and restored when closed.

## Steps
1. Navigate to `http://localhost:3000`.
2. Inspect `document.body.style.overflow` — verify it is not `"hidden"`.
3. Trigger overlay opening (e.g. click "Show all photos" or "Show all 50 amenities").
4. Inspect `document.body.style.overflow` — assert it equals `"hidden"`.
5. Dispatch `Escape` key or click close button.
6. Verify `document.body.style.overflow` returns to original non-hidden state.
