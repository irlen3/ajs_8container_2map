const path = require('path'); // Node.js модуль для разрешения путей файлов
// const webpack = require('webpack'); // для получения доступа ко встроенным плагинам
const HtmlWebPackPlugin = require('html-webpack-plugin'); // устанавливается через npm
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // маска для имени файла
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // какой загрузчик использовать
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
