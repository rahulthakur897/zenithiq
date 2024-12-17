const LoadablePlugin = require('@loadable/webpack-plugin')
const HTMLWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const webpack = require('webpack');
const PUBLIC_PATH = process.env.PUBLIC_URL || '';

module.exports = {
  mode: 'production',
  entry: "./src/index.js",
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ['@babel/env', '@babel/preset-react'] },
        },
      },
      {
        test: /\.css$/,
        sideEffects: true,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.(svg|jpe?g|png|webp|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: '[name].[ext]',
            outputPath: "images",
          }
        },
      },
    ],
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: './public/index.html',
    }),
    new LoadablePlugin({ 
      filename: 'stats.json', 
      writeToDisk: true 
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "public/assets/"), to: path.resolve(__dirname, "dist/assets") },
        { from: path.resolve(__dirname, "favicon.ico"), to: path.resolve(__dirname, "dist/favicon.ico") },
        { from: path.resolve(__dirname, "public/robots.txt"), to: path.resolve(__dirname, "dist/robots.txt") },
      ],
      options: {
        concurrency: 100,
      },
    }),
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify(PUBLIC_PATH),
    }),
    new webpack.ProvidePlugin({
      "React": "react",
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 3300,
    historyApiFallback: true,
    open: true,
  }
};
