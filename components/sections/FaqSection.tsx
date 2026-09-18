"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const faqs = [
  {
    question: "Where is Jiana Suites located?",
    answer:
      "Jiana Suites is located at 435, 8th Cross Road, Lakshmi Layout, JP Nagar 7th Phase, Arekere, Bangalore – 560076, directly opposite Arekere Lake. The hotel offers seamless connectivity to Bannerghatta Main Road, JP Nagar metro stations, and central business hubs across South Bangalore.",
  },
  {
    question: "Is Jiana Suites good for business travelers?",
    answer:
      "Yes. Jiana Suites offers high-speed Wi-Fi, quiet rooms, dedicated work desks, and quick access to corporate hubs like Brigade Millennium, Accenture, and WeWork, making it well-suited for business stays.",
  },
  {
    question: "Does Jiana Suites offer long-stay or monthly rates?",
    answer:
      "Yes, Jiana Suites offers extended-stay and monthly rate options for guests visiting for medical treatment, work, or longer personal stays.",
  },
  {
    question: "How close is Jiana Suites to Apollo Hospital?",
    answer:
      "Apollo Hospital is approximately an 8-minute drive from Jiana Suites, making it a convenient option for medical visitors and their families.",
  },
  {
    question: "How do I book a room at Jiana Suites?",
    answer:
      "Rooms at Jiana Suites can be booked directly by contacting the hotel via WhatsApp or phone at +91 99000 75360 — there is no online booking fee for direct enquiries.",
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
            Find answers to common questions about Jiana Suites, our lake-view rooms opposite Arekere Lake in JP Nagar 7th Phase, and booking direct.
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
