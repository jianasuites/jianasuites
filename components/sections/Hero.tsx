"use client";

import { Calendar, Play, Users } from "lucide-react";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { CheckAvailabilityModal, type BookingDetails } from "@/components/ui/CheckAvailabilityModal";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({});

  // Auto-open reservation modal once per session after 6 seconds
  useEffect(() => {
    try {
      const alreadyShown = sessionStorage.getItem("reservationPopupShown");
      if (alreadyShown) return;

      const timer = setTimeout(() => {
        setIsModalOpen(true);
        try {
          sessionStorage.setItem("reservationPopupShown", "true");
        } catch {
          // Ignore storage quota/permission error
        }
      }, 6000);

      return () => clearTimeout(timer);
    } catch {
      // Ignore if sessionStorage is not accessible
    }
  }, []);

  const handleAvailabilitySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const checkIn = String(formData.get("checkIn") || "");
    const checkOut = String(formData.get("checkOut") || "");
    const adults = String(formData.get("adults") || "2");
    const children = String(formData.get("children") || "0");

    setBookingDetails({ checkIn, checkOut, adults, children });
    setIsModalOpen(true);

    try {
      sessionStorage.setItem("reservationPopupShown", "true");
    } catch {
      // Ignore
    }
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

          <h1 className="font-display text-[1.85rem] xs:text-[2.2rem] sm:text-[3rem] md:text-[4rem] font-normal leading-[1.14] tracking-[-0.01em] max-w-4xl text-balance text-white">
            Jiana Suites
            <br />
            Luxury Lakefront Hotel
          </h1>

          <p className="eyebrow text-offwhite/85 text-[0.65rem] xs:text-[0.7rem] md:text-[0.75rem] font-semibold tracking-[0.16em] sm:tracking-[0.2em] uppercase leading-none mt-4 sm:mt-5 max-w-lg">
            Top-Rated 3-Star Hotel Opposite Arekere Lake · JP Nagar 7th Phase
          </p>

          <div className="mt-6 sm:mt-7">
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
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.3fr_0.85fr_0.85fr_auto] lg:items-end">
              <BookingField label="Check-In" icon={<Calendar size={14} />}>
                <input
                  type="date"
                  name="checkIn"
                  required
                  className="h-11 min-h-[44px] w-full bg-white px-3 font-nav text-xs text-black border border-charcoal/20 focus:outline-none focus:border-sage rounded-none appearance-none cursor-pointer"
                />
              </BookingField>

              <BookingField label="Check-Out" icon={<Calendar size={14} />}>
                <input
                  type="date"
                  name="checkOut"
                  required
                  className="h-11 min-h-[44px] w-full bg-white px-3 font-nav text-xs text-black border border-charcoal/20 focus:outline-none focus:border-sage rounded-none appearance-none cursor-pointer"
                />
              </BookingField>

              <BookingField label="Adults" icon={<Users size={14} />}>
                <StepperField name="adults" min={1} defaultValue={2} />
              </BookingField>

              <BookingField label="Children" icon={<Users size={14} />}>
                <StepperField name="children" min={0} defaultValue={0} />
              </BookingField>

              <button
                type="submit"
                className="btn-lakeside h-11 min-h-[44px] w-full lg:w-auto px-7 text-[0.75rem] font-bold tracking-[0.14em] uppercase"
              >
                Check Availability
              </button>
            </div>
          </form>
        </div>

        {/* Centered Decorative Wave Divider directly beneath the straddling bar */}
        <div className="flex justify-center -mb-5 pt-3">
          <WaveDivider className="text-offwhite" />
        </div>
      </div>

      <CheckAvailabilityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bookingDetails={bookingDetails}
      />
    </section>
  );
}

function StepperField({
  name,
  min = 0,
  defaultValue = 1,
}: {
  name: string;
  min?: number;
  defaultValue?: number;
}) {
  const [value, setValue] = useState(defaultValue);

  return (
    <div className="flex h-11 min-h-[44px] w-full items-center bg-white border border-charcoal/20">
      <button
        type="button"
        onClick={() => setValue((prev) => Math.max(min, prev - 1))}
        aria-label={`Decrease ${name}`}
        className="h-full w-11 min-h-[44px] min-w-[44px] flex items-center justify-center text-charcoal hover:bg-charcoal/5 active:bg-charcoal/10 font-bold text-base transition-colors select-none focus:outline-none"
      >
        −
      </button>
      <input
        type="number"
        name={name}
        min={min}
        value={value}
        onChange={(e) => setValue(Math.max(min, parseInt(e.target.value, 10) || min))}
        className="h-full flex-1 w-full bg-transparent text-center font-nav text-xs font-semibold text-black focus:outline-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
      />
      <button
        type="button"
        onClick={() => setValue((prev) => prev + 1)}
        aria-label={`Increase ${name}`}
        className="h-full w-11 min-h-[44px] min-w-[44px] flex items-center justify-center text-charcoal hover:bg-charcoal/5 active:bg-charcoal/10 font-bold text-base transition-colors select-none focus:outline-none"
      >
        +
      </button>
    </div>
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
