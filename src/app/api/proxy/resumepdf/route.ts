import { NextRequest, NextResponse } from "next/server";
import fetch from "node-fetch";
import https from "https";

// Create a custom HTTPS agent that ignores SSL certificate issues
const httpsAgent = new https.Agent({
  rejectUnauthorized: false, // Only for development!
});

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const filename = searchParams.get("filename");

    if (!filename) {
      return new NextResponse("Filename is required", { status: 400 });
    }

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL?.trim();
    if (!backendUrl) {
      return new NextResponse("Backend URL not configured", { status: 500 });
    }

    // Construct the backend URL
    const url = new URL(`/api/resumepdf/${filename}`, backendUrl).toString();
    console.log("Fetching from:", url);

    // Fetch the PDF from the backend
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Accept": "application/pdf",
        "User-Agent": "NextJS/Proxy",
      },
      agent: url.startsWith("https:") ? httpsAgent : undefined,
      // @ts-ignore - node-fetch types are different
      timeout: 10000, // 10 second timeout
    });

    console.log("Backend response status:", response.status);
    console.log("Backend response headers:", response.headers);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Backend error response:", errorText);
      return new NextResponse(`Backend error: ${errorText}`, {
        status: response.status,
      });
    }

    // Get the response data as an array buffer
    const data = await response.arrayBuffer();

    // Create a new response with the PDF data and proper headers
    const proxyResponse = new NextResponse(data, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Length": Buffer.from(data).length.toString(),
        // Copy other relevant headers from the backend response
        "Cache-Control": response.headers.get("Cache-Control") || "no-cache",
      },
    });

    return proxyResponse;
  } catch (error) {
    console.error("Proxy error:", error);
    return new NextResponse(
      `Failed to fetch PDF: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      { status: 500 }
    );
  }
}

// Handle OPTIONS requests for CORS
export async function OPTIONS(request: NextRequest) {
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
