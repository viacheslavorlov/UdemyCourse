'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './script.js',
  output: {
    filename: 'index.js',
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
