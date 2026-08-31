import { NextRequest, NextResponse } from "next/server";
import { resumeData } from "@/lib/data/resume";

const allowedResumeFiles = new Set(
  Object.values(resumeData.variants).map((variant) => variant.pdfFileName)
);

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

    if (!allowedResumeFiles.has(filename)) {
      return NextResponse.json({ error: "Unknown resume file" }, { status: 404 });
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

    let parsedBaseUrl: URL;
    try {
      parsedBaseUrl = new URL(apiBaseUrl);
    } catch {
      return NextResponse.json({ error: "Resume service is misconfigured" }, { status: 503 });
    }

    if (parsedBaseUrl.protocol !== "https:" && process.env.NODE_ENV === "production") {
      return NextResponse.json({ error: "Resume service is misconfigured" }, { status: 503 });
    }

    const pdfUrl = `${apiBaseUrl}/api/ResumePDF/${encodeURIComponent(filename)}`;

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

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/pdf")) {
      return NextResponse.json({ error: "Resume service returned an unexpected response" }, { status: 502 });
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
