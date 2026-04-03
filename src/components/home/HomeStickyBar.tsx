"use client";
import { useEffect, useState } from "react";

interface HomeStickyBarProps {
  text: string;
  href: string;
}

export default function HomeStickyBar({ text, href }: HomeStickyBarProps) {
  const [scrolledPast, setScrolledPast] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  // Show after user scrolls past hero (~300px)
  useEffect(() => {
    const onScroll = () => setScrolledPast(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide when bottom CTA enters viewport
  useEffect(() => {
    const target = document.querySelector("[data-section='bcta']");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setAtBottom(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const visible = scrolledPast && !atBottom;

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-[80] transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(100%)",
        backgroundColor: "#A35741",
        boxShadow: "0 -4px 20px rgba(44,36,32,0.1)",
      }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between px-5 py-3.5 no-underline hover:no-underline"
      >
        <span className="font-body font-semibold text-[11px] tracking-[1.2px] uppercase text-white">
          {text}
        </span>
        <span className="text-white text-[16px]" aria-hidden="true">→</span>
      </a>
    </div>
  );
}
