"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { getCurrentLanguage } from "@/lib/language";
import { getCalendlyUrl } from "@/config/site.config";

// =============================================================================
// MobileCTABar Component — Image by LUI (V3 — Redesign)
// =============================================================================
// Sticky bottom bar on mobile (≤768px). Shows after scrolling past hero.
// Hides when footer (#site-footer) enters viewport — the footer has its own
// CTA button that takes over. Smooth slide animation.
//
// Pages with their own sticky CTA (e.g., Services Overview) are excluded
// via PAGES_WITH_OWN_STICKY to avoid double-bar overlap.
// =============================================================================

const CTA_TEXT = {
  en: "BOOK A FREE CONSULTATION",
  es: "RESERVA TU CONSULTA GRATIS",
};

/** Pages that render their own ServicesStickyBar — suppress this global bar */
const PAGES_WITH_OWN_STICKY = [
  "/services",
  "/es/servicios",
  "/services/occasion-styling",
  "/es/servicios/estilismo-de-ocasion",
];

export default function MobileCTABar() {
  const pathname = usePathname();
  const lang = getCurrentLanguage(pathname);
  const [pastHero, setPastHero] = useState(false);
  const [atFooter, setAtFooter] = useState(false);

  const hideOnThisPage = PAGES_WITH_OWN_STICKY.includes(pathname);

  useEffect(() => {
    if (hideOnThisPage) return;

    // Watch the hero — show bar when scrolled past
    const hero = document.querySelector("main > section:first-of-type");
    if (!hero) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0 }
    );
    heroObserver.observe(hero);

    // Watch the footer — hide bar when footer is visible
    const footer = document.getElementById("site-footer");
    let footerObserver: IntersectionObserver | null = null;
    if (footer) {
      footerObserver = new IntersectionObserver(
        ([entry]) => setAtFooter(entry.isIntersecting),
        { threshold: 0 }
      );
      footerObserver.observe(footer);
    }

    return () => {
      heroObserver.disconnect();
      footerObserver?.disconnect();
    };
  }, [hideOnThisPage]);

  // Visible = past the hero AND not at the footer AND not on a page with its own bar
  const visible = !hideOnThisPage && pastHero && !atFooter;

  // Shift WhatsApp button when bar is visible
  useEffect(() => {
    const whatsappBtn = document.querySelector<HTMLElement>("a[aria-label*='WhatsApp']");
    if (whatsappBtn) {
      whatsappBtn.style.transition = "transform 0.2s ease";
      whatsappBtn.style.transform = visible ? "translateY(-56px)" : "translateY(0)";
    }
  }, [visible]);

  // Return null AFTER all hooks (React rules of hooks compliance)
  if (hideOnThisPage) return null;

  const calendlyUrl = getCalendlyUrl("powerPalette");

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-30 lg:hidden transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ boxShadow: "0 -2px 8px rgba(0,0,0,0.1)", borderTop: "1px solid #8A4735" }}
    >
      <a
        href={calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full h-[56px] bg-terracotta text-white font-body font-semibold text-[13px] uppercase tracking-[1.5px] no-underline hover:no-underline hover:bg-terracotta-dark transition-colors"
      >
        {CTA_TEXT[lang]}
      </a>
    </div>
  );
}
