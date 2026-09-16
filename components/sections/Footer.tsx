import Link from "next/link";
import { Facebook, Instagram, MessageCircle, Youtube } from "lucide-react";
import { business } from "@/lib/business";
import { whatsappHref } from "@/lib/whatsapp";
import { WaveDivider } from "@/components/ui/WaveDivider";

export function Footer() {
  return (
    <footer className="bg-hotel-cream text-charcoal pt-16 pb-20 md:pt-24 md:pb-28 relative overflow-hidden border-t border-charcoal/15">
      <div className="section-shell">
        {/* Giant Watermark with light muted gray tone #c7c2ba referencing unified --color-watermark */}
        <div
          className="select-none text-center font-watermark font-bold text-[8vw] sm:text-[9vw] md:text-[10vw] uppercase leading-none pointer-events-none pb-4 sm:pb-8 md:pb-12 text-watermark/70 whitespace-nowrap"
        >
          JIANA SUITES
        </div>

        {/* Three Columns with clear breathing room below the watermark */}
        <div className="mt-6 sm:mt-8 md:mt-10 grid gap-10 text-center md:grid-cols-3 md:gap-0">
          {/* Column 1: Newsletter / Offers */}
          <section className="flex flex-col items-center px-6 md:border-r md:border-charcoal/15">
            <h2 className="font-display text-[1.35rem] md:text-[1.65rem] font-normal leading-[1.25] text-sage">
              Stay in Touch &
              <br />
              Receive Offers
            </h2>
            <p className="mt-4 max-w-[260px] font-body text-[0.95rem] leading-[1.65] text-charcoal/85">
              Join the Jiana Suites guest list to receive exclusive seasonal rates and updates.
            </p>
            <a
              href={whatsappHref("Hi, I'd like to receive stay updates and special offers from Jiana Suites.")}
              className="btn-lakeside min-h-[44px] mt-7 text-[0.75rem] font-bold tracking-[0.14em] uppercase px-6 py-2.5 shadow-sm inline-flex items-center justify-center"
            >
              Sign Up on WhatsApp
            </a>
          </section>

          {/* Column 2: Contact & Address */}
          <section className="flex flex-col items-center px-6 md:border-r md:border-charcoal/15">
            <p className="font-nav text-[0.7rem] md:text-[0.75rem] font-semibold tracking-[0.2em] uppercase text-sage">
              {business.name}
            </p>
            <p className="mt-4 font-body text-[0.95rem] leading-[1.65] text-charcoal/90">
              {business.address}
              <br />
              <span className="mt-2 block">T. {business.phone}</span>
              <a href={`mailto:${business.email}`} className="mt-1 block hover:text-sage underline transition">
                {business.email}
              </a>
            </p>

            <p className="mt-6 font-nav text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-sage/80">
              Follow Us
            </p>
            <div className="mt-3.5 flex items-center justify-center gap-3.5">
              <a
                href={whatsappHref("Hi, I'd like to know more about Jiana Suites on Facebook.")}
                aria-label="Jiana Suites Facebook page"
                className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white border border-charcoal/15 text-sage transition hover:bg-sage hover:text-white shadow-sm"
              >
                <Facebook size={19} aria-hidden="true" />
              </a>
              <a
                href={whatsappHref("Hi, I'd like to follow Jiana Suites on Instagram.")}
                aria-label="Jiana Suites Instagram page"
                className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white border border-charcoal/15 text-sage transition hover:bg-sage hover:text-white shadow-sm"
              >
                <Instagram size={19} aria-hidden="true" />
              </a>
              <a
                href="#"
                title="Jiana Suites YouTube channel (coming soon)"
                aria-label="Jiana Suites YouTube channel"
                className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white border border-charcoal/15 text-sage transition hover:bg-sage hover:text-white shadow-sm"
              >
                <Youtube size={19} aria-hidden="true" />
              </a>
            </div>
          </section>

          {/* Column 3: News / Concierge */}
          <section className="flex flex-col items-center px-6">
            <h2 className="font-display text-[1.35rem] md:text-[1.65rem] font-normal leading-[1.25] text-sage">
              Direct Concierge
              <br />
              Assistance
            </h2>
            <p className="mt-4 max-w-[260px] font-body text-[0.95rem] leading-[1.65] text-charcoal/85">
              Ask our team about lake view rooms, long-stay discounts, or recommendations around JP Nagar.
            </p>
            <a
              href={whatsappHref("Hi, I'd like to chat with the concierge at Jiana Suites.")}
              className="btn-lakeside min-h-[44px] mt-7 text-[0.75rem] font-bold tracking-[0.14em] uppercase px-6 py-2.5 shadow-sm inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={15} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </section>
        </div>

        {/* Wave Divider Accent */}
        <div className="mt-16 pt-6 border-t border-charcoal/15">
          <WaveDivider className="text-sage/60" />
        </div>

        {/* Bottom Bar: Copyright & Navigation */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="font-nav text-[0.75rem] tracking-[0.08em] text-charcoal/70">
            © 2026 {business.name}. All rights reserved.
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-nav text-[0.8rem] font-medium tracking-[0.05em] capitalize">
            <Link href="#suites" className="text-charcoal/85 hover:text-sage transition min-h-[44px] flex items-center">
              Rooms & Suites
            </Link>
            <Link href="#gallery" className="text-charcoal/85 hover:text-sage transition min-h-[44px] flex items-center">
              Gallery
            </Link>
            <Link href="#amenities" className="text-charcoal/85 hover:text-sage transition min-h-[44px] flex items-center">
              Amenities
            </Link>
            <Link href="#neighborhood" className="text-charcoal/85 hover:text-sage transition min-h-[44px] flex items-center">
              Location
            </Link>
            <Link href="#enquire" className="text-charcoal/85 hover:text-sage transition min-h-[44px] flex items-center">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-5 font-nav text-[0.75rem] text-charcoal/70">
            <Link href="#" className="hover:text-sage transition min-h-[44px] flex items-center">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-sage transition min-h-[44px] flex items-center">
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* Bottom Logo Image & Designer Credit */}
        <div className="mt-16 mb-6 flex flex-col items-center justify-center text-center">
          <img
            src="/jiana-suites-logo.webp"
            alt="Jiana Suites Logo"
            className="h-20 sm:h-24 md:h-28 w-auto object-contain mx-auto transition-transform hover:scale-105"
          />
          <p className="font-nav text-[0.75rem] tracking-[0.08em] text-charcoal/70 mt-3">
            Designed by{" "}
            <a
              href="https://dishanwebwing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-sage transition"
            >
              DishanWebWing
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
