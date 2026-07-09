"use client";

import Image from "next/image";
import { useLang, type Localized } from "@/lib/i18n";
import Reveal from "./Reveal";

type Apt = {
  lead: string;
  leadAlt: Localized;
  tag: Localized;
  tagClass: "tag--espresso" | "tag--olive";
  thumbs: { src: string; alt: Localized }[];
  name: Localized;
  price: number;
  desc: Localized;
  chips: Localized[];
};

const apartments: Apt[] = [
  {
    lead: "/assets/IMG-20260705-WA0002.jpg",
    leadAlt: { en: "Apartment 1 kitchen", hr: "Kuhinja apartmana 1" },
    tag: { en: "With kitchen", hr: "S kuhinjom" },
    tagClass: "tag--espresso",
    thumbs: [
      { src: "/assets/IMG-20260702-WA0060.jpg", alt: { en: "Kitchen", hr: "Kuhinja" } },
      { src: "/assets/IMG-20260702-WA0061.jpg", alt: { en: "Bedroom", hr: "Spavaća soba" } },
    ],
    name: { en: "Apartment 1", hr: "Apartman 1" },
    price: 50,
    desc: {
      en: "A spacious stay for two with its own kitchenette — induction hob, sink and a dining nook. A comfortable double bed, marble bathroom and everything for a longer stay.",
      hr: "Prostrani apartman za dvoje s vlastitom kuhinjom — indukcijska ploča, sudoper i kutak za blagovanje. Udoban bračni krevet, mramorna kupaonica i sve za duži boravak.",
    },
    chips: [
      { en: "Kitchenette", hr: "Kuhinja" },
      { en: "Dining nook", hr: "Blagovaonica" },
      { en: "Private bathroom", hr: "Privatna kupaonica" },
    ],
  },
  {
    lead: "/assets/IMG-20260702-WA0049.jpg",
    leadAlt: { en: "Apartment 2 bedroom", hr: "Spavaća soba apartmana 2" },
    tag: { en: "Cosy double", hr: "Ugodni dvokrevetni" },
    tagClass: "tag--olive",
    thumbs: [
      { src: "/assets/IMG-20260702-WA0052.jpg", alt: { en: "Bedroom", hr: "Spavaća soba" } },
      { src: "/assets/IMG-20260702-WA0050.jpg", alt: { en: "Bathroom", hr: "Kupaonica" } },
    ],
    name: { en: "Apartment 2", hr: "Apartman 2" },
    price: 45,
    desc: {
      en: "A serene double with soft textures and warm details. Its own marble bathroom and every comfort — perfect for a short city break for two.",
      hr: "Miran dvokrevetni apartman s mekim teksturama i toplim detaljima. Vlastita mramorna kupaonica i sve pogodnosti — savršen za kraći gradski predah za dvoje.",
    },
    chips: [
      { en: "Double bed", hr: "Bračni krevet" },
      { en: "Private bathroom", hr: "Privatna kupaonica" },
      { en: "Near centre", hr: "Blizu centra" },
    ],
  },
];

export default function Apartments() {
  const { t } = useLang();

  return (
    <section id="apartments" className="apt-section" aria-labelledby="apartments-h">
      <div className="section-head">
        <h2 id="apartments-h">
          {t({ en: "The two apartments", hr: "Naša dva apartmana" })}
        </h2>
        <div className="rule" />
        <div
          style={{
            fontSize: 12,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--tan)",
          }}
        >
          01 — 02
        </div>
      </div>

      <div className="g2">
        {apartments.map((apt, i) => (
          <Reveal key={apt.name.en} className="apt-card" delay={i * 90}>
            <div className="lead-img">
              <Image
                src={apt.lead}
                alt={t(apt.leadAlt)}
                fill
                sizes="(max-width: 880px) 100vw, 50vw"
              />
              <div className={`tag ${apt.tagClass}`}>{t(apt.tag)}</div>
            </div>
            <div className="thumbs">
              {apt.thumbs.map((th) => (
                <div key={th.src} className="thumb">
                  <Image
                    src={th.src}
                    alt={t(th.alt)}
                    fill
                    sizes="(max-width: 880px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
            <div className="apt-namerow">
              <h3>{t(apt.name)}</h3>
              <div className="apt-price">
                €{apt.price}
                <span>{t({ en: " / night", hr: " / noć" })}</span>
              </div>
            </div>
            <p>{t(apt.desc)}</p>
            <div className="chips">
              {apt.chips.map((c) => (
                <span key={c.en} className="chip">
                  {t(c)}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
