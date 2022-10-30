// 📦 file: ./next.config.js
const nextTranslate = require('next-translate')

const withImages = require('next-images')

module.exports = {
  ...withImages(),
  reactStrictMode: true,
}

module.exports = nextTranslate({
  ...withImages(),
  reactStrictMode: true,
  webpack: (config, { isServer, webpack }) => {
    return config;
  }
})


