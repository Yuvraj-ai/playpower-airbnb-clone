"use client";

import React from "react";
import Image from "next/image";

export function ListingSummary({
  propertyType = "Entire serviced apartment",
  location = "Candolim, India",
  guests = 3,
  bedrooms = 1,
  beds = 1,
  bathrooms = 1,
  rating = 4.95,
  reviewCount = 19,
  host,
}) {
  return (
    <div className="space-y-6 pt-2">
      {/* Title & basic room statistics */}
      <div>
        <h2 className="text-[22px] font-semibold text-ink-primary leading-tight">
          {propertyType} in {location}
        </h2>
        <ol className="flex items-center space-x-1 text-[16px] text-ink-primary mt-1 list-none p-0">
          <li>{guests} guests</li>
          <li aria-hidden="true">·</li>
          <li>{bedrooms} bedroom</li>
          <li aria-hidden="true">·</li>
          <li>{beds} bed</li>
          <li aria-hidden="true">·</li>
          <li>{bathrooms} bathroom</li>
        </ol>
      </div>

      {/* Guest Favourite Badge Card */}
      <div className="border border-surface-border rounded-2xl p-5 sm:p-6 flex items-center justify-between shadow-[0_1px_2px_rgba(0,0,0,0.08)] bg-white">
        {/* Left: Laurel + Guest favourite label */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 flex-shrink-0">
            <Image
              src="/images/ui/laurel-left.png"
              alt=""
              width={26}
              height={36}
              className="w-6 h-9 object-contain"
              aria-hidden="true"
            />
            <div className="text-center font-bold text-[16px] leading-[18px] text-ink-primary">
              Guest
              <br />
              favourite
            </div>
            <Image
              src="/images/ui/laurel-right.png"
              alt=""
              width={26}
              height={36}
              className="w-6 h-9 object-contain"
              aria-hidden="true"
            />
          </div>

          <p className="text-[15px] font-medium text-ink-primary hidden md:block max-w-[280px] pl-2 leading-snug">
            One of the most loved homes on Airbnb, according to guests
          </p>
        </div>

        {/* Right: Numerical rating & Review count */}
        <div className="flex items-center space-x-6 sm:space-x-8">
          <div className="text-center">
            <div className="text-[18px] font-bold text-ink-primary">{rating}</div>
            <div className="flex items-center justify-center space-x-0.5 mt-0.5 text-black">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-3 h-3 fill-current"
                  aria-hidden="true"
                >
                  <path d="M16 1.67l4.13 8.36 9.23 1.34-6.68 6.51 1.58 9.19L16 22.73l-8.26 4.34 1.58-9.19-6.68-6.51 9.23-1.34z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="h-8 w-[1px] bg-surface-divider" aria-hidden="true" />

          <div className="text-center">
            <div className="text-[18px] font-bold text-ink-primary underline">{reviewCount}</div>
            <div className="text-[12px] font-semibold text-ink-primary underline underline-offset-1">Reviews</div>
          </div>
        </div>
      </div>

      {/* Host Information Row */}
      {host && (
        <div className="flex items-center space-x-4 py-3 border-b border-surface-divider">
          <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0 bg-neutral-100 border border-surface-divider">
            <Image
              src={host.avatar}
              alt={host.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-[16px] font-semibold text-ink-primary">
              Hosted by {host.name}
            </div>
            <div className="text-[14px] text-ink-secondary">
              {host.yearsHosting} years hosting
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListingSummary;
