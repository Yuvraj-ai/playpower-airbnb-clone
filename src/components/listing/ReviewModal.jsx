"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Icon } from "@/components/common/Icon";
import { ReviewCard } from "./ReviewCard";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useAnimatedModal } from "@/hooks/useAnimatedModal";

export function ReviewModal({
  isOpen,
  onClose,
  reviewsData,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  const { isRendered, isVisible, handleClose } = useAnimatedModal(isOpen, onClose, 280);

  useScrollLock(isRendered);

  useEffect(() => {
    if (!isVisible) return;

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

  const { overallRating = 4.95, reviewCount = 19, categories = [], reviews = [] } = reviewsData;

  const filteredReviews = reviews.filter((r) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      r.author.toLowerCase().includes(q) ||
      r.content.toLowerCase().includes(q)
    );
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="review-modal-title"
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        ref={modalRef}
        className={`bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-surface-border relative transition-all duration-300 ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100 ease-airbnb"
            : "opacity-0 translate-y-10 scale-[0.97] ease-airbnb-exit"
        }`}
      >
        {/* Sticky Header */}
        <div className="p-6 border-b border-surface-divider flex items-center justify-between sticky top-0 bg-white z-10">
          <button
            ref={closeBtnRef}
            type="button"
            onClick={handleClose}
            aria-label="Close reviews modal"
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

        {/* Modal Body: 2 Columns */}
        <div className="p-6 sm:p-10 overflow-y-auto flex flex-col md:flex-row gap-10">
          {/* Left Column: Overall stats & categories */}
          <div className="md:w-1/3 space-y-6 md:sticky md:top-0 self-start">
            <div className="flex items-center space-x-3">
              <div className="text-[32px] font-bold text-ink-primary">★ {overallRating}</div>
              <div className="h-6 w-[1px] bg-surface-divider" />
              <div className="text-[20px] font-bold text-ink-primary">{reviewCount} reviews</div>
            </div>

            <div className="space-y-4 pt-4 border-t border-surface-divider">
              {categories.map((cat, idx) => (
                <div key={idx} className="flex items-center justify-between text-[14px]">
                  <div className="flex items-center space-x-3 text-ink-primary">
                    <Icon name={cat.icon} className="w-5 h-5 text-ink-primary" />
                    <span>{cat.name}</span>
                  </div>
                  <span className="font-semibold text-ink-primary">{cat.rating}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Search bar and reviews */}
          <div className="md:w-2/3 space-y-6">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search reviews"
                aria-label="Search reviews"
                className="w-full pl-10 pr-4 py-3 rounded-full border border-surface-border text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black bg-surface-muted"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-4 h-4 text-ink-secondary absolute left-4 top-4 fill-current stroke-current"
              >
                <path d="M13 2a11 11 0 0 1 8.6 17.86l8.83 8.84-1.42 1.41-8.83-8.83A11 11 0 1 1 13 2zm0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
              </svg>
            </div>

            {/* Filtered reviews count notice if filtering */}
            {searchQuery && (
              <div className="text-sm text-ink-secondary">
                Found {filteredReviews.length} matching review{filteredReviews.length === 1 ? "" : "s"}
              </div>
            )}

            {/* Reviews list */}
            <div className="space-y-8 divide-y divide-surface-divider">
              {filteredReviews.map((r, idx) => (
                <div key={r.id || idx} className={idx > 0 ? "pt-8" : ""}>
                  <ReviewCard review={r} />
                </div>
              ))}
              {filteredReviews.length === 0 && (
                <div className="text-center py-12 text-ink-secondary">
                  No reviews match &quot;{searchQuery}&quot;
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
