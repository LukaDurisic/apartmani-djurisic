"use client";

import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";

export default function Nav() {
  const { t, lang, toggle } = useLang();

  const links = [
    { href: "#apartments", label: { en: "Apartments", hr: "Apartmani" } },
    { href: "#gallery", label: { en: "Gallery", hr: "Galerija" } },
    { href: "#location", label: { en: "Location", hr: "Lokacija" } },
    { href: "#nearby", label: { en: "Nearby", hr: "Okolica" } },
    { href: "#contact", label: { en: "Contact", hr: "Kontakt" } },
  ];

  return (
    <header className="nav">
      <nav className="nav-inner" aria-label="Primary">
        <a href="#top" className="wordmark">
          {site.name}
        </a>
        <div className="navlinks">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {t(l.label)}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <button
            type="button"
            className="lang-toggle"
            onClick={toggle}
            aria-label={
              lang === "en" ? "Prebaci na hrvatski" : "Switch to English"
            }
          >
            {lang === "en" ? "HR" : "EN"}
          </button>
          <a href="#contact" className="nav-book">
            {t({ en: "Book", hr: "Rezerviraj" })}
          </a>
        </div>
      </nav>
    </header>
  );
}
