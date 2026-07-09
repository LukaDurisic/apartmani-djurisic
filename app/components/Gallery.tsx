"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useLang, type Localized } from "@/lib/i18n";

type Photo = {
  src: string;
  alt: Localized;
  cap: Localized;
};

const CAP_1: Localized = {
  en: "Apartment 1 · With kitchen",
  hr: "Apartman 1 · S kuhinjom",
};
const CAP_2: Localized = {
  en: "Apartment 2 · Cosy double",
  hr: "Apartman 2 · Ugodni bračni",
};

const apt1: Photo[] = [
  {
    src: "/assets/IMG-20260705-WA0002.jpg",
    cap: CAP_1,
    alt: { en: "Apartment 1 kitchen", hr: "Kuhinja apartmana 1" },
  },
  {
    src: "/assets/IMG-20260703-WA0004.jpg",
    cap: CAP_1,
    alt: { en: "Bedroom", hr: "Spavaća soba" },
  },
  {
    src: "/assets/IMG-20260702-WA0061.jpg",
    cap: CAP_1,
    alt: { en: "Bedroom with window", hr: "Spavaća soba s prozorom" },
  },

  {
    src: "/assets/IMG-20260702-WA0056.jpg",
    cap: CAP_1,
    alt: { en: "Bathroom", hr: "Kupaonica" },
  },

  {
    src: "/assets/IMG-20260702-WA0060.jpg",
    cap: CAP_1,
    alt: { en: "Kitchen", hr: "Kuhinja" },
  },
  {
    src: "/assets/IMG-20260703-WA0007.jpg",
    cap: CAP_1,
    alt: { en: "Bedroom", hr: "Spavaća soba" },
  },

  {
    src: "/assets/IMG-20260703-WA0006.jpg",
    cap: CAP_1,
    alt: { en: "Lamp detail", hr: "Detalj lampe" },
  },
];

const apt2: Photo[] = [
  {
    src: "/assets/IMG-20260705-WA0000.jpg",
    cap: CAP_2,
    alt: { en: "Bedroom with mirror", hr: "Spavaća soba s ogledalom" },
  },
  {
    src: "/assets/IMG-20260705-WA0001.jpg",
    cap: CAP_2,
    alt: { en: "Orchid detail", hr: "Detalj orhideje" },
  },

  {
    src: "/assets/IMG-20260702-WA0052.jpg",
    cap: CAP_2,
    alt: { en: "Bedroom", hr: "Spavaća soba" },
  },
  { src: "/assets/tvapt2.jpeg", cap: CAP_2, alt: { en: "TV", hr: "TV" } },
  {
    src: "/assets/IMG-20260702-WA0051.jpg",
    cap: CAP_2,
    alt: { en: "Bathroom shower", hr: "Tuš u kupaonici" },
  },
  {
    src: "/assets/IMG-20260702-WA0049.jpg",
    cap: CAP_2,
    alt: { en: "Bedroom", hr: "Spavaća soba" },
  },
];

// Single ordered list drives lightbox indexing across both blocks.
const allPhotos: Photo[] = [...apt1, ...apt2];

export default function Gallery() {
  const { t } = useLang();
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % allPhotos.length)),
    [],
  );
  const prev = useCallback(
    () =>
      setIndex((i) =>
        i === null ? i : (i - 1 + allPhotos.length) % allPhotos.length,
      ),
    [],
  );

  // Keyboard controls + body scroll lock while the lightbox is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, next, prev]);

  const renderBlock = (
    photos: Photo[],
    offset: number,
    tag: Localized,
    tagClass: string,
    name: Localized,
  ) => (
    <>
      <div className="gallery-block-head">
        <div className={`tag ${tagClass}`}>{t(tag)}</div>
        <h3>{t(name)}</h3>
        <div className="rule" style={{ background: "var(--hairline-soft)" }} />
      </div>
      <div className="gallery-grid">
        {photos.map((p, i) => {
          const globalIndex = offset + i;
          return (
            <button
              type="button"
              key={p.src}
              className={`gallery-item${i === 0 ? " feature" : ""}`}
              onClick={() => setIndex(globalIndex)}
              aria-label={t({
                en: "View larger photo",
                hr: "Prikaži veću fotografiju",
              })}
            >
              <Image
                src={p.src}
                alt={t(p.alt)}
                fill
                sizes={
                  i === 0
                    ? "(max-width: 880px) 100vw, 460px"
                    : "(max-width: 880px) 50vw, 230px"
                }
              />
            </button>
          );
        })}
      </div>
    </>
  );

  return (
    <section
      id="gallery"
      className="gallery-section"
      aria-labelledby="gallery-h"
    >
      <div className="gallery-head">
        <div className="eyebrow">{t({ en: "Gallery", hr: "Galerija" })}</div>
        <h2 id="gallery-h">
          {t({ en: "A closer look", hr: "Pogled izbliza" })}
        </h2>
        <p>
          {t({
            en: "Click any photo to view it larger.",
            hr: "Kliknite bilo koju fotografiju za povećani prikaz.",
          })}
        </p>
      </div>

      {renderBlock(
        apt1,
        0,
        { en: "With kitchen", hr: "S kuhinjom" },
        "tag--espresso",
        { en: "Apartment 1", hr: "Apartman 1" },
      )}
      {renderBlock(
        apt2,
        apt1.length,
        { en: "Cosy double", hr: "Ugodni bračni" },
        "tag--olive",
        { en: "Apartment 2", hr: "Apartman 2" },
      )}

      {open && index !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={t(allPhotos[index].cap)}
          onClick={close}
        >
          <button
            type="button"
            className="lightbox-close"
            aria-label={t({ en: "Close", hr: "Zatvori" })}
            onClick={close}
          >
            ×
          </button>
          <button
            type="button"
            className="lightbox-arrow prev"
            aria-label={t({ en: "Previous", hr: "Prethodna" })}
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            ‹
          </button>
          <button
            type="button"
            className="lightbox-arrow next"
            aria-label={t({ en: "Next", hr: "Sljedeća" })}
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            ›
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="lightbox-img"
            src={allPhotos[index].src}
            alt={t(allPhotos[index].alt)}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="lightbox-cap" onClick={(e) => e.stopPropagation()}>
            <span className="cap">{t(allPhotos[index].cap)}</span>
            <span className="dot" />
            <span className="counter">
              {index + 1} / {allPhotos.length}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
