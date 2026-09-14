const stats = [
  "Opposite Arekere Lake",
  "JP Nagar 7th Phase",
  "Minutes from Bannerghatta Road",
];

export function HeroStats() {
  return (
    <section className="bg-offwhite py-10 border-b border-charcoal/10">
      <div className="section-shell grid gap-6 md:grid-cols-3">
        {stats.map((item, index) => (
          <div
            key={item}
            className="border-t border-charcoal/15 pt-5 md:border-t-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0"
          >
            <p className="font-nav text-xs font-semibold uppercase tracking-[0.18em] text-sage">
              0{index + 1}
            </p>
            <p className="mt-2.5 font-display text-2xl font-normal leading-snug text-sage">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
