module.exports = {
  entry: './config/karma-shim.js',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  }
};