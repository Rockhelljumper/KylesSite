import { NextResponse } from "next/server";

export function middleware() {
  // Add CORS headers
  const response = NextResponse.next();

  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  return response;
}

// Configure which paths should handle CORS
export const config = {
  matcher: [
    "/api/:path*", // Apply to all API routes
  ],
};
