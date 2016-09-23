const path = require('path');

const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

module.exports = {
  resolve: {
    extensions: [
      '.js',
      '.ts'
    ],
    plugins: [
      new TsConfigPathsPlugin()
    ]
  },
  module: {
    rules: [
      { 
        enforce: 'pre',
        test: /\.ts$/,
        loader: 'tslint'
      },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  },
  output: {
    path: path.resolve('./dist'),
    sourceMapFilename: '[file].map'
  }
};