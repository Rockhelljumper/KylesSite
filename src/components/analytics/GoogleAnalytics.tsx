"use client";

import { GoogleAnalytics } from "@next/third-parties/google";

export default function GoogleAnalyticsProvider() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!gaId) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "Google Analytics: NEXT_PUBLIC_GA_MEASUREMENT_ID is not set"
      );
    }
    return null;
  }

  return <GoogleAnalytics gaId={gaId} />;
}
