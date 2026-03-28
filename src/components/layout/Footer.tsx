"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCurrentLanguage } from "@/lib/language";
import { siteConfig, getWhatsAppUrl } from "@/config/site.config";

// =============================================================================
// Footer Component — Image by LUI
// =============================================================================
// Background: Espresso (#2C2420), Text: Warm Ivory (#F7F3EF)
// Contains: tagline, contact line, WhatsApp link, Instagram, nav, copyright.
// Language-aware — detects from URL path.
// =============================================================================

const FOOTER_EN = {
  tagline: "Your image, architected.",
  contactLine: "Miami, FL | Bilingual: English & Spanish",
  whatsappText: "Chat with Lu on WhatsApp",
  instagramText: "@imagebylui",
  copyright: `© ${new Date().getFullYear()} Image by LUI. All rights reserved.`,
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ],
};

const FOOTER_ES = {
  tagline: "Tu imagen, arquitectura de estilo.",
  contactLine: "Miami, FL | Bilingüe: Español e Inglés",
  whatsappText: "Conversa con Lu por WhatsApp",
  instagramText: "@imagebylui",
  copyright: `© ${new Date().getFullYear()} Image by LUI. Todos los derechos reservados.`,
  navItems: [
    { label: "Inicio", href: "/es" },
    { label: "Servicios", href: "/es/servicios" },
    { label: "Sobre Lu", href: "/es/sobre-mi" },
    { label: "Contacto", href: "/es/contacto" },
    { label: "Blog", href: "/es/blog" },
  ],
};

export default function Footer() {
  const pathname = usePathname();
  const lang = getCurrentLanguage(pathname);
  const content = lang === "es" ? FOOTER_ES : FOOTER_EN;
  const whatsappUrl = getWhatsAppUrl(lang);

  return (
    <footer className="bg-espresso text-warm-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Column 1: Brand */}
          <div>
            {/* Logo */}
            <div className="mb-4">
              <span className="font-body font-light text-[10px] uppercase tracking-[3px] text-warm-ivory block">
                Image by
              </span>
              <span className="font-heading font-semibold text-[22px] text-warm-ivory -mt-1 block">
                LUI
              </span>
            </div>
            <p className="font-heading font-light italic text-[18px] text-warm-ivory/80 mb-3">
              {content.tagline}
            </p>
            <p className="text-[14px] text-warm-ivory/60">
              {content.contactLine}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {content.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-warm-ivory/80 text-[14px] no-underline hover:text-warm-ivory transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Connect */}
          <div>
            <div className="flex flex-col gap-3">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-ivory/80 text-[14px] no-underline hover:text-warm-ivory transition-colors inline-flex items-center gap-2"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {content.whatsappText}
              </a>

              {/* Instagram */}
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-ivory/80 text-[14px] no-underline hover:text-warm-ivory transition-colors inline-flex items-center gap-2"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                {content.instagramText}
              </a>

              {/* TikTok */}
              <a
                href={siteConfig.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-ivory/80 text-[14px] no-underline hover:text-warm-ivory transition-colors inline-flex items-center gap-2"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17v-3.45a4.85 4.85 0 01-3.77-1.26V6.69h3.77z" />
                </svg>
                {siteConfig.tiktok.handle}
              </a>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-10 pt-6 border-t border-warm-ivory/20">
          <p className="text-warm-ivory/50 text-[13px] text-center">
            {content.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
