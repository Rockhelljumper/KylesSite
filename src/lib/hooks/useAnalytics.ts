"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  trackPageViewWithDimensions,
  trackUserEngagement,
} from "@/lib/utils/googleAnalytics";

/**
 * Custom hook for tracking page views with custom dimensions
 * @param customDimensions - Additional custom dimensions for the page
 */
export function usePageTracking(
  customDimensions?: Record<string, string | number | boolean | undefined>
) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pageTitle = document.title;
      trackPageViewWithDimensions(pathname, pageTitle, customDimensions);
    }
  }, [pathname, customDimensions]);
}

/**
 * Custom hook for tracking scroll depth
 * Tracks when users scroll to 25%, 50%, 75%, and 100% of the page
 */
export function useScrollDepthTracking() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollDepths = [25, 50, 75, 100];
    const trackedDepths = new Set<number>();

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = Math.round((scrollTop / documentHeight) * 100);

      scrollDepths.forEach((depth) => {
        if (scrollPercent >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth);
          trackUserEngagement("scroll_depth", depth, {
            page_path: pathname,
            scroll_percent: depth,
          });
        }
      });
    };

    const throttledHandleScroll = throttle(handleScroll, 1000);
    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [pathname]);
}

/**
 * Custom hook for tracking time on page
 * @param pageName - Name of the page for identification
 */
export function useTimeOnPageTracking(pageName: string) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const startTime = Date.now();

    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackUserEngagement("time_on_page", timeSpent, {
        page_name: pageName,
        page_path: pathname,
      });
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pageName, pathname]);
}

/**
 * Simple throttle function for scroll events
 */
function throttle<T extends unknown[]>(
  func: (...args: T) => void,
  limit: number
): (...args: T) => void {
  let inThrottle: boolean;
  return function (...args: T) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
