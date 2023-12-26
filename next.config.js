const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['fasilkom-ti.usu.ac.id'],
    },
};

module.exports = withBundleAnalyzer({ ...nextConfig });
