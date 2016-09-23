const config = require('./webpack.common.js');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(config, {
  bail: true,
  devtool: 'source-map',
  entry: {
    app: './demo-app/app/index.ts',
    vendor: [
      'angular'
    ]
  },
  output: {
    chunkFilename: '[id].[chunkhash].chunk.js',
    filename: '[name].[chunkhash].js',
    pathinfo: false
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      output: {comments: false},
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      template: './demo-app/index.html'
    })
  ]
});
