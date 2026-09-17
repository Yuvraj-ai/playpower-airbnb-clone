"use client";

import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Custom hook for smooth modal/overlay entrance and exit animations.
 * Ensures the component stays mounted during the exit animation,
 * allowing CSS transitions to gracefully fade and slide down before unmounting.
 *
 * @param {boolean} isOpen - Whether the modal should be open according to parent state
 * @param {function} onClose - Callback invoked when close completes
 * @param {number} duration - Animation duration in ms (default: 300)
 * @returns {{ isRendered: boolean, isVisible: boolean, handleClose: function }}
 */
export function useAnimatedModal(isOpen, onClose, duration = 300) {
  const [isRendered, setIsRendered] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);
  const isClosingRef = useRef(false);

  useEffect(() => {
    let timer;
    let raf1;
    let raf2;

    if (isOpen) {
      isClosingRef.current = false;
      setIsRendered(true);
      // Double rAF ensures DOM renders initial hidden state before triggering transition
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    } else {
      if (isClosingRef.current) {
        // Already animated out via handleClose
        setIsRendered(false);
      } else {
        // External close (e.g. browser back button / parent state change)
        setIsVisible(false);
        timer = setTimeout(() => {
          setIsRendered(false);
        }, duration);
      }
    }

    return () => {
      if (timer) clearTimeout(timer);
      if (raf1) cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
    };
  }, [isOpen, duration]);

  const handleClose = useCallback(() => {
    isClosingRef.current = true;
    setIsVisible(false);
    setTimeout(() => {
      setIsRendered(false);
      if (onClose) onClose();
    }, duration);
  }, [onClose, duration]);

  return { isRendered, isVisible, handleClose };
}

export default useAnimatedModal;
