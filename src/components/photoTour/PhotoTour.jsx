"use client";

import React, { useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { Icon } from "@/components/common/Icon";
import { PHOTO_CATEGORIES } from "@/data/photos";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useAnimatedModal } from "@/hooks/useAnimatedModal";

export function PhotoTour({
  isOpen,
  onClose,
  onOpenLightbox,
}) {
  const containerRef = useRef(null);
  const backBtnRef = useRef(null);

  const { isRendered, isVisible, handleClose } = useAnimatedModal(isOpen, onClose, 300);

  useScrollLock(isRendered);

  useEffect(() => {
    if (!isVisible) return;

    backBtnRef.current?.focus();

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

  // Pre-calculate and memoize row layouts for all categories
  const categoryRows = useMemo(() => {
    return PHOTO_CATEGORIES.map((cat) => {
      const rows = [];
      let i = 0;
      let currentGlobalIndex = cat.startIndex;

      while (i < cat.photos.length) {
        const p = cat.photos[i];
        if (p.layout === "full") {
          rows.push({
            type: "full",
            photos: [{ ...p, globalIndex: currentGlobalIndex }],
          });
          currentGlobalIndex += 1;
          i += 1;
        } else {
          const pair = [{ ...p, globalIndex: currentGlobalIndex }];
          currentGlobalIndex += 1;
          i += 1;
          if (i < cat.photos.length && cat.photos[i].layout === "half") {
            pair.push({ ...cat.photos[i], globalIndex: currentGlobalIndex });
            currentGlobalIndex += 1;
            i += 1;
          }
          rows.push({
            type: "half",
            photos: pair,
          });
        }
      }
      return { ...cat, rows };
    });
  }, []);

  if (!isRendered) return null;

  const scrollToCategory = (categoryId) => {
    const el = document.getElementById(`tour-cat-${categoryId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      ref={containerRef}
      className={`fixed inset-0 z-50 bg-white overflow-y-auto transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Sticky Top Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-30 bg-white border-b border-surface-divider h-16 sm:h-20 px-6 sm:px-10 flex items-center justify-between transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        {/* Back Button */}
        <button
          ref={backBtnRef}
          type="button"
          onClick={handleClose}
          aria-label="Back to listing"
          className="p-2.5 -ml-2 rounded-full hover:bg-surface-muted transition-colors text-ink-primary focus-visible:ring-2 focus-visible:ring-black"
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

        {/* Center Heading */}
        <h1 className="text-[16px] sm:text-[18px] font-semibold text-ink-primary">
          Photo tour
        </h1>

        {/* Right Actions: Share & Save */}
        <div className="flex items-center space-x-2">
          <button
            type="button"
            aria-label="Share photo tour"
            className="p-2.5 rounded-full hover:bg-surface-muted transition-colors text-ink-primary focus-visible:ring-2 focus-visible:ring-black"
          >
            <Icon name="ui:share" className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Save this listing"
            className="p-2.5 rounded-full hover:bg-surface-muted transition-colors text-ink-primary focus-visible:ring-2 focus-visible:ring-black"
          >
            <Icon name="ui:save" className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Content Container */}
      <div
        className={`max-w-[1120px] mx-auto px-6 sm:px-10 py-6 space-y-12 transition-all duration-300 ${
          isVisible
            ? "opacity-100 translate-y-0 ease-airbnb"
            : "opacity-0 translate-y-8 ease-airbnb-exit"
        }`}
      >
        {/* Category Overview Thumbnail Bar */}
        <nav
          aria-label="Photo tour categories"
          className="flex flex-wrap gap-3.5 pt-2 pb-6 border-b border-surface-divider"
        >
          {PHOTO_CATEGORIES.map((cat) => {
            const firstPhoto = cat.photos[0];
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => scrollToCategory(cat.id)}
                className="flex flex-col items-center text-center space-y-2 group focus-visible:ring-2 focus-visible:ring-black rounded-xl p-1 w-[114px] shrink-0 transition-transform hover:-translate-y-0.5"
              >
                <div className="w-full h-[76px] rounded-lg overflow-hidden relative border border-surface-border bg-neutral-100">
                  {firstPhoto && (
                    <Image
                      src={`/images/${firstPhoto.file}`}
                      alt=""
                      fill
                      sizes="114px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
                <span className="text-[12px] font-medium text-ink-primary leading-tight line-clamp-2">
                  {cat.title}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Categories Sections */}
        <div className="space-y-20 pb-24">
          {categoryRows.map((cat) => {

            return (
              <section
                key={cat.id}
                id={`tour-cat-${cat.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 scroll-mt-24"
              >
                {/* Left Column: Category title & features (Sticky) */}
                <div className="lg:col-span-4 space-y-2 lg:sticky lg:top-28 self-start">
                  <h2 className="text-[26px] font-semibold text-ink-primary leading-tight">
                    {cat.title}
                  </h2>
                  {cat.features && cat.features.length > 0 && (
                    <p className="text-[14px] text-ink-secondary leading-relaxed">
                      {cat.features.join(" · ")}
                    </p>
                  )}
                </div>

                {/* Right Column: Photos Layout */}
                <div className="lg:col-span-8 space-y-3">
                  {cat.rows.map((row, rIdx) => {
                    if (row.type === "full") {
                      const photo = row.photos[0];
                      return (
                        <div
                          key={rIdx}
                          role="button"
                          tabIndex={0}
                          onClick={() => onOpenLightbox(photo.globalIndex)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              onOpenLightbox(photo.globalIndex);
                            }
                          }}
                          aria-label={`Open photo ${photo.globalIndex} of 43 in lightbox, ${photo.alt}`}
                          className="w-full aspect-[16/10.5] rounded-xl overflow-hidden relative cursor-pointer bg-neutral-100 group border border-surface-border/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black"
                        >
                          <Image
                            src={`/images/${photo.file}`}
                            alt={photo.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 760px"
                            className="object-cover group-hover:brightness-95 transition-all duration-300"
                          />
                        </div>
                      );
                    }

                    // Half layout row (1 or 2 photos)
                    return (
                      <div key={rIdx} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {row.photos.map((photo) => (
                          <div
                            key={photo.globalIndex}
                            role="button"
                            tabIndex={0}
                            onClick={() => onOpenLightbox(photo.globalIndex)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                onOpenLightbox(photo.globalIndex);
                              }
                            }}
                            aria-label={`Open photo ${photo.globalIndex} of 43 in lightbox, ${photo.alt}`}
                            className="w-full aspect-[16/10.5] rounded-xl overflow-hidden relative cursor-pointer bg-neutral-100 group border border-surface-border/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black"
                          >
                            <Image
                              src={`/images/${photo.file}`}
                              alt={photo.alt}
                              fill
                              sizes="(max-width: 640px) 100vw, 380px"
                              className="object-cover group-hover:brightness-95 transition-all duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PhotoTour;
