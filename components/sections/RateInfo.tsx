import { whatsappHref } from "@/lib/whatsapp";

const tiers = [
  {
    title: "Corporate Stays",
    copy: "Top choice for business travelers and company guests: quiet rooms, ergonomic work desks, high-speed Wi-Fi, ample parking, and rapid access to Accenture, WeWork JP Nagar, Brigade Millennium, and Bannerghatta Road.",
  },
  {
    title: "Medical Visits",
    copy: "Comfortable medical visitor accommodation just an 8-minute drive from Apollo Hospital and Fortis Hospital. A tranquil lakefront retreat with lift access, power backup, and caring 24-hour support.",
  },
  {
    title: "Extended Stays",
    copy: "Tailored long-stay and monthly rental hotel rates in JP Nagar 7th Phase for guests on extended assignments or personal visits, complete with daily housekeeping and dedicated assistance.",
  },
];

export function RateInfo() {
  return (
    <section className="bg-hotel-cream py-20 md:py-28 border-t border-charcoal/10" id="stay-types">
      <div className="section-shell">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow text-sage text-[0.7rem] md:text-[0.75rem] font-semibold tracking-[0.2em] uppercase leading-none">
            Stay Types
          </p>
          <h2 className="mt-4 font-display text-[2rem] md:text-[3rem] font-normal leading-[1.15] text-sage">
            Made for short breaks, longer stays, and business trips.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className="bg-white border border-charcoal/10 p-7 sm:p-8 flex flex-col justify-between shadow-sm"
            >
              <div>
                <h3 className="font-display text-[1.35rem] md:text-[1.65rem] font-normal leading-[1.25] text-sage">
                  {tier.title}
                </h3>
                <p className="mt-4 font-body text-[1rem] leading-[1.65] text-charcoal">
                  {tier.copy}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-charcoal/10">
                <a
                  href={whatsappHref(`Hi, I'd like to ask about ${tier.title.toLowerCase()} at Jiana Suites.`)}
                  className="btn-lakeside min-h-[44px] w-full text-[0.75rem] font-bold tracking-[0.14em] uppercase inline-flex items-center justify-center"
                >
                  Ask About This Stay
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
