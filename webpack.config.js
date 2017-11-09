const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with our paths
const paths = {
    BUILD_DIR: path.resolve(__dirname, 'build'),
    SRC_DIR: path.resolve(__dirname, 'src'),
    APP_DIR: path.resolve(__dirname, 'src/js/components'),
  };
module.exports = {
  entry: path.join(paths.APP_DIR, 'app.jsx'),
  output: {
    path: paths.BUILD_DIR,
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC_DIR, 'index.html'),
    }),
    new ExtractTextPlugin('style.bundle.css')
  ],
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
            'babel-loader',
            ],
        },
        {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'less-loader']
            }),
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader']
            }),
        },
        {
            test: /\.(png|jpg|gif|jpeg)$/,
            use: [
              'file-loader',
            ],
        },
    ],
},
    resolve: {
        extensions: ['.js', '.jsx'],
    },
}