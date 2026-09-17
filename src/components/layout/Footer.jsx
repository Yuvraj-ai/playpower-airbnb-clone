import React from "react";
import { Icon } from "@/components/common/Icon";

export function Footer() {
  return (
    <footer className="w-full bg-surface-muted border-t border-surface-divider text-ink-primary mt-12">
      <div className="max-w-[1760px] mx-auto px-6 xl:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-surface-divider text-[14px]">
          {/* Column 1: Support */}
          <div className="space-y-3">
            <h4 className="font-semibold text-ink-primary">Support</h4>
            <ul className="space-y-3 list-none p-0 text-ink-secondary">
              <li><a href="#" className="hover:underline">Help Centre</a></li>
              <li><a href="#" className="hover:underline">AirCover</a></li>
              <li><a href="#" className="hover:underline">Anti-discrimination</a></li>
              <li><a href="#" className="hover:underline">Disability support</a></li>
              <li><a href="#" className="hover:underline">Cancellation options</a></li>
            </ul>
          </div>

          {/* Column 2: Hosting */}
          <div className="space-y-3">
            <h4 className="font-semibold text-ink-primary">Hosting</h4>
            <ul className="space-y-3 list-none p-0 text-ink-secondary">
              <li><a href="#" className="hover:underline">Airbnb your home</a></li>
              <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:underline">Hosting resources</a></li>
              <li><a href="#" className="hover:underline">Community forum</a></li>
              <li><a href="#" className="hover:underline">Hosting responsibly</a></li>
            </ul>
          </div>

          {/* Column 3: Airbnb */}
          <div className="space-y-3">
            <h4 className="font-semibold text-ink-primary">Airbnb</h4>
            <ul className="space-y-3 list-none p-0 text-ink-secondary">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">New features</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Airbnb.org emergency stays</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[14px] text-ink-secondary gap-4">
          <div className="flex flex-wrap items-center space-x-2">
            <span>© 2026 Airbnb, Inc.</span>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:underline">Sitemap</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:underline">Company details</a>
          </div>

          <div className="flex items-center space-x-6 font-semibold text-ink-primary">
            <div className="flex items-center space-x-2 cursor-pointer hover:underline">
              <Icon name="ui:langGlobe" className="w-4 h-4" />
              <span>English (IN)</span>
            </div>

            <div className="cursor-pointer hover:underline">
              <span>₹ INR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
