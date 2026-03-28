import type { Metadata } from "next";
import { contactContent } from "@/content/en/contact";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(contactContent.seo, "en", "contact");

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
