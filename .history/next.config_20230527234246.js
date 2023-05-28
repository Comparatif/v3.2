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

/*
const withImages = require('next-images')

module.exports = {
  
  ...withImages({
    images: {
      disableStaticImages: true,
      }
}),
  reactStrictMode: false,
  i18n: {
    locales: ['en', 'fr', 'ar'],
    defaultLocale: 'fr',
  }
}*/

const withTM = require('next-transpile-modules')(["react-icons"]);
const withImages = require('next-images')

module.exports = withTM({
  
  ...withImages({
    images: {
      disableStaticImages: true,
      }
}),
  reactStrictMode: false,
  
 
})