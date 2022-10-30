// 📦 file: ./next.config.js
/*const nextTranslate = require('next-translate')

const withImages = require('next-images')



module.exports = nextTranslate({
  ...withImages(),
  reactStrictMode: true,
  webpack: (config, { isServer, webpack }) => {
    return config;
  }
})*/


const withImages = require('next-images')

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'comparatifdz.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/account123/**',
      },
    ],
  },
  ...withImages(),
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr', 'ar'],
    defaultLocale: 'fr',
  }
}