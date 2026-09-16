"use client";

import { MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { whatsappHref } from "@/lib/whatsapp";

const menuItems = [
  { href: "#hero", label: "Home" },
  { href: "#suites", label: "Rooms" },
  { href: "#gallery", label: "Gallery" },
  { href: "#amenities", label: "Amenities" },
  { href: "#neighborhood", label: "Location" },
  { href: "#enquire", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);

    if (href === "#hero" || href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.pushState(null, "", "#");
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", href);
    }
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-hotel-cream text-sage border-b border-charcoal/15 shadow-sm">
      <div className="section-shell flex h-24 items-center justify-between">
        {/* Left: Hamburger Button */}
        <div className="flex flex-1 items-center justify-start gap-3">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="group flex h-11 min-h-[44px] items-center gap-2.5 px-1 focus:outline-none cursor-pointer"
          >
            <div className="flex h-5 w-6 flex-col justify-between" aria-hidden="true">
              {open ? (
                <X size={24} className="text-black" />
              ) : (
                <>
                  <span className="h-[2px] w-6 bg-black transition-transform group-hover:scale-x-110 origin-left" />
                  <span className="h-[2px] w-6 bg-black transition-transform group-hover:scale-x-110 origin-left" />
                  <span className="h-[2px] w-6 bg-black transition-transform group-hover:scale-x-110 origin-left" />
                </>
              )}
            </div>
            <span className="hidden sm:inline font-nav text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-charcoal/80 group-hover:text-black transition">
              {open ? "Close" : "Menu"}
            </span>
          </button>
        </div>

        {/* Center: Image Logo scaled up matching Lakeside's header focal point */}
        <div className="flex shrink-0 items-center justify-center text-center">
          <Link href="#" className="flex items-center justify-center py-1" onClick={(e) => handleNavClick(e, "#hero")}>
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

      {/* Hamburger Menu Drawer */}
      {open ? (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 top-24 bg-black/40 backdrop-blur-xs z-40 animate-in fade-in duration-200"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Drawer */}
          <div className="relative z-50 border-t border-charcoal/10 bg-hotel-cream px-6 py-8 sm:py-10 text-sage shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="mx-auto flex max-w-md flex-col gap-2 sm:gap-3 text-center" aria-label="Main navigation">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-display text-2xl sm:text-3xl font-normal min-h-[48px] flex items-center justify-center py-2 text-sage hover:text-charcoal hover:scale-105 transition-all duration-150"
                >
                  {item.label}
                </a>
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
        </>
      ) : null}
    </header>
  );
}
