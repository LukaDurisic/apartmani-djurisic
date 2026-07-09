"use client";

import { useState, type FormEvent } from "react";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t, lang } = useLang();
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const payload = {
      name: get("name"),
      email: get("email"),
      dates: get("dates"),
      apartment: get("apartment"),
      message: get("message"),
      company: get("company"), // honeypot
      lang,
    };

    try {
      setStatus("sending");
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const sending = status === "sending";

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
          <div className="contact-list">
            <a href={site.phoneHref}>
              <span className="diamond" aria-hidden="true">◈</span>
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} style={{ wordBreak: "break-all" }}>
              <span className="diamond" aria-hidden="true">◈</span>
              {site.email}
            </a>
            <a href={site.whatsapp} target="_blank" rel="noopener">
              <span className="diamond" aria-hidden="true">◈</span>
              WhatsApp
            </a>
          </div>
          <div className="platforms">
            <a href={site.bookingUrl} className="btn btn-solid">
              Booking.com
            </a>
            <a href={site.airbnbUrl} className="btn btn-outline">
              Airbnb
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form className="enquiry" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">{t({ en: "Name", hr: "Ime" })}</label>
              <input id="name" name="name" type="text" required autoComplete="name" />
            </div>
            <div>
              <label htmlFor="email">{t({ en: "Email", hr: "Email" })}</label>
              <input id="email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="row">
              <div>
                <label htmlFor="dates">{t({ en: "Dates", hr: "Datumi" })}</label>
                <input
                  id="dates"
                  name="dates"
                  type="text"
                  placeholder={t({ en: "12–15 Aug", hr: "12.–15. kol" })}
                />
              </div>
              <div>
                <label htmlFor="apartment">
                  {t({ en: "Apartment", hr: "Apartman" })}
                </label>
                <select id="apartment" name="apartment" defaultValue="Apartment 1">
                  <option value="Apartment 1">
                    {t({ en: "Apartment 1", hr: "Apartman 1" })}
                  </option>
                  <option value="Apartment 2">
                    {t({ en: "Apartment 2", hr: "Apartman 2" })}
                  </option>
                  <option value="Either">{t({ en: "Either", hr: "Bilo koji" })}</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message">{t({ en: "Message", hr: "Poruka" })}</label>
              <textarea id="message" name="message" rows={3} />
            </div>

            {/* Honeypot: hidden from humans, bots tend to fill it. */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ display: "none" }}
            />

            <button type="submit" disabled={sending} aria-busy={sending}>
              {sending
                ? t({ en: "Sending…", hr: "Slanje…" })
                : t({ en: "Send enquiry", hr: "Pošalji upit" })}
            </button>
            {status === "success" && (
              <p className="form-note" role="status">
                {t({
                  en: "Thank you! Your enquiry has been sent — we'll get back to you shortly. Check your inbox for a confirmation.",
                  hr: "Hvala! Vaš upit je poslan — javljamo vam se uskoro. Provjerite svoju e-poštu za potvrdu.",
                })}
              </p>
            )}
            {status === "error" && (
              <p className="form-note form-note--error" role="alert">
                {t({
                  en: "Sorry, something went wrong sending your enquiry. Please email or call us directly.",
                  hr: "Nažalost, došlo je do pogreške pri slanju upita. Molimo pošaljite nam e-poštu ili nazovite izravno.",
                })}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
