"use client";

import React, { useState } from "react";

export function DescriptionSection({ description }) {
  const [expanded, setExpanded] = useState(false);
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <div className="py-8 border-b border-surface-divider space-y-6">
      {/* Translation banner */}
      <div className="bg-surface-muted rounded-xl p-4 text-[14px] text-ink-primary flex items-center justify-between">
        <span>
          Some info has been automatically translated.{" "}
          <button
            type="button"
            onClick={() => setShowOriginal(!showOriginal)}
            className="font-semibold underline underline-offset-2 hover:text-black focus-visible:ring-2 focus-visible:ring-black rounded"
          >
            {showOriginal ? "Show translated" : "Show original"}
          </button>
        </span>
      </div>

      {/* Description text */}
      <div className="text-[16px] text-ink-primary leading-relaxed">
        <p className={expanded ? "" : "line-clamp-3"}>
          {description}
        </p>

        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center font-semibold text-ink-primary underline underline-offset-2 hover:text-neutral-700 transition-colors focus-visible:ring-2 focus-visible:ring-black rounded py-0.5"
        >
          <span>{expanded ? "Show less" : "Show more"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            className={`w-3.5 h-3.5 ml-1 transition-transform ${expanded ? "rotate-90" : ""}`}
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.7 14.7l5.3-5.3a.5.5 0 0 0 0-.8L6.7 3.3a.5.5 0 0 0-.7.7L11 9l-5 5a.5.5 0 0 0 .7.7z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default DescriptionSection;
