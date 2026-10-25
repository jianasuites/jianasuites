import type { LandingPageContent } from "./types";

// TODO(owner): confirm whether the Deluxe Queen Room has any lake view (lib/rooms.ts).
export const arekereLakePage: LandingPageContent = {
  key: "lake",
  title: "Lake View Hotel Opposite Arekere Lake, Bangalore",
  description:
    "Jiana Suites faces Arekere Lake in JP Nagar 7th Phase, Bangalore. See which rooms have full or partial lake views, and enjoy a calm stay away from main-road noise.",
  ogTitle: "Lake View Hotel Opposite Arekere Lake | Jiana Suites",
  ogDescription:
    "Wake up opposite Arekere Lake in JP Nagar 7th Phase, with full and partial lake-view rooms and a calmer stay off the main road.",
  h1: "Lake View Hotel Opposite Arekere Lake",
  eyebrow: "Arekere · JP Nagar 7th Phase",
  heroImage: {
    src: "/images/arekere-lake-view-jiana-suites.webp",
    width: 1100,
    height: 495,
    alt: "Aerial view of Arekere Lake, opposite Jiana Suites in JP Nagar 7th Phase",
  },
  lead: "Jiana Suites stands directly opposite Arekere Lake in South Bangalore. Instead of looking at traffic, five of our six room types look out towards the water and the trees around it.",
  intro: {
    heading: "Life opposite the lake",
    paragraphs: [
      "Bangalore grew up around a network of lakes and tanks, and the Kannada word for a lake, kere, survives in place names such as Arekere. Jiana Suites looks onto Arekere Lake from Lakshmi Layout in JP Nagar 7th Phase.",
      "Early morning is a lovely time here. The air is cooler, the light moves slowly across the water, and a walk by the lake is a gentle way to start the day before meetings, lectures or hospital visits.",
      "Being off the main road keeps the evenings calm. That suits travellers who want an unbroken night's sleep, families with young children, and anyone who spends the day in busy offices or wards and wants a peaceful place to come back to.",
    ],
  },
  why: {
    heading: "Choosing a room with a lake view",
    points: [
      {
        title: "Full lake view",
        text: "The Premium King Lake View Room is the room type listed with a full view of Arekere Lake. Choose it if the view is the main reason you are booking.",
      },
      {
        title: "Lake-facing twin and queen rooms",
        text: "The Premium Twin Lake View Room and the Deluxe Queen Lake View Room also face the lake, so friends, colleagues and couples can all have the water in sight.",
      },
      {
        title: "Partial lake view",
        text: "The Premium King Partial Lake View Room and the Deluxe Twin Partial Lake View Room show part of the lake alongside the neighbourhood, which still puts greenery outside your window.",
      },
      {
        title: "Green rather than concrete",
        text: "With the lake and its trees across the road, the outlook from the front of the hotel is open and green, a welcome change from the apartment blocks and flyovers of the city.",
      },
    ],
  },
  rooms: {
    heading: "Rooms facing Arekere Lake",
    picks: [
      {
        id: "premium-king-lake-view",
        text: "The full-view room: a king bed with Arekere Lake right outside, for guests who booked mainly for the scenery.",
      },
      {
        id: "premium-twin-lake-view",
        text: "Twin beds with a lake view, for two friends or colleagues who both want to look out at the water.",
      },
      {
        id: "deluxe-queen-lake-view",
        text: "A queen bed with the lake in view, a relaxed choice for a couple on a weekend break in South Bangalore.",
      },
      {
        id: "premium-king-partial-lake-view",
        text: "Part lake, part neighbourhood, with a king bed and a quiet corner for reading or work.",
      },
    ],
  },
  extra: {
    heading: "A calmer base in South Bangalore",
    paragraphs: [
      "Many visitors to South Bangalore spend their days in offices, hospitals or classrooms along Bannerghatta Road. Coming back to a room opposite the lake gives the day a clear end, and the evenings feel unhurried.",
      "Free Wi-Fi, a smart TV and room service are there when you want them, but the view of the lake is what sets this corner of JP Nagar 7th Phase apart.",
    ],
  },
  reach: {
    majestic:
      "From Majestic, give your cab or auto driver the address in Lakshmi Layout and mention Arekere Lake, which is a useful landmark for finding the right turn.",
    airport:
      "A cab from Kempegowda International Airport brings you south through the city to JP Nagar 7th Phase. Share the Google Maps pin with your driver so you are dropped at the hotel rather than elsewhere around the lake.",
    bannerghatta:
      "From Bannerghatta Road, head towards Arekere and look for the lake. The hotel is on 8th Cross Road in Lakshmi Layout, across from the water.",
  },
  faqHeading: "About the lakeside setting",
  faqDescription: "What to know about staying opposite Arekere Lake and choosing a lake-view room.",
  faqs: [
    {
      question: "Is Jiana Suites opposite Arekere Lake?",
      answer:
        "Yes. The hotel is directly opposite Arekere Lake at 435, 8th Cross Road, Lakshmi Layout, JP Nagar 7th Phase, Bangalore 560076.",
    },
    {
      question: "Which rooms look towards the lake?",
      answer:
        "Five room types do. The Premium King Lake View Room has a full view, the Premium Twin Lake View and Deluxe Queen Lake View rooms face the lake, and the two partial-view rooms show part of it.",
    },
    {
      question: "Can I ask for a lake-view room when booking?",
      answer:
        "Yes. Choose one of the lake-view room types in the booking engine, or mention the view when you book by phone or WhatsApp.",
    },
    {
      question: "Is it quiet at night?",
      answer:
        "The hotel is off the main road in a residential layout opposite the lake, which keeps nights calm.",
    },
    {
      question: "What does 'kere' mean in Arekere?",
      answer:
        "Kere is the Kannada word for a lake or tank, and it forms the second half of the name Arekere.",
    },
  ],
  related: [
    {
      key: "rooms",
      text: "Compare all six room types, including the full and partial lake-view rooms.",
    },
    {
      key: "bannerghatta",
      text: "See what lies along Bannerghatta Road, from offices to the Biological Park.",
    },
  ],
};
