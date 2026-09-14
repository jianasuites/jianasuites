import { Car, HeartHandshake, ShieldCheck, Wifi } from "lucide-react";

const features = [
  {
    icon: Wifi,
    label: "Connect",
    title: "Work without friction",
    copy: "Complimentary high-speed Wi-Fi throughout the property, quiet rooms, and easy access to tech parks keep your workflow smooth.",
  },
  {
    icon: ShieldCheck,
    label: "Rest",
    title: "Thoughtful comfort",
    copy: "Contemporary interiors, 24-hour hot water, reliable power backup, and quiet lakefront surroundings ensure undisturbed rest.",
  },
  {
    icon: Car,
    label: "Arrive",
    title: "Central connectivity",
    copy: "Dedicated on-site parking with direct connectivity to Bannerghatta Road, JP Nagar metro lines, hospitals, and shopping centers.",
  },
  {
    icon: HeartHandshake,
    label: "Care",
    title: "Genuine hospitality",
    copy: "Warm, attentive hotel staff ready to assist with daily needs, making Jiana Suites feel like home for families and long stays.",
  },
];

export function StayFeatures() {
  return (
    <section className="bg-offwhite py-20 md:py-28 border-t border-charcoal/10" id="stay">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <div>
            <p className="eyebrow text-sage">The Stay</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-sage">
              Live, work, rest, and reconnect.
            </h2>
          </div>
          <p className="font-display text-base sm:text-lg leading-relaxed text-charcoal">
            Jiana Suites brings the soothing calm of Arekere Lake together with practical modern conveniences designed for travelers who value peace, location, and attentive care.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="bg-white border border-charcoal/10 p-7 flex flex-col justify-between shadow-sm transition hover:shadow-md"
              >
                <div>
                  <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage text-white">
                    <Icon size={19} aria-hidden="true" />
                  </div>
                  <p className="eyebrow text-sage/75">{feature.label}</p>
                  <h3 className="mt-2 font-display text-2xl font-normal text-sage">
                    {feature.title}
                  </h3>
                  <p className="mt-3 font-display text-sm leading-relaxed text-charcoal">
                    {feature.copy}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
