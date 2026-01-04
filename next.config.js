/** @type {import('next').NextConfig} */
const nextConfig = {
  // Webpack configuration
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
  // Turbopack configuration
  experimental: {
    // Disable Turbopack for now to use Webpack
    turbo: false,
  },
  // Update images configuration to use remotePatterns instead of domains
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "cdnjs.cloudflare.com",
      },
    ],
  },
  // External packages
  serverExternalPackages: ["pdfjs-dist", "canvas"],
};

module.exports = nextConfig;
