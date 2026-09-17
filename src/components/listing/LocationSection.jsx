"use client";

import React, { useState } from "react";
import { Icon } from "@/components/common/Icon";

export function LocationSection() {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [expanded, setExpanded] = useState(false);

  const handleZoom = (delta) => {
    setZoomLevel((prev) => Math.min(1.5, Math.max(0.8, prev + delta)));
  };

  return (
    <section id="location" className="py-10 border-b border-surface-divider space-y-6">
      <div>
        <h2 className="text-[22px] font-semibold text-ink-primary">
          Where you&apos;ll be
        </h2>
        <p className="text-[16px] text-ink-primary mt-1">
          Candolim, Goa, India
        </p>
      </div>

      {/* Styled Interactive Map */}
      <div className="relative w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden border border-surface-border bg-[#E5E9E1] select-none">
        {/* Map SVG background */}
        <div
          className="absolute inset-0 transition-transform duration-300 flex items-center justify-center"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <svg
            viewBox="0 0 1000 600"
            className="w-full h-full object-cover"
            preserveAspectRatio="none"
          >
            {/* Ocean / Arabian Sea (Left/West) */}
            <path
              d="M 0 0 L 450 0 L 330 600 L 0 600 Z"
              fill="#A2C8E1"
            />

            {/* Land Area (Right/East) with subtle grid */}
            <path
              d="M 450 0 L 1000 0 L 1000 600 L 330 600 Z"
              fill="#E8ECE3"
            />

            {/* Subtle Grid Lines */}
            {[...Array(12)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 90}
                y1={0}
                x2={i * 90}
                y2={600}
                stroke="#D8DFD2"
                strokeWidth="1"
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1={0}
                y1={i * 80}
                x2={1000}
                y2={i * 80}
                stroke="#D8DFD2"
                strokeWidth="1"
              />
            ))}

            {/* Nature / Green Zone Circles */}
            <circle cx="380" cy="220" r="50" fill="#C8DCBF" />
            <circle cx="620" cy="270" r="70" fill="#CBDDC0" />
            <circle cx="850" cy="180" r="60" fill="#C8DCBF" />
          </svg>

          {/* Center Listing House Marker Pin */}
          <div className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            {/* Outer halo / radius shadow */}
            <div className="w-16 h-16 rounded-full bg-black/10 absolute -inset-2 blur-sm pointer-events-none" />
            
            {/* Center Black Circle House Marker */}
            <div className="w-12 h-12 rounded-full bg-[#222222] text-white flex items-center justify-center shadow-2xl relative z-10 hover:scale-110 transition-transform cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-6 h-6 fill-none stroke-current stroke-2"
                aria-hidden="true"
              >
                <path d="M16 3 L3 14 L6 14 L6 27 L13 27 L13 19 L19 19 L19 27 L26 27 L26 14 L29 14 Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Map Top-Left: Search Control */}
        <div className="absolute top-4 left-4 z-10">
          <button
            type="button"
            aria-label="Search map"
            className="w-10 h-10 rounded-full bg-white text-ink-primary shadow-md flex items-center justify-center hover:bg-neutral-50 transition-colors focus-visible:ring-2 focus-visible:ring-black border border-surface-border"
          >
            <Icon name="ui:mapSearch" className="w-4 h-4 text-ink-primary" />
          </button>
        </div>

        {/* Map Top-Right: Zoom Controls */}
        <div className="absolute top-4 right-4 z-10 flex flex-col space-y-1 bg-white rounded-lg shadow-md border border-surface-border overflow-hidden">
          <button
            type="button"
            onClick={() => handleZoom(0.15)}
            aria-label="Zoom in"
            className="w-10 h-10 flex items-center justify-center text-ink-primary hover:bg-neutral-50 transition-colors focus-visible:ring-2 focus-visible:ring-black text-xl font-bold border-b border-surface-divider"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => handleZoom(-0.15)}
            aria-label="Zoom out"
            className="w-10 h-10 flex items-center justify-center text-ink-primary hover:bg-neutral-50 transition-colors focus-visible:ring-2 focus-visible:ring-black text-xl font-bold"
          >
            −
          </button>
        </div>
      </div>

      {/* Subtext */}
      <p className="text-[14px] text-ink-secondary">
        Exact location will be provided after booking.
      </p>

      {/* Neighborhood Highlights */}
      <div className="pt-2 space-y-2">
        <h3 className="text-[16px] font-semibold text-ink-primary">
          Neighbourhood highlights
        </h3>
        <p className="text-[16px] text-ink-primary leading-relaxed">
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
        </p>

        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="font-semibold text-ink-primary underline underline-offset-2 hover:text-neutral-700 text-[16px] focus-visible:ring-2 focus-visible:ring-black rounded inline-flex items-center"
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
    </section>
  );
}

export default LocationSection;
