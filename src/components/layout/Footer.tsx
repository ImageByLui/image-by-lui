"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCurrentLanguage } from "@/lib/language";
import { siteConfig, getWhatsAppUrl } from "@/config/site.config";

// =============================================================================
// Footer Component — Image by LUI (Desktop Overhaul — LUI-DESK-001 §1.7)
// =============================================================================
// Mobile: centered stack (unchanged).
// Desktop (≥1024px): 4-column grid on Espresso background:
//   Brand (1.8fr) | Navigate (1fr) | Services (1fr) | Connect (1fr)
//
// Column headings: 10px/600/1.5px ls uppercase, color Taupe
// Links: 13px, color rgba(247,243,239,0.35), hover → Ivory
// =============================================================================

const FOOTER_EN = {
  tagline: "Your image, architected.",
  location: "Serving professionals across Miami-Dade County",
  locationLine2: "Bilingual: English & Spanish",
  whatsappText: "Chat with Lu",
  instagramText: "@imagebylui",
  copyright: `© ${new Date().getFullYear()} Image by LUI. All rights reserved.`,
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  serviceItems: [
    { label: "Your Power Palette (Free)", href: "/services" },
    { label: "Occasion Styling", href: "/services/occasion-styling" },
    { label: "Image Consulting", href: "/services/image-consulting" },
  ],
  headings: { navigate: "Navigate", services: "Services", connect: "Connect" },
};

const FOOTER_ES = {
  tagline: "Tu imagen, arquitectura de estilo.",
  location: "Atendiendo a profesionales en todo el condado de Miami-Dade",
  locationLine2: "Bilingüe: Español e Inglés",
  whatsappText: "Conversa con Lu",
  instagramText: "@imagebylui",
  copyright: `© ${new Date().getFullYear()} Image by LUI. Todos los derechos reservados.`,
  navItems: [
    { label: "Inicio", href: "/es" },
    { label: "Servicios", href: "/es/servicios" },
    { label: "Sobre Lu", href: "/es/sobre-mi" },
    { label: "FAQ", href: "/es/faq" },
    { label: "Contacto", href: "/es/contacto" },
  ],
  serviceItems: [
    { label: "Tu Power Palette (Gratis)", href: "/es/servicios" },
    { label: "Estilismo de Ocasión", href: "/es/servicios/estilismo-de-ocasion" },
    { label: "Consultoría de Imagen", href: "/es/servicios/consultoria-de-imagen" },
  ],
  headings: { navigate: "Navegar", services: "Servicios", connect: "Conectar" },
};

// Link style classes
const linkClass = "block text-[13px] text-warm-ivory/35 mb-[9px] no-underline hover:no-underline hover:text-warm-ivory transition-colors duration-200";
const headingClass = "text-[10px] font-semibold tracking-[1.5px] uppercase text-warm-taupe mb-4";

export default function Footer() {
  const pathname = usePathname();
  const lang = getCurrentLanguage(pathname);
  const content = lang === "es" ? FOOTER_ES : FOOTER_EN;
  const whatsappUrl = getWhatsAppUrl(lang);

  return (
    <footer id="site-footer" className="bg-espresso text-warm-ivory">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12 pt-10 lg:pt-11 pb-6">

        {/* ============================================================= */}
        {/* Grid: 1-col mobile → 4-col desktop                            */}
        {/* ============================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-8 lg:gap-10">

          {/* Column 1: Brand */}
          <div className="text-center md:text-left">
            <div className="mb-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-footer.svg" alt="Image by LUI" width={120} height={48} className="h-10 w-auto mx-auto md:mx-0" />
            </div>
            <p className="font-heading font-light italic text-[15px] text-warm-taupe mb-3">{content.tagline}</p>
            <p className="text-[11px] text-warm-ivory/20 leading-[1.7]">
              {content.location}<br />{content.locationLine2}
            </p>
          </div>

          {/* Column 2: Navigate */}
          <div className="text-center md:text-left">
            <h4 className={`${headingClass} hidden lg:block`}>{content.headings.navigate}</h4>
            <nav className="flex flex-row justify-center gap-5 md:flex-col md:justify-start md:gap-0" aria-label="Footer navigation">
              {content.navItems.map((item) => (
                <Link key={item.href} href={item.href} className={linkClass}>{item.label}</Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Services (desktop only — hidden on mobile/tablet) */}
          <div className="hidden lg:block text-left">
            <h4 className={headingClass}>{content.headings.services}</h4>
            <nav aria-label="Footer services">
              {content.serviceItems.map((item) => (
                <Link key={item.href} href={item.href} className={linkClass}>{item.label}</Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Connect */}
          <div className="text-center md:text-left">
            <h4 className={`${headingClass} hidden lg:block`}>{content.headings.connect}</h4>
            <div className="flex flex-row justify-center gap-5 md:flex-col md:justify-start md:gap-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} inline-flex items-center gap-1.5`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366" className="flex-shrink-0" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {content.whatsappText}
              </a>
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} inline-flex items-center gap-1.5`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                {content.instagramText}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-7 pt-3 border-t border-warm-ivory/[0.03]">
          <p className="text-warm-ivory/[0.12] text-[10px] text-center">{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
