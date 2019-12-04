const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',

  // dev server
  watch: true,
  devServer: {
    port: 8888,
    overlay: { warnings: false, errors: true }
  },
  devtool: 'cheap-module-source-map',
  watchOptions: { ignored: /node_modules/ },

  // input-output
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    rules: [
      // JS //
      { test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader' },

      // CSS //
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader',    options: { sourceMap: true } },
          { loader: 'sass-loader',   options: { sourceMap: true } }
        ]
      },

      // FONTS //
      {
        test: /\.(ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: { name: 'fonts/[name].[ext]' }
        }]
      },

      // convert small IMAGES to base-64 //
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        use: [
          { loader: 'url-loader', options: { limit: 10000 } },
        ]
      },
    ]
  },

  plugins: [
    // copy IMAGES //
    new CopyWebpackPlugin([
      { from: 'src/img', to: 'img' }
    ]),

    // HTML //
    new HtmlWebpackPlugin({
      title: 'Home page',
      favicon: './src/img/icons/favicon.ico',
      template: __dirname + '/src/index.html',
    }),

    // add jQuery
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
