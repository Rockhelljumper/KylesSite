import { sendGAEvent } from "@next/third-parties/google";

/**
 * Track a custom event in Google Analytics
 * @param eventName - The name of the event
 * @param parameters - Additional parameters for the event
 */
export function trackEvent(
  eventName: string,
  parameters?: Record<string, any>
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
  trackEvent("button_click", {
    button_name: buttonName,
    section: section,
  });
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
  trackEvent("file_download", {
    file_name: fileName,
    file_type: fileType,
  });
}

/**
 * Track external link clicks
 * @param url - The external URL
 * @param linkText - The text of the link (optional)
 */
export function trackExternalLinkClick(url: string, linkText?: string) {
  trackEvent("external_link_click", {
    link_url: url,
    link_text: linkText,
  });
}
