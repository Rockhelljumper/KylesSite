"use client";

import Script from "next/script";

export default function TurnstileProvider() {
  return (
    <Script
      src="https://challenges.cloudflare.com/turnstile/v0/api.js"
      async={true}
      defer={true}
      onError={() => {
        console.error("Failed to load Turnstile script");
      }}
    />
  );
} 