const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
  webpack: (config) => {
    config.module.rules = [
      ...(config.module.rules || []),
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader?limit=100000',
      },
    ];

    config.plugins = [
      ...(config.plugins || []),
      new DotenvWebpackPlugin({ path: 'src/.env' }),
    ];

    return config;
  },
  i18n: {
    locales: ['ru', 'ua'],
    defaultLocale: 'ru',
  },
  ignoreBuildErrors: true
};
