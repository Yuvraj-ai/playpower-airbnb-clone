"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@/components/common/Icon";

export function HostSection({ host }) {
  if (!host) return null;

  return (
    <section className="py-10 border-b border-surface-divider space-y-8">
      <h2 className="text-[22px] font-semibold text-ink-primary">
        Meet your host
      </h2>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left Column: Host Profile Card & Bio Info */}
        <div className="w-full lg:w-[380px] space-y-6">
          {/* Main Card */}
          <div className="border border-surface-border rounded-3xl p-6 sm:p-8 shadow-[0_6px_16px_rgba(0,0,0,0.08)] bg-white flex items-center justify-between">
            {/* Left: Avatar and Host Name */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="relative w-24 h-24 rounded-full overflow-visible">
                <div className="w-24 h-24 rounded-full overflow-hidden relative border border-surface-border">
                  <Image
                    src={host.avatar}
                    alt={host.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Red verified check badge */}
                {host.verified && (
                  <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-airbnb text-white flex items-center justify-center shadow-md border-2 border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-4 h-4 fill-current stroke-current stroke-2"
                      aria-hidden="true"
                    >
                      <path d="M12 24.59L4.71 17.29 6.12 15.88 12 21.76 25.88 7.88 27.29 9.29z" />
                    </svg>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-[22px] font-bold text-ink-primary leading-tight">
                  {host.name}
                </h3>
                <span className="text-[14px] text-ink-secondary">
                  {host.tagline || "Host"}
                </span>
              </div>
            </div>

            {/* Right: Key Stats */}
            <div className="space-y-4 pl-4 border-l border-surface-divider text-left">
              <div>
                <div className="text-[20px] font-bold text-ink-primary leading-none">
                  {host.reviewsCount?.toLocaleString()}
                </div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-ink-secondary mt-1">
                  Reviews
                </div>
              </div>

              <div className="border-t border-surface-divider pt-3">
                <div className="text-[20px] font-bold text-ink-primary leading-none flex items-center space-x-1">
                  <span>{host.rating}</span>
                  <span className="text-sm">★</span>
                </div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-ink-secondary mt-1">
                  Rating
                </div>
              </div>

              <div className="border-t border-surface-divider pt-3">
                <div className="text-[20px] font-bold text-ink-primary leading-none">
                  {host.yearsHosting}
                </div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-ink-secondary mt-1">
                  Years hosting
                </div>
              </div>
            </div>
          </div>

          {/* Host Bio Facts */}
          <div className="space-y-4 pl-2">
            <div className="flex items-center space-x-3 text-[16px] text-ink-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M16 1a9 9 0 0 0-9 9c0 3.37 1.87 6.3 4.67 7.82l.33.18V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3l.33-.18A9 9 0 0 0 25 10a9 9 0 0 0-9-9zm-3 23v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2z" />
              </svg>
              <span>Born in the 80s</span>
            </div>

            <div className="flex items-center space-x-3 text-[16px] text-ink-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M16 2 L1 9 L16 16 L31 9 Z M5 12.5 L5 21 C5 24 10 27 16 27 C22 27 27 24 27 21 L27 12.5 L16 17.5 Z" />
              </svg>
              <span>Where I went to school: NICMAR GOA</span>
            </div>
          </div>
        </div>

        {/* Right Column: Co-Hosts & Host Details */}
        <div className="flex-1 space-y-8">
          {/* Co-Hosts */}
          {host.coHosts && (
            <div className="space-y-4">
              <h3 className="text-[18px] font-semibold text-ink-primary">
                Co-Hosts
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {host.coHosts.map((co, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    {co.avatar ? (
                      <div className="w-10 h-10 rounded-full overflow-hidden relative flex-shrink-0 bg-neutral-100 border border-surface-border">
                        <Image
                          src={co.avatar}
                          alt={co.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                          co.bgColor || "bg-neutral-200 text-neutral-800"
                        }`}
                      >
                        {co.initials || co.name[0]}
                      </div>
                    )}
                    <span className="text-[15px] text-ink-primary font-medium truncate">
                      {co.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Host Details */}
          <div className="space-y-4 pt-2">
            <h3 className="text-[18px] font-semibold text-ink-primary">
              Host details
            </h3>

            <div className="text-[16px] text-ink-primary space-y-1">
              <p>Response rate: {host.details?.responseRate || "100%"}</p>
              <p>Responds {host.details?.responseTime?.toLowerCase() || "within an hour"}</p>
            </div>

            {/* Message host button */}
            <div className="pt-2">
              <button
                type="button"
                className="px-6 py-3 bg-[#EBEBEB] hover:bg-neutral-300 text-ink-primary font-semibold text-[15px] rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-black"
              >
                Message host
              </button>
            </div>

            {/* Security notice */}
            <div className="flex items-start space-x-3 pt-4 text-[12px] text-ink-secondary border-t border-surface-divider">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current text-ink-secondary flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M16 1a1 1 0 0 1 .42.09l13 6A1 1 0 0 1 30 8v10c0 7.42-5.74 13.56-13.62 14-.13.01-.26.01-.38 0C8.11 31.56 2.38 25.42 2.38 18V8a1 1 0 0 1 .58-.91l13-6A1 1 0 0 1 16 1zm0 2.11L4.38 8.16V18c0 6.38 4.88 11.66 11.62 12 6.74-.34 11.62-5.62 11.62-12V8.16L16 3.11z" />
              </svg>
              <span>
                To help protect your payment, always use Airbnb to send money and communicate with hosts.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HostSection;
