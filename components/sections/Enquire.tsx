import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/whatsapp";

export function Enquire() {
  return (
    <section className="bg-hotel-cream py-20 md:py-28 border-t border-charcoal/10" id="enquire">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-sage text-[0.7rem] md:text-[0.75rem] font-semibold tracking-[0.2em] uppercase leading-none">
            Enquire
          </p>
          <h2 className="mt-4 font-display text-[2rem] md:text-[3rem] font-normal leading-[1.15] text-sage">
            Tell us your dates. We will help plan your stay.
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body text-[1rem] md:text-[1.125rem] font-normal leading-[1.65] text-charcoal">
            No booking fee to enquire. Share your travel dates and stay requirements on WhatsApp, and our concierge team will respond with availability, best rates, and the ideal room option.
          </p>
          <div className="mt-9">
            <a
              href={whatsappHref("Hi, I'd like to check room availability and rates at Jiana Suites.")}
              className="btn-lakeside min-h-[44px] text-[0.75rem] font-bold tracking-[0.14em] uppercase px-8 py-3.5 shadow-md inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={17} aria-hidden="true" />
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
