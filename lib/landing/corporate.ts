import type { LandingPageContent } from "./types";

// TODO(owner): confirm how company rates work (eligibility, minimum room nights, credit or
// prepaid billing) before adding any terms to this page.
export const corporatePage: LandingPageContent = {
  key: "corporate",
  title: "Corporate Hotel in JP Nagar with GST Billing",
  description:
    "Corporate stays at Jiana Suites, JP Nagar 7th Phase: work desks, free Wi-Fi, parking and GST invoices, near Accenture, WeWork JP Nagar and Bannerghatta Road offices.",
  ogTitle: "Corporate Stays in South Bangalore | Jiana Suites",
  ogDescription:
    "Work desks, free high-speed Wi-Fi, free parking and GST invoices for company guests in JP Nagar 7th Phase. Ask for a company rate on WhatsApp.",
  h1: "Corporate Stays in South Bangalore",
  eyebrow: "Corporate stays",
  heroImage: {
    src: "/images/executive-room-work-desk-jiana-suites.webp",
    width: 1280,
    height: 720,
    alt: "Work desk, mirror and seating in a room at Jiana Suites, JP Nagar",
  },
  lead: "Jiana Suites hosts company guests who need a dependable room in South Bangalore: a desk to work at, high-speed Wi-Fi, a place to park and a proper GST invoice at the end of the stay.",
  intro: {
    heading: "Set up for working days",
    paragraphs: [
      "Business travel to South Bangalore often means meetings along Bannerghatta Road or in JP Nagar itself. Staying in JP Nagar 7th Phase means your mornings start in the same part of the city as your meetings, rather than in cross-city traffic.",
      "Workplaces in the area include Accenture and WeWork JP Nagar, along with the tech parks and company offices on Bannerghatta Road. Teams on a project can stay in the same hotel and travel to the office together.",
      "Rooms have a work desk, free high-speed Wi-Fi and a smart TV, and the building has power backup for outages. Room service and daily housekeeping take care of the rest while you focus on the job.",
    ],
  },
  why: {
    heading: "What company guests get",
    points: [
      {
        title: "GST invoices",
        text: "Ask for a GST invoice in your company's name when you book, and share the company's GSTIN so it appears on the bill for your claim.",
      },
      {
        title: "Company rate enquiries on WhatsApp",
        text: "Travel desks and managers can message +91 99000 75360 on WhatsApp with expected dates and room nights to ask about a company rate.",
      },
      {
        title: "Free parking",
        text: "If you drive yourself or travel with a company car and driver, on-site parking costs nothing extra.",
      },
      {
        title: "Housekeeping and laundry help",
        text: "On trips of a week or more, daily housekeeping keeps the room in order, and laundry help means you can pack light.",
      },
      {
        title: "Room service after long days",
        text: "Room service helps on late working evenings when you would rather stay in than go out for dinner.",
      },
    ],
  },
  rooms: {
    heading: "Rooms for business travellers",
    picks: [
      {
        id: "premium-king-partial-lake-view",
        text: "The everyday choice for a solo business trip: a king bed, room to work and a partial view of the lake.",
      },
      {
        id: "premium-twin-lake-view",
        text: "For two colleagues on the same project who are comfortable sharing a twin room with a view of the water.",
      },
      {
        id: "premium-king-lake-view",
        text: "For senior guests or longer assignments, the full lake view makes the room feel less like a stopover.",
      },
    ],
  },
  extra: {
    heading: "Booking for a team",
    paragraphs: [
      "Send us the guest names, dates and number of rooms on WhatsApp or by email, together with the company name and GSTIN for the invoice. We will confirm availability and the rate, and you can then book online or directly with the team.",
      "If your consultants or engineers visit regularly, mention it when you first get in touch and ask whether a company rate can apply to repeat visits.",
    ],
  },
  reach: {
    majestic:
      "Colleagues arriving by overnight train at KSR Bengaluru City or by bus at Majestic can take a cab straight to JP Nagar 7th Phase. Message us their arrival time so the front desk knows to expect them.",
    airport:
      "For flights into Kempegowda International Airport, book a cab to the hotel and allow time for traffic through the city, particularly on weekday evenings.",
    bannerghatta:
      "If your office is on Bannerghatta Road, reach the hotel by turning off the main road towards Arekere, and share the Google Maps pin with your driver for the last stretch.",
  },
  faqHeading: "Corporate stay questions",
  faqDescription: "For travel desks, managers and guests booking a work trip in South Bangalore.",
  faqs: [
    {
      question: "Does Jiana Suites provide GST invoices?",
      answer:
        "Yes. Share your company name and GSTIN when you book, and the invoice will carry your company's GST details.",
    },
    {
      question: "How do I ask for a company rate?",
      answer:
        "Message the team on WhatsApp at +91 99000 75360 with your company name, the number of room nights you expect and your dates. We will reply with the options.",
    },
    {
      question: "Is the Wi-Fi free?",
      answer: "Yes, high-speed Wi-Fi is free for every guest.",
    },
    {
      question: "Which offices are near the hotel?",
      answer:
        "Accenture, WeWork JP Nagar and the offices and tech parks on Bannerghatta Road are all in this part of South Bangalore, as is Brigade Millennium in JP Nagar 7th Phase.",
    },
    {
      question: "Can colleagues share a room?",
      answer:
        "Yes. The two twin room types each have two single beds, which suits colleagues who are happy to share.",
    },
  ],
  related: [
    {
      key: "bannerghatta",
      text: "Meetings along Bannerghatta Road? See what else is on the corridor.",
    },
    {
      key: "monthly",
      text: "On a long assignment? Read how monthly stays compare with renting a flat.",
    },
  ],
};
