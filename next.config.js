/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                canvas: false,
            };
        }
        return config;
    },
    images: {
        domains: ['cdn.jsdelivr.net', 'cdnjs.cloudflare.com'],
    },
};

module.exports = nextConfig; 