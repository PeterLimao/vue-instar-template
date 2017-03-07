var Path = require('path');
var WebpackConf = require('./webpack.test.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'should', 'sinon'],
    files: [
      '../test/unit/index.js'
    ],
    exclude: [
      'karma.conf.js'
    ],
    webpack: WebpackConf,
    webpackServer: {
      noInfo: true
    },
    webpackMiddleware: {
      noInfo: true
    },
    preprocessors: {
      '../test/unit/index.js': ['webpack']
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    plugins: [
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-spec-reporter',
      'karma-should',
      'karma-sinon',
      'karma-webpack'
    ]
  });
};
