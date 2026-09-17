"use client";

import React, { useState, useEffect } from "react";

const TABS = [
  { id: "photos", label: "Photos" },
  { id: "amenities", label: "Amenities" },
  { id: "reviews", label: "Reviews" },
  { id: "location", label: "Location" },
];

export function StickySubNav({ price = "₹28,499", nights = 5, rating = 4.95, reviews = 19, onReserveClick }) {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("photos");

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky sub nav right after passing hero gallery
      const photosEl = document.getElementById("photos");
      const shouldBeVisible = photosEl
        ? photosEl.getBoundingClientRect().bottom <= 80
        : window.scrollY > 600;

      setVisible((prev) => (prev !== shouldBeVisible ? shouldBeVisible : prev));

      // Check section offsets for active tab
      const sections = [
        { id: "photos", el: document.getElementById("photos") },
        { id: "amenities", el: document.getElementById("amenities") },
        { id: "reviews", el: document.getElementById("reviews") },
        { id: "location", el: document.getElementById("location") },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s.el) {
          const top = s.el.getBoundingClientRect().top;
          if (top <= 120) {
            setActiveTab((prev) => (prev !== s.id ? s.id : prev));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Listing navigation"
      aria-hidden={!visible}
      className={`fixed top-0 left-0 right-0 z-40 bg-white border-b border-surface-divider shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300 ease-airbnb ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-container mx-auto px-6 flex items-center justify-between h-20">
        {/* Navigation Tabs */}
        <div className="flex items-center space-x-6 h-full">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`h-full flex items-center text-[14px] font-semibold transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black ${
                activeTab === tab.id
                  ? "text-ink-primary"
                  : "text-ink-secondary hover:text-ink-primary"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-ink-primary rounded-t-sm" />
              )}
            </button>
          ))}
        </div>

        {/* Right side summary & Reserve CTA */}
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-[14px] font-semibold text-ink-primary">
              {price} <span className="font-normal text-ink-secondary">for {nights} nights</span>
            </div>
            <div className="text-[12px] font-semibold text-ink-primary flex items-center justify-end space-x-1">
              <span>★ {rating}</span>
              <span className="text-ink-secondary font-normal">· {reviews} reviews</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onReserveClick}
            className="px-6 py-3 bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466] hover:opacity-95 text-white text-[15px] font-semibold rounded-lg shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-black active:scale-[0.99]"
          >
            Reserve
          </button>
        </div>
      </div>
    </nav>
  );
}

export default StickySubNav;
