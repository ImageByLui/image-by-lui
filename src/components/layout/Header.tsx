"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCurrentLanguage } from "@/lib/language";
import LanguageSwitcher from "@/components/features/LanguageSwitcher";
import MobileMenu from "@/components/layout/MobileMenu";
import type { NavItem } from "@/types/content";

// =============================================================================
// Header Component — Image by LUI
// =============================================================================
// Logo: "IMAGE BY" in Libre Franklin Light 11px uppercase tracked +
//        "LUI" in Cormorant Garamond SemiBold 24px. All Espresso.
// Desktop: logo left, nav center, language switcher right.
// Mobile: logo left, hamburger right, MobileMenu overlay.
// Sticky on scroll with subtle shadow.
// =============================================================================

// Navigation items — language-specific content loaded from content files.
// These defaults are used directly; pages can override via content imports.
const NAV_EN: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const NAV_ES: NavItem[] = [
  { label: "Inicio", href: "/es" },
  { label: "Servicios", href: "/es/servicios" },
  { label: "Sobre Lu", href: "/es/sobre-mi" },
  { label: "Contacto", href: "/es/contacto" },
  { label: "Blog", href: "/es/blog" },
];

export default function Header() {
  const pathname = usePathname();
  const lang = getCurrentLanguage(pathname);
  const navItems = lang === "es" ? NAV_ES : NAV_EN;
  const homeHref = lang === "es" ? "/es" : "/";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sticky header shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-warm-ivory transition-shadow duration-200 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href={homeHref}
              className="flex flex-col items-start leading-none no-underline hover:no-underline group"
              aria-label="Image by LUI — Home"
            >
              <span className="font-body font-light text-[10px] md:text-[11px] uppercase tracking-[3px] text-espresso" aria-hidden="true">
                Image by
              </span>
              <span className="font-heading font-semibold text-[22px] md:text-[24px] text-espresso -mt-1" aria-hidden="true">
                LUI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-body text-[14px] tracking-[0.5px] no-underline hover:no-underline transition-colors ${
                    pathname === item.href
                      ? "text-terracotta font-semibold"
                      : "text-espresso hover:text-terracotta"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Language Switcher */}
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-espresso p-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
}
