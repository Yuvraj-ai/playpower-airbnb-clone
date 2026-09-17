"use client";

import React, { useState } from "react";
import { Icon } from "@/components/common/Icon";

export function ListingHeader({ title }) {
  const [saved, setSaved] = useState(false);
  const [shareToast, setShareToast] = useState(false);

  const handleShare = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
      }
    } catch {
      // Gracefully handle clipboard write restrictions in headless environments
    }
    setShareToast(true);
    setTimeout(() => setShareToast(false), 2500);
  };

  const toggleSave = () => {
    setSaved(!saved);
  };

  return (
    <div className="pt-6 pb-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Title */}
        <h1 className="text-[26px] font-semibold text-ink-primary tracking-tight leading-8">
          {title}
        </h1>

        {/* Action buttons */}
        <div className="flex items-center space-x-4 text-sm font-semibold relative">
          {/* Share Button */}
          <button
            type="button"
            onClick={handleShare}
            className="flex items-center space-x-2 py-1.5 px-2 rounded-md hover:bg-surface-muted transition-colors text-ink-primary underline underline-offset-2 focus-visible:ring-2 focus-visible:ring-black"
            aria-label="Share this listing"
          >
            <Icon name="ui:share" className="w-4 h-4" />
            <span>Share</span>
          </button>

          {/* Share Toast */}
          {shareToast && (
            <div
              role="status"
              className="absolute -top-10 left-0 bg-ink-primary text-white text-xs font-medium py-1.5 px-3 rounded-lg shadow-lg animate-toastIn z-20 whitespace-nowrap"
            >
              Link copied to clipboard!
            </div>
          )}

          {/* Save Button */}
          <button
            type="button"
            onClick={toggleSave}
            aria-pressed={saved}
            className="flex items-center space-x-2 py-1.5 px-2 rounded-md hover:bg-surface-muted transition-all active:scale-95 text-ink-primary underline underline-offset-2 focus-visible:ring-2 focus-visible:ring-black"
            aria-label={saved ? "Remove from saved list" : "Save this listing"}
          >
            {saved ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-4 h-4 fill-airbnb text-airbnb animate-heartPop"
                aria-hidden="true"
              >
                <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05A6.98 6.98 0 0 0 9 4a6.98 6.98 0 0 0-7 7c0 7 7 12.27 14 17z" />
              </svg>
            ) : (
              <Icon name="ui:save" className="w-4 h-4" />
            )}
            <span>{saved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListingHeader;
