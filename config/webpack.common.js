'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './demo-app/app/index.ts',
    vendor: [
      'angular',
      'rxjs'
    ]
  },

  resolve: {
    alias:{
      'my-components': path.resolve(__dirname, '../src/components')
    },
    extensions: ['', '.js', '.ts']
  },

  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint'
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts'
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  },

  tslint: {
    emitErrors: true,
    failOnHint: true
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      template: './demo-app/index.html'
    })
  ]
};