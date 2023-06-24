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
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode:'development',
  devtool: 'source-map',
  entry: {
    main: './src/javascripts/main.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'javascripts/[name]-[contenthash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      // Typescriptの設定
      {
        test: /\.(ts|tsx)/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      // javascriptの設定
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { "targets": "> 0.25%, not dead" }],
                '@babel/preset-react',
              ],
            },
          },
        ],
      },
      // cssの設定
      {
        test: /\.(css|scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            }
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      // 画像の設定
      {
        test: /\.(png|jpg|jpeg)/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name]-[contenthash][ext]',
        },
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
            },
          },
        ],
      },
      // pugの設定
      {
        test: /\.pug/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
            },
          },
        ],
      },
    ],
  },
  // pluginの設定
  plugins: [
    new MiniCssExtractPlugin({
      filename: './stylesheets/[name]-[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/index.pug',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/access.pug',
      filename: 'access.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/members/taro.pug',
      filename: 'members/taro.html',
    }),
    new CleanWebpackPlugin(),
  ],
};
