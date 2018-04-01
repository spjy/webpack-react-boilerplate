const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // see exact file location of log/error for debugging
  devServer: {
    contentBase: './build', // serve files from build directory
    port: 3000
  },
});