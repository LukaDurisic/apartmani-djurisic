"use client";

import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Contact() {
  const { t } = useLang();

  const cards = [
    {
      label: t({ en: "Phone", hr: "Telefon" }),
      value: site.phone,
      note: t({ en: "Call us any day", hr: "Nazovite nas svaki dan" }),
      href: site.phoneHref,
    },
    {
      label: "WhatsApp",
      value: site.phone,
      note: t({ en: "Message us — we reply fast", hr: "Pošaljite poruku — odgovaramo brzo" }),
      href: site.whatsapp,
      external: true,
    },
    {
      label: t({ en: "Email", hr: "E-pošta" }),
      value: site.email,
      note: t({ en: "For questions and bookings", hr: "Za upite i rezervacije" }),
      href: `mailto:${site.email}`,
      wide: true,
    },
    {
      label: t({ en: "Address", hr: "Adresa" }),
      value: `${site.address.street}, ${site.address.locality}`,
      note: t({ en: "Open in Google Maps", hr: "Otvori u Google kartama" }),
      href: site.mapsPin,
      external: true,
      wide: true,
    },
  ];

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-h">
      <div className="g2">
        <Reveal>
          <div className="eyebrow">{t({ en: "Contact", hr: "Kontakt" })}</div>
          <h2 id="contact-h">
            {t({ en: "Reserve your dates", hr: "Rezervirajte svoj termin" })}
          </h2>
          <p className="intro-p">
            {t({
              en: "Book directly with us for the best rate — we reply fast. Call, message, or find us on the booking platforms.",
              hr: "Rezervirajte izravno kod nas za najbolju cijenu — odgovaramo brzo. Nazovite, pošaljite poruku ili nas pronađite na platformama za rezervacije.",
            })}
          </p>
          <div className="platforms">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener"
              className="btn btn-solid"
            >
              {t({ en: "View on Booking.com", hr: "Pogledaj na Booking.com" })}
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="contact-cards">
            {cards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className={`contact-card${c.wide ? " contact-card--wide" : ""}`}
                {...(c.external ? { target: "_blank", rel: "noopener" } : {})}
              >
                <span className="contact-card__label">{c.label}</span>
                <span className="contact-card__value">{c.value}</span>
                <span className="contact-card__note">{c.note}</span>
                <span className="contact-card__arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
