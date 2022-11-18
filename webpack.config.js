const path = require('path');
const webpack = require('webpack');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const { node } = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  optimization: {
    concatenateModules: false,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {presets: ["@babel/env"]}
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
      "crypto-browserify": require.resolve('crypto-browserify'),
    }
  },

  target:node,

  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },

  devServer: {
    static : {
      directory: path.join(__dirname, 'public/'),
    },
    port: 3000,
    devMiddleware:{
      publicPath: 'http://localhost:3000/dist/',
    },
    hot: "only",
  },

  plugins: [new webpack.HotModuleReplacementPlugin(), new NodePolyfillPlugin()]
};