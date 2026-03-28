"use client";

import { useEffect } from "react";
import Link from "next/link";
import LanguageSwitcher from "@/components/features/LanguageSwitcher";
import type { NavItem } from "@/types/content";

// =============================================================================
// MobileMenu Component — Image by LUI
// =============================================================================
// Full-screen overlay menu for mobile. Triggered by hamburger in Header.
// Includes nav links and language switcher. Locks body scroll when open.
// =============================================================================

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-espresso/60"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu panel */}
      <nav
        className="absolute top-0 right-0 h-full w-[280px] bg-warm-ivory shadow-xl flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Close button */}
        <div className="flex justify-end p-5">
          <button
            onClick={onClose}
            className="text-espresso p-1"
            aria-label="Close menu"
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div className="flex flex-col px-6 gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="font-body font-normal text-[16px] text-espresso py-3 border-b border-champagne no-underline hover:text-terracotta transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Language switcher */}
        <div className="px-6 mt-8">
          <LanguageSwitcher />
        </div>
      </nav>
    </div>
  );
}
