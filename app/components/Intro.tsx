"use client";

import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Intro() {
  const { t } = useLang();

  return (
    <div className="intro">
      <Reveal className="intro-inner">
        <div className="eyebrow">{t({ en: "Welcome", hr: "Dobrodošli" })}</div>
        <p>
          {t({
            en: "Apartmani Đurišić offers apartments in Posušje for both short and longer stays — two thoughtfully finished apartments, each for two guests, on a quiet spot within reach of the town centre. Soft neutral tones and every modern comfort — whether for a night or a longer break, your calm home away from home.",
            hr: "Apartmani Đurišić nude stan na dan, ali i smještaj za duži boravak u Posušju — dva pažljivo uređena apartmana, svaki za dvije osobe, na tihoj lokaciji nadohvat centra grada. Mekane neutralne boje i sve moderne pogodnosti — bilo za jednu noć ili duži odmor, vaš mirni dom daleko od doma.",
          })}
        </p>
      </Reveal>
    </div>
  );
}
