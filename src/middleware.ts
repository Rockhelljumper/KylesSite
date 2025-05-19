import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get the origin making the request
  const origin = request.headers.get("origin") || "";

  // Get response from the target
  const response = NextResponse.next();

  // Add CORS headers
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Accept"
  );
  response.headers.set("Access-Control-Max-Age", "86400");

  return response;
}

// Configure which paths should handle CORS
export const config = {
  matcher: [
    "/api/:path*", // Apply to all API routes
  ],
};
