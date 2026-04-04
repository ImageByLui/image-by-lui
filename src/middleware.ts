// =============================================================================
// Middleware — Subdomain Routing
// =============================================================================
// Routes production.imagebylui.com to /production/* pages internally.
// Sets x-production-site header so the root layout can conditionally
// exclude consumer-site chrome (Header, Footer, WhatsApp, etc.).
//
// For local development: access via localhost:3000/production directly.
// The subdomain rewrite only activates when the hostname matches.
// =============================================================================

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  // ── Production subdomain routing ──
  // Matches: production.imagebylui.com (prod) and production.localhost:3000 (dev)
  const isProductionSubdomain =
    hostname.startsWith("production.imagebylui.com") ||
    hostname.startsWith("production.localhost");

  if (isProductionSubdomain) {
    // Already on a /production path internally? Just mark it.
    if (pathname.startsWith("/production")) {
      const headers = new Headers(request.headers);
      headers.set("x-production-site", "true");
      return NextResponse.next({ request: { headers } });
    }

    // Rewrite root and /es to internal /production routes
    const url = request.nextUrl.clone();
    url.pathname = `/production${pathname}`;
    const headers = new Headers(request.headers);
    headers.set("x-production-site", "true");
    return NextResponse.rewrite(url, { request: { headers } });
  }

  // ── Direct /production path access (local dev, preview) ──
  if (pathname.startsWith("/production")) {
    const headers = new Headers(request.headers);
    headers.set("x-production-site", "true");
    return NextResponse.next({ request: { headers } });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    "/((?!_next/static|_next/image|favicon.ico|images/|api/).*)",
  ],
};
