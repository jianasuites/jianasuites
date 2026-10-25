import type { LandingPageContent } from "./types";

// TODO(owner): add the Google Maps distance and drive time to Apollo Hospital and Fortis Hospital
// (Bannerghatta Road) in lib/distances.ts.
export const hospitalsPage: LandingPageContent = {
  key: "hospitals",
  title: "Hotel near Apollo & Fortis Hospital, Bannerghatta Road",
  description:
    "A calm base for patients' families and attendants near Apollo and Fortis Hospital on Bannerghatta Road: twin rooms, lift, power backup, 24-hour desk and monthly rates.",
  ogTitle: "Stay near Apollo and Fortis Hospital, Bannerghatta Road | Jiana Suites",
  ogDescription:
    "Twin rooms, a lift, power backup and a 24-hour desk for families supporting a patient at Apollo or Fortis on Bannerghatta Road.",
  h1: "Stay near Apollo and Fortis Hospital, Bannerghatta Road",
  eyebrow: "Medical stays · Bannerghatta Road",
  heroImage: {
    src: "/images/jiana-suites-reception-lobby.webp",
    width: 1280,
    height: 720,
    // The file name says reception, but the photo is a made-up bed with towel swans.
    alt: "Freshly made bed with towel swans in a room at Jiana Suites, JP Nagar 7th Phase",
  },
  lead: "When someone you love is being treated at Apollo Hospital or Fortis Hospital on Bannerghatta Road, the family needs somewhere nearby to rest that is practical and quiet. Jiana Suites, in JP Nagar 7th Phase opposite Arekere Lake, is set up for that kind of stay.",
  intro: {
    heading: "A place to rest between hospital visits",
    paragraphs: [
      "Hospital stays rarely go to plan. A routine procedure can turn into a week of observation, and a family that came for two nights may need a room for a month. Relatives often travel in from other towns, with one person at the bedside while others take turns to rest.",
      "A hotel room gives the people supporting a patient a proper bed, a hot shower at any hour and a door they can close. That matters when you are sleeping in short shifts and spending the day with doctors, test reports and pharmacy queues.",
      "Jiana Suites is in Lakshmi Layout, away from the traffic of Bannerghatta Road, so it is easier to sleep during the day after a night shift at the hospital. The front desk is staffed around the clock, which helps when you come back late after visiting hours.",
    ],
  },
  why: {
    heading: "Practical support for patients' families",
    points: [
      {
        title: "Twin rooms for attendants",
        text: "Two single beds let a parent and an adult child, or two siblings, share a room without sharing a bed. There are two twin room types, one with a lake view and one with a partial lake view.",
      },
      {
        title: "Lift and power backup",
        text: "The building has a lift, which helps if an older relative or a patient on the mend stays with you, and power backup for when the supply drops.",
      },
      {
        title: "A 24-hour front desk",
        text: "Someone is at the desk day and night, so arriving at 2 a.m. after a long evening at the hospital is not a problem.",
      },
      {
        title: "Monthly rates for long treatment",
        text: "If treatment runs into weeks, such as chemotherapy cycles, rehabilitation or a long ICU stay, ask about monthly rates instead of paying night by night.",
      },
      {
        title: "Hot water and tea at odd hours",
        text: "Hot water around the clock and a tea and coffee kettle help when your days and nights are no longer on a normal schedule.",
      },
    ],
  },
  rooms: {
    heading: "Rooms that work for hospital stays",
    picks: [
      {
        id: "premium-twin-lake-view",
        text: "Two single beds and a lake outlook, so an attendant coming off a night at the hospital can rest while a relative sleeps in the other bed.",
      },
      {
        id: "deluxe-twin-partial-lake-view",
        text: "A twin room for longer treatment periods, when two family members share the caring and need separate beds for weeks at a time.",
      },
      {
        id: "premium-king-partial-lake-view",
        text: "A king bed for a couple supporting a parent, or for a patient who has been discharged and wants a few quiet days before travelling home.",
      },
    ],
  },
  extra: {
    heading: "Tips for a long hospital stay",
    bullets: [
      "Keep one folder with the patient's ID, insurance papers, prescriptions and recent reports, and photograph each page on your phone.",
      "Agree a rota so that no single family member covers every night; having a room nearby makes the handover easier.",
      "Carry a phone charger, a water bottle and a light shawl for air-conditioned waiting areas.",
      "Ask the front desk about laundry help so you are not washing clothes at midnight.",
      "If you expect to stay longer than a couple of weeks, message us on WhatsApp about monthly rates before booking night by night.",
    ],
  },
  reach: {
    majestic:
      "If you arrive at Majestic by train or bus with a patient, a cab is kinder than changing between metro lines. When admission is on the same day, ask the driver to go to the hospital first and on to the hotel afterwards.",
    airport:
      "From Kempegowda International Airport, book a cab directly to the hospital or to the hotel. A flight that lands at rush hour can mean a slow drive across the city, so tell the hospital if you may be late for an appointment.",
    bannerghatta:
      "Apollo Hospital and Fortis Hospital are both on Bannerghatta Road. For daily visits between the hotel in Lakshmi Layout and the hospital, an auto or app cab is the simplest arrangement.",
  },
  faqHeading: "Staying near Apollo and Fortis",
  faqDescription: "Answers for families and attendants supporting a patient on Bannerghatta Road.",
  faqs: [
    {
      question: "Is Jiana Suites near Apollo Hospital and Fortis Hospital?",
      answer:
        "Jiana Suites is in JP Nagar 7th Phase near Bannerghatta Road, where both hospitals are located. Use the Google Maps pin to plan the drive from the hotel to the hospital you are visiting.",
    },
    {
      question: "Do you have rooms for two attendants?",
      answer:
        "Yes. The Premium Twin Lake View Room and the Deluxe Twin Partial Lake View Room each have two single beds, so two family members can share comfortably.",
    },
    {
      question: "Does the hotel have a lift?",
      answer:
        "Yes, there is a lift, which helps guests who are recovering, elderly or carrying heavy bags.",
    },
    {
      question: "Can we get a monthly rate during a long treatment?",
      answer:
        "Yes, monthly rates are available. Send your expected dates on WhatsApp to +91 99000 75360 and we will share the options.",
    },
    {
      question: "Can I arrive late at night after a hospital visit?",
      answer:
        "Yes. The front desk is open 24 hours, so let us know your expected arrival time when you book.",
    },
    {
      question: "Is it quiet enough to sleep during the day?",
      answer:
        "The hotel faces Arekere Lake in a residential layout rather than the main road, which helps attendants who need to sleep after a night shift.",
    },
  ],
  related: [
    {
      key: "monthly",
      text: "Treatment running into weeks? Read about monthly stays and long-stay rooms.",
    },
    {
      key: "bannerghatta",
      text: "Get to know Bannerghatta Road, from the hospitals to the shops and offices along it.",
    },
  ],
};
