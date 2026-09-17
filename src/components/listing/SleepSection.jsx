"use client";

import React from "react";
import Image from "next/image";

export function SleepSection({ sleepingArrangements = [], onOpenPhotoTour }) {
  if (!sleepingArrangements.length) return null;

  return (
    <div className="py-8 border-b border-surface-divider space-y-6">
      <h2 className="text-[22px] font-semibold text-ink-primary">
        Where you&apos;ll sleep
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sleepingArrangements.map((item, idx) => (
          <div
            key={idx}
            role="button"
            tabIndex={0}
            aria-label={`View photos for ${item.title}`}
            onClick={() => onOpenPhotoTour && onOpenPhotoTour(item.photoIndex || 1)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpenPhotoTour && onOpenPhotoTour(item.photoIndex || 1);
              }
            }}
            className="flex flex-col space-y-3 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-xl p-1 -m-1"
          >
            <div className="w-full h-52 sm:h-60 rounded-xl overflow-hidden relative bg-neutral-100 border border-surface-border group-hover:opacity-95 transition-opacity">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>

            <div>
              <h3 className="text-[16px] font-semibold text-ink-primary">
                {item.title}
              </h3>
              <p className="text-[14px] text-ink-secondary">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SleepSection;
