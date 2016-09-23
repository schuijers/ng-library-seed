const config = require('./webpack.common.js');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = webpackMerge(config, {
  bail: true,
  devtool: 'source-map',
  entry: {
    index: './src/components/index.ts'
  },
  externals: {
    angular: 'angular'
  },
  output: {
    filename: 'my-components.js',
    pathinfo: false
  },
  plugins: [
    new NgAnnotatePlugin({
      add: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      output: {comments: false},
      sourceMap: true
    })
  ]
});