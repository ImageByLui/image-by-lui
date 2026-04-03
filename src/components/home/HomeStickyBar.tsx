"use client";
import { useEffect, useState, useRef } from "react";

interface HomeStickyBarProps {
  text: string;
  href: string;
}

export default function HomeStickyBar({ text, href }: HomeStickyBarProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const target = document.querySelector("[data-section='bcta']");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-[80] transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
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
