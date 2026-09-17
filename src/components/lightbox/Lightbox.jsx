"use client";

import React, { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Icon } from "@/components/common/Icon";
import { ALL_PHOTOS } from "@/data/photos";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useAnimatedModal } from "@/hooks/useAnimatedModal";

export function Lightbox({
  isOpen,
  currentPhotoIndex = 1,
  onClose,
  onNavigate,
  onReturnToGrid,
}) {
  const closeBtnRef = useRef(null);
  const totalPhotos = ALL_PHOTOS.length;
  const currentPhoto = ALL_PHOTOS.find((p) => p.index === currentPhotoIndex) || ALL_PHOTOS[0];

  const { isRendered, isVisible, handleClose } = useAnimatedModal(isOpen, onClose, 250);

  useScrollLock(isRendered);

  const handlePrev = useCallback(() => {
    if (currentPhotoIndex > 1) {
      onNavigate(currentPhotoIndex - 1);
    }
  }, [currentPhotoIndex, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentPhotoIndex < totalPhotos) {
      onNavigate(currentPhotoIndex + 1);
    }
  }, [currentPhotoIndex, totalPhotos, onNavigate]);

  // Keyboard navigation & accessible focus
  useEffect(() => {
    if (!isVisible) return;

    closeBtnRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        handleClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, handleClose, handlePrev, handleNext]);

  if (!isRendered || !currentPhoto) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo viewer: ${currentPhoto.categoryTitle}, image ${currentPhoto.index} of ${totalPhotos}`}
      className={`fixed inset-0 z-50 bg-white flex flex-col select-none transition-opacity duration-250 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Top Navigation Bar */}
      <header
        className={`h-16 sm:h-20 px-6 sm:px-10 flex items-center justify-between border-b border-surface-divider/40 flex-shrink-0 bg-white z-10 transition-all duration-250 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        {/* Top-Left: Grid Icon (Return to Photo Tour) */}
        <div>
          <button
            type="button"
            onClick={() => {
              if (onReturnToGrid) {
                onReturnToGrid();
              } else {
                handleClose();
              }
            }}
            aria-label="Return to photo tour overview"
            className="p-2.5 -ml-2 rounded-full hover:bg-surface-muted transition-colors text-ink-primary focus-visible:ring-2 focus-visible:ring-black"
          >
            <Icon name="ui:lbGrid" className="w-5 h-5 text-ink-primary" />
          </button>
        </div>

        {/* Top-Center: Category Title */}
        <div className="text-[16px] font-semibold text-ink-primary">
          {currentPhoto.categoryTitle}
        </div>

        {/* Top-Right: Counter and Close */}
        <div className="flex items-center space-x-4">
          <span className="text-[14px] font-medium text-ink-primary">
            {currentPhoto.index} of {totalPhotos}
          </span>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={handleClose}
            aria-label="Close photo viewer"
            className="p-2.5 rounded-full hover:bg-surface-muted transition-colors text-ink-primary focus-visible:ring-2 focus-visible:ring-black"
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
      </header>

      {/* Main Image Stage */}
      <div
        className={`flex-1 relative flex items-center justify-center p-4 sm:p-8 overflow-hidden transition-all duration-250 ease-airbnb ${
          isVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-[0.96] translate-y-4"
        }`}
      >
        {/* Previous Button (Left) */}
        <div className="absolute left-4 sm:left-10 z-20">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentPhotoIndex <= 1}
            aria-label="Previous photo"
            className={`w-12 h-12 rounded-full border border-surface-border bg-white shadow-md flex items-center justify-center transition-all ${
              currentPhotoIndex <= 1
                ? "opacity-25 cursor-not-allowed border-surface-divider"
                : "hover:scale-105 hover:border-black text-ink-primary focus-visible:ring-2 focus-visible:ring-black active:scale-95"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              className="w-4 h-4 rotate-180 fill-current"
              aria-hidden="true"
            >
              <path d="M6.7 14.7l5.3-5.3a.5.5 0 0 0 0-.8L6.7 3.3a.5.5 0 0 0-.7.7L11 9l-5 5a.5.5 0 0 0 .7.7z" />
            </svg>
          </button>
        </div>

        {/* Centered Large Image */}
        <div className="relative w-full h-full max-h-[82vh] max-w-[85vw] flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              key={currentPhoto.src}
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              fill
              priority
              sizes="85vw"
              className="object-contain transition-opacity duration-200"
            />
          </div>
        </div>

        {/* Next Button (Right) */}
        <div className="absolute right-4 sm:right-10 z-20">
          <button
            type="button"
            onClick={handleNext}
            disabled={currentPhotoIndex >= totalPhotos}
            aria-label="Next photo"
            className={`w-12 h-12 rounded-full border border-surface-border bg-white shadow-md flex items-center justify-center transition-all ${
              currentPhotoIndex >= totalPhotos
                ? "opacity-25 cursor-not-allowed border-surface-divider"
                : "hover:scale-105 hover:border-black text-ink-primary focus-visible:ring-2 focus-visible:ring-black active:scale-95"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              className="w-4 h-4 fill-current"
              aria-hidden="true"
            >
              <path d="M6.7 14.7l5.3-5.3a.5.5 0 0 0 0-.8L6.7 3.3a.5.5 0 0 0-.7.7L11 9l-5 5a.5.5 0 0 0 .7.7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
