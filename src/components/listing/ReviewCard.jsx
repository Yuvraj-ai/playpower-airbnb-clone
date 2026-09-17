"use client";

import React, { useState } from "react";
import Image from "next/image";

export function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.content && review.content.length > 180;

  return (
    <article className="space-y-3">
      {/* Reviewer info */}
      <div className="flex items-center space-x-3">
        {review.avatar ? (
          <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0 bg-neutral-100 border border-surface-divider">
            <Image
              src={review.avatar}
              alt={review.author}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${
              review.avatarBg || "bg-neutral-200 text-neutral-800"
            }`}
          >
            {review.initials || review.author[0]}
          </div>
        )}

        <div>
          <div className="font-semibold text-[16px] text-ink-primary leading-tight">
            {review.author}
          </div>
          <div className="text-[14px] text-ink-secondary">
            {review.tenure}
          </div>
        </div>
      </div>

      {/* Stars and Date */}
      <div className="flex items-center space-x-2 text-[14px]">
        <div className="flex items-center text-black">
          {[...Array(review.rating || 5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-2.5 h-2.5 fill-current"
              aria-hidden="true"
            >
              <path d="M16 1.67l4.13 8.36 9.23 1.34-6.68 6.51 1.58 9.19L16 22.73l-8.26 4.34 1.58-9.19-6.68-6.51 9.23-1.34z" />
            </svg>
          ))}
        </div>
        <span className="text-ink-primary font-semibold">·</span>
        <span className="text-ink-primary font-medium">{review.date}</span>
      </div>

      {/* Review Content */}
      <div className="text-[16px] text-ink-primary leading-relaxed">
        <p className={!expanded && isLong ? "line-clamp-3" : ""}>
          {review.content}
        </p>

        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mt-2 font-semibold text-ink-primary underline underline-offset-2 hover:text-neutral-700 text-[14px] focus-visible:ring-2 focus-visible:ring-black rounded"
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </article>
  );
}

export default ReviewCard;
