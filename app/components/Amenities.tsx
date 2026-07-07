"use client";

import { useLang, type Localized } from "@/lib/i18n";
import Reveal from "./Reveal";

const amenities: Localized[] = [
  { en: "Free WiFi", hr: "Besplatni WiFi" },
  { en: "Air conditioning", hr: "Klima uređaj" },
  { en: "Private bathroom", hr: "Privatna kupaonica" },
  { en: "Kitchenette (Apt 1)", hr: "Kuhinja (Apartman 1)" },
  { en: "Smart TV", hr: "Smart TV" },
  { en: "Free parking", hr: "Besplatan parking" },
  { en: "Washing machine", hr: "Perilica rublja" },
  { en: "Near city centre", hr: "Blizu centra grada" },
  { en: "Non-smoking", hr: "Zabranjeno pušenje" },
];

export default function Amenities() {
  const { t } = useLang();

  return (
    <section id="amenities" className="dark" aria-labelledby="amenities-h">
      <div className="amenities-inner">
        <div className="section-head">
          <h2 id="amenities-h">
            {t({ en: "Everything included", hr: "Sadržaji" })}
          </h2>
          <div className="rule" style={{ background: "var(--hairline-dark)" }} />
        </div>
        <ul
          className="amenities-grid"
          style={{ listStyle: "none", margin: 0, padding: 0 }}
        >
          {amenities.map((a, i) => (
            <Reveal as="li" key={a.en} className="amenity" delay={(i % 3) * 70}>
              <span className="diamond" aria-hidden="true">
                ◈
              </span>
              {t(a)}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
