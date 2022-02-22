const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');
const { withPlugins } = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
  assetPrefix: './',
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    config.plugins.push(new WindiCSSWebpackPlugin)
    return config
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
    disableStaticImages: true,
    loader: "custom"
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    // 30-11-2021: https://www.notion.so/catalandao/Canvis-web-nft-d-advent-41dcd56d5e8f44efba036b785193489b
    // home redirigeix al projecte
    return [
      {
        source: '/',
        destination: '/manifest',
        permanent: false,
      },
    ]
  },
  async exportPathMap(defaultPathMap,{ dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/manifest' },
      '/manifest': { page: '/manifest' },
      '/nft': { page: '/nft' },
      '/eines': { page: '/eines' },
      '/comunitat': { page: '/comunitat' },
      '/contacte': { page: '/contacte' },
    }
  },
};

/** @type {import('next').NextConfig} */
module.exports = withPlugins([withOptimizedImages], nextConfig);
