'use strict';

var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  output: {
    publicPath: 'http://localhost:4200/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'    
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});