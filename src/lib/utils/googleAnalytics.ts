import { sendGAEvent } from "@next/third-parties/google";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Track a custom event in Google Analytics
 * @param eventName - The name of the event
 * @param parameters - Additional parameters for the event
 */
export function trackEvent(
  eventName: string,
  parameters?: Record<string, string | number | boolean | undefined>
) {
  if (typeof window !== "undefined") {
    sendGAEvent({ event: eventName, ...parameters });
  }
}

/**
 * Track page views manually (if needed)
 * @param pagePath - The path of the page
 * @param pageTitle - The title of the page (optional)
 */
export function trackPageView(pagePath: string, pageTitle?: string) {
  if (typeof window !== "undefined") {
    sendGAEvent({
      event: "page_view",
      page_path: pagePath,
      page_title: pageTitle || document.title,
    });
  }
}

/**
 * Track button clicks
 * @param buttonName - The name/identifier of the button
 * @param section - The section where the button is located (optional)
 */
export function trackButtonClick(buttonName: string, section?: string) {
  const params: Record<string, string | number | boolean | undefined> = {
    button_name: buttonName,
  };
  if (section) {
    params.section = section;
  }
  trackEvent("button_click", params);
}

/**
 * Track form submissions
 * @param formName - The name of the form
 * @param success - Whether the submission was successful
 */
export function trackFormSubmission(formName: string, success: boolean = true) {
  trackEvent("form_submit", {
    form_name: formName,
    success: success,
  });
}

/**
 * Track file downloads
 * @param fileName - The name of the downloaded file
 * @param fileType - The type of the file (pdf, doc, etc.)
 */
export function trackFileDownload(fileName: string, fileType?: string) {
  const params: Record<string, string | number | boolean | undefined> = {
    file_name: fileName,
  };
  if (fileType) {
    params.file_type = fileType;
  }
  trackEvent("file_download", params);
}

/**
 * Track external link clicks
 * @param url - The external URL
 * @param linkText - The text of the link (optional)
 */
export function trackExternalLinkClick(url: string, linkText?: string) {
  const params: Record<string, string | number | boolean | undefined> = {
    link_url: url,
  };
  if (linkText) {
    params.link_text = linkText;
  }
  trackEvent("external_link_click", params);
}

/**
 * Track page views with custom dimensions
 * @param pagePath - The path of the page
 * @param pageTitle - The title of the page
 * @param customDimensions - Additional custom dimensions
 */
export function trackPageViewWithDimensions(
  pagePath: string,
  pageTitle?: string,
  customDimensions?: Record<string, string | number | boolean | undefined>
) {
  if (typeof window !== "undefined") {
    const eventParams: Record<string, string | number | boolean | undefined> = {
      page_path: pagePath,
      page_title: pageTitle || document.title,
      ...customDimensions,
    };

    sendGAEvent({
      event: "page_view",
      ...eventParams,
    });
  }
}

/**
 * Track user engagement events
 * @param engagementType - Type of engagement (scroll, time_on_page, etc.)
 * @param value - Engagement value
 * @param additionalData - Additional data for the engagement
 */
export function trackUserEngagement(
  engagementType: string,
  value: number,
  additionalData?: Record<string, string | number | boolean | undefined>
) {
  if (typeof window !== "undefined") {
    const eventParams: Record<string, string | number | boolean | undefined> = {
      engagement_type: engagementType,
      value: value,
      ...additionalData,
    };

    sendGAEvent({
      event: "user_engagement",
      ...eventParams,
    });
  }
}

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
 * Simple throttle function for scroll events
 */
function throttle(func: Function, limit: number) {
  let inThrottle: boolean;
  return function (this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Track section interactions (when users view different sections of a page)
 * @param sectionName - Name of the section being viewed
 * @param pagePath - Current page path
 * @param timeSpent - Time spent in the section (optional)
 */
export function trackSectionInteraction(
  sectionName: string,
  pagePath: string,
  timeSpent?: number
) {
  const params: Record<string, string | number | boolean | undefined> = {
    section_name: sectionName,
    page_path: pagePath,
  };

  if (timeSpent) {
    params.time_spent = timeSpent;
  }

  trackEvent("section_interaction", params);
}

/**
 * Track user session duration
 * @param sessionDuration - Duration of the session in seconds
 * @param pagesVisited - Number of pages visited in the session
 */
export function trackSessionDuration(
  sessionDuration: number,
  pagesVisited: number
) {
  trackEvent("session_duration", {
    session_duration: sessionDuration,
    pages_visited: pagesVisited,
  });
}

/**
 * Track search/filter usage
 * @param searchType - Type of search (project_filter, tech_filter, etc.)
 * @param searchTerm - The search term or filter value
 * @param resultsCount - Number of results returned
 */
export function trackSearchUsage(
  searchType: string,
  searchTerm: string,
  resultsCount: number
) {
  trackEvent("search_usage", {
    search_type: searchType,
    search_term: searchTerm.toLowerCase(),
    results_count: resultsCount,
  });
}

/**
 * Track error events
 * @param errorType - Type of error (404, form_error, etc.)
 * @param errorMessage - Error message
 * @param pagePath - Page where error occurred
 */
export function trackError(
  errorType: string,
  errorMessage: string,
  pagePath: string
) {
  trackEvent("error", {
    error_type: errorType,
    error_message: errorMessage,
    page_path: pagePath,
  });
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
