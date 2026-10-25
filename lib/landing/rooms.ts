import type { LandingPageContent } from "./types";

// TODO(owner): add starting prices, room sizes and max guests in lib/rooms.ts; the cards and
// the comparison table show them automatically once they are filled in.
export const roomsPage: LandingPageContent = {
  key: "rooms",
  title: "Rooms & Tariff – Jiana Suites JP Nagar 7th Phase",
  description:
    "Compare all six rooms at Jiana Suites in JP Nagar 7th Phase: king, queen and twin beds, full and partial Arekere Lake views. Check the live tariff and book direct.",
  ogTitle: "Rooms and Tariff at Jiana Suites, JP Nagar 7th Phase",
  ogDescription:
    "Six room types opposite Arekere Lake, with king, queen or twin beds and full or partial lake views. See the current tariff and book direct.",
  h1: "Rooms and Tariff at Jiana Suites",
  eyebrow: "Rooms · JP Nagar 7th Phase",
  heroImage: {
    src: "/images/premium-king-lake-view-room-jp-nagar.webp",
    width: 1280,
    height: 708,
    alt: "Premium King Lake View Room at Jiana Suites with a window towards Arekere Lake",
  },
  lead: "Jiana Suites has six room types in two categories, Premium and Deluxe. This page sets out each one with its bed, its view and the kind of stay it fits, so you can choose the right room before you book.",
  intro: {
    heading: "How our rooms are arranged",
    paragraphs: [
      "The six room types differ in three ways: the bed, the view and the category. You can pick a king bed, a queen bed or two single beds. Five of the six types are sold with a full or partial view of Arekere Lake, which sits directly across the road from the hotel.",
      "The Premium category has three rooms: a king room with a full lake view, a king room with a partial lake view, and a twin room that looks out over the lake. The Deluxe category also has three: a twin room with a partial lake view, the Deluxe Queen Room, and a queen room with a lake view.",
      "Across the hotel, guests have free high-speed Wi-Fi, a smart TV, 24-hour hot water, a tea and coffee kettle, a hair dryer, an iron and ironing board, toiletries, room service and daily housekeeping. The building has a lift, power backup, CCTV and a fire safety system, and parking on site is free.",
    ],
  },
  why: {
    heading: "Choosing between the room types",
    points: [
      {
        title: "King or queen",
        text: "Couples and solo guests usually decide between the king rooms and the queen rooms. A king bed is wider than a queen, so it is worth choosing if you like extra space at night or are staying for more than a few days.",
      },
      {
        title: "Two single beds",
        text: "The Premium Twin Lake View Room and the Deluxe Twin Partial Lake View Room each have two single beds. They work for colleagues sharing a trip, friends travelling together, or a patient's relative who wants a separate bed.",
      },
      {
        title: "Full or partial lake view",
        text: "A full lake view room looks out over Arekere Lake. A partial lake view room shows part of the water alongside the surrounding neighbourhood, which still gives you greenery outside the window.",
      },
      {
        title: "Short visits or several weeks",
        text: "If you expect to stay for weeks rather than nights, ask about monthly rates before you book. Daily housekeeping and laundry help are available whichever room you choose.",
      },
    ],
  },
  rooms: {
    heading: "All six room types in detail",
    text: "Tap Book Now on any room to choose your dates and see the live rate for that room.",
    comparison: true,
    picks: [
      {
        id: "premium-king-lake-view",
        text: "This room pairs a king bed with a full view of Arekere Lake and the trees around it. It is the one to request for an anniversary, a honeymoon night or simply a slower morning with the water outside.",
        suits: "Couples and solo guests who want the full lake view",
      },
      {
        id: "premium-king-partial-lake-view",
        text: "A king bed with a partial view of the lake and a quiet place to sit and work. The wider bed suits business travellers who want room to spread out, and couples who are out most of the day still get a glimpse of the water.",
        suits: "Business travellers and couples",
      },
      {
        id: "premium-twin-lake-view",
        text: "Two single beds and a view over the lake. It is the natural choice when two people want to share a room but not a bed, whether they are colleagues, siblings or a parent and an adult child.",
        suits: "Colleagues, friends and hospital attendants",
      },
      {
        id: "deluxe-twin-partial-lake-view",
        text: "Another twin layout, this time with a partial lake outlook. It suits longer shared stays, such as two engineers on the same project or two relatives taking turns at a hospital bedside.",
        suits: "Longer stays for two people in separate beds",
      },
      {
        id: "deluxe-queen",
        text: "A straightforward double room with a queen bed for one or two guests. It fits short city visits where you will spend most of your time out and mainly need a comfortable night's sleep.",
        suits: "Short visits for one or two guests",
      },
      {
        id: "deluxe-queen-lake-view",
        text: "A queen bed with the lake in view. It is a relaxed pick for a weekend in South Bangalore or for family visitors who want a pleasant outlook without needing a king bed.",
        suits: "Weekends and family visits",
      },
    ],
  },
  extra: {
    heading: "About the tariff",
    paragraphs: [
      "Room rates depend on the dates you choose, the room type and the length of your stay, so the current tariff is shown live in our booking engine rather than printed on this page. Select your dates after tapping Book Now and you will see the rate for each available room before you confirm.",
      "Booking directly with Jiana Suites, online, by phone or on WhatsApp, carries no booking fee. For a group of rooms, or a stay of several weeks, send your dates on WhatsApp and the team will come back with a quote.",
    ],
  },
  reach: {
    majestic:
      "Arriving by train at KSR Bengaluru City or by bus at Kempegowda Bus Station, the simplest option is a cab or auto to the hotel address in Lakshmi Layout, JP Nagar 7th Phase.",
    airport:
      "From Kempegowda International Airport, book a cab to 435, 8th Cross Road, Lakshmi Layout, JP Nagar 7th Phase. The route crosses the city from north to south, so leave extra time during the morning and evening rush.",
    bannerghatta:
      "If you are already on Bannerghatta Road, head into Arekere and follow the Google Maps pin to 8th Cross Road in Lakshmi Layout, across from the lake.",
  },
  faqHeading: "Questions about our rooms",
  faqDescription: "Quick answers on room types, beds, lake views and how to see the current tariff.",
  faqs: [
    {
      question: "How many room types does Jiana Suites have?",
      answer:
        "There are six: Premium King Lake View, Premium King Partial Lake View, Premium Twin Lake View, Deluxe Twin Partial Lake View, Deluxe Queen and Deluxe Queen Lake View.",
    },
    {
      question: "Which rooms have two single beds?",
      answer:
        "The Premium Twin Lake View Room and the Deluxe Twin Partial Lake View Room both have two single beds.",
    },
    {
      question: "Which room has a full view of Arekere Lake?",
      answer:
        "The Premium King Lake View Room is the room type listed with a full lake view. The Premium Twin Lake View Room and the Deluxe Queen Lake View Room also face the lake, and two more types have a partial view.",
    },
    {
      question: "Where can I see the room tariff?",
      answer:
        "Tap Book Now and choose your dates, and the booking engine shows the current rate for each available room. You can also ask for a quote on WhatsApp at +91 99000 75360.",
    },
    {
      question: "Is there a fee for booking directly?",
      answer:
        "No. Reserving through this website, by phone or on WhatsApp carries no booking fee.",
    },
  ],
  related: [
    {
      key: "lake",
      text: "See which rooms look out over Arekere Lake and what the lakeside setting is like.",
    },
    {
      key: "monthly",
      text: "Planning to stay for weeks rather than nights? Read how monthly stays work.",
    },
  ],
};
