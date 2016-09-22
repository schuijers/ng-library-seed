var webpackConfig = require('./webpack.test');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha'],
    reporters: ['mocha'],

    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    colors: true,
    port: 9876,

    basePath: '',
    files: [
      { pattern: './config/karma-shim.js', watched: false }
    ],
    preprocessors: { 
      './config/karma-shim.js': ['webpack']
    },
    exclude: [],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  });
};