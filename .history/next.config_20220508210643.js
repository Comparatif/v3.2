const withImages = require('next-images')

module.exports = {
  
}

module.exports = {
  ...withImages(),
  reactStrictMode: true,
  webpack(config, { defaultLoaders }) {
    config.module.rules.push({
      test: /\.(scss|css)$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: 'global',
          },
        },
      ],
    });

    return config;
  },
};
