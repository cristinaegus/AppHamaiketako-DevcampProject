const path = require('path');
const { merge } = require('webpack-merge');
const webpackCommon = require('./common.config');

// webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ESLintPlugin = require('eslint-webpack-plugin'); // Temporalmente desactivado

module.exports = merge(webpackCommon, {
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../static/dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id]-chunk.js',
    publicPath: '/',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8192,
          },
        },
        generator: {
          filename: 'assets/images/[name][ext]', // Sin hash en desarrollo
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../static/index.html'),
      favicon: path.resolve(__dirname, '../static/favicon.ico')
    })
    // ESLint temporalmente desactivado por incompatibilidad con ESLint 8
    // TODO: Reactivar cuando se actualice eslint-webpack-plugin
    /*
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      exclude: 'node_modules',
      emitWarning: true,
      failOnError: false,
      eslintPath: 'eslint/use-at-your-own-risk'
    })
    */
  ],

  devServer: {
    static: {
      directory: path.resolve(__dirname, '../static'),
      watch: true
    },
    host: 'localhost',
    port: 9000,
    historyApiFallback: true,
    hot: true,
    compress: true,
    open: true,
    client: {
      overlay: true
    }
  }
});
