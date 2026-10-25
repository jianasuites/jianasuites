import type { LandingPageContent } from "./types";

// The Pink Line is not open yet (expected around November 2026). Keep saying "upcoming"
// until the owner confirms it has opened.
// TODO(owner): add Google Maps distances to Hulimavu and IIMB stations in lib/distances.ts.
export const metroPage: LandingPageContent = {
  key: "metro",
  title: "Hotel near Hulimavu & IIMB Metro (Pink Line)",
  description:
    "Jiana Suites in JP Nagar 7th Phase is near Hulimavu and IIMB stations on the upcoming Pink Line along Bannerghatta Road. Car-free travel tips and room options.",
  ogTitle: "Hotel near Hulimavu and IIMB Metro Stations | Jiana Suites",
  ogDescription:
    "Stay near the upcoming Pink Line stations at Hulimavu and IIMB on Bannerghatta Road, with tips for getting around Bangalore without a car.",
  h1: "Hotel near Hulimavu and IIMB Metro Stations",
  eyebrow: "Namma Metro · Pink Line",
  heroImage: {
    src: "/images/deluxe-queen-room-jp-nagar.webp",
    width: 1280,
    height: 720,
    alt: "Deluxe Queen Room at Jiana Suites in JP Nagar 7th Phase",
  },
  lead: "Namma Metro's Pink Line will run along Bannerghatta Road, with stations at Hulimavu and IIMB. Jiana Suites, in JP Nagar 7th Phase opposite Arekere Lake, is near both, so once the line opens our guests will have a new way to cross the city without a car.",
  intro: {
    heading: "Getting around on the upcoming Pink Line",
    paragraphs: [
      "The Pink Line is being built between Kalena Agrahara in the south and Nagawara in the north. Along Bannerghatta Road it runs on an elevated track, and Hulimavu and IIMB are among its stations on this stretch.",
      "When it opens, the line will link Bannerghatta Road with central Bangalore and with the rest of the metro network. That matters in a part of the city where road traffic is heavy at peak hours.",
      "One planned interchange is especially useful for South Bangalore. At Jayadeva Hospital station, the Pink Line is due to meet the Yellow Line, which runs to Electronic City, giving guests a metro route from Bannerghatta Road to the offices there.",
    ],
  },
  why: {
    heading: "Why a metro-friendly base helps",
    points: [
      {
        title: "Fewer cab rides",
        text: "If you are visiting for work, study or treatment and do not want to hire a car, a hotel near the Pink Line will reduce how often you need a cab once the stations open.",
      },
      {
        title: "Electronic City via Jayadeva",
        text: "Engineers and consultants with work in Electronic City will be able to change to the Yellow Line at the planned Jayadeva interchange instead of making the whole journey by road.",
      },
      {
        title: "IIM Bangalore and nearby hospitals",
        text: "The IIMB station is named for the IIM Bangalore campus, and students, faculty visitors and patients' families heading to the hospitals around it gain a simple rail link.",
      },
      {
        title: "A quiet room after the commute",
        text: "After a day of trains and platforms, you return to a room facing Arekere Lake in Lakshmi Layout, set back from the elevated line and the main road.",
      },
    ],
  },
  rooms: {
    heading: "Rooms for metro travellers",
    picks: [
      {
        id: "deluxe-queen",
        text: "A straightforward double room for travellers who will be out on the metro all day and only need a restful base at night.",
      },
      {
        id: "premium-twin-lake-view",
        text: "Two friends or colleagues sharing the commute can split a twin room that looks out over the lake.",
      },
      {
        id: "premium-king-lake-view",
        text: "When the day's travelling is done, a king bed and a full lake view make for an easy evening in.",
      },
    ],
  },
  extra: {
    heading: "Car-free travel tips",
    bullets: [
      "Check BMRCL's official announcements for the Pink Line opening date before planning a metro-only trip.",
      "Buy QR tickets on your phone through Namma Metro's official channels to skip the queue at the ticket counter.",
      "Autos and app cabs are handy for the short hops between the hotel, the station and offices or hospitals.",
      "Save the hotel's Google Maps pin so drivers can find 8th Cross Road, Lakshmi Layout without guesswork.",
    ],
  },
  reach: {
    majestic:
      "From Majestic, a cab is the simplest way to the hotel for now. Once the Pink Line opens, there will be more metro routes towards Bannerghatta Road.",
    airport:
      "From the airport, travel by cab or airport bus with your luggage, then switch to the metro for day-to-day trips once you have settled in at the hotel.",
    bannerghatta:
      "The Pink Line will run above Bannerghatta Road. From Hulimavu or IIMB station, an auto or cab brings you into Lakshmi Layout and to the hotel, which faces Arekere Lake.",
  },
  faqHeading: "Metro questions",
  faqDescription: "What guests ask about the Pink Line, interchanges and travelling without a car.",
  faqs: [
    {
      question: "Is the Pink Line open yet?",
      answer:
        "Not yet. Hulimavu and IIMB are stations on the upcoming Pink Line. Check BMRCL's official updates for the opening date.",
    },
    {
      question: "Which metro stations are near Jiana Suites?",
      answer:
        "Hulimavu and IIMB, both on the upcoming Pink Line along Bannerghatta Road, are the stations near the hotel.",
    },
    {
      question: "Can I reach Electronic City by metro from here?",
      answer:
        "Once the Pink Line opens, you will be able to ride it to Jayadeva Hospital station and change to the Yellow Line towards Electronic City, where the interchange is planned.",
    },
    {
      question: "How do I get around before the Pink Line opens?",
      answer:
        "App cabs and autos are the practical choice for now, both for trips along Bannerghatta Road and for the journey from Majestic or the airport.",
    },
    {
      question: "Do I need a car to stay at Jiana Suites?",
      answer:
        "No. You can get around by auto and app cab today, and the upcoming Pink Line will add a metro option along Bannerghatta Road.",
    },
  ],
  related: [
    {
      key: "bannerghatta",
      text: "Explore the offices, campuses and shops along Bannerghatta Road.",
    },
    {
      key: "hospitals",
      text: "Visiting a patient at Apollo or Fortis? See how we support families on long hospital stays.",
    },
  ],
};
