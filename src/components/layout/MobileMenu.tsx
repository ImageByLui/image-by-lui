"use client";

import { useEffect } from "react";
import Link from "next/link";
import LanguageSwitcher from "@/components/features/LanguageSwitcher";

// =============================================================================
// MobileMenu — Image by LUI (V2 Revision)
// =============================================================================
// V2: Added service sub-pages (Occasion Styling, Image Consulting) indented
// under Services, plus FAQ as a top-level item. Users can now navigate
// between sub-pages directly from the hamburger menu.
// =============================================================================

interface NavItem {
  label: string;
  href: string;
  indent?: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  lang: "en" | "es";
}

const NAV_EN: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Occasion Styling", href: "/services/occasion-styling", indent: true },
  { label: "Image Consulting", href: "/services/image-consulting", indent: true },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const NAV_ES: NavItem[] = [
  { label: "Inicio", href: "/es" },
  { label: "Servicios", href: "/es/servicios" },
  { label: "Estilismo de Ocasión", href: "/es/servicios/estilismo-de-ocasion", indent: true },
  { label: "Consultoría de Imagen", href: "/es/servicios/consultoria-de-imagen", indent: true },
  { label: "FAQ", href: "/es/faq" },
  { label: "Sobre Lu", href: "/es/sobre-mi" },
  { label: "Contacto", href: "/es/contacto" },
];

export default function MobileMenu({ isOpen, onClose, lang }: MobileMenuProps) {
  const navItems = lang === "es" ? NAV_ES : NAV_EN;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-espresso/60" onClick={onClose} aria-hidden="true" />
      <nav className="absolute top-0 right-0 h-full w-[280px] bg-warm-ivory shadow-xl flex flex-col" role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <div className="flex justify-end p-5">
          <button onClick={onClose} className="text-espresso p-1" aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col px-6 gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`font-body text-[16px] text-espresso py-3 border-b border-champagne no-underline hover:text-terracotta transition-colors ${
                item.indent
                  ? "pl-4 text-[14px] text-warm-taupe font-normal"
                  : "font-normal"
              }`}
            >
              {item.indent && <span className="text-gold mr-1.5" aria-hidden="true">→</span>}
              {item.label}
            </Link>
          ))}
        </div>
        <div className="px-6 mt-8">
          <LanguageSwitcher />
        </div>
      </nav>
    </div>
  );
}
