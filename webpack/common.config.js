module.exports = {
  entry: {
    app: ['./src/bootstrap.js'],
    vendor: './src/vendor.js',
  },

  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8192, // 8kb - images smaller than this will be inlined
          },
        },
        generator: {
          filename: 'assets/images/[name].[hash:8][ext]',
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[hash:8][ext]',
        },
      },
      {
        test: /\.(mp4|webm)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10000,
          },
        },
        generator: {
          filename: 'assets/videos/[name].[hash:8][ext]',
        },
      },
    ],
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 244000,
      cacheGroups: {
        // Vendor libraries
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10,
        },
        // React and related libraries
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
          name: 'react',
          chunks: 'all',
          priority: 20,
        },
        // Redux and related libraries
        redux: {
          test: /[\\/]node_modules[\\/](redux|react-redux)[\\/]/,
          name: 'redux',
          chunks: 'all',
          priority: 20,
        },
        // Common modules used across pages
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          priority: 5,
          reuseExistingChunk: true,
        },
      },
    },
    // Enable runtime chunk for better caching
    runtimeChunk: {
      name: 'runtime',
    },
  },
};
