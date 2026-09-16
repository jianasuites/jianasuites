"use client";

import { Calendar, Play, Users } from "lucide-react";
import { type FormEvent, type ReactNode } from "react";
import { whatsappHref } from "@/lib/whatsapp";
import { WaveDivider } from "@/components/ui/WaveDivider";

export function Hero() {
  const handleAvailabilitySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const checkIn = String(formData.get("checkIn") || "");
    const checkOut = String(formData.get("checkOut") || "");
    const adults = String(formData.get("adults") || "2");
    const children = String(formData.get("children") || "0");
    const message = `Hi, I'd like to check availability at Jiana Suites for Check-In: ${checkIn}, Check-Out: ${checkOut}, Adults: ${adults}, Children: ${children}.`;

    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="hero" className="relative overflow-visible bg-sage text-white pt-24 md:pt-28">
      {/* Hero Visual Banner */}
      <div className="relative min-h-[72vh] md:min-h-[78vh] flex flex-col items-center justify-center overflow-hidden pb-24 md:pb-28">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />

        {/* Hero Center Content */}
        <div className="section-shell relative z-20 flex flex-col items-center justify-center text-center px-4 pt-12">
          <p className="eyebrow text-offwhite/90 text-[0.7rem] md:text-[0.75rem] font-semibold tracking-[0.2em] uppercase leading-none mb-4">
            This is South Bangalore
          </p>

          <h1 className="font-display text-[2.5rem] md:text-[4rem] font-normal leading-[1.12] tracking-[-0.01em] max-w-4xl text-balance text-white">
            The Quintessential Lakefront Hotel
          </h1>

          <p className="eyebrow text-offwhite/80 text-[0.7rem] md:text-[0.75rem] font-semibold tracking-[0.2em] uppercase leading-none mt-5">
            This is Jiana Suites
          </p>

          <div className="mt-7">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full bg-white/95 hover:bg-white text-charcoal px-6 py-3 min-h-[44px] text-[0.75rem] font-nav font-bold tracking-[0.14em] uppercase transition shadow-md"
            >
              Explore <Play size={10} className="fill-charcoal" />
            </a>
          </div>
        </div>
      </div>

      {/* Booking Bar Straddling the Boundary between Hero & Next Section */}
      <div className="relative z-30 -mt-16 md:-mt-20 px-3 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-sm border border-white/90 p-2 sm:p-2.5 bg-white/10 backdrop-blur-md shadow-2xl">
          <form
            onSubmit={handleAvailabilitySubmit}
            className="bg-hotel-cream p-4 sm:p-5 text-charcoal border border-charcoal/15"
            aria-label="Check availability"
          >
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.3fr_0.8fr_0.8fr_auto] lg:items-end">
              <BookingField label="Check-In" icon={<Calendar size={14} />}>
                <input
                  type="date"
                  name="checkIn"
                  required
                  className="h-11 min-h-[44px] w-full bg-white px-3 font-nav text-xs text-black border border-charcoal/20 focus:outline-none focus:border-sage"
                />
              </BookingField>

              <BookingField label="Check-Out" icon={<Calendar size={14} />}>
                <input
                  type="date"
                  name="checkOut"
                  required
                  className="h-11 min-h-[44px] w-full bg-white px-3 font-nav text-xs text-black border border-charcoal/20 focus:outline-none focus:border-sage"
                />
              </BookingField>

              <BookingField label="Adults" icon={<Users size={14} />}>
                <input
                  type="number"
                  name="adults"
                  min="1"
                  defaultValue="2"
                  className="h-11 min-h-[44px] w-full bg-white px-3 font-nav text-xs text-black border border-charcoal/20 focus:outline-none focus:border-sage"
                />
              </BookingField>

              <BookingField label="Children" icon={<Users size={14} />}>
                <input
                  type="number"
                  name="children"
                  min="0"
                  defaultValue="0"
                  className="h-11 min-h-[44px] w-full bg-white px-3 font-nav text-xs text-black border border-charcoal/20 focus:outline-none focus:border-sage"
                />
              </BookingField>

              <button
                type="submit"
                className="btn-lakeside h-11 min-h-[44px] w-full lg:w-auto px-7 text-[0.75rem] font-bold tracking-[0.14em] uppercase"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Centered Decorative Wave Divider directly beneath the straddling bar */}
        <div className="flex justify-center -mb-5 pt-3">
          <WaveDivider className="text-offwhite" />
        </div>
      </div>
    </section>
  );
}

function BookingField({
  label,
  icon,
  children,
}: {
  label: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <label className="block text-left">
      <span className="flex items-center gap-1.5 font-nav text-[0.7rem] sm:text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-sage mb-1.5">
        <span className="text-sage/75">{icon}</span>
        {label}
      </span>
      {children}
    </label>
  );
}
