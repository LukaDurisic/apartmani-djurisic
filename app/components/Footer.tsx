"use client";

import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer">
      <div className="footer-inner g3">
        <div>
          <div className="brand">{site.name}</div>
          <p>
            {t({
              en: "Posušje, Bosnia & Herzegovina. Book directly for the best rate.",
              hr: "Posušje, Bosna i Hercegovina. Rezervirajte izravno za najbolju cijenu.",
            })}
          </p>
        </div>
        <div className="footer-col">
          <div className="head">{t({ en: "Contact", hr: "Kontakt" })}</div>
          <a href={site.phoneHref}>{site.phone}</a>
          <br />
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        <div className="footer-col">
          <div className="head">{t({ en: "Find us", hr: "Pronađite nas" })}</div>
          <a href={site.mapsPin} target="_blank" rel="noopener">
            Google Maps
          </a>
          <br />
          Booking.com · Airbnb
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 {site.name} · Posušje</div>
      </div>
    </footer>
  );
}
