const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  mode: 'development',
  plugins: [
    new HTMLWebpackPlugin({
      template: 'index.html'
    })
  ],
  devServer: {
    port: 5000,
    historyApiFallback: {
      disableDotRule: true
    }
  }
};
