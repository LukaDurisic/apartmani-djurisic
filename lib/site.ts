// Central place for the owner's real contact + booking data.
export const site = {
  name: "Apartmani Đurišić",
  city: "Posušje",
  country: "Bosnia & Herzegovina",
  phone: "+387 63 592 672",
  phoneHref: "tel:+38763592672",
  email: "apartmanidurisic@gmail.com",
  whatsapp: "https://wa.me/38763592672",
  mapsPin: "https://maps.app.goo.gl/Pz1w7w1fs3aDFY3S8",
  mapEmbed:
    "https://www.google.com/maps?q=Posu%C5%A1je,%20Bosnia%20and%20Herzegovina&z=14&output=embed",
  // Real postal address — kept consistent across the page, footer and structured
  // data (NAP consistency helps local search).
  address: {
    street: "Zagrebačka 24",
    postalCode: "88240",
    locality: "Posušje",
    country: "Bosnia & Herzegovina",
    countryCode: "BA",
  },
  // Precise coordinates (from the property's Google Maps pin).
  geo: { lat: 43.475736, lng: 17.324516 },
  // Pricing (EUR / night). Apartment 1 is €50, Apartment 2 is €45 — so "from €45".
  priceFrom: 45,
  priceApt1: 50,
  priceApt2: 45,
  currency: "EUR",
  sleeps: 2,
  bookingUrl: "https://www.booking.com/hotel/ba/apartmani-durisic.html",
  // Primary domain — drives canonical, Open Graph, sitemap, robots and JSON-LD.
  url: "https://durisic.com",
  // Enquiry form backend: our own Netlify serverless function that emails via
  // Gmail. No third-party form service. See SETUP-EMAIL.md.
  formEndpoint: "/.netlify/functions/send-enquiry",
} as const;
