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
            en: "Two thoughtfully finished apartments, each for two guests, on a quiet spot within reach of the centre of Posušje. Natural oak, soft neutral tones and every modern comfort — your calm home away from home.",
            hr: "Dva pažljivo uređena apartmana, svaki za dvije osobe, smještena na tihoj lokaciji nadohvat centra Posušja. Prirodni hrast, mekane neutralne boje i sve moderne pogodnosti — vaš mirni dom daleko od doma.",
          })}
        </p>
      </Reveal>
    </div>
  );
}
