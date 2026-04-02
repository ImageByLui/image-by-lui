"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCurrentLanguage } from "@/lib/language";
import { getCalendlyUrl } from "@/config/site.config";
import LanguageSwitcher from "@/components/features/LanguageSwitcher";
import MobileMenu from "@/components/layout/MobileMenu";
import type { NavItem } from "@/types/content";

// =============================================================================
// Header Component — Image by LUI (Desktop Overhaul — LUI-DESK-001)
// =============================================================================
// Desktop (≥1024px): Logo | Nav Links (with Services ▾ dropdown) | Lang Toggle + CTA
// Mobile (<1024px): Logo | Hamburger → MobileMenu overlay (unchanged)
//
// Scroll transformation: tracked via IntersectionObserver on the hero section.
// When hero exits viewport, nav gets backdrop blur, reduced height, shadow, and
// bottom rule fades out. All transitions 350ms ease.
// =============================================================================

// ---------------------------------------------------------------------------
// Desktop nav items — includes FAQ and dropdown metadata for Services
// ---------------------------------------------------------------------------
interface DesktopNavItem {
  label: string;
  href: string;
  dropdown?: { label: string; subtitle: string; href: string }[];
}

// Mobile nav items (passed to MobileMenu — unchanged)
const NAV_EN: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const NAV_ES: NavItem[] = [
  { label: "Inicio", href: "/es" },
  { label: "Servicios", href: "/es/servicios" },
  { label: "Sobre Lu", href: "/es/sobre-mi" },
  { label: "Contacto", href: "/es/contacto" },
];

