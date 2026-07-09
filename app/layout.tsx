import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

const title = "Apartmani Đurišić — Apartments in Posušje, Bosnia & Herzegovina";
const description =
  "Apartmani Đurišić — two calm, freshly finished apartments for two in the heart of Posušje, Bosnia & Herzegovina. Free WiFi, air conditioning, private bathroom, free parking, steps from the town centre. From €45 / night. Book directly for the best rate.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s · Apartmani Đurišić",
  },
  description,
  applicationName: site.name,
  keywords: [
    // English
    "apartments Posušje",
    "apartment rental Posušje",
    "accommodation Posušje",
    "Posušje Bosnia and Herzegovina apartments",
    "vacation rental Posušje",
    "short stay Posušje",
    "apartment for two Posušje",
    "Apartmani Đurišić",
    "where to stay Posušje",
    "Posušje accommodation near town centre",
    "apartments near Blidinje",
    "apartments near Kravica waterfalls",
    // Croatian / local
    "apartmani Posušje",
    "smještaj Posušje",
    "apartmani Đurišić",
    "iznajmljivanje apartmana Posušje",
    "apartman za dvoje Posušje",
    "privatni smještaj Posušje",
    "noćenje Posušje",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      hr: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["hr_HR"],
    url: site.url,
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: "/assets/IMG-20260702-WA0055.jpg",
        width: 1200,
        height: 900,
        alt: "Apartmani Đurišić — bedroom in Posušje",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/IMG-20260702-WA0055.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "travel",
};

export const viewport: Viewport = {
  themeColor: "#f6f1e8",
  width: "device-width",
  initialScale: 1,
};

// Rich result eligibility: describe the lodging business + its two apartment units.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: site.name,
  description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: [`${site.url}/assets/IMG-20260702-WA0055.jpg`],
  priceRange: "€€",
  currenciesAccepted: "EUR",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Posušje",
    addressCountry: "BA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.4731,
    longitude: 17.3311,
  },
  hasMap: site.mapsPin,
  smokingAllowed: false,
  numberOfRooms: 2,
  checkinTime: "14:00",
  checkoutTime: "10:00",
  amenityFeature: [
    "Free WiFi",
    "Air conditioning",
    "Private bathroom",
    "Kitchenette",
    "Smart TV",
    "Free parking",
    "Washing machine",
    "Non-smoking",
  ].map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  })),
  makesOffer: [
    {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: site.priceApt1,
      description: "Apartment 1 (with kitchen) — per night, sleeps 2",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: site.priceApt2,
      description: "Apartment 2 (cosy double) — per night, sleeps 2",
      availability: "https://schema.org/InStock",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
