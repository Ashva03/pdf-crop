/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Turbopack with default configuration
  experimental: {
    turbo: {},
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        canvas: false,
        path: false,
        crypto: false,
        stream: false,
        zlib: false,
      };
    }
    return config;
  },
  images: {
    domains: ["cdn.jsdelivr.net", "cdnjs.cloudflare.com"],
  },
  serverExternalPackages: ["pdfjs-dist", "canvas"],
  // Explicitly set the webpack configuration
  webpack5: true,
};

module.exports = nextConfig;
