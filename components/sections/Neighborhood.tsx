import { Mail, MapPin, Navigation, Phone } from "lucide-react";
import { business } from "@/lib/business";

// Distances and drive times are from Google Maps. A row is only listed once its values are confirmed.
// TODO(owner): add km and minutes by car for Brigade Millennium, Apollo Hospital (Bannerghatta Rd),
// Fortis Hospital (Bannerghatta Rd), Jayadeva Hospital, IIM Bangalore, Hulimavu metro, IIMB metro,
// Kempegowda International Airport and Majestic (KSR station).
const distances: { place: string; distance: string; driveTime?: string }[] = [
  { place: "Arekere Lake", distance: "Directly opposite the hotel" },
];

export function Neighborhood() {
  return (
    <section className="bg-sage text-offwhite py-20 md:py-28 relative overflow-hidden" id="neighborhood">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="eyebrow text-offwhite/75 text-[0.7rem] md:text-[0.75rem] font-semibold tracking-[0.2em] uppercase leading-none">
            Prime Location
          </p>
          <h2 className="mt-4 font-display text-[2rem] md:text-[3rem] font-normal leading-[1.15] text-offwhite">
            A lakefront pause, close to South Bangalore's essentials.
          </h2>
          <p className="mt-6 font-body text-[1rem] md:text-[1.125rem] font-normal leading-[1.65] text-offwhite/85 max-w-xl">
            Set in JP Nagar 7th Phase, Jiana Suites offers guests a tranquil address opposite Arekere Lake while keeping premier hospitals, corporate parks, universities, and dining hubs within quick reach.
          </p>

          <table className="mt-10 w-full text-left font-body text-[0.95rem] leading-[1.6] text-offwhite/90">
            <caption className="sr-only">Distance and drive time from Jiana Suites</caption>
            <thead>
              <tr className="font-nav text-[0.7rem] uppercase tracking-[0.2em] text-offwhite/75">
                <th scope="col" className="pb-3 pr-4 font-semibold">Place</th>
                <th scope="col" className="pb-3 pr-4 font-semibold">Distance</th>
                <th scope="col" className="pb-3 font-semibold">Drive time</th>
              </tr>
            </thead>
            <tbody>
              {distances.map((row) => (
                <tr key={row.place} className="border-t border-offwhite/20">
                  <th scope="row" className="py-3.5 pr-4 font-normal">
                    <span className="flex items-start gap-3">
                      <MapPin className="mt-1 shrink-0 text-offwhite/90" size={17} aria-hidden="true" />
                      {row.place}
                    </span>
                  </th>
                  {row.driveTime ? (
                    <>
                      <td className="py-3.5 pr-4">{row.distance}</td>
                      <td className="py-3.5">{row.driveTime}</td>
                    </>
                  ) : (
                    <td colSpan={2} className="py-3.5">
                      {row.distance}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-sm border border-offwhite/20 shadow-2xl">
            <iframe
              title="Google Map to Jiana Suites - Luxury Living"
              src={business.mapEmbedUrl}
              className="aspect-[5/4] w-full border-0 bg-offwhite"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-6 border border-charcoal/15 bg-hotel-cream p-5 sm:p-7 text-sage md:absolute md:-bottom-8 md:right-6 md:max-w-md md:mt-0 shadow-2xl">
            <address className="not-italic">
              <p className="font-nav text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sage/80 leading-none">
                Address
              </p>
              <p className="mt-2.5 font-display text-[1.35rem] leading-snug text-sage">
                {business.address}
              </p>
              <div className="mt-5 flex flex-col gap-1 font-nav text-[0.8rem] text-charcoal">
                <a
                  href={`tel:${business.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2.5 min-h-[44px] hover:text-sage transition"
                >
                  <Phone size={16} aria-hidden="true" />
                  {business.phone}
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="inline-flex items-center gap-2.5 min-h-[44px] hover:text-sage transition"
                >
                  <Mail size={16} aria-hidden="true" />
                  {business.email}
                </a>
              </div>
            </address>
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lakeside min-h-[44px] mt-6 w-full text-[0.75rem] font-bold tracking-[0.14em] uppercase inline-flex items-center justify-center gap-2"
            >
              <Navigation size={14} aria-hidden="true" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
