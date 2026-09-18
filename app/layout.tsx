import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jianasuites.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jiana Suites | Luxury 3-Star Hotel Near Arekere Lake, JP Nagar 7th Phase, Bangalore",
  description:
    "Jiana Suites offers premium lake-view rooms and suites in JP Nagar 7th Phase, Bangalore — opposite Arekere Lake, minutes from Bannerghatta Road, Apollo Hospital, Christ University, and Brigade Millennium. Ideal for business travel, medical visits, family stays, and extended stays.",
  keywords: [
    "hotel in JP Nagar 7th Phase",
    "hotel near Arekere Lake",
    "3 star hotel South Bangalore",
    "lake view rooms Bangalore",
    "hotel near Bannerghatta Road",
    "hotel near Apollo Hospital JP Nagar",
    "business hotel Bangalore",
    "extended stay hotel Bangalore",
    "corporate stay hotel JP Nagar",
    "budget luxury hotel Bangalore",
    "hotel near Christ University Bangalore",
    "family hotel South Bangalore",
    "monthly stay hotel Bangalore",
    "hotel near Brigade Millennium",
    "twin sharing rooms Bangalore hotel",
  ],
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
    title: "Jiana Suites — Luxury Living in South Bangalore",
    description:
      "Premium lake-view rooms opposite Arekere Lake, JP Nagar 7th Phase. Book direct on WhatsApp.",
    url: siteUrl,
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
    title: "Jiana Suites — Luxury Living in South Bangalore",
    description:
      "Premium lake-view rooms opposite Arekere Lake, JP Nagar 7th Phase, Bangalore.",
    images: ["/images/DJI_20260909174430_0212_D_result.webp"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Jiana Suites",
  alternateName: "Jiana Suites — Luxury Living",
  description:
    "Premium 3-star hotel in JP Nagar 7th Phase, Bangalore, opposite Arekere Lake, offering lake-view rooms for business, medical, family, and extended stays.",
  url: siteUrl,
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
      name: "Where is Jiana Suites located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jiana Suites is located at 435, 8th Cross Road, Lakshmi Layout, JP Nagar 7th Phase, Arekere, Bangalore – 560076, directly opposite Arekere Lake.",
      },
    },
    {
      "@type": "Question",
      name: "Is Jiana Suites good for business travelers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Jiana Suites offers high-speed Wi-Fi, quiet rooms, and quick access to corporate hubs like Brigade Millennium, Accenture, and WeWork, making it well-suited for business stays.",
      },
    },
    {
      "@type": "Question",
      name: "Does Jiana Suites offer long-stay or monthly rates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Jiana Suites offers extended-stay and monthly rate options for guests visiting for medical treatment, work, or longer personal stays.",
      },
    },
    {
      "@type": "Question",
      name: "How close is Jiana Suites to Apollo Hospital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apollo Hospital is approximately an 8-minute drive from Jiana Suites, making it a convenient option for medical visitors and their families.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a room at Jiana Suites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rooms at Jiana Suites can be booked directly by contacting the hotel via WhatsApp or phone at +91 99000 75360 — there is no online booking fee for direct enquiries.",
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
