"use client";

import { GoogleAnalytics } from "@next/third-parties/google";

export default function GoogleAnalyticsProvider() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  // Avoid polluting production analytics with local development traffic.
  if (process.env.NODE_ENV !== "production" || !gaId) {
    return null;
  }

  return <GoogleAnalytics gaId={gaId} />;
}
