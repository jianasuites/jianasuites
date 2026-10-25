// TODO(owner): add each policy once confirmed: check-in time, check-out time, breakfast,
// IDs accepted, couples, cancellation, and number of parking spots. Add check-in and
// check-out times to the Hotel schema in app/page.tsx at the same time.
// The section stays hidden until at least one policy is listed here.
const policies: { label: string; value: string }[] = [];

export function HotelPolicies() {
  if (policies.length === 0) return null;

  return (
    <section id="policies" className="bg-offwhite py-20 md:py-28 border-t border-charcoal/10">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-sage text-[0.7rem] md:text-[0.75rem] font-semibold tracking-[0.2em] uppercase leading-none">
            Good to Know
          </p>
          <h2 className="mt-4 font-display text-[2rem] md:text-[3rem] font-normal leading-[1.15] text-sage">
            Hotel Policies
          </h2>
        </div>

        <dl className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {policies.map((policy) => (
            <div key={policy.label} className="border border-charcoal/15 bg-white p-5 sm:p-6 shadow-sm">
              <dt className="font-nav text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sage/80">
                {policy.label}
              </dt>
              <dd className="mt-2 font-body text-[1rem] leading-[1.65] text-charcoal">{policy.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
