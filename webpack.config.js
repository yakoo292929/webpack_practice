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
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
}
