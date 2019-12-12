const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const jsPath = './src/js';
const htmlPath = `${__dirname}/src/html`;
const favIconPath = './src/img/icons';

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
  entry: {
    index:    `${jsPath}/index.js`,
    solution: `${jsPath}/solution.js`,
    about:    `${jsPath}/about.js`,
    contact:  `${jsPath}/contact.js`,
    service:  `${jsPath}/service.js`,
    privacy:  `${jsPath}/privacy.js`,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
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

    // HTML - MPA //
    new HtmlWebpackPlugin({
      title: 'GRC | Home page',
      favicon: `${favIconPath}/favicon.ico`,
      template: `${htmlPath}/index.html`,
      filename: 'index.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      title: 'GRC | Solution page',
      favicon: `${favIconPath}/favicon.ico`,
      template: `${htmlPath}/solution.html`,
      filename: 'solution.html',
      chunks: ['solution']
    }),

    new HtmlWebpackPlugin({
      title: 'GRC | About page',
      favicon: `${favIconPath}/favicon.ico`,
      template: `${htmlPath}/about.html`,
      filename: 'about.html',
      chunks: ['about']
    }),

    new HtmlWebpackPlugin({
      title: 'GRC | Contact page',
      favicon: `${favIconPath}/favicon.ico`,
      template: `${htmlPath}/contact.html`,
      filename: 'contact.html',
      chunks: ['contact']
    }),

    new HtmlWebpackPlugin({
      title: 'GRC | Terms of service',
      favicon: `${favIconPath}/favicon.ico`,
      template: `${htmlPath}/service.html`,
      filename: 'service.html',
      chunks: ['service']
    }),

    new HtmlWebpackPlugin({
      title: 'GRC | Privacy policy',
      favicon: `${favIconPath}/favicon.ico`,
      template: `${htmlPath}/privacy.html`,
      filename: 'privacy.html',
      chunks: ['privacy']
    }),

    // add jQuery
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
