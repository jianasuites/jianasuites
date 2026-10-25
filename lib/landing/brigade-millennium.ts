import type { LandingPageContent } from "./types";

// TODO(owner): add the Google Maps distance and drive time to Brigade Millennium in lib/distances.ts.
export const brigadeMillenniumPage: LandingPageContent = {
  key: "brigade",
  title: "Hotel near Brigade Millennium, JP Nagar – Jiana Suites",
  description:
    "Visiting Brigade Millennium in JP Nagar 7th Phase? Jiana Suites is a lake-view hotel in Lakshmi Layout for visiting relatives, family functions and short work trips.",
  ogTitle: "Hotel near Brigade Millennium, JP Nagar 7th Phase | Jiana Suites",
  ogDescription:
    "A lake-view base in JP Nagar 7th Phase for relatives visiting Brigade Millennium, guests attending family functions and short business visits.",
  h1: "Hotel near Brigade Millennium, JP Nagar 7th Phase",
  eyebrow: "JP Nagar 7th Phase",
  heroImage: {
    src: "/images/jiana-suites-facade.webp",
    width: 1280,
    height: 720,
    alt: "Jiana Suites building and entrance sign in JP Nagar 7th Phase, Bangalore",
  },
  lead: "Brigade Millennium is a large residential enclave in JP Nagar 7th Phase, and Jiana Suites is in the same locality, in Lakshmi Layout opposite Arekere Lake. It gives visiting relatives, event guests and business visitors a hotel room nearby instead of a crowded spare bedroom.",
  intro: {
    heading: "A room nearby when family comes to stay",
    paragraphs: [
      "Families living at Brigade Millennium often have relatives arriving for weddings, festivals, a new baby or simply a long-overdue visit. An apartment fills up quickly once grandparents, cousins and their suitcases arrive. A room at Jiana Suites lets your guests stay in the neighbourhood, join you for meals and outings, and still have their own bed, bathroom and quiet space at night.",
      "If you are attending a wedding, birthday or other family function in the area, staying in JP Nagar 7th Phase saves a late drive home across the city once the evening ends. The same applies to guests you have invited from out of town.",
      "The locality also draws short business visits: meetings with clients who live or work around JP Nagar 7th Phase, property visits, and appointments along Bannerghatta Road. For a one- or two-night trip, staying in the same neighbourhood cuts down on cross-city travel.",
    ],
  },
  why: {
    heading: "What makes it easy for visiting families",
    points: [
      {
        title: "A mix of rooms under one roof",
        text: "Grandparents may want a king bed, two cousins might prefer twin beds, and a couple might choose a queen room. With six room types, a family group can book a combination that fits everyone.",
      },
      {
        title: "Free parking for visiting cars",
        text: "If relatives drive in from another city, free on-site parking means one less thing to arrange while they are here.",
      },
      {
        title: "Calm evenings opposite the lake",
        text: "After a busy day of visits, your guests return to a hotel facing Arekere Lake rather than a main-road junction, which helps older relatives rest.",
      },
      {
        title: "Arranging rooms for your guests",
        text: "You can contact us by phone or WhatsApp to arrange rooms for visiting relatives, and booking direct carries no booking fee.",
      },
    ],
  },
  rooms: {
    heading: "Rooms that suit family and business visits",
    picks: [
      {
        id: "premium-king-lake-view",
        text: "Give visiting parents or grandparents a king bed and a full view of Arekere Lake to wake up to after a long journey.",
      },
      {
        id: "premium-twin-lake-view",
        text: "Two single beds for cousins, siblings or two colleagues who are happy to share a room during a family function.",
      },
      {
        id: "deluxe-queen",
        text: "A practical double room for a short trip when you mostly need a good night's sleep between family visits.",
      },
    ],
  },
  extra: {
    heading: "Planning a family visit",
    bullets: [
      "Book early around festivals and wedding dates, when local families tend to host guests at the same time.",
      "Mention when you book if an older relative needs to use the lift; the building has one.",
      "Save the hotel address for cab drivers: 435, 8th Cross Road, Lakshmi Layout, JP Nagar 7th Phase.",
      "If relatives are arriving on different days, list each arrival date when you message us so the rooms match their plans.",
    ],
  },
  reach: {
    majestic:
      "Relatives arriving at KSR Bengaluru City station or Kempegowda Bus Station can take a cab or auto straight to the hotel. Give the driver the full address, as the hotel is in Lakshmi Layout rather than inside Brigade Millennium.",
    airport:
      "For family flying in to Kempegowda International Airport, an app cab or a taxi from the airport counter brings them to the hotel door with their luggage. The drive runs across the city from north to south, so build in time for traffic.",
    bannerghatta:
      "Coming from Bannerghatta Road, turn in towards Arekere and Lakshmi Layout; the map pin leads to 8th Cross Road. Share the pin with drivers, because cross-road numbers repeat from one Bangalore layout to the next.",
  },
  faqHeading: "Visiting Brigade Millennium",
  faqDescription: "Answers for families, event guests and business visitors staying near Brigade Millennium.",
  faqs: [
    {
      question: "Is Jiana Suites in the same area as Brigade Millennium?",
      answer:
        "Yes. Both are in JP Nagar 7th Phase in South Bangalore. Jiana Suites is at 435, 8th Cross Road, Lakshmi Layout, opposite Arekere Lake.",
    },
    {
      question: "Can I book rooms for relatives visiting me at Brigade Millennium?",
      answer:
        "Yes. Call or WhatsApp +91 99000 75360 with the dates and the number of guests, and the team will suggest a mix of rooms that suits your family.",
    },
    {
      question: "Is there parking for relatives who drive?",
      answer: "Yes, on-site parking is free for hotel guests.",
    },
    {
      question: "Is the hotel suitable for guests attending a function nearby?",
      answer:
        "Yes. Staying in JP Nagar 7th Phase means guests at an evening function nearby avoid a long drive home late at night. Book early around wedding and festival dates.",
    },
    {
      question: "Can business visitors stay for a short trip?",
      answer:
        "Yes. Business visitors can work from their room on the free high-speed Wi-Fi between meetings in JP Nagar and along Bannerghatta Road.",
    },
  ],
  related: [
    {
      key: "corporate",
      text: "Coming for work? See what company guests get, including GST invoices and parking.",
    },
    {
      key: "lake",
      text: "Find out what it is like to stay directly opposite Arekere Lake.",
    },
  ],
};
