import {
  Bath,
  Coffee,
  Droplets,
  GlassWater,
  Monitor,
  PlugZap,
  Scissors,
  ShowerHead,
  Smile,
  Sparkles,
  Tv,
  Waves,
  Wifi,
} from "lucide-react";

const amenities = [
  { label: "Hair Dryer", icon: Waves },
  { label: "Iron & Board", icon: Sparkles },
  { label: "Shampoo", icon: Droplets },
  { label: "Shower Gel", icon: ShowerHead },
  { label: "Dental Kit", icon: Smile },
  { label: "Shaving Kit", icon: Scissors },
  { label: "Face Towel", icon: Bath },
  { label: "Bath Towel", icon: Bath },
  { label: "Complimentary Water", icon: GlassWater },
  { label: "Tea & Coffee Kettle", icon: Coffee },
];

const facilities = [
  { label: "Smart TV in Rooms", icon: Tv },
  { label: "High Speed Wi-Fi", icon: Wifi },
  { label: "24-Hour Hot Water", icon: ShowerHead },
  { label: "Power Back-Up", icon: PlugZap },
  { label: "Room Service", icon: Monitor },
];

export function AmenitiesFacilities() {
  return (
    <section className="bg-hotel-cream py-20 md:py-28 border-t border-charcoal/10" id="amenities">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="eyebrow text-sage text-[0.7rem] md:text-[0.75rem] font-semibold tracking-[0.2em] uppercase leading-none">
              Available in all rooms
            </p>
            <h2 className="mt-4 font-display text-[2rem] md:text-[3rem] font-normal leading-[1.15] text-sage">
              Amenities & Facilities
            </h2>
          </div>
          <p className="font-body text-[1rem] md:text-[1.125rem] font-normal leading-[1.65] text-charcoal">
            Every room category at Jiana Suites includes the thoughtful in-room comforts and hotel-wide support guests need for a smooth, relaxing visit.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <ListBlock title="Amenities" subtitle="In-room Essentials" items={amenities} />
          <ListBlock title="Facilities" subtitle="Hotel-wide Comforts" items={facilities} />
        </div>
      </div>
    </section>
  );
}

function ListBlock({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: typeof amenities;
}) {
  return (
    <article className="bg-white border border-charcoal/10 p-7 sm:p-9 shadow-sm">
      <p className="eyebrow text-sage/75 text-[0.7rem] md:text-[0.75rem] font-semibold tracking-[0.2em] uppercase leading-none">
        {subtitle}
      </p>
      <h3 className="mt-3 font-display text-[1.35rem] md:text-[1.65rem] font-normal leading-[1.25] text-sage">
        {title}
      </h3>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex min-h-12 items-center gap-3.5 border border-charcoal/10 bg-offwhite/40 px-4 py-3"
            >
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage text-white">
                <Icon size={15} aria-hidden="true" />
              </span>
              <span className="font-nav text-[0.8rem] font-medium tracking-[0.04em] text-charcoal">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </article>
  );
}
