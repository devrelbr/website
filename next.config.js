/** @type {import('next').NextConfig} */
const nextConfig = {}
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  ...nextConfig,
  images: {
    domains: [
      'lorempixel.com.br',
      'res.cloudinary.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.plugins.push(
      new HtmlWebpackPlugin({
        minify: {
          collapseWhitespace: true
        },
      }),
    );

    return config;
  }
}
