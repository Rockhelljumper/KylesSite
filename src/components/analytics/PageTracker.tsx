"use client";

import {
  usePageTracking,
  useScrollDepthTracking,
  useTimeOnPageTracking,
} from "@/lib/utils/googleAnalytics";

type PageTrackerProps = {
  pageName: string;
  customDimensions?: Record<string, string | number | boolean | undefined>;
};

export default function PageTracker({
  pageName,
  customDimensions,
}: PageTrackerProps) {
  // Track page views with custom dimensions
  usePageTracking(customDimensions);

  // Track scroll depth
  useScrollDepthTracking();

  // Track time on page
  useTimeOnPageTracking(pageName);

  // This component doesn't render anything visible
  return null;
}
