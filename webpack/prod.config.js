const path = require("path");
const { merge } = require("webpack-merge");
const webpackCommon = require("./common.config");

// webpack plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(webpackCommon, {
  devtool: "source-map",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name]-[contenthash].min.js",
    sourceMapFilename: "[name]-[contenthash].map",
    chunkFilename: "[id]-[contenthash].js",
    publicPath: "/",
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 2
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "postcss.config.js")
              },
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
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
            maxSize: 4096, // 4kb for production
          },
        },
        generator: {
          filename: 'assets/images/[name].[hash:8][ext]',
        },
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              disable: process.env.NODE_ENV !== 'production',
              mozjpeg: {
                progressive: true,
                quality: 75,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.5, 0.75],
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      }
    ]
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            warnings: false,
            drop_console: true,
            drop_debugger: true
          }
        }
      }),
      new CssMinimizerPlugin()
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "../static/index.html"),
      favicon: path.resolve(__dirname, "../static/favicon.ico"),
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
      }
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../static"),
          to: path.resolve(__dirname, "../dist"),
          globOptions: {
            ignore: ["**/index.html", "**/favicon.ico"]
          }
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash].min.css",
      chunkFilename: "[id]-[contenthash].css"
    })
  ]
});
