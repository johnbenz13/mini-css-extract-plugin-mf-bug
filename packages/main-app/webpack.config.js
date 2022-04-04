const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ModuleFederationPlugin } = require('webpack').container;


module.exports = {
  entry: './src/index.js',
  mode: 'production',
  plugins: [
      new MiniCssExtractPlugin(),
      new ModuleFederationPlugin({
        name: 'main-app',
      }),
    ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};