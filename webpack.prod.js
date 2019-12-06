const path = require('path');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const minifyHtmlOptions = {
  removeComments: true,
  collapseWhitespace: true,
  conservativeCollapse: true,
  useShortDoctype: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  removeRedundantAttributes: true
};

module.exports = {
  mode: 'production',

  // input-output
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[hash:8].js',
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
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },

      // FONTS //
      {
        test: /\.(ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: { name: 'fonts/[name]-[hash:8].[ext]' }
        }]
      },

      // IMAGES //
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        use: [
          { loader: 'url-loader',           options: { limit: 10000 } },
          { loader: 'image-webpack-loader', options: { bypassOnDebug: true } }
        ]
      },
    ]
  },

  optimization: {
    minimizer: [
      // min CSS
      new OptimizeCSSAssetsPlugin({}),

      // min js
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          warnings: false,
          output: { comments: false }
        }
      }),
    ]
  },

  plugins: [
    // add progress bar
    new WebpackBar(),

    // remove 'dist/' before new build
    new CleanWebpackPlugin(),

     // gzip compression
    new CompressionPlugin({ algorithm: 'gzip' }),

    // HTML - MPA //
    // index.html
    new HtmlWebpackPlugin({
      title: 'GRC | Home page',
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      minify: minifyHtmlOptions
    }),

    // solution.html
    new HtmlWebpackPlugin({
      title: 'GRC | Solution page',
      template: __dirname + '/src/solution.html',
      filename: 'solution.html',
      minify: minifyHtmlOptions
    }),

    // contact.html
    new HtmlWebpackPlugin({
      title: 'GRC | Contact page',
      template: __dirname + '/src/contact.html',
      filename: 'contact.html',
      minify: minifyHtmlOptions
    }),

    // about.html
    new HtmlWebpackPlugin({
      title: 'GRC | About page',
      template: __dirname + '/src/about.html',
      filename: 'about.html',
      minify: minifyHtmlOptions
    }),

    // service.html
    new HtmlWebpackPlugin({
      title: 'GRC | Terms of service',
      template: __dirname + '/src/service.html',
      filename: 'service.html',
      minify: minifyHtmlOptions
    }),

    // privacy.html
    new HtmlWebpackPlugin({
      title: 'GRC | Privacy policy',
      template: __dirname + '/src/privacy.html',
      filename: 'privacy.html',
      minify: minifyHtmlOptions
    }),

    // css-bundle
    new MiniCssExtractPlugin({ filename: 'bundle-[hash:8].css' }),

    // add jQuery
    new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }),

    // IMAGES, FONTS, robot.txt
    new CopyWebpackPlugin([
      { from: 'src/img',   to: 'img' },
      { from: 'robots.txt', to: '' },
    ]),

    // add favicons
    new FaviconsWebpackPlugin({
      logo: './src/img/icons/favicon.png',
      publicPath: './',
      prefix: '',
      statsFilename: 'iconstats-[hash:8].json',
      background: '#fff'
    }),
  ]
};