// Desktop nav items (includes FAQ + Services dropdown)
const DESKTOP_NAV_EN: DesktopNavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Services Overview", subtitle: "All our services", href: "/services" },
      { label: "Occasion Styling", subtitle: "For your next event", href: "/services/occasion-styling" },
      { label: "Image Consulting", subtitle: "A complete transformation", href: "/services/image-consulting" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const DESKTOP_NAV_ES: DesktopNavItem[] = [
  { label: "Inicio", href: "/es" },
  {
    label: "Servicios",
    href: "/es/servicios",
    dropdown: [
      { label: "Vista General", subtitle: "Todos nuestros servicios", href: "/es/servicios" },
      { label: "Estilismo de Ocasión", subtitle: "Para tu próximo evento", href: "/es/servicios/estilismo-de-ocasion" },
      { label: "Consultoría de Imagen", subtitle: "Una transformación completa", href: "/es/servicios/consultoria-de-imagen" },
    ],
  },
  { label: "Sobre Lu", href: "/es/sobre-mi" },
  { label: "FAQ", href: "/es/faq" },
  { label: "Contacto", href: "/es/contacto" },
];

const CTA_TEXT = { en: "Free Color Analysis", es: "Análisis de Color Gratis" };

// Check if current path matches nav item or any of its dropdown children
function isActive(pathname: string, href: string, dropdown?: DesktopNavItem["dropdown"]): boolean {
  if (pathname === href) return true;
  if (dropdown) return dropdown.some((item) => pathname === item.href);
  return false;
}

// =============================================================================
// Component
// =============================================================================
export default function Header() {
  const pathname = usePathname();
  const lang = getCurrentLanguage(pathname);
  const mobileNavItems = lang === "es" ? NAV_ES : NAV_EN;
  const desktopNavItems = lang === "es" ? DESKTOP_NAV_ES : DESKTOP_NAV_EN;
  const homeHref = lang === "es" ? "/es" : "/";
  const calendlyUrl = getCalendlyUrl("powerPalette");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ---------------------------------------------------------------------------
  // Scroll transformation via IntersectionObserver on hero
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const hero = document.getElementById("hero") ?? document.querySelector("main > section:first-of-type");
    if (!hero) {
      // Fallback: scroll position
      const handleScroll = () => setScrolled(window.scrollY > 10);
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className="sticky top-0 z-40 transition-all duration-[350ms] ease-in-out"
        style={{
          background: scrolled ? "rgba(247,243,239,0.85)" : "rgba(247,243,239,0.95)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 1px 20px rgba(44,36,32,0.06)" : "none",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
          <div
            className="flex items-center justify-between transition-[height] duration-[350ms] ease-in-out"
            style={{ height: scrolled ? 56 : 64 }}
          >
            {/* Logo */}
            <Link href={homeHref} className="no-underline hover:no-underline flex-shrink-0" aria-label="Image by LUI — Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-header.svg" alt="Image by LUI" width={120} height={48} className="h-9 md:h-11 w-auto" />
            </Link>

            {/* ============================================================= */}
            {/* Desktop Navigation (≥1024px)                                   */}
            {/* ============================================================= */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
              {desktopNavItems.map((item) => {
                const active = isActive(pathname, item.href, item.dropdown);

                // --- Services dropdown ---
                if (item.dropdown) {
                  return (
                    <div key={item.href} className="relative group">
                      <Link
                        href={item.href}
                        className={`
                          font-body text-[13px] tracking-[0.4px] no-underline hover:no-underline
                          inline-flex items-center gap-1 py-1 relative transition-colors duration-200
                          ${active ? "text-espresso font-medium" : "text-warm-taupe hover:text-espresso"}
                        `}
                      >
                        {item.label}
                        <svg
                          width="9" height="9" viewBox="0 0 20 20" fill="none"
                          stroke="currentColor" strokeWidth="2" aria-hidden="true"
                          className="transition-transform duration-200 group-hover:rotate-180"
                        >
                          <path d="M5 8L10 13L15 8" />
                        </svg>
                        {active && <span className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-terracotta" aria-hidden="true" />}
                      </Link>

                      {/* Dropdown panel */}
                      <div className="
                        absolute top-[calc(100%+14px)] left-[-16px] min-w-[260px]
                        bg-white border border-champagne/30 py-2
                        opacity-0 invisible -translate-y-1.5
                        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                        transition-all duration-[250ms] ease-out
                        shadow-[0_16px_40px_rgba(44,36,32,0.06)]
                      ">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-6 py-3 text-[13px] text-warm-grey no-underline hover:no-underline hover:text-espresso hover:bg-warm-ivory transition-all duration-150"
                          >
                            {sub.label}
                            <span className="block text-[11px] text-warm-taupe font-light mt-[1px]">{sub.subtitle}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                // --- Regular nav link ---
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      font-body text-[13px] tracking-[0.4px] no-underline hover:no-underline
                      py-1 relative group/link transition-colors duration-200
                      ${active ? "text-espresso font-medium" : "text-warm-taupe hover:text-espresso"}
                    `}
                  >
                    {item.label}
                    {active ? (
                      <span className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-terracotta" aria-hidden="true" />
                    ) : (
                      <span className="absolute bottom-[-1px] left-0 w-0 h-[1px] bg-gold transition-[width] duration-300 group-hover/link:w-full" aria-hidden="true" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Language toggle + CTA (desktop only) */}
            <div className="hidden lg:flex items-center gap-5">
              <LanguageSwitcher variant="desktop" />
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-terracotta text-white font-body text-[10px] font-semibold tracking-[1.5px] uppercase px-5 py-[10px] no-underline hover:no-underline hover:bg-terracotta-dark hover:tracking-[2px] transition-all duration-[250ms]"
              >
                {CTA_TEXT[lang]}
              </a>
            </div>

            {/* Mobile: Language toggle + Hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <LanguageSwitcher />
              <button
                className="text-espresso p-2"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <svg
                  width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom rule — fades out on scroll */}
        <div
          className="h-[1px] bg-gold transition-opacity duration-[350ms]"
          style={{ opacity: scrolled ? 0 : 0.4 }}
          aria-hidden="true"
        />
      </header>

      {/* Mobile Menu (unchanged) */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={mobileNavItems}
      />
    </>
  );
}
