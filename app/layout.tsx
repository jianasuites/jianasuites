import type { Metadata } from "next";
import { business } from "@/lib/business";
import "./globals.css";

export const metadata: Metadata = {
  title: `${business.name} | Premium Lakefront Hotel in JP Nagar`,
  description:
    `${business.name} is a premium 3-star lakefront hotel at ${business.address}.`,
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
      </head>
      <body className="font-body antialiased bg-offwhite text-charcoal">{children}</body>
    </html>
  );
}
