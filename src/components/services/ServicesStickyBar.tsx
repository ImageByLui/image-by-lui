"use client";
import { useState, useEffect } from "react";

interface ServicesStickyBarProps { text: string; subtext: string; href: string; }

export default function ServicesStickyBar({ text, subtext, href }: ServicesStickyBarProps) {
  const [atFooter, setAtFooter] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setAtFooter(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const wa = document.querySelector<HTMLElement>("a[aria-label*='WhatsApp']");
    if (!wa) return;
    wa.style.transition = "transform 0.2s ease, opacity 0.2s ease";
    if (atFooter) {
      wa.style.transform = "translateY(0)";
      wa.style.opacity = "0";
      wa.style.pointerEvents = "none";
    } else {
      wa.style.transform = "translateY(-64px)";
      wa.style.opacity = "1";
      wa.style.pointerEvents = "auto";
    }
  }, [atFooter]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-30 lg:hidden transition-transform duration-300 ease-out ${
        atFooter ? "translate-y-full" : "translate-y-0"
      }`}
      style={{ boxShadow: "0 -2px 8px rgba(0,0,0,0.1)" }}
    >
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Quick booking"
        className="flex items-center justify-center gap-1 w-full h-[56px] bg-terracotta text-white font-body no-underline hover:no-underline hover:bg-terracotta-dark transition-colors">
        <span className="font-semibold text-sticky tracking-[1px] uppercase">{text}</span>
        <span className="text-sticky text-white/70">{subtext}</span>
        <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/70 ml-1" aria-hidden="true"><path d="M5 10h10M11 6l4 4-4 4" /></svg>
      </a>
    </div>
  );
}
