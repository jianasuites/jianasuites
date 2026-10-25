import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "lucide-react";
import { CookieConsent } from "@/components/sections/CookieConsent";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { RoomCard } from "@/components/sections/SuitesGrid";
import { DistanceTable } from "@/components/ui/DistanceTable";
import { JsonLd } from "@/components/ui/JsonLd";
import { MobileStickyCta } from "@/components/ui/MobileStickyCta";
import { business } from "@/lib/business";
import { faqPageSchema } from "@/lib/faqs";
import type { LandingPageContent } from "@/lib/landing/types";
import { landingLinks } from "@/lib/landing-links";
import { rooms } from "@/lib/rooms";
import { siteUrl } from "@/lib/site";
import { whatsappHref } from "@/lib/whatsapp";

const ogImage = {
  url: "/images/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Jiana Suites hotel facade, JP Nagar 7th Phase, Bangalore",
};

export function landingMetadata(page: LandingPageContent): Metadata {
  const url = `${siteUrl}${landingLinks[page.key].href}`;
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.ogTitle,
      description: page.ogDescription,
      url,
      siteName: "Jiana Suites",
      images: [ogImage],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.ogTitle,
      description: page.ogDescription,
      images: [{ url: ogImage.url, alt: ogImage.alt }],
    },
  };
}

const eyebrowClass = "eyebrow text-[0.7rem] md:text-[0.75rem] font-semibold tracking-[0.2em] uppercase leading-none";
const h2Class = "font-display text-[2rem] md:text-[2.75rem] font-normal leading-[1.15]";
const bodyClass = "font-body text-[1rem] md:text-[1.075rem] leading-[1.7]";

