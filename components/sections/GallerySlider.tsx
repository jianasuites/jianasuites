"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const galleryImages = [
  {
    title: "Panoramic Lakefront Setting",
    subtitle: "Directly opposite the scenic tranquility of Arekere Lake",
    src: "/images/file_000000000a008211a952181c9ea83005_result.webp",
    alt: "Breathtaking aerial view across Arekere Lake opposite Jiana Suites",
  },
  {
    title: "Grand Entrance & Facade",
    subtitle: "Welcoming guests to refined luxury living in South Bangalore",
    src: "/images/DJI_20260909174430_0212_D_result.webp",
    alt: "Exterior illuminated entrance sign and facade of Jiana Suites",
  },
  {
    title: "Boutique Reception & Lobby",
    subtitle: "Warm marble finishes, ambient pendant lighting, and 24/7 concierge",
    src: "/images/_DSC3818_result.webp",
    alt: "Jiana Suites reception desk with amber pendant lights and marble wall",
  },
  {
    title: "Morning by the Window",
    subtitle: "Artisanal coffee with serene water reflections through the room casement",
    src: "/images/_DSC3821_result.webp",
    alt: "Jiana Suites coffee setup overlooking the lake",
  },
  {
    title: "Executive In-Room Comfort",
    subtitle: "Dedicated workstation, ample wardrobe, and thoughtful stay comforts",
    src: "/images/_DSC3976_result.webp",
    alt: "Executive suite work desk, vanity mirror, and seating",
  },
];

export function GallerySlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-hotel-cream py-20 md:py-28 border-t border-charcoal/10" id="gallery">
      <div className="section-shell">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-sage text-[0.7rem] md:text-[0.75rem] font-semibold tracking-[0.2em] uppercase leading-none">
              Gallery · The Lakeside Experience
            </p>
            <h2 className="mt-4 font-display text-[2rem] md:text-[3rem] font-normal leading-[1.15] text-sage">
              A glimpse of life by the water
            </h2>
            <p className="mt-4 font-body text-[1rem] md:text-[1.125rem] font-normal leading-[1.65] text-charcoal max-w-xl">
              From calming dawn vistas across Arekere Lake to warm, welcoming suite interiors, explore the serene moments that define every stay.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Scroll left in gallery"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20 bg-white text-sage transition hover:bg-sage hover:text-white shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              aria-label="Scroll right in gallery"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20 bg-white text-sage transition hover:bg-sage hover:text-white shadow-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div
          ref={sliderRef}
          className="mt-12 flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {galleryImages.map((item, idx) => (
            <article
              key={idx}
              className="snap-start shrink-0 w-[85vw] sm:w-[380px] md:w-[440px] bg-white border border-charcoal/15 rounded-sm overflow-hidden shadow-sm flex flex-col justify-between transition hover:shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden bg-charcoal/5">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-[1.35rem] md:text-[1.5rem] font-normal leading-[1.25] text-sage">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-[0.95rem] leading-[1.55] text-charcoal/90">
                  {item.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
