/** @type {import('next').NextConfig} */
const nextConfig = {
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