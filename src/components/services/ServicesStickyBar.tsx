"use client";

import { useState, useEffect } from "react";

// =============================================================================
// ServicesStickyBar Component — Image by LUI
// =============================================================================
// Sticky bottom bar for the Services Overview page. Terracotta background.
// Left: text (11px uppercase white) + subtext (10px 55% opacity).
// Right: arrow (→).
// Full-width, z-20 above content. Shadow: 0 -4px 16px rgba(44,36,32,0.12).
//
// Behavior:
//   - Hidden until user scrolls past the hero section
//   - Hidden when footer enters viewport (footer has its own CTA)
//   - Shifts the WhatsApp floating button up when visible
//   - Mobile only (hidden on lg+) — matches existing MobileCTABar pattern
//
// Why not reuse MobileCTABar:
//   The existing MobileCTABar renders a single centered button with hardcoded
//   text. This component has a split layout (text left, arrow right) and
//   different copy per page. Merging would overcomplicate MobileCTABar.
//
// Used on: Services Overview page only (EN + ES).
// =============================================================================

interface ServicesStickyBarProps {
  text: string;
  subtext: string;
  href: string;
}

export default function ServicesStickyBar({
  text,
  subtext,
  href,
}: ServicesStickyBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let pastHero = false;
    let atFooter = false;

    const update = () => setVisible(pastHero && !atFooter);

    const hero = document.querySelector("main > section:first-of-type");
    if (!hero) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => { pastHero = !entry.isIntersecting; update(); },
      { threshold: 0 }
    );
    heroObserver.observe(hero);

    const footer = document.getElementById("site-footer");
    let footerObserver: IntersectionObserver | null = null;
    if (footer) {
      footerObserver = new IntersectionObserver(
        ([entry]) => { atFooter = entry.isIntersecting; update(); },
        { threshold: 0 }
      );
      footerObserver.observe(footer);
    }

    return () => {
      heroObserver.disconnect();
      footerObserver?.disconnect();
    };
  }, []);

  // Shift WhatsApp button when bar is visible
  useEffect(() => {
    const whatsappBtn = document.querySelector<HTMLElement>(
      "a[aria-label*='WhatsApp']"
    );
    if (whatsappBtn) {
      whatsappBtn.style.transition = "transform 0.2s ease";
      whatsappBtn.style.transform = visible
        ? "translateY(-52px)"
        : "translateY(0)";
    }
  }, [visible]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book free color analysis on Calendly (opens in new tab)"
      className={`fixed bottom-0 left-0 right-0 z-20 lg:hidden bg-terracotta px-5 py-3.5 flex items-center justify-between no-underline hover:no-underline transition-transform duration-300 ease-out active:bg-terracotta-dark ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ boxShadow: "0 -4px 16px rgba(44,36,32,0.12)" }}
    >
      <span className="text-white font-body font-semibold text-[11px] tracking-[1.2px] uppercase">
        {text}
        <span className="text-white/55 font-normal text-[10px] tracking-normal normal-case ml-1.5">
          {subtext}
        </span>
      </span>
      <span className="text-white/80 text-[18px]" aria-hidden="true">
        →
      </span>
    </a>
  );
}
