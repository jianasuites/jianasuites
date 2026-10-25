import type { Faq } from "@/lib/faqs";
import type { LandingKey } from "@/lib/landing-links";

// Content for one SEO landing page. Every string here is shown on the page, and the
// FAQPage schema is built from `faqs`, so the visible FAQ and the schema always match.
// Facts must come from lib/rooms.ts, lib/distances.ts or confirmed hotel details only.
export type LandingPageContent = {
  key: LandingKey;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  h1: string;
  eyebrow: string;
  heroImage: { src: string; width: number; height: number; alt: string };
  lead: string;
  intro: { heading: string; paragraphs: string[] };
  why: { heading: string; points: { title: string; text: string }[] };
  rooms: {
    heading: string;
    text?: string;
    picks: { id: string; text: string; suits?: string }[];
    comparison?: boolean;
  };
  extra?: { heading: string; paragraphs?: string[]; bullets?: string[] };
  reach: { majestic: string; airport: string; bannerghatta: string };
  faqHeading: string;
  faqDescription: string;
  faqs: Faq[];
  related: { key: LandingKey; text: string }[];
};
