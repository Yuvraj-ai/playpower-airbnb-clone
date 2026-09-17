import React from "react";
import { Icon } from "@/components/common/Icon";

export function HighlightsSection({ highlights = [] }) {
  if (!highlights.length) return null;

  return (
    <div className="py-6 border-b border-surface-divider space-y-6">
      {highlights.map((item, idx) => (
        <div key={idx} className="flex items-start space-x-4">
          <div className="pt-0.5 text-ink-primary flex-shrink-0">
            <Icon name={item.icon} className="w-6 h-6 text-ink-primary" />
          </div>
          <div>
            <h3 className="text-[16px] font-semibold text-ink-primary leading-tight">
              {item.title}
            </h3>
            <p className="text-[14px] text-ink-secondary mt-1 leading-snug">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HighlightsSection;
