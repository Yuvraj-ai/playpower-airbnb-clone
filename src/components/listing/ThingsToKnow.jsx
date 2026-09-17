import React from "react";
import { Icon } from "@/components/common/Icon";

export function ThingsToKnow({ thingsToKnow }) {
  if (!thingsToKnow) return null;

  const { cancellation, houseRules, safety } = thingsToKnow;

  return (
    <section className="py-10 border-b border-surface-divider space-y-6">
      <h2 className="text-[22px] font-semibold text-ink-primary">
        Things to know
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cancellation Policy */}
        {cancellation && (
          <div className="space-y-3">
            <div className="w-6 h-6 text-ink-primary">
              <Icon name="ttk:Cancellation policy" className="w-6 h-6" />
            </div>
            <h3 className="text-[16px] font-semibold text-ink-primary">
              {cancellation.title}
            </h3>
            <p className="text-[14px] text-ink-secondary leading-relaxed">
              {cancellation.summary}
            </p>
            {cancellation.subtext && (
              <p className="text-[14px] text-ink-secondary leading-relaxed">
                {cancellation.subtext}
              </p>
            )}
            <button
              type="button"
              className="text-[14px] font-semibold text-ink-primary underline underline-offset-2 hover:text-black focus-visible:ring-2 focus-visible:ring-black rounded"
            >
              {cancellation.linkText || "Learn more"}
            </button>
          </div>
        )}

        {/* House Rules */}
        {houseRules && (
          <div className="space-y-3">
            <div className="w-6 h-6 text-ink-primary">
              <Icon name="ttk:House rules" className="w-6 h-6" />
            </div>
            <h3 className="text-[16px] font-semibold text-ink-primary">
              {houseRules.title}
            </h3>
            <ul className="text-[14px] text-ink-secondary space-y-2 list-none p-0">
              {houseRules.rules.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>
            <button
              type="button"
              className="text-[14px] font-semibold text-ink-primary underline underline-offset-2 hover:text-black focus-visible:ring-2 focus-visible:ring-black rounded"
            >
              {houseRules.linkText || "Learn more"}
            </button>
          </div>
        )}

        {/* Safety & Property */}
        {safety && (
          <div className="space-y-3">
            <div className="w-6 h-6 text-ink-primary">
              <Icon name="ttk:Safety & property" className="w-6 h-6" />
            </div>
            <h3 className="text-[16px] font-semibold text-ink-primary">
              {safety.title}
            </h3>
            <ul className="text-[14px] text-ink-secondary space-y-2 list-none p-0">
              {safety.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <button
              type="button"
              className="text-[14px] font-semibold text-ink-primary underline underline-offset-2 hover:text-black focus-visible:ring-2 focus-visible:ring-black rounded"
            >
              {safety.linkText || "Learn more"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ThingsToKnow;
