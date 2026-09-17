"use client";

import { useEffect } from "react";
import { lockScroll, unlockScroll } from "@/utils/scrollLock";

/**
 * Custom hook to lock body scrolling when a modal or overlay is active.
 * Uses reference counting so nested or sequential modals do not prematurely restore scroll.
 *
 * @param {boolean} isLocked - Whether scroll should be locked
 */
export function useScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) return;

    lockScroll();
    return () => {
      unlockScroll();
    };
  }, [isLocked]);
}

export default useScrollLock;
