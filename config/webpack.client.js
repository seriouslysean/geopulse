const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const common = require('./webpack.common.js');
const dotenv = process.env.NODE_ENV === 'development' ? require('dotenv') : false;

if (process.env.NODE_ENV === 'development') {
  dotenv.config({
    path: '.env',
  });
}

const config = {
  entry: ['babel-polyfill', path.resolve(__dirname, '..', 'client', 'src', 'index.js')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'client', 'public'),
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [autoprefixer],
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [path.resolve(__dirname, '..', 'node_modules')],
                sourceMap: true,
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin({
      'process.env.GOOGLE_API_KEY': JSON.stringify(process.env.GOOGLE_API_KEY),
      'process.env.GOOGLE_TRACKING_ID': JSON.stringify(process.env.GOOGLE_TRACKING_ID),
      'process.env.INSTAGRAM_API_TOKEN': JSON.stringify(process.env.INSTAGRAM_API_TOKEN),
      'process.env.WEATHER_UNDERGROUND_API_TOKEN': JSON.stringify(process.env.WEATHER_UNDERGROUND_API_TOKEN),
    }),
  ],
};

module.exports = merge(common, config);
