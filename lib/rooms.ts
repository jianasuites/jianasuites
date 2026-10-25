// Single source for the room cards (components/sections/SuitesGrid.tsx) and the
// HotelRoom schema (app/page.tsx). Each `id` is both the card's HTML id and the
// fragment of its HotelRoom @id, so the two must stay in sync.
//
// TODO(owner): add priceFrom (₹ per night), sizeSqFt and maxGuests for each room,
// and confirm whether prices include GST. Fields left out are not published.
// TODO(owner): confirm the view for the Deluxe Queen Room.

export type Room = {
  id: string;
  name: string;
  images: { src: string; width: number; height: number }[];
  description: string;
  bed: { label: string; type: string; count: number };
  view?: string;
  priceFrom?: number;
  sizeSqFt?: number;
  maxGuests?: number;
};

export const rooms: Room[] = [
  {
    id: "premium-king-lake-view",
    name: "Premium King Lake View Room",
    images: [
      { src: "/images/premium-king-lake-view-room-jp-nagar.webp", width: 1280, height: 708 },
    ],
    description:
      "A premier king bed hotel room in Bangalore with uninterrupted panoramic views of Arekere Lake, plush bedding, high-speed Wi-Fi, and peaceful natural morning light.",
    bed: { label: "King bed", type: "King", count: 1 },
    view: "Full lake view",
  },
  {
    id: "premium-king-partial-lake-view",
    name: "Premium King Partial Lake View Room",
    images: [{ src: "/images/premium-king-partial-lake-view-room.webp", width: 1280, height: 720 }],
    description:
      "A comfortable king-bed sanctuary featuring a partial lake outlook, uncluttered modern interior, and quiet workspace ideal for corporate and leisure stays.",
    bed: { label: "King bed", type: "King", count: 1 },
    view: "Partial lake view",
  },
  {
    id: "premium-twin-lake-view",
    name: "Premium Twin Lake View Room",
    images: [{ src: "/images/premium-twin-lake-view-room.webp", width: 1280, height: 720 }],
    description:
      "Two premium single beds overlooking the serene lake, tailored for colleagues, friends, or medical attendants seeking comfortable twin sharing rooms in Bangalore.",
    bed: { label: "2 single beds", type: "Single", count: 2 },
    view: "Lake view",
  },
  {
    id: "deluxe-twin-partial-lake-view",
    name: "Deluxe Twin Partial Lake View Room",
    images: [{ src: "/images/deluxe-twin-partial-lake-view-room.webp", width: 1280, height: 720 }],
    description:
      "Thoughtfully appointed twin sharing room with partial lake views, smart workstation, 24-hour hot water, and an easy layout for short or extended stays in JP Nagar.",
    bed: { label: "2 single beds", type: "Single", count: 2 },
    view: "Partial lake view",
  },
  {
    id: "deluxe-queen",
    name: "Deluxe Queen Room",
    images: [{ src: "/images/deluxe-queen-room-jp-nagar.webp", width: 1280, height: 720 }],
    description:
      "A peaceful double room crafted for restful sleep, complete with modern climate control, high-speed Wi-Fi, power backup, and personalized room service.",
    bed: { label: "Queen bed", type: "Queen", count: 1 },
  },
  {
    id: "deluxe-queen-lake-view",
    name: "Deluxe Queen Lake View Room",
    images: [{ src: "/images/deluxe-queen-lake-view-room.webp", width: 1280, height: 720 }],
    description:
      "Deluxe comfort combined with restful Arekere Lake vistas, smart TV entertainment, and elevated hospitality at an exceptional value in South Bangalore.",
    bed: { label: "Queen bed", type: "Queen", count: 1 },
    view: "Lake view",
  },
];
