const config = require('./webpack.common.js');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(config, {
  devtool: 'inline-source-map',
  entry: './config/karma-shim.js'
});