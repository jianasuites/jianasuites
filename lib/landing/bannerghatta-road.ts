import type { LandingPageContent } from "./types";

// TODO(owner): add Google Maps distances and drive times for IIM Bangalore and the other
// Bannerghatta Road landmarks in lib/distances.ts.
export const bannerghattaRoadPage: LandingPageContent = {
  key: "bannerghatta",
  title: "Hotel near Bannerghatta Road, Bangalore – Jiana Suites",
  description:
    "Jiana Suites in JP Nagar 7th Phase is a calm base near Bannerghatta Road for offices, Royal Meenakshi Mall, IIM Bangalore and trips to Bannerghatta Biological Park.",
  ogTitle: "Hotel near Bannerghatta Road, Bangalore | Jiana Suites",
  ogDescription:
    "Stay off Bannerghatta Road in JP Nagar 7th Phase, close to its offices, malls and IIM Bangalore, and set off early for Bannerghatta Biological Park.",
  h1: "Hotel near Bannerghatta Road",
  eyebrow: "South Bangalore",
  heroImage: {
    src: "/images/room-seating-corner-jiana-suites.webp",
    width: 1280,
    height: 720,
    alt: "Seating corner with two chairs and a table in a room at Jiana Suites",
  },
  lead: "Bannerghatta Road is one of South Bangalore's main arteries, running from the city out towards Bannerghatta National Park. Jiana Suites sits near it in JP Nagar 7th Phase, a practical base for work, study, shopping and a day at the Biological Park.",
  intro: {
    heading: "A base along the Bannerghatta Road corridor",
    paragraphs: [
      "The road links many of the places that bring visitors to South Bangalore: hospitals such as Apollo, Fortis and Jayadeva, the IIM Bangalore campus, Christ University's Bannerghatta Road campus, shopping at Royal Meenakshi Mall, and a long line of offices and tech parks.",
      "Staying right on the road can mean traffic noise late into the night. Jiana Suites is in Lakshmi Layout, off the main road and opposite Arekere Lake, so you are near the corridor while the street outside your window stays quieter.",
      "Whether you are here for a programme at IIM Bangalore, a week of meetings at a tech park or a family weekend, you can plan each day around Bannerghatta Road and come back to the lake in the evening.",
    ],
  },
  why: {
    heading: "What you can reach along Bannerghatta Road",
    points: [
      {
        title: "Offices and tech parks",
        text: "Plenty of companies have offices along Bannerghatta Road and the streets that branch off it. Between meetings you can work from your room on the free high-speed Wi-Fi.",
      },
      {
        title: "IIM Bangalore and Christ University",
        text: "Visiting faculty, interview candidates, parents dropping off students and conference delegates all need a room near these campuses on Bannerghatta Road.",
      },
      {
        title: "Royal Meenakshi Mall",
        text: "For an evening of shopping, Royal Meenakshi Mall is on Bannerghatta Road and easy to combine with a day of meetings or sightseeing.",
      },
      {
        title: "Bannerghatta Biological Park",
        text: "Further south, the road leads to Bannerghatta Biological Park, with its zoo, safari and butterfly park, a family outing on the edge of the city.",
      },
    ],
  },
  rooms: {
    heading: "Rooms for a Bannerghatta Road trip",
    picks: [
      {
        id: "premium-king-partial-lake-view",
        text: "A king bed and a quiet corner to catch up on email after a day of meetings along the corridor.",
      },
      {
        id: "premium-twin-lake-view",
        text: "Two single beds for colleagues sharing a work trip, or friends visiting the Biological Park together.",
      },
      {
        id: "deluxe-queen-lake-view",
        text: "A queen bed and a lake view for a couple planning an early start for the zoo and safari.",
      },
    ],
  },
  extra: {
    heading: "Planning a day at Bannerghatta Biological Park",
    paragraphs: [
      "The Biological Park lies at the southern end of Bannerghatta Road, on the edge of Bannerghatta National Park. Start early to stay ahead of the midday heat, carry water and sun protection, and check the park's official website for opening days, safari timings and ticket prices before you leave.",
      "A car or cab is the simplest way to get there and back. If you drive, free on-site parking at the hotel means you can leave the car overnight after the trip and set off again the next morning.",
    ],
  },
  reach: {
    majestic:
      "From Majestic, the drive heads south through the city towards Jayanagar and Bannerghatta Road; a cab or auto is the simplest option.",
    airport:
      "Cabs from the airport usually reach Bannerghatta Road either through the city centre or along the Outer Ring Road, and your cab app will pick the quicker route for the time of day.",
    bannerghatta:
      "Already on Bannerghatta Road? Turn off towards Arekere and Lakshmi Layout, then follow the pin to the hotel on 8th Cross Road, which faces the lake.",
  },
  faqHeading: "Staying near Bannerghatta Road",
  faqDescription: "Common questions from guests planning work, study or a day out along Bannerghatta Road.",
  faqs: [
    {
      question: "Is Jiana Suites on Bannerghatta Road?",
      answer:
        "It is near Bannerghatta Road rather than on it, in Lakshmi Layout, JP Nagar 7th Phase, opposite Arekere Lake. That keeps the road's offices and hospitals close without the traffic noise at night.",
    },
    {
      question: "Is the hotel convenient for IIM Bangalore?",
      answer:
        "IIM Bangalore's campus is on Bannerghatta Road, so guests visiting for a programme, an interview or an event can use the hotel as a nearby base.",
    },
    {
      question: "Can I visit Bannerghatta Biological Park from the hotel?",
      answer:
        "Yes. The park is further south along Bannerghatta Road and makes a good day trip by car or cab. Check opening days and safari times on the park's website first.",
    },
    {
      question: "Is Royal Meenakshi Mall nearby?",
      answer:
        "Royal Meenakshi Mall is on Bannerghatta Road, and you can reach it by cab or auto for shopping or a meal out.",
    },
    {
      question: "Which room should I book for a work trip?",
      answer:
        "A king room with a partial lake view gives you a large bed and space to work, while two colleagues travelling together can share one of the twin rooms.",
    },
  ],
  related: [
    {
      key: "corporate",
      text: "Visiting offices on Bannerghatta Road? See how corporate stays and GST invoices work.",
    },
    {
      key: "metro",
      text: "Find out how the upcoming Pink Line will connect Bannerghatta Road with the rest of the city.",
    },
  ],
};
