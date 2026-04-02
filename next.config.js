/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },

  basePath: '/lesspay',
  assetPrefix: '/lesspay/',
};

module.exports = nextConfig;