export function LandingPage({ page }: { page: LandingPageContent }) {
  const link = landingLinks[page.key];
  const picks = page.rooms.picks.map((pick) => {
    const room = rooms.find((r) => r.id === pick.id);
    if (!room) throw new Error(`Unknown room id "${pick.id}" on ${link.href}`);
    return { ...pick, room };
  });
  const hasSize = picks.some(({ room }) => room.sizeSqFt);
  const hasGuests = picks.some(({ room }) => room.maxGuests);
  const hasPrice = picks.some(({ room }) => room.priceFrom);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: link.label, item: `${siteUrl}${link.href}` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema(page.faqs)} />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-sage text-offwhite pt-24 md:pt-28">
          <div className="section-shell grid gap-10 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <nav aria-label="Breadcrumb" className="font-nav text-[0.75rem] text-offwhite/75">
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link href="/" className="underline underline-offset-2 hover:text-offwhite transition">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page">{link.label}</li>
                </ol>
              </nav>
              <p className={`${eyebrowClass} mt-8 text-offwhite/75`}>{page.eyebrow}</p>
              <h1 className="mt-4 font-display text-[2.1rem] sm:text-[2.6rem] md:text-[3.25rem] font-normal leading-[1.12] text-white text-balance">
                {page.h1}
              </h1>
              <p className="mt-6 max-w-xl font-body text-[1.05rem] md:text-[1.2rem] leading-[1.65] text-offwhite/90">
                {page.lead}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={business.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lakeside-white min-h-[44px] text-[0.75rem] font-bold tracking-[0.14em] uppercase px-7 py-3"
                >
                  Book Now
                </a>
                <a
                  href={whatsappHref(`Hi, I'd like to ask about a stay at Jiana Suites (${link.label}).`)}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/70 px-6 py-3 font-nav text-[0.75rem] font-bold uppercase tracking-[0.14em] text-white hover:bg-white/10 transition"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-sm border border-offwhite/15 shadow-xl">
              <img
                src={page.heroImage.src}
                alt={page.heroImage.alt}
                width={page.heroImage.width}
                height={page.heroImage.height}
                fetchPriority="high"
                className="h-[260px] sm:h-[360px] lg:h-[440px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-hotel-cream py-16 md:py-24">
          <div className="section-shell max-w-3xl">
            <h2 className={`${h2Class} text-sage`}>{page.intro.heading}</h2>
            <div className={`mt-6 space-y-5 ${bodyClass} text-charcoal`}>
              {page.intro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Why stay here */}
        <section className="bg-offwhite py-16 md:py-24 border-t border-charcoal/10">
          <div className="section-shell">
            <h2 className={`${h2Class} max-w-3xl text-sage`}>{page.why.heading}</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {page.why.points.map((point) => (
                <div key={point.title} className="bg-white border border-charcoal/10 p-6 sm:p-7 shadow-sm">
                  <h3 className="font-display text-[1.35rem] md:text-[1.5rem] font-normal leading-[1.25] text-sage">
                    {point.title}
                  </h3>
                  <p className={`mt-3 ${bodyClass} text-charcoal`}>{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rooms */}
        <section className="bg-hotel-cream py-16 md:py-24 border-t border-charcoal/10" id="rooms">
          <div className="section-shell">
            <p className={`${eyebrowClass} text-sage`}>Rooms</p>
            <h2 className={`mt-4 ${h2Class} max-w-3xl text-sage`}>{page.rooms.heading}</h2>
            {page.rooms.text ? (
              <p className={`mt-5 max-w-2xl ${bodyClass} text-charcoal`}>{page.rooms.text}</p>
            ) : null}

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {picks.map(({ room, text }) => (
                <RoomCard key={room.id} room={room} text={text} />
              ))}
            </div>

            {page.rooms.comparison ? (
              // `relative` keeps the sr-only labels inside the scroll box; without it they widen the page on mobile.
              <div className="relative mt-14 overflow-x-auto">
                <table className="w-full min-w-[640px] border border-charcoal/10 bg-white text-left font-body text-[0.95rem] text-charcoal">
                  <caption className="sr-only">Comparison of room types at Jiana Suites</caption>
                  <thead className="bg-offwhite font-nav text-[0.7rem] uppercase tracking-[0.18em] text-sage/80">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold">Room</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Bed</th>
                      <th scope="col" className="px-4 py-3 font-semibold">View</th>
                      {hasSize ? <th scope="col" className="px-4 py-3 font-semibold">Size</th> : null}
                      {hasGuests ? <th scope="col" className="px-4 py-3 font-semibold">Max guests</th> : null}
                      {hasPrice ? <th scope="col" className="px-4 py-3 font-semibold">From</th> : null}
                      <th scope="col" className="px-4 py-3 font-semibold">Suits</th>
                      <th scope="col" className="px-4 py-3">
                        <span className="sr-only">Book</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {picks.map(({ room, suits }) => (
                      <tr key={room.id} className="border-t border-charcoal/10 align-top">
                        <th scope="row" className="px-4 py-3.5 font-display font-normal text-sage">
                          <a href={`#${room.id}`} className="hover:underline underline-offset-2">
                            {room.name}
                          </a>
                        </th>
                        <td className="px-4 py-3.5">{room.bed.label}</td>
                        {/* Left empty when a room's view is not confirmed in lib/rooms.ts. */}
                        <td className="px-4 py-3.5">{room.view}</td>
                        {hasSize ? <td className="px-4 py-3.5">{room.sizeSqFt ? `${room.sizeSqFt} sq ft` : null}</td> : null}
                        {hasGuests ? <td className="px-4 py-3.5">{room.maxGuests}</td> : null}
                        {hasPrice ? (
                          <td className="px-4 py-3.5">
                            {room.priceFrom ? `₹${room.priceFrom.toLocaleString("en-IN")} / night` : null}
                          </td>
                        ) : null}
                        <td className="px-4 py-3.5">{suits}</td>
                        <td className="px-4 py-3.5 text-right">
                          <a
                            href={business.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-lakeside min-h-[40px] whitespace-nowrap px-5 py-2 text-[0.7rem]"
                          >
                            Book Now
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>
        </section>

        {page.extra ? (
          <section className="bg-offwhite py-16 md:py-24 border-t border-charcoal/10">
            <div className="section-shell max-w-3xl">
              <h2 className={`${h2Class} text-sage`}>{page.extra.heading}</h2>
              {page.extra.paragraphs?.length ? (
                <div className={`mt-6 space-y-5 ${bodyClass} text-charcoal`}>
                  {page.extra.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
              {page.extra.bullets?.length ? (
                <ul className={`mt-6 list-disc space-y-3 pl-6 ${bodyClass} text-charcoal marker:text-sage`}>
                  {page.extra.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>
        ) : null}

        {/* How to reach + location */}
        <section className="bg-sage text-offwhite py-16 md:py-24" id="location">
          <div className="section-shell grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className={`${eyebrowClass} text-offwhite/75`}>Getting here</p>
              <h2 className={`mt-4 ${h2Class} text-offwhite`}>How to reach Jiana Suites</h2>
              <div className="mt-8 space-y-7">
                {[
                  { heading: "From Majestic (KSR station and bus stand)", text: page.reach.majestic },
                  { heading: "From Kempegowda International Airport", text: page.reach.airport },
                  { heading: "From Bannerghatta Road", text: page.reach.bannerghatta },
                ].map((route) => (
                  <div key={route.heading} className="border-t border-offwhite/20 pt-5">
                    <h3 className="font-display text-[1.25rem] md:text-[1.4rem] font-normal leading-[1.3] text-offwhite">
                      {route.heading}
                    </h3>
                    <p className={`mt-2 ${bodyClass} text-offwhite/90`}>{route.text}</p>
                  </div>
                ))}
              </div>
              <DistanceTable className="mt-10" />
            </div>

            <div>
              <div className="overflow-hidden rounded-sm border border-offwhite/20 shadow-2xl">
                <iframe
                  title="Google Map to Jiana Suites - Luxury Living"
                  src={business.mapEmbedUrl}
                  className="aspect-[5/4] w-full border-0 bg-offwhite"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-6 border border-charcoal/15 bg-hotel-cream p-5 sm:p-7 text-sage shadow-2xl">
                <address className="not-italic">
                  <p className="font-nav text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sage/80 leading-none">
                    Address
                  </p>
                  <p className="mt-2.5 font-display text-[1.25rem] leading-snug text-sage">{business.address}</p>
                  <p className="mt-3 font-nav text-[0.85rem] text-charcoal">
                    <a href={`tel:${business.phone.replace(/\s+/g, "")}`} className="hover:text-sage transition">
                      {business.phone}
                    </a>
                  </p>
                </address>
                <a
                  href={business.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lakeside min-h-[44px] mt-5 w-full text-[0.75rem] font-bold tracking-[0.14em] uppercase inline-flex items-center justify-center gap-2"
                >
                  <Navigation size={14} aria-hidden="true" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>

        <FaqSection faqs={page.faqs} heading={page.faqHeading} description={page.faqDescription} />

        {/* Related pages */}
        <section className="bg-hotel-cream py-16 md:py-20 border-t border-charcoal/10">
          <div className="section-shell">
            <p className={`${eyebrowClass} text-sage`}>Keep exploring</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {page.related.map((related) => (
                <Link
                  key={related.key}
                  href={landingLinks[related.key].href}
                  className="group block bg-white border border-charcoal/10 p-6 sm:p-7 shadow-sm transition hover:shadow-md"
                >
                  <h2 className="font-display text-[1.35rem] md:text-[1.6rem] font-normal leading-[1.25] text-sage group-hover:underline underline-offset-4">
                    {landingLinks[related.key].label}
                  </h2>
                  <p className={`mt-3 ${bodyClass} text-charcoal`}>{related.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
      <MobileStickyCta />
    </>
  );
}
