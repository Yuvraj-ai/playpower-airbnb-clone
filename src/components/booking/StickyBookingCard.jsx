"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@/components/common/Icon";
import { GuestSelector } from "./GuestSelector";

export function StickyBookingCard({
  pricePerNight = 5699,
  startDate,
  endDate,
  onDateBoxClick,
}) {
  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    infants: 0,
    pets: 0,
  });
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [promoClaimed, setPromoClaimed] = useState(false);
  const guestBoxRef = useRef(null);

  // Close guest selector when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (guestBoxRef.current && !guestBoxRef.current.contains(e.target)) {
        setIsGuestOpen(false);
      }
    };
    if (isGuestOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isGuestOpen]);

  // Calculate nights and price
  const calculateNights = () => {
    if (!startDate || !endDate) return 5; // fallback
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = Math.round((end - start) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 5;
  };

  const nights = calculateNights();
  let rawTotal = nights === 5 ? 28499 : nights * pricePerNight;
  if (promoClaimed) {
    rawTotal = Math.round(rawTotal * 0.9);
  }
  const formattedTotal = "₹" + rawTotal.toLocaleString("en-IN");

  const formatDateDisplay = (dateStr) => {
    if (!dateStr) return "Add date";
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      return `${parts[1]}/${parts[2]}/${parts[0]}`;
    }
    return dateStr;
  };

  const totalGuests = guests.adults + guests.children;
  const guestSummary =
    `${totalGuests} guest${totalGuests > 1 ? "s" : ""}` +
    (guests.infants > 0 ? `, ${guests.infants} infant${guests.infants > 1 ? "s" : ""}` : "") +
    (guests.pets > 0 ? `, ${guests.pets} pet${guests.pets > 1 ? "s" : ""}` : "");

  return (
    <aside
      aria-label="Reservation details"
      className="sticky top-28 space-y-6 self-start w-full max-w-[370px] ml-auto hidden lg:block"
    >
      {/* Promotional Card */}
      <div className="border border-surface-border rounded-xl p-4 flex items-center justify-between shadow-sm bg-white">
        <div className="flex items-center space-x-3">
          <div className="w-7 h-7 relative flex-shrink-0">
            <Image
              src="/images/ui/discount.svg"
              alt=""
              fill
              className="object-contain"
              aria-hidden="true"
            />
          </div>
          <div>
            <div className="text-[14px] font-semibold text-ink-primary">
              Get 10% off your next stay.
            </div>
            <button
              type="button"
              className="text-[12px] text-ink-primary underline underline-offset-2 hover:text-black"
            >
              Terms apply
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setPromoClaimed(!promoClaimed)}
          className={`px-3.5 py-1.5 border rounded-lg text-[14px] font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-black ${
            promoClaimed
              ? "bg-neutral-100 text-neutral-500 border-neutral-300"
              : "bg-white text-ink-primary border-surface-border hover:bg-surface-muted"
          }`}
        >
          {promoClaimed ? "Claimed" : "Claim"}
        </button>
      </div>

      {/* Main Sticky Reservation Card */}
      <div className="border border-surface-border rounded-2xl p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)] bg-white space-y-6">
        {/* Price & nights heading */}
        <div>
          <span className="text-[22px] font-bold text-ink-primary underline decoration-1">
            {formattedTotal}
          </span>{" "}
          <span className="text-[16px] text-ink-secondary">
            for {nights} nights
          </span>
        </div>

        {/* Input box for Dates & Guests */}
        <div className="border border-surface-border rounded-xl overflow-visible relative">
          {/* Check-in / Checkout grid */}
          <div
            className="grid grid-cols-2 border-b border-surface-border cursor-pointer divide-x divide-surface-border hover:bg-neutral-50/50 transition-colors"
            onClick={onDateBoxClick}
          >
            <div className="p-3">
              <div className="text-[10px] font-extrabold text-ink-primary tracking-wider uppercase">
                CHECK-IN
              </div>
              <div className="text-[14px] text-ink-primary mt-0.5">
                {formatDateDisplay(startDate)}
              </div>
            </div>

            <div className="p-3">
              <div className="text-[10px] font-extrabold text-ink-primary tracking-wider uppercase">
                CHECKOUT
              </div>
              <div className="text-[14px] text-ink-primary mt-0.5">
                {formatDateDisplay(endDate)}
              </div>
            </div>
          </div>

          {/* Guest selector box */}
          <div ref={guestBoxRef} className="relative">
            <button
              type="button"
              onClick={() => setIsGuestOpen(!isGuestOpen)}
              aria-expanded={isGuestOpen}
              className="w-full p-3 flex items-center justify-between text-left hover:bg-neutral-50/50 transition-colors rounded-b-xl focus-visible:ring-2 focus-visible:ring-black"
            >
              <div>
                <div className="text-[10px] font-extrabold text-ink-primary tracking-wider uppercase">
                  GUESTS
                </div>
                <div className="text-[14px] text-ink-primary mt-0.5 truncate">
                  {guestSummary}
                </div>
              </div>
              <Icon
                name="ui:guestChevron"
                className={`w-4 h-4 text-ink-primary transition-transform ${
                  isGuestOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Guest Selector Dropdown */}
            <GuestSelector
              isOpen={isGuestOpen}
              guests={guests}
              onGuestsChange={setGuests}
              onClose={() => setIsGuestOpen(false)}
              maxGuests={3}
            />
          </div>
        </div>

        {/* Free cancellation banner */}
        <div className="bg-surface-muted rounded-xl p-3.5 text-center text-[13px] text-ink-primary">
          Free cancellation before <span className="font-semibold">17 October</span>
        </div>

        {/* Reserve CTA Button */}
        <button
          type="button"
          className="w-full py-3.5 bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466] hover:opacity-95 text-white font-semibold text-[16px] rounded-lg shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-black active:scale-[0.99]"
        >
          Reserve
        </button>

        {/* You won't be charged yet */}
        <div className="text-center text-[14px] text-ink-secondary">
          You won&apos;t be charged yet
        </div>
      </div>

      {/* Report this listing */}
      <div className="flex justify-center pt-2">
        <button
          type="button"
          className="flex items-center space-x-2 text-ink-secondary hover:text-ink-primary text-[14px] underline underline-offset-2 transition-colors focus-visible:ring-2 focus-visible:ring-black rounded p-1"
        >
          <Icon name="ui:reportFlag" className="w-4 h-4" />
          <span>Report this listing</span>
        </button>
      </div>
    </aside>
  );
}

export default StickyBookingCard;
