import { NextRequest, NextResponse } from "next/server";
import fetch from "node-fetch";

export const revalidate = 3600; // Cache for 1 hour

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const filename = url.searchParams.get("filename");

    if (!filename) {
      return NextResponse.json(
        { error: "No PDF filename provided" },
        { status: 400 }
      );
    }

    // Get and sanitize the API base URL
    let apiBaseUrl =
      process.env.NEXT_PUBLIC_BACKEND_API_URL || "https://api.kylesimmons.tech";

    // Remove trailing slash if present
    if (apiBaseUrl.endsWith("/")) {
      apiBaseUrl = apiBaseUrl.slice(0, -1);
    }

    // Remove @ symbol if it was accidentally included
    if (apiBaseUrl.startsWith("@")) {
      apiBaseUrl = apiBaseUrl.substring(1);
    }

    const pdfUrl = `${apiBaseUrl}/api/ResumePDF/${filename}`;

    console.log("Fetching PDF from:", pdfUrl);

    const response = await fetch(pdfUrl);

    if (!response.ok) {
      console.error(
        "Failed to fetch PDF:",
        response.status,
        response.statusText
      );
      return NextResponse.json(
        {
          error: `Failed to fetch PDF: ${response.status} ${response.statusText}`,
        },
        { status: response.status }
      );
    }

    const pdfBuffer = await response.arrayBuffer();

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=${filename}`,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("PDF proxy error:", error);
    return NextResponse.json(
      { error: "Failed to process PDF" },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept",
      "Access-Control-Max-Age": "86400",
    },
  });
}
