"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { getCurrentLanguage } from "@/lib/language";
import { getCalendlyUrl } from "@/config/site.config";

// =============================================================================
// MobileCTABar Component — Image by LUI
// =============================================================================
// Persistent conversion bar on mobile (≤768px). Fixed bottom, full width.
// Shows when hero is NOT in viewport. Hides when user scrolls back to hero.
// Shifts WhatsApp button up by 56px when visible to avoid overlap.
// =============================================================================

const CTA_TEXT = {
  en: "FREE COLOR SESSION",
  es: "SESIÓN DE COLOR GRATIS",
};

export default function MobileCTABar() {
  const pathname = usePathname();
  const lang = getCurrentLanguage(pathname);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Find the hero section — first <section> in <main>
    const hero = document.querySelector("main > section:first-of-type");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show bar when hero is NOT intersecting (scrolled past)
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Shift WhatsApp button when bar is visible
  useEffect(() => {
    const whatsappBtn = document.querySelector<HTMLElement>("a[aria-label*='WhatsApp']");
    if (whatsappBtn) {
      whatsappBtn.style.transition = "transform 0.2s ease";
      whatsappBtn.style.transform = visible ? "translateY(-56px)" : "translateY(0)";
    }
  }, [visible]);

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
        className="flex items-center justify-center w-full h-[56px] bg-terracotta text-white font-body font-semibold text-[14px] uppercase tracking-[1.5px] no-underline hover:no-underline hover:bg-terracotta-dark transition-colors"
      >
        {CTA_TEXT[lang]}
      </a>
    </div>
  );
}
