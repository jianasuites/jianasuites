"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { whatsappHref } from "@/lib/whatsapp";

const suites = [
  {
    name: "Premium King Lake View Room",
    images: [
      "/images/file_000000004ccc8211b7a248dc7c6ebccf_result.webp",
    ],
    description:
      "A calm, spacious king-bed room with direct panoramic views of Arekere Lake, refined contemporary finishes, and peaceful natural morning light.",
    rate: "Contact for best rates",
    message:
      "Hi, I'm interested in the Premium King Lake View Room at Jiana Suites. Could you share availability and rates?",
  },
  {
    name: "Premium King Partial Lake View Room",
    images: [
      "/images/_DSC3922_result.webp",
    ],
    description:
      "A comfortable king-bed sanctuary featuring a partial lake outlook, plush bedding, and an uncluttered setting ideal for both corporate and leisure stays.",
    rate: "Contact for best rates",
    message:
      "Hi, I'm interested in the Premium King Partial Lake View Room at Jiana Suites. Could you share availability and rates?",
  },
  {
    name: "Premium Twin Lake View Room",
    images: [
      "/images/_DSC3925_result.webp",
    ],
    description:
      "Two premium single beds overlooking the serene lake, tailored for colleagues, friends, or traveling companions seeking individual sleeping comfort.",
    rate: "Contact for best rates",
    message:
      "Hi, I'm interested in the Premium Twin Lake View Room at Jiana Suites. Could you share availability and rates?",
  },
  {
    name: "Deluxe Twin Partial Lake View Room",
    images: [
      "/images/_DSC3963_result.webp",
    ],
    description:
      "Thoughtfully appointed twin room with partial lake views, smart workspace amenities, and an easy layout for short or extended stays.",
    rate: "Contact for best rates",
    message:
      "Hi, I'm interested in the Deluxe Twin Partial Lake View Room at Jiana Suites. Could you share availability and rates?",
  },
  {
    name: "Deluxe Queen Room",
    images: [
      "/images/_DSC3894_result.webp",
    ],
    description:
      "A quiet double room crafted for restful sleep, complete with modern climate control, high-speed Wi-Fi, and personalized room service.",
    rate: "Contact for best rates",
    message:
      "Hi, I'm interested in the Deluxe Queen Room at Jiana Suites. Could you share availability and rates?",
  },
  {
    name: "Deluxe Queen Lake View Room",
    images: [
      "/images/_DSC3831_result.webp",
    ],
    description:
      "Deluxe comfort combined with restful Arekere Lake vistas, offering guests an elevated stay experience at an exceptional value.",
    rate: "Contact for best rates",
    message:
      "Hi, I'm interested in the Deluxe Queen Lake View Room at Jiana Suites. Could you share availability and rates?",
  },
];

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
            Each of our rooms pairs calming lakefront views with soft linens,
            modern bathroom appointments, and everyday amenities tailored for
            business guests, medical visitors, families, and extended stays.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {suites.map((suite) => (
            <RoomCard key={suite.name} suite={suite} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RoomCard({ suite }: { suite: (typeof suites)[number] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setCurrentIndex((prev) =>
      prev === 0 ? suite.images.length - 1 : prev - 1
    );
  };

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setCurrentIndex((prev) =>
      prev === suite.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 40) {
      setCurrentIndex((prev) =>
        prev === suite.images.length - 1 ? 0 : prev + 1
      );
    } else if (diff < -40) {
      setCurrentIndex((prev) =>
        prev === 0 ? suite.images.length - 1 : prev - 1
      );
    }

    touchStartX.current = null;
  };

  return (
    <article className="bg-white border border-charcoal/10 shadow-sm flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-md">

      {/* Image Slider */}
      <div
        className="relative aspect-[4/3] overflow-hidden bg-charcoal/5 group select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={suite.images[currentIndex]}
          alt={`${suite.name} at Jiana Suites overlooking Arekere Lake, JP Nagar Bangalore`}
          className="h-full w-full object-cover transition-opacity duration-300"
        />

        {/* Navigation Arrows */}
        {suite.images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              aria-label="Previous photo"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 h-8 w-8 min-h-[36px] min-w-[36px] rounded-full bg-white/90 hover:bg-white text-charcoal shadow-md flex items-center justify-center transition-transform hover:scale-105 opacity-90 group-hover:opacity-100 z-10 focus:outline-none"
            >
              <ChevronLeft
                size={16}
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next photo"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 h-8 w-8 min-h-[36px] min-w-[36px] rounded-full bg-white/90 hover:bg-white text-charcoal shadow-md flex items-center justify-center transition-transform hover:scale-105 opacity-90 group-hover:opacity-100 z-10 focus:outline-none"
            >
              <ChevronRight
                size={16}
                aria-hidden="true"
              />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1.5 z-10">
              {suite.images.map((_, idx) => (
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
            {suite.name}
          </h3>

          <p className="mt-3 font-body text-[1rem] leading-[1.65] text-charcoal">
            {suite.description}
          </p>
        </div>

        {/* Booking */}
        <div className="mt-8 pt-5 border-t border-charcoal/10">
          <p className="font-display text-[1.35rem] font-normal text-sage">
            {suite.rate}
          </p>

          <a
            href={whatsappHref(suite.message)}
            className="btn-lakeside min-h-[44px] w-full mt-4 text-[0.75rem] font-bold tracking-[0.14em] uppercase py-3 inline-flex items-center justify-center"
          >
            Book Now
          </a>
        </div>
      </div>
    </article>
  );
}