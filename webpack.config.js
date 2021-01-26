const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin(),
  ],
  devServer: {
    port: 8080,
    open: true,
  },

};
