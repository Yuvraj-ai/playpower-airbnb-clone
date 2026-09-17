"use client";

import React, { useState } from "react";
import { Icon } from "@/components/common/Icon";

// Helper functions for calendar computations
const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};

const formatDateStr = (date) => {
  if (!date) return "";
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const parseDateStr = (str) => {
  if (!str) return null;
  const [y, m, d] = str.split("-").map(Number);
  return new Date(y, m - 1, d);
};

export function CalendarSection({
  startDate,
  endDate,
  onDateChange,
  location = "Candolim",
}) {
  // Calendar base month state (year, month: 0-indexed)
  // Default to October 2026 as shown in reference
  const [baseDate, setBaseDate] = useState(new Date(2026, 9, 1)); // October 2026
  const [hoverDate, setHoverDate] = useState(null);

  const prevMonth = () => {
    setBaseDate(new Date(baseDate.getFullYear(), baseDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setBaseDate(new Date(baseDate.getFullYear(), baseDate.getMonth() + 1, 1));
  };

  const clearDates = () => {
    onDateChange(null, null);
  };

  const startObj = parseDateStr(startDate);
  const endObj = parseDateStr(endDate);

  const calculateNights = () => {
    if (startObj && endObj) {
      const diffTime = Math.abs(endObj - startObj);
      return Math.round(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const nights = calculateNights();

  const formatSubtitle = () => {
    if (startObj && endObj) {
      const options = { day: "numeric", month: "short", year: "numeric" };
      return `${startObj.toLocaleDateString("en-GB", options)} - ${endObj.toLocaleDateString("en-GB", options)}`;
    }
    return "Select dates for your stay";
  };

  const handleDayClick = (date) => {
    if (!startObj || (startObj && endObj)) {
      // Pick start date
      onDateChange(formatDateStr(date), null);
    } else if (startObj && !endObj) {
      if (date < startObj) {
        onDateChange(formatDateStr(date), null);
      } else if (date.getTime() === startObj.getTime()) {
        onDateChange(null, null);
      } else {
        onDateChange(formatDateStr(startObj), formatDateStr(date));
      }
    }
  };

  // Render a single month calendar grid
  const renderMonth = (monthOffset) => {
    const targetDate = new Date(baseDate.getFullYear(), baseDate.getMonth() + monthOffset, 1);
    const year = targetDate.getFullYear();
    const month = targetDate.getMonth();
    const monthName = targetDate.toLocaleString("en-US", { month: "long" });
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
    const days = [];

    // Empty cells before start of month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10" />);
    }

    // Days of the month
    for (let d = 1; d <= daysInMonth; d++) {
      const currentDayDate = new Date(year, month, d);
      const dateStr = formatDateStr(currentDayDate);
      const isStart = startDate === dateStr;
      const isEnd = endDate === dateStr;

      let isInRange = false;
      if (startObj && endObj) {
        isInRange = currentDayDate > startObj && currentDayDate < endObj;
      } else if (startObj && hoverDate && !endObj) {
        isInRange = currentDayDate > startObj && currentDayDate <= hoverDate;
      }

      const isPast = currentDayDate < new Date(2026, 9, 1); // allow Oct 2026 onwards

      days.push(
        <div
          key={d}
          onMouseEnter={() => !endObj && setHoverDate(currentDayDate)}
          onMouseLeave={() => !endObj && setHoverDate(null)}
          className={`h-10 w-10 flex items-center justify-center relative my-0.5 ${
            isInRange ? "bg-surface-muted" : ""
          } ${isStart && endObj ? "rounded-l-full bg-surface-muted" : ""} ${
            isEnd ? "rounded-r-full bg-surface-muted" : ""
          }`}
        >
          <button
            type="button"
            disabled={isPast}
            onClick={() => handleDayClick(currentDayDate)}
            aria-label={`${d} ${monthName} ${year}`}
            className={`h-9 w-9 rounded-full flex items-center justify-center text-[14px] font-medium transition-colors focus-visible:ring-2 focus-visible:ring-black z-10 ${
              isStart || isEnd
                ? "bg-black text-white font-bold"
                : isPast
                ? "text-ink-muted cursor-not-allowed line-through"
                : "text-ink-primary hover:border hover:border-black"
            }`}
          >
            {d}
          </button>
        </div>
      );
    }

    return (
      <div className="flex-1 min-w-[280px]">
        <div className="text-center font-bold text-[16px] text-ink-primary mb-4">
          {monthName} {year}
        </div>

        <div className="grid grid-cols-7 gap-y-1 justify-items-center mb-2">
          {weekdays.map((w, idx) => (
            <div
              key={idx}
              className="text-xs font-semibold text-ink-secondary w-10 text-center"
            >
              {w}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-y-1 justify-items-center">
          {days}
        </div>
      </div>
    );
  };

  return (
    <div className="py-8 border-b border-surface-divider space-y-4">
      {/* Calendar title and dates */}
      <div>
        <h2 className="text-[22px] font-semibold text-ink-primary">
          {nights > 0 ? `${nights} nights in ${location}` : `Select dates in ${location}`}
        </h2>
        <p className="text-[14px] text-ink-secondary mt-1">
          {formatSubtitle()}
        </p>
      </div>

      {/* Calendar container with month navigation */}
      <div className="pt-2 relative">
        {/* Navigation Arrows */}
        <div className="flex items-center justify-between absolute top-4 left-0 right-0 px-2 pointer-events-none z-20">
          <button
            type="button"
            onClick={prevMonth}
            aria-label="Previous month"
            className="pointer-events-auto p-2 rounded-full hover:bg-surface-muted text-ink-primary transition-colors focus-visible:ring-2 focus-visible:ring-black"
          >
            <Icon name="ui:calPrev" className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={nextMonth}
            aria-label="Next month"
            className="pointer-events-auto p-2 rounded-full hover:bg-surface-muted text-ink-primary transition-colors focus-visible:ring-2 focus-visible:ring-black"
          >
            <Icon name="ui:calNext" className="w-4 h-4" />
          </button>
        </div>

        {/* 2-month view */}
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 pt-2">
          {renderMonth(0)}
          {renderMonth(1)}
        </div>

        {/* Bottom controls: Keyboard icon and Clear dates */}
        <div className="flex items-center justify-between pt-6">
          <button
            type="button"
            aria-label="Keyboard navigation assistance"
            className="p-2 rounded-lg hover:bg-surface-muted text-ink-primary focus-visible:ring-2 focus-visible:ring-black"
          >
            <Icon name="ui:calKbd" className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={clearDates}
            className="text-[14px] font-semibold text-ink-primary underline underline-offset-2 hover:text-black py-1 px-2 rounded focus-visible:ring-2 focus-visible:ring-black"
          >
            Clear dates
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalendarSection;
