// Central place for the owner's real contact + booking data.
// Placeholders (Booking.com / Airbnb) are marked — swap for real listing URLs.
export const site = {
  name: "Apartmani Đurišić",
  city: "Posušje",
  country: "Bosnia & Herzegovina",
  phone: "+387 62 592 672",
  phoneHref: "tel:+38762592672",
  email: "milan.durisic79@gmail.com",
  whatsapp: "https://wa.me/38762592672",
  mapsPin: "https://maps.app.goo.gl/Pz1w7w1fs3aDFY3S8",
  mapEmbed:
    "https://www.google.com/maps?q=Posu%C5%A1je,%20Bosnia%20and%20Herzegovina&z=14&output=embed",
  pricePerNight: 100,
  currency: "EUR",
  sleeps: 2,
  // TODO: replace with real listing URLs once available.
  bookingUrl: "#",
  airbnbUrl: "#",
  // Used for canonical + Open Graph. Update to a custom domain if/when one is added.
  url: "https://apartmani-djurisic.netlify.app",
} as const;
