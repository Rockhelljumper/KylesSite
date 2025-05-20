/** @type {import('next').NextConfig} */
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
    // Polyfills for browser environment
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
};

module.exports = nextConfig; 