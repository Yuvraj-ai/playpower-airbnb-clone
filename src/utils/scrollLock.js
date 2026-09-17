/**
 * Reference-counted body scroll lock utility.
 * Prevents layout shift on desktop by compensating for the scrollbar width,
 * and avoids race conditions when multiple modals or overlays are opened/closed in sequence.
 */

let lockCount = 0;
let previousOverflow = "";
let previousPaddingRight = "";

export function lockScroll() {
  if (typeof document === "undefined") return;

  if (lockCount === 0) {
    previousOverflow = document.body.style.overflow;
    previousPaddingRight = document.body.style.paddingRight;

    // Compensate for scrollbar width to prevent layout shift on desktop
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = "hidden";
  }
  lockCount += 1;
}

export function unlockScroll() {
  if (typeof document === "undefined") return;

  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    document.body.style.overflow = previousOverflow;
    document.body.style.paddingRight = previousPaddingRight;
  }
}
