import Link from "next/link";
import type { ReactNode } from "react";
import { business } from "@/lib/business";

export function PolicyPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <>
      <header className="bg-hotel-cream border-b border-charcoal/15 shadow-sm">
        <div className="section-shell flex h-24 items-center justify-center">
          <Link href="/" aria-label="Jiana Suites — Home" className="flex items-center justify-center py-1">
            <img
              src="/jiana-suites-logo.webp"
              alt="Jiana Suites Logo"
              width={1280}
              height={587}
              className="h-10 sm:h-14 md:h-16 w-auto object-contain"
            />
          </Link>
        </div>
      </header>

      <main className="bg-offwhite py-16 md:py-24">
        <article className="section-shell max-w-3xl">
          <p className="eyebrow text-sage text-[0.7rem] md:text-[0.75rem] font-semibold tracking-[0.2em] uppercase leading-none">
            {business.shortName}
          </p>
          <h1 className="mt-4 font-display text-[2rem] md:text-[3rem] font-normal leading-[1.15] text-sage">
            {title}
          </h1>
          <p className="mt-3 font-nav text-[0.8rem] text-charcoal/70">Last updated: {lastUpdated}</p>

          <div className="mt-10 font-body text-[1rem] md:text-[1.075rem] leading-[1.7] text-charcoal [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-sage [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-[1.5rem] md:[&_h2]:text-[1.75rem] [&_h2]:font-normal [&_h2]:leading-[1.25] [&_h2]:text-sage [&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-[1.2rem] [&_h3]:text-sage [&_li]:mt-2 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
            {children}
          </div>

          <div className="mt-14 pt-6 border-t border-charcoal/15">
            <Link href="/" className="btn-lakeside min-h-[44px] text-[0.75rem] font-bold tracking-[0.14em] uppercase">
              Back to Home
            </Link>
          </div>
        </article>
      </main>

      <footer className="bg-hotel-cream border-t border-charcoal/15">
        <div className="section-shell flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <p className="font-nav text-[0.75rem] tracking-[0.08em] text-charcoal/70">
            © 2026 {business.name}. All rights reserved.
          </p>
          <nav className="flex items-center gap-5 font-nav text-[0.75rem] text-charcoal/70">
            <Link href="/privacy-policy" className="hover:text-sage transition min-h-[44px] flex items-center">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="hover:text-sage transition min-h-[44px] flex items-center">
              Cookie Policy
            </Link>
            <Link href="/terms" className="hover:text-sage transition min-h-[44px] flex items-center">
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}

export function PolicyContact() {
  return (
    <address className="not-italic">
      <p>
        {business.name}
        <br />
        {business.address}
        <br />
        Phone: <a href={`tel:${business.phone.replace(/\s+/g, "")}`}>{business.phone}</a>
        <br />
        Email: <a href={`mailto:${business.email}`}>{business.email}</a>
      </p>
    </address>
  );
}
