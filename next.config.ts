import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strict React mode for catching potential issues during development
  reactStrictMode: true,

  // Image optimization — allow Calendly and Instagram domains for future embeds
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
