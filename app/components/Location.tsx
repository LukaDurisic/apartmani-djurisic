"use client";

import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Location() {
  const { t } = useLang();

  return (
    <section id="location" className="location" aria-labelledby="location-h">
      <div className="location-inner">
        <div className="g2">
          <Reveal>
            <div className="eyebrow">
              {t({ en: "Location", hr: "Lokacija" })}
            </div>
            <h2 id="location-h">
              {t({ en: "Where to find us", hr: "Gdje se nalazimo" })}
            </h2>
            <p>
              {t({
                en: "The apartments are in Posušje, within reach of the town centre, cafés and shops. Blidinje nature park, Kravica falls and the Adriatic coast are all a comfortable drive away.",
                hr: "Apartmani se nalaze u Posušju, nadohvat centra grada, kafića i trgovina. Dolina Blidinje, Kravica i jadranska obala su ugodna vožnja automobilom.",
              })}
            </p>
            <div className="info-list">
              <div className="row">
                <span className="diamond" aria-hidden="true">
                  ◈
                </span>
                <div>
                  <strong>{t({ en: "Address", hr: "Adresa" })}</strong>
                  <br />
                  <span className="val">
                    {t({
                      en: "Posušje, Bosnia & Herzegovina",
                      hr: "Posušje, Bosna i Hercegovina",
                    })}
                  </span>
                </div>
              </div>
              <div className="row">
                <span className="diamond" aria-hidden="true">
                  ◈
                </span>
                <div>
                  <strong>{t({ en: "Parking", hr: "Parking" })}</strong>
                  <br />
                  <span className="val">
                    {t({
                      en: "Free parking on site",
                      hr: "Besplatan parking na licu mjesta",
                    })}
                  </span>
                </div>
              </div>
            </div>
            <a
              href={site.mapsPin}
              target="_blank"
              rel="noopener"
              className="btn btn-outline"
              style={{ marginTop: 26 }}
            >
              {t({
                en: "Open in Google Maps →",
                hr: "Otvori u Google kartama →",
              })}
            </a>
          </Reveal>
          <Reveal delay={100}>
            <div className="map-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d846.3400865338881!2d17.324516028562307!3d43.47573579818691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134b270f8dd03eb7%3A0xcb9b3fe1f5ab0ee0!2sZagreba%C4%8Dka%2024%2C%20Posu%C5%A1je%2088240!5e1!3m2!1sen!2sba!4v1783422685004!5m2!1sen!2sba"
                width="600"
                height="450"
                title={t({ en: "Map of Posušje", hr: "Karta Posušja" })}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
