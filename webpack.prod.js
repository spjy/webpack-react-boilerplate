const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  bail: true,
  plugins: [
    // Uses the index.html template, injects script tags
		new HtmlWebpackPlugin({
			template: './public/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      optimization: {
        splitChunks: {
          chunks: 'all'
        }
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(), // Keep builds consistent
    new CleanWebpackPlugin(['build']), // clean the output directory before building
    new UglifyJSPlugin({
      sourceMap: true
    })
  ],
});