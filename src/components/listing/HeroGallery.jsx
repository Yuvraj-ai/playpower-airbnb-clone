"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@/components/common/Icon";

export function HeroGallery({ images, onOpenPhotoTour }) {
  if (!images || images.length < 5) return null;

  const mainImage = images[0];
  const rightImages = images.slice(1, 5);

  return (
    <section id="photos" aria-label="Photo gallery" className="w-full relative">
      <div className="grid grid-cols-[560px_272px_272px] grid-rows-2 gap-2 h-[560px] rounded-2xl overflow-hidden relative">
        {/* Main Large Image (Left half, 1 col, 2 rows: 560x560) */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => onOpenPhotoTour(mainImage.photoIndex || 1)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onOpenPhotoTour(mainImage.photoIndex || 1);
            }
          }}
          aria-label={`Open photo tour, viewing ${mainImage.alt}`}
          className="col-span-1 row-span-2 relative cursor-pointer group overflow-hidden bg-neutral-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-inset"
        >
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            priority
            sizes="560px"
            className="object-cover group-hover:brightness-90 group-hover:scale-[1.02] transition-all duration-300 ease-out"
          />
        </div>

        {/* 4 Secondary Images (Right half, 2x2 grid: 272x276/280) */}
        {rightImages.map((img, idx) => {
          const isBottomRight = idx === 3;
          return (
            <div
              key={img.id || idx}
              role="button"
              tabIndex={0}
              onClick={() => onOpenPhotoTour(img.photoIndex || 1)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onOpenPhotoTour(img.photoIndex || 1);
                }
              }}
              aria-label={`Open photo tour, viewing ${img.alt}`}
              className="col-span-1 row-span-1 relative cursor-pointer group overflow-hidden bg-neutral-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-inset"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority
                sizes="272px"
                className="object-cover group-hover:brightness-90 group-hover:scale-[1.02] transition-all duration-300 ease-out"
              />

              {/* Show all photos button on the bottom right image */}
              {isBottomRight && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenPhotoTour(1);
                  }}
                  className="absolute bottom-4 right-4 z-10 flex items-center space-x-2 bg-white text-ink-primary font-semibold text-[14px] px-4 py-2 rounded-lg border border-black shadow-md hover:bg-neutral-50 active:scale-95 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-black"
                >
                  <Icon name="ui:lbGrid" className="w-4 h-4 text-black" />
                  <span>Show all photos</span>
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HeroGallery;
