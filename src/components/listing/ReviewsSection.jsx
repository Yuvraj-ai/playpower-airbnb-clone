"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/common/Icon";
import { ReviewCard } from "./ReviewCard";
import { ReviewModal } from "./ReviewModal";

export function ReviewsSection({ reviewsData }) {
  const [activeChip, setActiveChip] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    overallRating = 4.95,
    reviewCount = 19,
    categories = [],
    distribution = [],
    chips = [],
    reviews = [],
  } = reviewsData;

  const handleChipClick = (chipName) => {
    setActiveChip(activeChip === chipName ? null : chipName);
  };

  const filteredReviews = activeChip
    ? reviews.filter((r) =>
        r.content.toLowerCase().includes(activeChip.toLowerCase())
      )
    : reviews.slice(0, 6);

  return (
    <section id="reviews" className="py-10 border-b border-surface-divider space-y-10">
      {/* Big Guest Favourite laurel header */}
      <div className="flex flex-col items-center justify-center text-center space-y-3 pt-2">
        <div className="flex items-center justify-center space-x-4">
          <Image
            src="/images/ui/laurel-left.png"
            alt=""
            width={48}
            height={64}
            className="w-10 h-16 sm:w-12 sm:h-20 object-contain"
            aria-hidden="true"
          />
          <div className="text-[64px] sm:text-[84px] font-extrabold text-ink-primary tracking-tighter leading-none">
            {overallRating}
          </div>
          <Image
            src="/images/ui/laurel-right.png"
            alt=""
            width={48}
            height={64}
            className="w-10 h-16 sm:w-12 sm:h-20 object-contain"
            aria-hidden="true"
          />
        </div>

        <div className="text-[22px] font-bold text-ink-primary">
          Guest favourite
        </div>
        <p className="text-[16px] text-ink-secondary max-w-md">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="text-[14px] font-semibold text-ink-primary underline underline-offset-2 hover:text-black focus-visible:ring-2 focus-visible:ring-black rounded"
        >
          How reviews work
        </button>
      </div>

      {/* Ratings Breakdown Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 pt-6 pb-2 border-b border-surface-divider">
        {/* Overall rating horizontal bar */}
        <div className="col-span-2 sm:col-span-4 lg:col-span-1 border-r border-surface-divider pr-4">
          <div className="text-[14px] font-semibold text-ink-primary mb-2">
            Overall rating
          </div>
          <div className="space-y-1">
            {distribution.map((d) => (
              <div key={d.stars} className="flex items-center text-[12px] space-x-2 text-ink-secondary">
                <span className="w-2">{d.stars}</span>
                <div className="flex-1 h-1 bg-surface-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-black rounded-full"
                    style={{ width: `${d.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Category items */}
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between pl-2 sm:pl-4 border-r border-surface-divider last:border-r-0"
          >
            <div>
              <div className="text-[14px] font-semibold text-ink-primary">
                {cat.name}
              </div>
              <div className="text-[18px] font-bold text-ink-primary mt-1">
                {cat.rating}
              </div>
            </div>
            <div className="mt-4 text-ink-primary">
              <Icon name={cat.icon} className="w-8 h-8 text-ink-primary" />
            </div>
          </div>
        ))}
      </div>

      {/* Topic Chips */}
      <div className="flex items-center space-x-3 overflow-x-auto pb-2 no-scrollbar">
        {chips.map((chip, idx) => {
          const isSelected = activeChip === chip.name;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleChipClick(chip.name)}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-full border text-[14px] font-medium flex-shrink-0 transition-all focus-visible:ring-2 focus-visible:ring-black ${
                isSelected
                  ? "bg-black text-white border-black"
                  : "bg-white text-ink-primary border-surface-border hover:border-black"
              }`}
            >
              {chip.icon && (
                <div className="w-4 h-4 relative flex-shrink-0">
                  <Image
                    src={chip.icon}
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>
              )}
              <span>{chip.name}</span>
              {chip.count && (
                <span className={`text-xs ${isSelected ? "text-neutral-300" : "text-ink-secondary"}`}>
                  {chip.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Review Cards Grid (2 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 pt-2">
        {filteredReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
        {filteredReviews.length === 0 && (
          <div className="col-span-2 text-center py-6 text-ink-secondary">
            No reviews specifically mentioned &quot;{activeChip}&quot;.
          </div>
        )}
      </div>

      {/* Show all reviews button */}
      <div className="pt-4">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 border border-black rounded-lg text-[16px] font-semibold text-ink-primary hover:bg-surface-muted transition-colors focus-visible:ring-2 focus-visible:ring-black"
        >
          Show all {reviewCount} reviews
        </button>
      </div>

      {/* Reviews Modal */}
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        reviewsData={reviewsData}
      />
    </section>
  );
}

export default ReviewsSection;
