/**
 * Client-side utility for handling email submission
 * This avoids using Node.js-specific modules that cause issues in the browser
 */

import { ContactFormData } from "../validation/contactSchema";

// Submit the contact form to the API
export const submitContactForm = async (formData: ContactFormData) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || "Failed to send message",
        details: data.details,
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error sending contact form:", error);
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
};

// Initiate Google authentication
export const initiateGoogleAuth = async () => {
  try {
    const response = await fetch("/api/auth/google");
    const data = await response.json();

    if (!data.authUrl) {
      throw new Error("Failed to get authentication URL");
    }

    return {
      success: true,
      authUrl: data.authUrl,
    };
  } catch (error) {
    console.error("Error initiating authentication:", error);
    return {
      success: false,
      error: "Failed to initiate authentication",
    };
  }
};
