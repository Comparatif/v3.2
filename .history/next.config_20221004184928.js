// 📦 file: ./next.config.js

const withImages = require('next-images')

module.exports = {
  ...withImages(),
  reactStrictMode: true,
}


