/** @type {import('next').NextConfig} */
const nextConfig = {
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
        domains: ['cdn.jsdelivr.net', 'cdnjs.cloudflare.com'],
    },
    experimental: {
        serverComponentsExternalPackages: ['pdfjs-dist', 'canvas'],
    },
    externals: {
        canvas: 'canvas',
    },
    webpack5: true,
};

module.exports = nextConfig; 