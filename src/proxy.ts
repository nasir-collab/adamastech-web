import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SUPPORTED_REGION_CODES } from "./lib/regions";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore static assets, api, next internals, and file extensions
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0]?.toLowerCase();

  // If first segment is one of the supported region codes (in, ae, uk, us)
  if (firstSegment && SUPPORTED_REGION_CODES.includes(firstSegment)) {
    // Determine the underlying target path (e.g. /in -> /, /in/services -> /services)
    const subPathSegments = segments.slice(1);
    const internalPath = subPathSegments.length === 0 ? "/" : "/" + subPathSegments.join("/");

    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = internalPath;

    const response = NextResponse.rewrite(rewriteUrl);

    // Save region header and cookie for seamless state detection
    response.headers.set("x-adamastech-region", firstSegment);
    response.cookies.set("adamastech_region", firstSegment, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      sameSite: "lax",
    });

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all files with extensions (e.g. favicon.ico, images, robots.txt)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
