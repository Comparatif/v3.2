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
        hostname: 'wwwmaxframe.dz',

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