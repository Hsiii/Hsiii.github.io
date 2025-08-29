const path = require('path');
const webpack = require('webpack');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  context: srcPath,

  mode: 'development',

  resolve: {
    extensions: ['.js', '.jsx'], 
    alias: {
      components: path.resolve(srcPath, 'components'),
      utilities: path.resolve(srcPath, 'utilities'),
      api: path.resolve(srcPath, 'api'),
      images: path.resolve(srcPath, 'images'),
    },
  },

  entry: {
    index: './index.jsx',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { modules: false }],
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
        ],
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          minChunks: 2,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },

  devServer: {
    static: {
      directory: distPath,
      watch: true,
    },
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },

  devtool: 'source-map',
};