// eslint-disable-next-line strict, lines-around-directive
'use strict';

// const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // eslint-disable-next-line no-path-concat, prefer-template
    path: __dirname + '/dist/js',
  },
  watch: true,

  devtool: 'source-map',

  module: {},
};
