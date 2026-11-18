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
  // 301 Redirects to eliminate thin/doorway duplicate pages and broken legacy URLs
  async redirects() {
    return [
      // Legacy 404 URL from Google Search Console
      {
        source: "/pdf-crop",
        destination: "/",
        permanent: true,
      },
      {
        source: "/pdfcrop",
        destination: "/",
        permanent: true,
      },
      // Old deleted blog posts reported in Google Search Console
      {
        source: "/blog/design-custom-branded-shipping-boxes",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/resolve-lost-shipments-claims",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/scaling-shipping-operations",
        destination: "/blog",
        permanent: true,
      },
      // Consolidate thin tutorial subpages into master /tutorials hub
      {
        source: "/tutorials/getting-started",
        destination: "/tutorials",
        permanent: true,
      },
      {
        source: "/tutorials/interface-overview",
        destination: "/tutorials",
        permanent: true,
      },
      {
        source: "/tutorials/basic-cropping",
        destination: "/tutorials",
        permanent: true,
      },
      {
        source: "/tutorials/advanced-cropping",
        destination: "/tutorials",
        permanent: true,
      },
      {
        source: "/tutorials/batch-processing",
        destination: "/tutorials",
        permanent: true,
      },
      {
        source: "/tutorials/custom-templates",
        destination: "/tutorials",
        permanent: true,
      },
      {
        source: "/tutorials/quality-settings",
        destination: "/tutorials",
        permanent: true,
      },
      {
        source: "/tutorials/saving-exporting",
        destination: "/tutorials",
        permanent: true,
      },
      // Redundant marketing doorway pages
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
      {
        source: "/cookie-policy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/disclaimer",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/gdpr",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/data-security",
        destination: "/privacy-policy",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
