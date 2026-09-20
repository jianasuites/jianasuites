import type { Metadata } from "next";
import "./globals.css";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.jianasuites.com").replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jiana Suites — Best Hotel Near Arekere Lake, JP Nagar 7th Phase, Bangalore",
  description:
    "Top-rated 3-star hotel opposite Arekere Lake in JP Nagar 7th Phase, South Bangalore. Lake-view rooms, business-friendly stays, and easy access to Bannerghatta Road, Apollo Hospital & Brigade Millennium. Book direct — no fees.",
  keywords: [
    // Location-based
    "hotel in JP Nagar 7th Phase",
    "hotel near Arekere Lake",
    "hotel opposite Arekere Lake",
    "hotels in South Bangalore",
    "hotel near Bannerghatta Road",
    "hotel near JP Nagar",
    "hotel near Lakshmi Layout Bangalore",
    "accommodation JP Nagar 7th Phase",
    "hotel near Bannerghatta National Park",
    "stay near Arekere Bangalore",

    // "Best of" / comparison intent
    "best hotels in JP Nagar Bangalore",
    "best 3 star hotels South Bangalore",
    "best budget hotels near Arekere Lake",
    "top rated hotels JP Nagar",
    "best hotels near Bannerghatta Road",
    "best lake view hotels Bangalore",
    "best hotels for business stay Bangalore",
    "best extended stay hotels Bangalore",
    "best hotels near Apollo Hospital Bangalore",
    "top hotels for medical visitors Bangalore",

    // Audience / purpose-based
    "business hotel Bangalore",
    "corporate stay hotel JP Nagar",
    "medical visitor accommodation Bangalore",
    "family hotel South Bangalore",
    "long stay hotel Bangalore",
    "monthly rental hotel Bangalore",
    "extended stay accommodation JP Nagar",
    "hotel near hospitals Bangalore",
    "hotel for company guests Bangalore",
    "work from hotel Bangalore",

    // Amenity / feature-based
    "lake view rooms Bangalore",
    "twin sharing rooms Bangalore hotel",
    "king bed hotel room Bangalore",
    "hotel with free wifi JP Nagar",
    "hotel with parking JP Nagar",
    "hotel with 24 hour hot water Bangalore",
    "hotel with power backup Bangalore",
    "hotel with CCTV security Bangalore",

    // Nearby landmark-based
    "hotel near Christ University Bangalore",
    "hotel near Royal Meenakshi Mall",
    "hotel near Brigade Millennium",
    "hotel near Accenture JP Nagar",
    "hotel near WeWork JP Nagar",
    "hotel near IIM Bangalore",
    "hotel near Bannerghatta Biological Park",
    "hotel near Third Wave Coffee JP Nagar",
    "hotel 10 minutes from Bannerghatta Road",

    // Question-based
    "what is the best hotel near Arekere Lake",
    "is there a hotel opposite Arekere Lake",
    "which hotel is closest to Apollo Hospital JP Nagar",
    "hotels near JP Nagar 7th Phase for family stay",
    "where to stay near Bannerghatta Road for business trip",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Google Search Console verification:
  // - Primary method: File is located at public/google183e2376ba3269a0.html
  // - Backup method: If using the HTML tag method, supply via NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION env var or update below:
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bangalore",
    "geo.position": "12.892151;77.590311",
    "ICBM": "12.892151, 77.590311",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Jiana Suites — Best Hotel Near Arekere Lake, JP Nagar 7th Phase, Bangalore",
    description:
      "Top-rated 3-star hotel opposite Arekere Lake in JP Nagar 7th Phase, South Bangalore. Lake-view rooms, business-friendly stays, and easy access to Bannerghatta Road & Apollo Hospital.",
    url: `${siteUrl}/`,
    siteName: "Jiana Suites",
    images: [
      {
        url: "/images/DJI_20260909174430_0212_D_result.webp",
        width: 1200,
        height: 630,
        alt: "Jiana Suites illuminated facade and entrance in JP Nagar South Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jiana Suites — Best Hotel Near Arekere Lake, JP Nagar 7th Phase, Bangalore",
    description:
      "Top-rated 3-star hotel opposite Arekere Lake in JP Nagar 7th Phase, South Bangalore. Lake-view rooms, business-friendly stays, and easy access to Bannerghatta Road & Apollo Hospital.",
    images: ["/images/DJI_20260909174430_0212_D_result.webp"],
  },
  alternates: {
    canonical: `${siteUrl}/`,
  },
};

const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Jiana Suites",
  alternateName: "Jiana Suites — Luxury Living",
  description:
    "Premium 3-star hotel in JP Nagar 7th Phase, Bangalore, opposite Arekere Lake, offering lake-view rooms for business, medical, family, and extended stays.",
  url: `${siteUrl}/`,
  image: `${siteUrl}/images/DJI_20260909174430_0212_D_result.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "435, 8th Cross Road, Lakshmi Layout, JP Nagar 7th Phase, Arekere",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560076",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.892151,
    longitude: 77.590311,
  },
  telephone: "+91-99000-75360",
  email: "jianasuites@gmail.com",
  priceRange: "₹₹",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "24-Hour Hot Water", value: true },
    { "@type": "LocationFeatureSpecification", name: "Power Backup", value: true },
    { "@type": "LocationFeatureSpecification", name: "CCTV", value: true },
    { "@type": "LocationFeatureSpecification", name: "Lift Access", value: true },
    { "@type": "LocationFeatureSpecification", name: "Room Service", value: true },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best hotel near Arekere Lake and JP Nagar 7th Phase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jiana Suites is regarded as one of the best 3-star boutique hotels near Arekere Lake, located at 435, 8th Cross Road, Lakshmi Layout, JP Nagar 7th Phase, Bangalore – 560076. Located directly opposite Arekere Lake, it offers premium lake-view rooms, high-speed Wi-Fi, secure parking, and immediate access to Bannerghatta Road.",
      },
    },
    {
      "@type": "Question",
      name: "Which hotel is closest to Apollo Hospital and Fortis Hospital in JP Nagar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jiana Suites is approximately an 8-minute drive from Apollo Hospital and Fortis Hospital on Bannerghatta Road, making it the most convenient accommodation in South Bangalore for medical visitors, patients, and accompanying families.",
      },
    },
    {
      "@type": "Question",
      name: "Is Jiana Suites suitable for business travelers and corporate stays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Jiana Suites is a dedicated corporate stay hotel in JP Nagar, equipped with complimentary high-speed Wi-Fi, ergonomic in-room workstations, 24-hour power backup, and rapid access to business hubs including Brigade Millennium, Accenture, and WeWork.",
      },
    },
    {
      "@type": "Question",
      name: "Does Jiana Suites offer long stay, extended stay, or monthly rental options?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Jiana Suites provides attractive long stay and monthly rental hotel packages in JP Nagar 7th Phase, with tailored tariffs, daily housekeeping, laundry assistance, and personalized room service for extended corporate or medical visits.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a hotel directly opposite Arekere Lake with lake-view rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Jiana Suites is set directly opposite Arekere Lake, featuring peaceful lake-view rooms and twin sharing rooms in South Bangalore with soothing water reflections and contemporary interior comforts.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a room at Jiana Suites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book directly with Jiana Suites by calling +91 99000 75360 or messaging our front desk team on WhatsApp. Booking direct guarantees the best available rates with zero online booking fees.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=DM+Serif+Display:ital@0;1&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="font-body antialiased bg-offwhite text-charcoal">{children}</body>
    </html>
  );
}
