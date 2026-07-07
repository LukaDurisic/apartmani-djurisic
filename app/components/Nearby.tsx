"use client";

import { useLang, type Localized } from "@/lib/i18n";
import Reveal from "./Reveal";

type Spot = { title: Localized; distance: Localized; desc: Localized };

const spots: Spot[] = [
  {
    title: { en: "Posušje town centre", hr: "Centar Posušja" },
    distance: { en: "5 min walk", hr: "5 min pješice" },
    desc: {
      en: "Cafés, restaurants, bakeries and shops — all a short stroll from the apartments.",
      hr: "Kafići, restorani, pekare i trgovine — sve na kratkoj šetnji od apartmana.",
    },
  },
  {
    title: { en: "Blidinje Nature Park", hr: "Park prirode Blidinje" },
    distance: { en: "≈ 45 min drive", hr: "≈ 45 min vožnje" },
    desc: {
      en: "Mountain landscapes, hiking trails and unspoilt nature for a day trip.",
      hr: "Planinski krajolici, staze i netaknuta priroda za dnevni izlet.",
    },
  },
  {
    title: { en: "Kravica Waterfalls", hr: "Slapovi Kravica" },
    distance: { en: "≈ 50 min drive", hr: "≈ 50 min vožnje" },
    desc: {
      en: "Beautiful cascades, perfect for a swim during the warmer months.",
      hr: "Prekrasni slapovi savršeni za kupanje u toplim mjesecima.",
    },
  },
  {
    title: { en: "Adriatic coast", hr: "Jadranska obala" },
    distance: { en: "≈ 1 h drive", hr: "≈ 1 h vožnje" },
    desc: {
      en: "The Makarska riviera and Dalmatian beaches are within reach for a seaside day.",
      hr: "Makarska rivijera i dalmatinske plaže nadohvat su za dnevni odmor uz more.",
    },
  },
];

export default function Nearby() {
  const { t } = useLang();

  return (
    <section id="nearby" className="dark" aria-labelledby="nearby-h">
      <div className="nearby-inner">
        <div className="nearby-head">
          <div className="eyebrow">{t({ en: "Nearby", hr: "Okolica" })}</div>
          <h2 id="nearby-h">
            {t({
              en: "Things to do around Posušje",
              hr: "Što razgledati u blizini",
            })}
          </h2>
        </div>
        <div className="nearby-grid">
          {spots.map((s, i) => (
            <Reveal key={s.title.en} className="nearby-card" delay={(i % 4) * 70}>
              <div className="title">{t(s.title)}</div>
              <div className="distance">{t(s.distance)}</div>
              <p>{t(s.desc)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
