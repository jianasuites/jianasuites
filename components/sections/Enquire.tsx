import { Phone } from "lucide-react";

export function Enquire() {
  return (
    <section className="bg-hotel-cream py-20 md:py-28 border-t border-charcoal/10" id="enquire">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-sage text-[0.7rem] md:text-[0.75rem] font-semibold tracking-[0.2em] uppercase leading-none">
            Enquire
          </p>
          <h2 className="mt-4 font-display text-[2rem] md:text-[3rem] font-normal leading-[1.15] text-sage">
            Plan Your Stay With Us
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body text-[1rem] md:text-[1.125rem] font-normal leading-[1.65] text-charcoal">
            Share your travel dates and stay preferences with us, and our team will help you find the right room at the best available rate.

            Whether you’re visiting for business, a short stay, or an extended stay, we’re here to make your booking simple and your stay comfortable.

            No booking fee for direct enquiries.          </p>
          <div className="mt-9">
            <a
              href="tel:+919900075360"
              className="btn-lakeside min-h-[44px] text-[0.75rem] font-bold tracking-[0.14em] uppercase px-8 py-3.5 shadow-md inline-flex items-center justify-center gap-2"
            >
              <Phone size={16} aria-hidden="true" />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
