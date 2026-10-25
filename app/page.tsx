import type { Metadata } from "next";
import { Enquire } from "@/components/sections/Enquire";
import { FaqSection } from "@/components/sections/FaqSection";
import { AmenitiesFacilities } from "@/components/sections/AmenitiesFacilities";
import { CookieConsent } from "@/components/sections/CookieConsent";
import { Footer } from "@/components/sections/Footer";
import { GallerySlider } from "@/components/sections/GallerySlider";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HotelPolicies } from "@/components/sections/HotelPolicies";
import { ImageBand } from "@/components/sections/ImageBand";
import { Intro } from "@/components/sections/Intro";
import { Neighborhood } from "@/components/sections/Neighborhood";
import { RateInfo } from "@/components/sections/RateInfo";
import { SuitesGrid } from "@/components/sections/SuitesGrid";
import { MobileStickyCta } from "@/components/ui/MobileStickyCta";
import { business } from "@/lib/business";
import { faqs } from "@/lib/faqs";
import { rooms } from "@/lib/rooms";
import { siteUrl } from "@/lib/site";

const socialDescription =
  "Opposite Arekere Lake in JP Nagar 7th Phase. Lake-view rooms for business, medical and family stays. Book direct.";
const ogImage = {
  url: "/images/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Jiana Suites hotel facade, JP Nagar 7th Phase, Bangalore",
};

export const metadata: Metadata = {
  title: { absolute: "Jiana Suites | Hotel in JP Nagar 7th Phase, Bangalore – Lake View" },
  description:
    "Lake-view hotel opposite Arekere Lake in JP Nagar 7th Phase, Bangalore. For business, medical and family stays near Bannerghatta Road and Brigade Millennium. Book direct.",
  alternates: {
    canonical: `${siteUrl}/`,
    types: {
      "text/plain": [{ url: "/llms.txt", title: "LLM summary" }],
    },
  },
  openGraph: {
    title: "Jiana Suites | Lake View Hotel in JP Nagar 7th Phase, Bangalore",
    description: socialDescription,
    url: `${siteUrl}/`,
    siteName: "Jiana Suites",
    images: [ogImage],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jiana Suites | Lake View Hotel in JP Nagar, Bangalore",
    description: socialDescription,
    images: [{ url: ogImage.url, alt: ogImage.alt }],
  },
};

const pricedRooms = rooms.filter((room) => room.priceFrom);

// TODO(owner): add checkinTime, checkoutTime and numberOfRooms once confirmed.
// TODO(owner): add the Facebook page URL to sameAs (the footer currently uses a share link).
const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "@id": `${siteUrl}/#hotel`,
  name: "Jiana Suites",
  alternateName: "Jiana Suites — Luxury Living",
  description:
    "Hotel in JP Nagar 7th Phase, Bangalore, opposite Arekere Lake, offering lake-view rooms for business, medical, family, and extended stays.",
  url: `${siteUrl}/`,
  image: [`${siteUrl}/images/jiana-suites-facade.webp`, `${siteUrl}${ogImage.url}`],
  logo: `${siteUrl}/jiana-suites-logo.webp`,
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
  email: business.email,
  priceRange: "₹₹",
  sameAs: ["https://www.instagram.com/jianasuites/", "https://www.youtube.com/@jianasuites"],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "24-Hour Hot Water", value: true },
    { "@type": "LocationFeatureSpecification", name: "Power Backup", value: true },
    { "@type": "LocationFeatureSpecification", name: "CCTV", value: true },
    { "@type": "LocationFeatureSpecification", name: "Lift Access", value: true },
    { "@type": "LocationFeatureSpecification", name: "Room Service", value: true },
  ],
  containsPlace: rooms.map((room) => ({
    "@type": "HotelRoom",
    "@id": `${siteUrl}/#${room.id}`,
    name: room.name,
    description: room.description,
    image: `${siteUrl}${room.images[0].src}`,
    bed: { "@type": "BedDetails", typeOfBed: room.bed.type, numberOfBeds: room.bed.count },
    ...(room.view && {
      amenityFeature: [{ "@type": "LocationFeatureSpecification", name: room.view, value: true }],
    }),
    ...(room.sizeSqFt && {
      floorSize: { "@type": "QuantitativeValue", value: room.sizeSqFt, unitCode: "FTK" },
    }),
    ...(room.maxGuests && {
      occupancy: { "@type": "QuantitativeValue", maxValue: room.maxGuests },
    }),
  })),
  ...(pricedRooms.length > 0 && {
    makesOffer: pricedRooms.map((room) => ({
      "@type": "Offer",
      itemOffered: { "@id": `${siteUrl}/#${room.id}` },
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: room.priceFrom,
        priceCurrency: "INR",
        unitText: "per night",
      },
    })),
  }),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function Home() {
  return (
    <>
      <JsonLd data={hotelSchema} />
      <JsonLd data={faqSchema} />
      <Header />
      <main>
        <Hero />
        <Intro />
        <SuitesGrid />
        <RateInfo />
        <ImageBand />
        <GallerySlider />
        <AmenitiesFacilities />
        <Neighborhood />
        <HotelPolicies />
        <FaqSection />
        <Enquire />
      </main>
      <Footer />
      <CookieConsent />
      <MobileStickyCta />
    </>
  );
}
