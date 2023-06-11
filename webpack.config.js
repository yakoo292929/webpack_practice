/**
 * ===========================================================================================
 * SYSTEM NAME    : Webpack
 * PROGRAM ID     : webpack.configjs
 * PROGRAM NAME   : webpackコンフィグファイル
 * DEVELOPED BY   :
 * CREATE DATE    : 2023/06/11
 * CREATE AUTHOR  : k.yamamoto
 * ===========================================================================================
**/

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}
