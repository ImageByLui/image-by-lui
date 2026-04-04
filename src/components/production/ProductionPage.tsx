"use client";

// =============================================================================
// ProductionPage — Main Single-Page Component
// =============================================================================
// Client component for scroll-reveal animations via IntersectionObserver.
// Receives all content as props — no hardcoded strings.
// =============================================================================

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import type { ProductionContent } from "@/content/production-types";
import {
  SHOW_CREDITS,
  BRAND_FILTER,
  IMAGES,
  CREDITS,
} from "@/config/production";

interface Props {
  content: ProductionContent;
}

// ── WhatsApp SVG Icon ──
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.12 1.523 5.853L.06 23.698a.5.5 0 00.61.61l5.845-1.463A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.883 0-3.672-.508-5.235-1.434l-.376-.222-3.896.975.993-3.63-.244-.388A9.71 9.71 0 012.25 12 9.75 9.75 0 0112 2.25 9.75 9.75 0 0121.75 12 9.75 9.75 0 0112 21.75z" />
  </svg>
);

// ── Email SVG Icon ──
const EmailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 4L12 13 2 4" />
  </svg>
);

export default function ProductionPage({ content: c }: Props) {
  const pageRef = useRef<HTMLDivElement>(null);

  // ── Scroll Reveal via IntersectionObserver ──
  const setupObserver = useCallback(() => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll(".p-reveal, .p-reveal-scale");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            if (el.classList.contains("p-reveal")) {
              el.classList.add("p-reveal--visible");
            }
            if (el.classList.contains("p-reveal-scale")) {
              el.classList.add("p-reveal-scale--visible");
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cleanup = setupObserver();
    return cleanup;
  }, [setupObserver]);

  const locale = c.locale;

  return (
    <div data-page="production" ref={pageRef}>
      {/* ══════════════════════════════════════════════════════════════════
          S0: TOP BAR
          ══════════════════════════════════════════════════════════════════ */}
      <div className="p-topbar">
        <a
          href="https://imagebylui.com"
          className="p-logo"
          aria-label="Image by LUI — home"
        >
          <span className="p-logo-main">IMAGE</span>
          <div className="p-logo-rule" aria-hidden="true" />
          <span className="p-logo-sub">by LUI</span>
        </a>
        <a href={c.langToggle.href} className="p-lang" aria-label={`Switch to ${c.langToggle.inactive}`}>
          <span className="p-lang-active">{c.langToggle.active}</span>
          <span className="p-lang-sep">|</span>
          <span>{c.langToggle.inactive}</span>
        </a>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          S1: HERO
          ══════════════════════════════════════════════════════════════════ */}
      <section className="p-hero">
        <Image
          src={IMAGES.hero.src}
          alt={IMAGES.hero.alt}
          width={750}
          height={1000}
          priority
          className="p-hero-img"
          style={{
            objectPosition: IMAGES.hero.objectPosition,
            filter: BRAND_FILTER,
          }}
          sizes="100vw"
        />
        <div className="p-hero-overlay" aria-hidden="true" />
        <div className="p-hero-text">
          <h1 className="p-hero-h1">
            {c.hero.headline.split("\n").map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
            <span className="p-hero-h1-italic">{c.hero.headlineItalic}</span>
          </h1>
        </div>
      </section>

      {/* ── Story Line ── */}
      <div className="p-story-line" aria-hidden="true">
        <div className="p-story-bar" />
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          S2: SERVICES
          ══════════════════════════════════════════════════════════════════ */}
      <section className="p-services p-reveal">
        <div className="p-label">{c.services.label}</div>
        <p className="p-svc-intro">{c.services.intro}</p>
        {c.services.capabilities.map((cap, i) => (
          <div
            key={cap.number}
            className={`p-cap p-reveal p-delay-${i + 1}`}
          >
            <div className="p-cap-num">{cap.number}</div>
            <div>
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          TRANSITIONAL BEAT
          ══════════════════════════════════════════════════════════════════ */}
      <div className="p-beat p-reveal" role="presentation">
        <span className="p-beat-text">{c.beat}</span>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          S3: PORTFOLIO — On Set
          ══════════════════════════════════════════════════════════════════ */}
      <section className="p-folio">
        <div className="p-label">{c.portfolio.label}</div>

        {/* Lead — full bleed */}
        <div className="p-reveal-scale" style={{ position: "relative" }}>
          <Image
            src={IMAGES.portfolio[0].src}
            alt={IMAGES.portfolio[0].alt}
            width={750}
            height={520}
            className="p-folio-lead"
            style={{
              objectPosition: IMAGES.portfolio[0].objectPosition,
              filter: BRAND_FILTER,
            }}
            loading="lazy"
            sizes="100vw"
          />
          <span className="p-folio-caption">
            {locale === "es"
              ? IMAGES.portfolio[0].captionES
              : IMAGES.portfolio[0].captionEN}
          </span>
        </div>

        {/* Row 1: tall left (57%) + small right */}
        <div className="p-folio-row p-folio-r1">
          <div className="p-folio-cell p-reveal-scale p-delay-1">
            <Image
              src={IMAGES.portfolio[1].src}
              alt={IMAGES.portfolio[1].alt}
              width={440}
              height={660}
              style={{
                objectPosition: IMAGES.portfolio[1].objectPosition,
                filter: BRAND_FILTER,
              }}
              loading="lazy"
              sizes="(max-width: 768px) 57vw, 400px"
            />
            <span className="p-folio-caption">
              {locale === "es"
                ? IMAGES.portfolio[1].captionES
                : IMAGES.portfolio[1].captionEN}
            </span>
          </div>
          <div className="p-folio-cell p-reveal-scale p-delay-2">
            <Image
              src={IMAGES.portfolio[2].src}
              alt={IMAGES.portfolio[2].alt}
              width={300}
              height={400}
              style={{
                objectPosition: IMAGES.portfolio[2].objectPosition,
                filter: BRAND_FILTER,
              }}
              loading="lazy"
              sizes="(max-width: 768px) 43vw, 300px"
            />
            <span className="p-folio-caption">
              {locale === "es"
                ? IMAGES.portfolio[2].captionES
                : IMAGES.portfolio[2].captionEN}
            </span>
          </div>
        </div>

        {/* Row 2: small left + tall right (57%) */}
        <div className="p-folio-row p-folio-r2">
          <div className="p-folio-cell p-reveal-scale p-delay-1">
            <Image
              src={IMAGES.portfolio[3].src}
              alt={IMAGES.portfolio[3].alt}
              width={300}
              height={400}
              style={{
                objectPosition: IMAGES.portfolio[3].objectPosition,
                filter: BRAND_FILTER,
              }}
              loading="lazy"
              sizes="(max-width: 768px) 43vw, 300px"
            />
            <span className="p-folio-caption">
              {locale === "es"
                ? IMAGES.portfolio[3].captionES
                : IMAGES.portfolio[3].captionEN}
            </span>
          </div>
          <div className="p-folio-cell p-reveal-scale p-delay-2">
            <Image
              src={IMAGES.portfolio[4].src}
              alt={IMAGES.portfolio[4].alt}
              width={440}
              height={560}
              style={{
                objectPosition: IMAGES.portfolio[4].objectPosition,
                filter: BRAND_FILTER,
              }}
              loading="lazy"
              sizes="(max-width: 768px) 57vw, 400px"
            />
            <span className="p-folio-caption">
              {locale === "es"
                ? IMAGES.portfolio[4].captionES
                : IMAGES.portfolio[4].captionEN}
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          S4: PRODUCTION CREDITS (conditional)
          ══════════════════════════════════════════════════════════════════ */}
      {SHOW_CREDITS && CREDITS.length > 0 && (
        <section className="p-credits p-reveal">
          <div className="p-label">{c.credits.label}</div>
          <div>
            {CREDITS.map((credit) => (
              <div key={credit.name} className="p-cred-item">
                <span className="p-cred-name">{credit.name}</span>
                <span className="p-cred-meta">
                  {credit.type} ·{" "}
                  <span className="p-cred-role">
                    {locale === "es" ? credit.roleES : credit.roleEN}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          S5: INDUSTRY
          ══════════════════════════════════════════════════════════════════ */}
      <section className="p-industry p-reveal">
        <div className="p-label">{c.industry.label}</div>
        <div className="p-ind-scroll">
          {IMAGES.industry.map((item) => (
            <div key={item.label} className="p-ind-item">
              <Image
                src={item.src}
                alt={item.alt}
                width={272}
                height={352}
                style={{ filter: BRAND_FILTER }}
                loading="lazy"
                sizes="136px"
              />
              <div className="p-ind-label">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          S6: RATES
          ══════════════════════════════════════════════════════════════════ */}
      <section className="p-rates p-reveal">
        <div className="p-label p-label--solo">{c.rates.label}</div>
        <p
          className="p-rates-quote"
          dangerouslySetInnerHTML={{ __html: c.rates.priceText }}
        />
        <div className="p-rates-dot" aria-hidden="true" />
        <div className="p-rates-meta">
          {c.rates.details.map((d, i) => (
            <span key={i}>
              {d}
              <br />
            </span>
          ))}
          <span className="p-rates-bilingual">{c.rates.bilingual}</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          S7: CONTACT CTA
          ══════════════════════════════════════════════════════════════════ */}
      <section className="p-cta p-reveal">
        <h2
          className="p-cta-h2"
          dangerouslySetInnerHTML={{
            __html: c.contact.headline.replace(/\n/g, "<br>"),
          }}
        />
        <div className="p-cta-buttons">
          <a
            href={c.contact.whatsappUrl}
            className="p-btn p-btn--gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            {c.contact.whatsappLabel}
          </a>
          <a href={c.contact.emailUrl} className="p-btn p-btn--outline">
            <EmailIcon />
            {c.contact.emailLabel}
          </a>
        </div>
        <a
          href={c.contact.instagramUrl}
          className="p-cta-ig"
          target="_blank"
          rel="noopener noreferrer"
        >
          {c.contact.instagram}
        </a>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FOOTER
          ══════════════════════════════════════════════════════════════════ */}
      <footer className="p-footer">
        <div className="p-ft-logo" aria-hidden="true">
          <span className="p-ft-logo-main">IMAGE</span>
          <div className="p-ft-logo-rule" />
          <span className="p-ft-logo-sub">by LUI</span>
        </div>
        <div className="p-ft-tagline">{c.footer.tagline}</div>
        <a
          href="https://imagebylui.com"
          className="p-ft-crosslink"
          target="_blank"
          rel="noopener noreferrer"
        >
          {c.footer.crossLink} {c.footer.crossLinkSite}
        </a>
        <div className="p-ft-copyright">{c.footer.copyright}</div>
      </footer>
    </div>
  );
}
