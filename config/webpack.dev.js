const commonConfig = require('./webpack.common.js');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true,
    port: 4200,
    stats: 'minimal'
  },
  devtool: 'inline-source-map',
  entry: {
    app: './demo-app/app/index.ts',
    vendor: [
      'angular'
    ]
  },
  output: {
    chunkFilename: '[id].chunk.js',    
    filename: '[name].bundle.js',    
    publicPath: 'http://localhost:4200/'
  },
  plugins: [
    new ForkCheckerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      template: './demo-app/index.html'
    })
  ]
});