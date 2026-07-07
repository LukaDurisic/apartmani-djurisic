"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLang();

  return (
    <>
      <span id="top" />
      <section className="hero" aria-label="Introduction">
        <div className="hero-txt">
          <div className="eyebrow">
            {t({
              en: "Posušje · Bosnia & Herzegovina",
              hr: "Posušje · Bosna i Hercegovina",
            })}
          </div>
          {/* The place name is emphasised in olive italic, per the design. */}
          <h1>
            {t({ en: "Two calm rooms in the heart of ", hr: "Dva mirna apartmana u srcu " })}
            <em>Posušja</em>
            {t({ en: ".", hr: "." })}
          </h1>
          <p className="hero-lead">
            {t({
              en: "Warm, freshly finished apartments for two — steps from the town centre. Everything you need, nothing you don't.",
              hr: "Topli, novouređeni apartmani za dvoje — na korak od centra grada. Sve što vam treba, ništa suvišno.",
            })}
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 6 }}>
            <a href="#contact" className="btn btn-solid">
              {t({ en: "Book your stay", hr: "Rezervirajte boravak" })}
            </a>
            <a href="#gallery" className="btn btn-outline">
              {t({ en: "View gallery", hr: "Pogledaj galeriju" })}
            </a>
          </div>
        </div>
        <div className="hero-img">
          <Image
            src="/assets/IMG-20260702-WA0055.jpg"
            alt={t({
              en: "Bright bedroom in an Apartmani Đurišić apartment in Posušje",
              hr: "Svijetla spavaća soba u apartmanu Apartmani Đurišić u Posušju",
            })}
            fill
            priority
            sizes="(max-width: 880px) 100vw, 50vw"
          />
          <div className="pricebadge">
            <div className="price">
              €100
              <span>{t({ en: " / night", hr: " / noć" })}</span>
            </div>
            <div className="sub">
              {t({ en: "Sleeps 2 · per apartment", hr: "Za 2 osobe · po apartmanu" })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
