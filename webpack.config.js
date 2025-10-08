const path = require('path');
const webpack = require('webpack');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'pages/dist');

module.exports = {
  context: srcPath,

  mode: 'development',

  resolve: {
    extensions: ['.js', '.jsx'], 
    alias: {
      portfolio: path.resolve(srcPath, 'portfolio'),
      homepage: path.resolve(srcPath, 'homepage'),
      playground: path.resolve(srcPath, 'playground'),
      notfound: path.resolve(srcPath, 'notfound'),
      utils: path.resolve(srcPath, 'utils'),
      api: path.resolve(srcPath, 'api'),
    },
  },

  entry: {
    index: './index.jsx',
  },

  output: {
    path: distPath,
    filename: '[name].bundle.js',
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
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      }
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