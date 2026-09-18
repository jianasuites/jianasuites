"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const faqs = [
  {
    question: "What is the best hotel near Arekere Lake and JP Nagar 7th Phase?",
    answer:
      "Jiana Suites is regarded as one of the best 3-star boutique hotels near Arekere Lake, located at 435, 8th Cross Road, Lakshmi Layout, JP Nagar 7th Phase, Bangalore – 560076. Located directly opposite Arekere Lake, it offers premium lake-view rooms, high-speed Wi-Fi, secure parking, and immediate access to Bannerghatta Road.",
  },
  {
    question: "Which hotel is closest to Apollo Hospital and Fortis Hospital in JP Nagar?",
    answer:
      "Jiana Suites is approximately an 8-minute drive from Apollo Hospital and Fortis Hospital on Bannerghatta Road, making it the most convenient accommodation in South Bangalore for medical visitors, patients, and accompanying families.",
  },
  {
    question: "Is Jiana Suites suitable for business travelers and corporate stays?",
    answer:
      "Yes. Jiana Suites is a dedicated corporate stay hotel in JP Nagar, equipped with complimentary high-speed Wi-Fi, ergonomic in-room workstations, 24-hour power backup, and rapid access to business hubs including Brigade Millennium, Accenture, and WeWork.",
  },
  {
    question: "Does Jiana Suites offer long stay, extended stay, or monthly rental options?",
    answer:
      "Yes, Jiana Suites provides attractive long stay and monthly rental hotel packages in JP Nagar 7th Phase, with tailored tariffs, daily housekeeping, laundry assistance, and personalized room service for extended corporate or medical visits.",
  },
  {
    question: "Is there a hotel directly opposite Arekere Lake with lake-view rooms?",
    answer:
      "Yes, Jiana Suites is set directly opposite Arekere Lake, featuring peaceful lake-view rooms and twin sharing rooms in South Bangalore with soothing water reflections and contemporary interior comforts.",
  },
  {
    question: "How do I book a room at Jiana Suites?",
    answer:
      "You can book directly with Jiana Suites by calling +91 99000 75360 or messaging our front desk team on WhatsApp. Booking direct guarantees the best available rates with zero online booking fees.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="bg-offwhite py-20 md:py-28 border-t border-charcoal/10"
      aria-label="Frequently Asked Questions"
    >
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-sage text-[0.7rem] md:text-[0.75rem] font-semibold tracking-[0.2em] uppercase leading-none">
            Frequently Asked Questions
          </p>
          <h2 className="mt-4 font-display text-[2rem] md:text-[3rem] font-normal leading-[1.15] text-sage">
            Everything You Need to Know
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-[1rem] md:text-[1.125rem] font-normal leading-[1.65] text-charcoal">
            Find answers to common questions about Jiana Suites, lake-view rooms opposite Arekere Lake, corporate stays in JP Nagar 7th Phase, and direct booking.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden border border-charcoal/15 bg-white shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-charcoal/5 sm:p-6"
                >
                  <h3 className="font-display text-[1.15rem] sm:text-[1.3rem] font-normal leading-snug text-sage">
                    {faq.question}
                  </h3>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-charcoal/15 text-sage transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-sage text-white" : "bg-hotel-cream"
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDown size={16} />
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 pt-1 font-body text-[0.95rem] sm:text-[1rem] leading-[1.65] text-charcoal border-t border-charcoal/10">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
