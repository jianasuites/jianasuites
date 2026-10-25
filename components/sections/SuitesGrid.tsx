"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { business } from "@/lib/business";
import { landingLinks } from "@/lib/landing-links";
import { rooms, type Room } from "@/lib/rooms";

export function SuitesGrid() {
  return (
    <section
      className="bg-hotel-cream py-20 md:py-28"
      id="suites"
    >
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="eyebrow text-sage text-[0.7rem] md:text-[0.75rem] font-semibold tracking-[0.2em] uppercase leading-none">
              Rooms & Suites
            </p>

            <h2 className="mt-4 font-display text-[2rem] md:text-[3rem] font-normal leading-[1.15] text-sage">
              Premium Stays with a Distinctive Charm
            </h2>
          </div>

          <p className="font-body text-[1rem] md:text-[1.125rem] font-normal leading-[1.65] text-charcoal">
            Choose from lake-view and partial lake-view rooms with soft linens, 24-hour hot water, fast Wi-Fi, and amenities tailored for business travelers, medical visitors, families, and extended stays in South Bangalore.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={landingLinks.rooms.href}
            className="font-nav text-[0.85rem] font-semibold text-sage underline underline-offset-4 hover:text-charcoal transition inline-flex min-h-[44px] items-center"
          >
            Compare all rooms and tariff
          </Link>
        </div>
      </div>
    </section>
  );
}

// `text` replaces the default room description, so landing pages can explain why a room suits that visit.
export function RoomCard({ room, text }: { room: Room; text?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setCurrentIndex((prev) =>
      prev === 0 ? room.images.length - 1 : prev - 1
    );
  };

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setCurrentIndex((prev) =>
      prev === room.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    // Only swipe if horizontal movement dominates vertical scroll
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
      if (diffX > 0) {
        setCurrentIndex((prev) =>
          prev === room.images.length - 1 ? 0 : prev + 1
        );
      } else {
        setCurrentIndex((prev) =>
          prev === 0 ? room.images.length - 1 : prev - 1
        );
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  const facts = [
    { label: "Bed", value: room.bed.label },
    { label: "Size", value: room.sizeSqFt ? `${room.sizeSqFt} sq ft` : undefined },
    { label: "View", value: room.view },
    { label: "Max guests", value: room.maxGuests?.toString() },
  ].filter((fact) => fact.value);
  const image = room.images[currentIndex];

  return (
    <article id={room.id} className="bg-white border border-charcoal/10 shadow-sm flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-md">

      {/* Image Slider */}
      <div
        className="relative aspect-[4/3] overflow-hidden bg-charcoal/5 group select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={image.src}
          alt={`${room.name} at Jiana Suites${room.view ? " overlooking Arekere Lake" : ""}, JP Nagar Bangalore`}
          width={image.width}
          height={image.height}
          loading="lazy"
          className="h-full w-full object-cover transition-opacity duration-300"
        />

        {/* Navigation Arrows */}
        {room.images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              aria-label="Previous photo"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 h-11 w-11 min-h-[44px] min-w-[44px] rounded-full bg-white/90 hover:bg-white text-charcoal shadow-md flex items-center justify-center transition-transform hover:scale-105 opacity-90 group-hover:opacity-100 z-10 focus:outline-none"
            >
              <ChevronLeft
                size={18}
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next photo"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 h-11 w-11 min-h-[44px] min-w-[44px] rounded-full bg-white/90 hover:bg-white text-charcoal shadow-md flex items-center justify-center transition-transform hover:scale-105 opacity-90 group-hover:opacity-100 z-10 focus:outline-none"
            >
              <ChevronRight
                size={18}
                aria-hidden="true"
              />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1.5 z-10">
              {room.images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Go to photo ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${idx === currentIndex
                      ? "w-5 bg-white shadow-sm"
                      : "w-1.5 bg-white/60"
                    }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Room Details */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-display text-[1.35rem] md:text-[1.65rem] font-normal leading-[1.25] text-sage">
            {room.name}
          </h3>

          <p className="mt-3 font-body text-[1rem] leading-[1.65] text-charcoal">
            {text ?? room.description}
          </p>

          <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 font-nav text-[0.8rem] text-charcoal">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-sage/80">
                  {fact.label}
                </dt>
                <dd className="mt-1">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Booking */}
        <div className="mt-8 pt-5 border-t border-charcoal/10">
          {room.priceFrom ? (
            <p className="font-display text-[1.35rem] font-normal text-sage">
              From ₹{room.priceFrom.toLocaleString("en-IN")} / night
            </p>
          ) : null}

          <a
            href={business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lakeside min-h-[44px] w-full mt-4 text-[0.75rem] font-bold tracking-[0.14em] uppercase py-3 inline-flex items-center justify-center"
          >
            Book Now
          </a>
        </div>
      </div>
    </article>
  );
}