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
  // 301 Redirects to eliminate thin/doorway duplicate pages
  async redirects() {
    return [
      {
        source: "/features",
        destination: "/",
        permanent: true,
      },
      {
        source: "/how-it-works",
        destination: "/tutorials",
        permanent: true,
      },
      {
        source: "/documentation",
        destination: "/tutorials",
        permanent: true,
      },
      {
        source: "/case-studies",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
