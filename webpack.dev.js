const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map', // see exact file location of log/error for debugging
  devServer: {
    contentBase: './build', // serve files from build directory
    port: 3000
  },
  plugins: [
    // Uses the index.html template, injects script tags
		new HtmlWebpackPlugin({
			template: './public/index.html',
			inject: true
		}),
  ]
});