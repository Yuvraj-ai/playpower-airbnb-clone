"use client";

import React from "react";
import { useAnimatedModal } from "@/hooks/useAnimatedModal";

export function GuestSelector({ isOpen = true, guests, onGuestsChange, onClose, maxGuests = 3 }) {
  const { isRendered, isVisible, handleClose } = useAnimatedModal(isOpen, onClose, 200);
  const { adults = 2, children = 0, infants = 0, pets = 0 } = guests;
  const totalGuests = adults + children;

  const update = (key, delta) => {
    const nextVal = Math.max(0, guests[key] + delta);

    if (key === "adults" && nextVal < 1) return; // At least 1 adult required

    if ((key === "adults" || key === "children") && delta > 0 && totalGuests >= maxGuests) {
      return; // Cap at maxGuests
    }

    if (key === "infants" && nextVal > 5) return;
    if (key === "pets" && nextVal > 2) return;

    onGuestsChange({
      ...guests,
      [key]: nextVal,
    });
  };

  const rows = [
    {
      key: "adults",
      title: "Adults",
      subtitle: "Age 13+",
      val: adults,
      minDisabled: adults <= 1,
      maxDisabled: totalGuests >= maxGuests,
    },
    {
      key: "children",
      title: "Children",
      subtitle: "Ages 2–12",
      val: children,
      minDisabled: children <= 0,
      maxDisabled: totalGuests >= maxGuests,
    },
    {
      key: "infants",
      title: "Infants",
      subtitle: "Under 2",
      val: infants,
      minDisabled: infants <= 0,
      maxDisabled: infants >= 5,
    },
    {
      key: "pets",
      title: "Pets",
      subtitle: "Bringing a service animal?",
      val: pets,
      minDisabled: pets <= 0,
      maxDisabled: pets >= 2,
    },
  ];

  if (!isRendered) return null;

  return (
    <div
      role="dialog"
      aria-label="Guest selection"
      className={`absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.15)] border border-surface-border p-6 z-30 space-y-6 transition-all duration-200 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 ease-airbnb"
          : "opacity-0 -translate-y-2 scale-[0.98] ease-airbnb-exit"
      }`}
    >
      <div className="space-y-6">
        {rows.map((r) => (
          <div key={r.key} className="flex items-center justify-between">
            <div>
              <div className="text-[16px] font-semibold text-ink-primary">
                {r.title}
              </div>
              <div className="text-[14px] text-ink-secondary">
                {r.subtitle}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {/* Minus button */}
              <button
                type="button"
                disabled={r.minDisabled}
                onClick={() => update(r.key, -1)}
                aria-label={`Decrease ${r.title}`}
                className={`w-8 h-8 rounded-full border border-surface-border flex items-center justify-center text-ink-secondary transition-colors ${
                  r.minDisabled
                    ? "opacity-30 cursor-not-allowed border-surface-divider"
                    : "hover:border-black hover:text-black focus-visible:ring-2 focus-visible:ring-black"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-3 h-3 fill-current"
                >
                  <path d="M4 15h24v2H4z" />
                </svg>
              </button>

              <span className="w-5 text-center font-medium text-[16px] text-ink-primary">
                {r.val}
              </span>

              {/* Plus button */}
              <button
                type="button"
                disabled={r.maxDisabled}
                onClick={() => update(r.key, 1)}
                aria-label={`Increase ${r.title}`}
                className={`w-8 h-8 rounded-full border border-surface-border flex items-center justify-center text-ink-secondary transition-colors ${
                  r.maxDisabled
                    ? "opacity-30 cursor-not-allowed border-surface-divider"
                    : "hover:border-black hover:text-black focus-visible:ring-2 focus-visible:ring-black"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-3 h-3 fill-current"
                >
                  <path d="M15 4h2v11h11v2H17v11h-2V17H4v-2h11z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[12px] text-ink-secondary leading-snug">
        This place has a maximum of {maxGuests} guests, not including infants. Pets are allowed.
      </p>

      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={handleClose}
          className="text-[14px] font-semibold text-ink-primary underline underline-offset-2 hover:text-black py-1 px-3 rounded focus-visible:ring-2 focus-visible:ring-black"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default GuestSelector;
