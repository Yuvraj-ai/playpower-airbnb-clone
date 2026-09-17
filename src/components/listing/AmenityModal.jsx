"use client";

import React, { useEffect, useRef } from "react";
import { Icon } from "@/components/common/Icon";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useAnimatedModal } from "@/hooks/useAnimatedModal";

export function AmenityModal({ isOpen, onClose, fullAmenities = [] }) {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  const { isRendered, isVisible, handleClose } = useAnimatedModal(isOpen, onClose, 280);

  useScrollLock(isRendered);

  useEffect(() => {
    if (!isVisible) return;

    // Focus close button on mount
    closeBtnRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, handleClose]);

  if (!isRendered) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="amenities-modal-title"
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        ref={modalRef}
        className={`bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-surface-border relative transition-all duration-300 ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100 ease-airbnb"
            : "opacity-0 translate-y-10 scale-[0.97] ease-airbnb-exit"
        }`}
      >
        {/* Modal Sticky Header */}
        <div className="p-6 border-b border-surface-divider flex items-center justify-between sticky top-0 bg-white z-10">
          <button
            ref={closeBtnRef}
            type="button"
            onClick={handleClose}
            aria-label="Close amenities modal"
            className="p-2 -ml-2 rounded-full hover:bg-surface-muted transition-colors text-ink-primary focus-visible:ring-2 focus-visible:ring-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-4 h-4 fill-current stroke-current stroke-2"
            >
              <path d="M26.29 4.29L16 14.59 5.71 4.29 4.29 5.71 14.59 16 4.29 26.29 5.71 27.71 16 17.41 26.29 27.71 27.71 26.29 17.41 16 27.71 5.71z" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          <h2 id="amenities-modal-title" className="text-[26px] font-semibold text-ink-primary">
            What this place offers
          </h2>

          <div className="space-y-8 divide-y divide-surface-divider">
            {fullAmenities.map((group, idx) => (
              <div key={idx} className={idx > 0 ? "pt-6 space-y-4" : "space-y-4"}>
                <h3 className="text-[18px] font-semibold text-ink-primary">
                  {group.category}
                </h3>
                <ul className="divide-y divide-surface-divider list-none p-0">
                  {group.items.map((amen, aIdx) => (
                    <li
                      key={aIdx}
                      className="py-4 flex items-center space-x-4 text-[16px] text-ink-primary"
                    >
                      <div className="w-6 h-6 text-ink-primary flex-shrink-0">
                        <Icon name={amen.icon} className="w-6 h-6" />
                      </div>
                      <span className={amen.unavailable ? "line-through text-ink-secondary" : ""}>
                        {amen.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmenityModal;
