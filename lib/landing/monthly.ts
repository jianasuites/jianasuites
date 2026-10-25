import type { LandingPageContent } from "./types";

// TODO(owner): add monthly rates and long-stay terms (minimum stay, deposit, what the monthly
// rate covers) once confirmed. Nothing about terms is stated on this page until then.
export const monthlyPage: LandingPageContent = {
  key: "monthly",
  title: "Monthly Stay & Long-Stay Rooms in JP Nagar",
  description:
    "Monthly and long stays at Jiana Suites, JP Nagar 7th Phase: monthly rates, daily housekeeping and laundry help for work assignments, relocation and medical treatment.",
  ogTitle: "Monthly and Long Stays in JP Nagar 7th Phase | Jiana Suites",
  ogDescription:
    "Monthly rates with daily housekeeping and laundry help, opposite Arekere Lake. An alternative to renting a flat during a project, a move or a course of treatment.",
  h1: "Monthly and Long Stays in JP Nagar 7th Phase",
  eyebrow: "Long stays",
  heroImage: {
    src: "/images/coffee-lake-view-window-jiana-suites.webp",
    width: 1280,
    height: 720,
    alt: "Coffee set by a window looking towards Arekere Lake at Jiana Suites",
  },
  lead: "Some stays are measured in weeks, not nights: a project assignment, a move to Bangalore while you look for a home, or a long course of treatment for someone in the family. Jiana Suites offers monthly rates for situations like these.",
  intro: {
    heading: "When a long stay makes sense",
    paragraphs: [
      "Long assignments. Consultants, auditors, trainers and engineers often spend weeks or months at a client site. A hotel room with daily housekeeping lets them concentrate on the work instead of running a temporary home on the side.",
      "Relocation. If you have just moved to Bangalore, a monthly stay gives you a settled address while you visit neighbourhoods, look at flats and wait for your household goods to arrive.",
      "Medical treatment. Families supporting a patient through weeks of treatment on Bannerghatta Road need somewhere stable to return to each evening, with twin rooms for two attendants and a front desk that is open around the clock.",
    ],
  },
  why: {
    heading: "What you get on a long stay",
    points: [
      {
        title: "Monthly rates",
        text: "Instead of paying night by night, ask for a monthly rate based on your dates and the room type you prefer.",
      },
      {
        title: "Daily housekeeping",
        text: "Your room is cleaned every day, so you are not spending weekends scrubbing a rented flat.",
      },
      {
        title: "Laundry help",
        text: "Ask the front desk for help with laundry rather than hunting for a washing machine in a new city.",
      },
      {
        title: "Nothing to set up",
        text: "Free Wi-Fi, 24-hour hot water, power backup and a smart TV are already in place, so there are no connections to arrange or engineers to wait in for.",
      },
    ],
  },
  rooms: {
    heading: "Rooms for longer stays",
    picks: [
      {
        id: "premium-king-lake-view",
        text: "Weeks pass more easily with a king bed and a full lake view to come home to each evening.",
      },
      {
        id: "deluxe-twin-partial-lake-view",
        text: "Two single beds for colleagues on the same assignment, or two relatives sharing caring duties over a long treatment.",
      },
      {
        id: "deluxe-queen-lake-view",
        text: "A queen room with a lake view for one guest or a couple settling into the city.",
      },
    ],
  },
  extra: {
    heading: "Monthly stay or rented flat?",
    paragraphs: [
      "Renting a flat can cost less over a long period, but it usually comes with a lease agreement, a security deposit, furniture to buy or hire, and utility connections to set up. For a stay of a few weeks to a few months, that effort can outweigh the savings.",
      "Service apartments usually add a kitchen, while a hotel stay gives you daily housekeeping and a 24-hour front desk. Which suits you depends on how much you plan to cook and how much time you want to spend on chores.",
      "Ask us for a monthly quote and compare it with the full cost of a flat, including deposit, brokerage, furniture and bills, before you decide.",
    ],
  },
  reach: {
    majestic:
      "If you are relocating by train or bus with several bags, a cab from Majestic to JP Nagar 7th Phase saves juggling luggage on the metro.",
    airport:
      "Moving to Bangalore by air? Book a larger cab at the airport if you have extra luggage, and send us your flight time on WhatsApp.",
    bannerghatta:
      "From Bannerghatta Road, follow the map pin into Lakshmi Layout to 8th Cross Road, opposite Arekere Lake. Once you are settled, the road becomes your everyday route to offices, hospitals and shops.",
  },
  faqHeading: "Long-stay questions",
  faqDescription: "Answers for guests planning a stay of several weeks or months in JP Nagar.",
  faqs: [
    {
      question: "Do you offer monthly rates?",
      answer:
        "Yes. Monthly rates are available for long stays, and the rate depends on the room type and your dates.",
    },
    {
      question: "What services are available during a long stay?",
      answer:
        "Long-stay guests have daily housekeeping, laundry help, free high-speed Wi-Fi, 24-hour hot water, power backup and room service.",
    },
    {
      question: "Is a monthly stay cheaper than renting a flat?",
      answer:
        "Not always. A flat can cost less over many months, but it comes with a lease, a deposit and set-up costs. For a stay of a few weeks or months, compare the full costs before deciding.",
    },
    {
      question: "Can I stay for a few weeks rather than a full month?",
      answer:
        "Message us with your exact dates and we will quote for the length of stay you need.",
    },
    {
      question: "Is a monthly stay suitable during medical treatment?",
      answer:
        "Yes. A monthly stay gives families supporting a patient on Bannerghatta Road a steady base, with twin rooms for attendants and a 24-hour desk.",
    },
  ],
  related: [
    {
      key: "corporate",
      text: "On a work assignment? See what company guests get, including GST invoices.",
    },
    {
      key: "hospitals",
      text: "Supporting a patient at Apollo or Fortis? Read our guide for families on hospital stays.",
    },
  ],
};
