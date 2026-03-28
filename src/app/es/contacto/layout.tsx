import type { Metadata } from "next";
import { contactContentEs } from "@/content/es/contacto";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(contactContentEs.seo, "es", "contact");

export default function ContactLayoutEs({ children }: { children: React.ReactNode }) {
  return children;
}
