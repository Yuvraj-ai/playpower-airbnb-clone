"use client";

import React from "react";
import { ICONS } from "@/data/icons";

/**
 * Renders one of the authentic Airbnb SVG icons verbatim from the reference set.
 * Ensures strict dimensional constraints so SVGs never blow up container sizes.
 */
export function Icon({ name, className = "w-4 h-4" }) {
  const svg = ICONS[name];
  if (!svg) return null;
  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 overflow-hidden [&>svg]:w-full [&>svg]:h-full [&>svg]:block ${className}`}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export default Icon;
