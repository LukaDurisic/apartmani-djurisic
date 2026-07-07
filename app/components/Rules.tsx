"use client";

import { useLang, type Localized } from "@/lib/i18n";
import Reveal from "./Reveal";

const rules: Localized[] = [
  {
    en: "No smoking inside the apartments",
    hr: "Zabranjeno pušenje u apartmanima",
  },
  { en: "Quiet hours 22:00 – 07:00", hr: "Mir za susjede od 22:00 do 07:00" },
  { en: "Up to 2 guests per apartment", hr: "Najviše 2 gosta po apartmanu" },
  {
    en: "Please treat the space as your own home",
    hr: "Čuvajte prostor kao svoj dom",
  },
];

export default function Rules() {
  const { t } = useLang();

  return (
    <section id="rules" className="rules-section" aria-labelledby="rules-h">
      <div className="g2">
        <Reveal>
          <div className="eyebrow">
            {t({ en: "Check-in & out", hr: "Prijava i odjava" })}
          </div>
          <h2 id="rules-h">{t({ en: "Your arrival", hr: "Vaš dolazak" })}</h2>
          <div className="arrival">
            <div>
              <div className="label">
                {t({ en: "Check-in", hr: "Prijava" })}
              </div>
              <div className="figure">
                {t({ en: "from 14:00", hr: "od 14:00" })}
              </div>
            </div>
            <div>
              <div className="label">
                {t({ en: "Check-out", hr: "Odjava" })}
              </div>
              <div className="figure">
                {t({ en: "until 10:00", hr: "do 10:00" })}
              </div>
            </div>
          </div>
          <p>
            {t({
              en: "We'll meet you in person and hand over the keys. Let us know your approximate arrival time so we can have everything ready — we're flexible whenever we can be.",
              hr: "Dočekat ćemo vas osobno i predati ključeve. Javite nam okvirno vrijeme dolaska kako bismo sve pripremili — fleksibilni smo kad god je moguće.",
            })}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="eyebrow">
            {t({ en: "House rules", hr: "Kućni red" })}
          </div>
          <h2>{t({ en: "A few gentle asks", hr: "Nekoliko molbi" })}</h2>
          <div className="rule-list">
            {rules.map((r) => (
              <div key={r.en} className="item">
                <span className="diamond" aria-hidden="true">
                  ◈
                </span>
                <span>{t(r)}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
