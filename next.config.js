/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  `script-src 'self' 'unsafe-inline'${isProduction ? '' : " 'unsafe-eval'"} https://www.googletagmanager.com https://challenges.cloudflare.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.googletagmanager.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.google.com https://challenges.cloudflare.com",
  "frame-src https://challenges.cloudflare.com",
  "upgrade-insecure-requests",
].join('; ');

const nextConfig = {
  output: 'standalone',
  // Enable static optimization where possible
  reactStrictMode: true,
  poweredByHeader: false,
  // Configure image domains if you're using next/image
  images: {
    domains: [],
  },
  // Handle external packages
  serverExternalPackages: ['postmark'],
  webpack: (config) => {
    // Handle external package polyfills
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      child_process: false,
      os: false,
      path: false,
    };
    
    return config;
  },
  // Ensure imported packages are transpiled correctly in production
  transpilePackages: [],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Content-Security-Policy",
            value: contentSecurityPolicy,
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
