const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
require('dotenv').config();

module.exports = () => {
  // eslint-disable-next-line no-console
  console.log('NODE_ENV: ', process.env.NODE_ENV);
  return {
    mode: 'development',
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/i,
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
          exclude: /node_modules/,
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          exclude: (file) => (
            /node_modules/.test(file)
          ),
        },
        {
          test: /\.scss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
    ],
    optimization: {
      minimize: true,
    },
    devServer: {
      inline: true,
      hot: true,
    },
  };
};
