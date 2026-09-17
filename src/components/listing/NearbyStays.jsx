"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

export function NearbyStays({ stays = [] }) {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 2;

  const updateScrollState = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < maxScroll - 5);
    const page = maxScroll > 0 && scrollLeft > maxScroll * 0.4 ? 1 : 0;
    setCurrentPage(page);
  };

  useEffect(() => {
    updateScrollState();

    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      // If native horizontal trackpad scroll (deltaX != 0), let browser handle it
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        return;
      }

      // If vertical wheel gesture over the carousel, scroll horizontally
      if (e.deltaY !== 0) {
        const { scrollLeft, scrollWidth, clientWidth } = el;
        const maxScroll = scrollWidth - clientWidth;
        const atStart = scrollLeft <= 0 && e.deltaY < 0;
        const atEnd = scrollLeft >= maxScroll - 5 && e.deltaY > 0;

        if (!atStart && !atEnd) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
          updateScrollState();
        }
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [stays]);

  const scroll = (direction) => {
    if (!containerRef.current) return;
    const scrollAmount = containerRef.current.clientWidth * 0.8;
    containerRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-10 border-b border-surface-divider space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] font-semibold text-ink-primary">
          More stays nearby
        </h2>

        {/* Carousel pagination and controls */}
        <div className="flex items-center space-x-3">
          <span className="text-[14px] text-ink-primary font-medium">
            {currentPage + 1} / {totalPages}
          </span>

          <div className="flex items-center space-x-1.5">
            <button
              type="button"
              onClick={() => scroll("prev")}
              disabled={!canScrollLeft}
              aria-label="Previous stays"
              className={`w-8 h-8 rounded-full border border-surface-border flex items-center justify-center transition-colors ${
                !canScrollLeft
                  ? "opacity-30 cursor-not-allowed border-surface-divider text-neutral-400"
                  : "hover:border-black text-ink-primary focus-visible:ring-2 focus-visible:ring-black"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
                className="w-3.5 h-3.5 rotate-180 fill-current"
                aria-hidden="true"
              >
                <path d="M6.7 14.7l5.3-5.3a.5.5 0 0 0 0-.8L6.7 3.3a.5.5 0 0 0-.7.7L11 9l-5 5a.5.5 0 0 0 .7.7z" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => scroll("next")}
              disabled={!canScrollRight}
              aria-label="Next stays"
              className={`w-8 h-8 rounded-full border border-surface-border flex items-center justify-center transition-colors ${
                !canScrollRight
                  ? "opacity-30 cursor-not-allowed border-surface-divider text-neutral-400"
                  : "hover:border-black text-ink-primary focus-visible:ring-2 focus-visible:ring-black"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
                className="w-3.5 h-3.5 fill-current"
                aria-hidden="true"
              >
                <path d="M6.7 14.7l5.3-5.3a.5.5 0 0 0 0-.8L6.7 3.3a.5.5 0 0 0-.7.7L11 9l-5 5a.5.5 0 0 0 .7.7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontally scrollable row with trackpad support */}
      <div
        ref={containerRef}
        onScroll={updateScrollState}
        tabIndex={0}
        aria-label="Scrollable list of nearby stays"
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-2xl py-1"
      >
        {stays.map((stay, idx) => (
          <div
            key={stay.id || idx}
            className="flex-shrink-0 w-[calc((100%-64px)/5)] min-w-[200px] flex flex-col space-y-2 cursor-pointer group snap-start"
          >
            <div className="w-full aspect-square rounded-2xl overflow-hidden relative bg-neutral-100 border border-surface-border">
              <Image
                src={stay.image}
                alt={stay.title}
                fill
                sizes="(max-width: 640px) 50vw, 220px"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
              />
            </div>

            <div>
              <h3 className="text-[14px] font-semibold text-ink-primary truncate">
                {stay.title}
              </h3>
              <div className="flex items-center space-x-1.5 text-[14px] text-ink-primary mt-0.5">
                <span className="font-semibold">{stay.price}</span>
                <span className="text-ink-secondary">★ {stay.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NearbyStays;
