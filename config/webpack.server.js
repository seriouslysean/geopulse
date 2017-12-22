const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  target: 'node',
  entry: ['babel-polyfill', path.resolve(__dirname, '..', 'server', 'src', 'index.js')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'server', 'build'),
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(common, config);
