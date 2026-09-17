"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@/components/common/Icon";

export function Header({ onSearchClick }) {
  return (
    <header className="w-full bg-white border-b border-surface-divider relative px-[48px] py-[28px]">
      <div className="w-full flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1 flex items-center">
          <a
            href="/"
            aria-label="Airbnb Home"
            className="flex items-center text-airbnb hover:opacity-95 transition-opacity focus-visible:ring-2 focus-visible:ring-black rounded-lg"
          >
            <Icon name="ui:logo" className="h-8 w-28 text-airbnb" />
          </a>
        </div>

        {/* Center: Search Pill */}
        <div className="flex-initial">
          <div
            role="button"
            tabIndex={0}
            aria-label="Search destinations, dates, and guests"
            style={{ width: "336.183px", height: "46px" }}
            className="w-[336.183px] h-[46px] box-border flex items-center justify-between border border-surface-border rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.08),0_3px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)] transition-shadow pl-2 pr-2 cursor-pointer text-sm font-medium bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black shrink-0"
            onClick={onSearchClick}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSearchClick && onSearchClick();
              }
            }}
          >
            <div className="flex items-center space-x-1.5 shrink-0">
              <div className="w-[24px] h-[18px] relative flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/images/ui/searchbar-house.png"
                  alt="Property"
                  width={24}
                  height={18}
                  className="w-[24px] h-[18px] object-contain"
                />
              </div>
              <span className="text-ink-primary font-semibold text-[14px] whitespace-nowrap">Anywhere</span>
            </div>

            <div className="h-6 w-[1px] bg-surface-divider shrink-0" aria-hidden="true" />

            <div className="shrink-0">
              <span className="text-ink-primary font-semibold text-[14px] whitespace-nowrap">Anytime</span>
            </div>

            <div className="h-6 w-[1px] bg-surface-divider shrink-0" aria-hidden="true" />

            <div className="flex items-center space-x-2 shrink-0">
              <span className="text-ink-primary font-semibold text-[14px] whitespace-nowrap">Add guests</span>
              <button
                type="button"
                aria-label="Search"
                className="w-8 h-8 rounded-full bg-airbnb text-white flex items-center justify-center hover:bg-airbnb-dark transition-colors focus-visible:ring-2 focus-visible:ring-black flex-shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-3.5 h-3.5 fill-current stroke-current stroke-2"
                  aria-hidden="true"
                >
                  <path d="M13 2a11 11 0 0 1 8.6 17.86l8.83 8.84-1.42 1.41-8.83-8.83A11 11 0 1 1 13 2zm0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right: User Menu & Host */}
        <div className="flex-1 flex items-center justify-end space-x-3">
          <button
            type="button"
            className="text-[14px] font-semibold text-ink-primary hover:bg-surface-muted px-3.5 py-2.5 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-black"
          >
            Become a host
          </button>

          <button
            type="button"
            aria-label="Main navigation menu"
            className="w-10 h-10 rounded-full bg-[#F1F1F1] hover:bg-[#E5E5E5] flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-black text-ink-primary"
          >
            <Icon name="ui:menu" className="w-4 h-4 text-ink-primary" />
          </button>

          <button
            type="button"
            aria-label="User profile"
            className="w-10 h-10 rounded-full bg-[#F1F1F1] hover:bg-[#E5E5E5] flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-black"
          >
            <div className="w-7 h-7 bg-[#717171] text-white rounded-full flex items-center justify-center overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-7 h-7 fill-white translate-y-0.5"
                aria-hidden="true"
              >
                <path d="M16 1a15 15 0 1 0 0 30 15 15 0 0 0 0-30zm0 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 24a12.94 12.94 0 0 1-9.17-3.83A8.99 8.99 0 0 1 16 19a8.99 8.99 0 0 1 9.17 6.17A12.94 12.94 0 0 1 16 29z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
