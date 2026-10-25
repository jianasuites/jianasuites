// Labels and URLs for the landing pages. Kept separate from the page content
// (lib/landing/) so client components like the header don't bundle every page's text.
export const landingLinks = {
  rooms: { href: "/rooms", label: "Rooms & Tariff" },
  brigade: { href: "/hotel-near-brigade-millennium-jp-nagar", label: "Brigade Millennium" },
  hospitals: { href: "/hotel-near-apollo-fortis-hospital-bannerghatta-road", label: "Apollo & Fortis Hospital" },
  lake: { href: "/hotel-near-arekere-lake", label: "Arekere Lake" },
  bannerghatta: { href: "/hotel-near-bannerghatta-road", label: "Bannerghatta Road" },
  metro: { href: "/hotel-near-hulimavu-iimb-metro", label: "Hulimavu & IIMB Metro" },
  corporate: { href: "/corporate-stay-bangalore", label: "Corporate Stays" },
  monthly: { href: "/monthly-stay-jp-nagar", label: "Monthly Stays" },
};

export type LandingKey = keyof typeof landingLinks;

export const stayMenuLinks = [
  landingLinks.corporate,
  { href: landingLinks.hospitals.href, label: "Medical Stays" },
  landingLinks.monthly,
];

export const nearbyLinks = [
  landingLinks.lake,
  landingLinks.bannerghatta,
  landingLinks.brigade,
  landingLinks.hospitals,
  landingLinks.metro,
];
