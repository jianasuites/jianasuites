import { whatsappHref } from "@/lib/whatsapp";

export function Intro() {
  return (
    <section className="bg-sage text-offwhite pt-20 pb-20 md:pt-28 md:pb-28 relative overflow-hidden" id="about">
      {/* Subtle organic watermark highlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 30%, rgba(229, 222, 219, 0.35) 0%, transparent 65%)`,
        }}
      />

      <div className="section-shell relative z-10">
        {/* Centered Quote matching Lakeside's reference layout */}
        <div className="mx-auto max-w-3xl text-center pb-16 md:pb-20 border-b border-offwhite/15">
          <blockquote className="font-body text-xl sm:text-2xl md:text-[28px] font-normal leading-[1.45] text-offwhite text-balance">
            Nestled on the peaceful shore of Arekere Lake, with tranquil waters and verdant lakefront views, we warmly invite guests to experience luxury living and genuine South Bangalore hospitality right from our doorstep.
          </blockquote>
        </div>

        {/* Two-Column Story Section */}
        <div className="mt-16 md:mt-20 grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-offwhite/75 text-[0.7rem] md:text-[0.75rem] font-semibold tracking-[0.2em] uppercase leading-none">
              Luxury Living · JP Nagar 7th Phase
            </p>
            <h2 className="mt-4 font-display text-[2rem] md:text-[3rem] font-normal leading-[1.15] text-offwhite">
              On the shore of Arekere Lake
            </h2>
            <div className="mt-6 space-y-5 font-body text-[1rem] md:text-[1.125rem] font-normal leading-[1.65] text-offwhite/90">
              <p>
                Ranked among the best 3-star hotels in South Bangalore, Jiana Suites is an elegant boutique hotel in Lakshmi Layout, JP Nagar 7th Phase. Situated directly opposite Arekere Lake and just 3 minutes from Bannerghatta Road, we provide a peaceful, scenic haven for corporate travelers, medical visitors, and families seeking refined comfort.
              </p>
              <p>
                Every detail is tailored for an effortless stay: tranquil lake view rooms, 24-hour attentive guest service, secure on-site parking, high-speed Wi-Fi, and quick connectivity to Apollo Hospital, Fortis Hospital, Christ University, IIM Bangalore, and major South Bengaluru business parks.
              </p>
            </div>

            <div className="mt-8">
              <a
                href={whatsappHref("Hi, I'd like to learn more about Jiana Suites.")}
                className="btn-lakeside-white text-[0.75rem] font-bold tracking-[0.14em] uppercase px-7 py-3"
              >
                Plan Your Stay
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-sm shadow-xl border border-offwhite/15">
              <img
                src="/images/file_000000000a008211a952181c9ea83005_result.webp"
                alt="Jiana Suites luxury hotel grounds and lakefront"
                width={1100}
                height={495}
                className="h-[380px] sm:h-[460px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
