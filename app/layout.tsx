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

const title = "Apartmani Đurišić — stan na dan i apartmani u Posušju";
const description =
  "Apartmani Đurišić — stan na dan u Posušju, BiH. Dva mirna, novouređena apartmana za dvoje na korak od centra grada — besplatni WiFi, klima, privatna kupaonica i besplatan parking. Od €45 po noći. Rezervirajte izravno za najbolju cijenu. Short-stay apartments in Posušje, Bosnia & Herzegovina.";

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
    "stan na dan",
    "stan na dan Posušje",
    "posušje stan na dan",
    "posusje stan na dan",
    "stan na dan posušje",
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
    locale: "hr_HR",
    alternateLocale: ["en_US"],
    url: site.url,
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: "/assets/IMG-20260702-WA0055.jpg",
        width: 1200,
        height: 900,
        alt: "Apartmani Đurišić — spavaća soba, stan na dan u Posušju",
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
  image: [
    `${site.url}/assets/IMG-20260702-WA0055.jpg`,
    `${site.url}/assets/IMG-20260705-WA0002.jpg`,
    `${site.url}/assets/IMG-20260702-WA0049.jpg`,
  ],
  priceRange: "€45–€50",
  currenciesAccepted: "EUR",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.locality,
    addressCountry: site.address.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  hasMap: site.mapsPin,
  // Link the entity to its Booking.com listing (helps Google connect profiles).
  sameAs: [site.bookingUrl],
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
  // The two individual units.
  containsPlace: [
    {
      "@type": "Accommodation",
      name: "Apartment 1 — with kitchen",
      occupancy: { "@type": "QuantitativeValue", maxValue: 2, unitText: "guests" },
      numberOfBedrooms: 1,
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Kitchenette", value: true },
        { "@type": "LocationFeatureSpecification", name: "Private bathroom", value: true },
      ],
    },
    {
      "@type": "Accommodation",
      name: "Apartment 2 — cosy double",
      occupancy: { "@type": "QuantitativeValue", maxValue: 2, unitText: "guests" },
      numberOfBedrooms: 1,
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Private bathroom", value: true },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr" className={`${cormorant.variable} ${jost.variable}`}>
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
