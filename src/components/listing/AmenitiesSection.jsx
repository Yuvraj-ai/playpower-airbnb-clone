"use client";

import React, { useState } from "react";
import { Icon } from "@/components/common/Icon";
import { AmenityModal } from "./AmenityModal";

export function AmenitiesSection({ amenitiesSummary = [], fullAmenities = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalAmenitiesCount =
    fullAmenities.reduce(
      (sum, group) => sum + (group.items ? group.items.length : 0),
      0
    ) || 50;

  return (
    <section id="amenities" className="py-8 border-b border-surface-divider space-y-6">
      <h2 className="text-[22px] font-semibold text-ink-primary">
        What this place offers
      </h2>

      {/* 2-column grid of 10 primary amenities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
        {amenitiesSummary.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-4 text-[16px] text-ink-primary py-1">
            <div className="w-6 h-6 text-ink-primary flex-shrink-0">
              <Icon name={item.icon} className="w-6 h-6" />
            </div>
            <span className={item.unavailable ? "line-through text-ink-secondary" : ""}>
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Show all amenities button */}
      <div className="pt-4">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 border border-black rounded-lg text-[16px] font-semibold text-ink-primary hover:bg-surface-muted transition-colors focus-visible:ring-2 focus-visible:ring-black"
        >
          Show all {totalAmenitiesCount} amenities
        </button>
      </div>

      {/* Full Amenities Modal */}
      <AmenityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fullAmenities={fullAmenities}
      />
    </section>
  );
}

export default AmenitiesSection;
