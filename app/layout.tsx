import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { business } from "@/lib/business";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#3d483a",
};

// Site-wide tags only. Homepage title, description, canonical, Open Graph,
// Twitter and JSON-LD live in app/page.tsx so other pages don't inherit them.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jiana Suites — Luxury Hotel Near Arekere Lake, Bangalore",
    template: "%s | Jiana Suites",
  },
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
  // TODO(owner): add the Bing Webmaster Tools code as other: { "msvalidate.01": "<code>" }
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bangalore",
    "geo.position": `${business.geo.latitude};${business.geo.longitude}`,
    "ICBM": `${business.geo.latitude}, ${business.geo.longitude}`,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href={new URL(business.bookingUrl).origin} />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=DM+Serif+Display:ital@0;1&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-offwhite text-charcoal">
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MYCVWG1T4N"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MYCVWG1T4N');
          `}
        </Script>
      </body>
    </html>
  );
}
