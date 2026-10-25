"use client";

import { ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { business } from "@/lib/business";
import { stayMenuLinks } from "@/lib/landing-links";

const menuItems = [
  { href: "#hero", label: "Home" },
  { href: "#suites", label: "Rooms" },
  { href: "#gallery", label: "Gallery" },
  { href: "#amenities", label: "Amenities" },
  { href: "#neighborhood", label: "Location" },
  { href: "#faq", label: "FAQ" },
  { href: "#enquire", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [staysOpen, setStaysOpen] = useState(false);
  const staysRef = useRef<HTMLDivElement>(null);
  const isHome = usePathname() === "/";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setStaysOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!staysOpen) return;
    const handlePointerDown = (e: PointerEvent) => {
      if (!staysRef.current?.contains(e.target as Node)) setStaysOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [staysOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false);

    // Section anchors only exist on the homepage; elsewhere the link goes to "/#section".
    if (!isHome) return;
    e.preventDefault();

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
    <header className="fixed left-0 top-0 z-50 w-full bg-hotel-cream text-sage border-b border-charcoal/15 shadow-sm overflow-visible">
      <div className="section-shell flex h-24 items-center justify-between overflow-visible">
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

          <div ref={staysRef} className="relative hidden md:block">
            <button
              type="button"
              aria-expanded={staysOpen}
              aria-controls="stays-menu"
              onClick={() => setStaysOpen((value) => !value)}
              className="flex h-11 min-h-[44px] items-center gap-1.5 px-1 font-nav text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-charcoal/80 hover:text-black transition focus:outline-none"
            >
              Stays
              <ChevronDown
                size={14}
                aria-hidden="true"
                className={`transition-transform duration-200 ${staysOpen ? "rotate-180" : ""}`}
              />
            </button>
            {staysOpen ? (
              <div
                id="stays-menu"
                className="absolute left-0 top-full z-50 mt-2 w-56 border border-charcoal/15 bg-hotel-cream py-2 shadow-xl"
              >
                {stayMenuLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setStaysOpen(false)}
                    className="flex min-h-[44px] items-center px-5 font-nav text-[0.8rem] font-medium text-charcoal/85 hover:bg-charcoal/5 hover:text-sage transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {/* Center: Image Logo scaled up matching Lakeside's header focal point */}
        <div className="flex shrink-0 items-center justify-center text-center relative overflow-visible">
          <Link
            href="/"
            aria-label="Jiana Suites — Home"
            className="relative z-20 flex items-center justify-center py-1 overflow-visible"
            onClick={(e) => handleNavClick(e, "#hero")}
          >
            <img
              src="/jiana-suites-logo.webp"
              alt="Jiana Suites Logo"
              width={1280}
              height={587}
              className="h-10 sm:h-14 md:h-16 lg:h-[4.5rem] w-auto max-w-none object-contain transition-transform hover:scale-105 drop-shadow-md"
            />
          </Link>
        </div>

        {/* Right: Microcopy + Book Now */}
        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4">
          <div className="hidden xl:flex items-center text-right">
            <span className="font-nav text-[0.75rem] font-medium text-charcoal/85 tracking-wide">
              Your experience begins here:
            </span>
          </div>
          <a
            href={business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lakeside min-h-[44px] text-[0.7rem] sm:text-[0.75rem] font-bold tracking-[0.1em] sm:tracking-[0.14em] uppercase px-3.5 sm:px-6 py-2.5 shadow-sm inline-flex items-center justify-center whitespace-nowrap"
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
                  href={isHome ? item.href : `/${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-display text-2xl sm:text-3xl font-normal min-h-[48px] flex items-center justify-center py-2 text-sage hover:text-charcoal hover:scale-105 transition-all duration-150"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mx-auto mt-6 max-w-md pt-6 border-t border-charcoal/10 text-center">
              <p className="font-nav text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-charcoal/70">
                Stays
              </p>
              <nav className="mt-2 flex flex-wrap justify-center gap-x-6" aria-label="Stays">
                {stayMenuLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[44px] items-center font-nav text-[0.9rem] font-medium text-sage hover:text-charcoal transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="mt-6 flex flex-col items-center gap-4 pt-6 border-t border-charcoal/10">
              <p className="font-nav text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-charcoal/70">
                Your experience begins here
              </p>
              <a
                href={business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-lakeside min-h-[44px] w-full max-w-xs py-3 inline-flex items-center justify-center gap-2"
              >
                Book Now
              </a>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
