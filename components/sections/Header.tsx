"use client";

import { MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { whatsappHref } from "@/lib/whatsapp";

const leftNavItems = [
  { href: "#suites", label: "Offers" },
  { href: "#gallery", label: "What's On" },
];

const mobileNavItems = [
  { href: "#about", label: "About" },
  { href: "#suites", label: "Rooms & Suites" },
  { href: "#stay-types", label: "Stay Types" },
  { href: "#gallery", label: "Gallery" },
  { href: "#amenities", label: "Amenities" },
  { href: "#neighborhood", label: "Location" },
  { href: "#enquire", label: "Enquire" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-hotel-cream text-sage border-b border-charcoal/15 shadow-sm">
      <div className="section-shell flex h-24 items-center justify-between">
        {/* Left: Hamburger + Utility Links */}
        <div className="flex flex-1 items-center justify-start gap-6 sm:gap-8">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
            className="group flex h-11 w-11 min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1.5 focus:outline-none"
          >
            {open ? (
              <X size={24} className="text-black" />
            ) : (
              <>
                <span className="h-[2px] w-6 bg-black transition-transform group-hover:scale-x-110" />
                <span className="h-[2px] w-6 bg-black transition-transform group-hover:scale-x-110" />
                <span className="h-[2px] w-6 bg-black transition-transform group-hover:scale-x-110" />
              </>
            )}
          </button>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Utility navigation">
            {leftNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-nav text-[0.8rem] font-medium tracking-[0.05em] capitalize text-sage hover:text-charcoal transition min-h-[44px] flex items-center"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Center: Image Logo scaled up matching Lakeside's header focal point */}
        <div className="flex shrink-0 items-center justify-center text-center">
          <Link href="#" className="flex items-center justify-center py-1">
            <img
              src="/jiana-suites-logo.webp"
              alt="Jiana Suites Logo"
              className="h-14 sm:h-16 md:h-18 w-auto object-contain transition-transform hover:scale-105"
            />
          </Link>
        </div>

        {/* Right: Microcopy + Book Now */}
        <div className="flex flex-1 items-center justify-end gap-3 sm:gap-4">
          <div className="hidden xl:flex items-center text-right">
            <span className="font-nav text-[0.75rem] font-medium text-charcoal/85 tracking-wide">
              Your experience begins here:
            </span>
          </div>
          <a
            href={whatsappHref("Hi, I'd like to book a stay at Jiana Suites.")}
            className="btn-lakeside min-h-[44px] text-[0.75rem] font-bold tracking-[0.14em] uppercase px-5 sm:px-6 py-2.5 shadow-sm inline-flex items-center justify-center"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {open ? (
        <div className="border-t border-charcoal/10 bg-hotel-cream px-6 py-8 text-sage shadow-xl lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="mx-auto flex max-w-md flex-col gap-3 text-center" aria-label="Mobile navigation">
            {mobileNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-xl font-normal min-h-[44px] flex items-center justify-center py-2 text-sage hover:text-charcoal transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 flex flex-col items-center gap-4 pt-6 border-t border-charcoal/10">
            <p className="font-nav text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-charcoal/70">
              Your experience begins here
            </p>
            <a
              href={whatsappHref("Hi, I'd like to book a stay at Jiana Suites.")}
              onClick={() => setOpen(false)}
              className="btn-lakeside min-h-[44px] w-full max-w-xs py-3 inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Book Now on WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
