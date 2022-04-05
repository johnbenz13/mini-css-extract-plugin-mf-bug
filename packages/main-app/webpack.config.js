const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ModuleFederationPlugin } = require('webpack').container;


module.exports = {
  entry: './src/index.js',
  mode: 'development',
  plugins: [
      new MiniCssExtractPlugin({experimentalUseImportModule: false}),
      new ModuleFederationPlugin({
        name: 'main-app',
        filename: 'module-federation.json',
        shared: {'@john/shared-app': { import: '../shared-app/src/index.js' }},
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
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};