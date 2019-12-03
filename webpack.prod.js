const path = require('path');
const WebpackBar = require('webpackbar');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[hash:8].js',
    publicPath: ''
  },

  module: {
    rules: [
      // JS //
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },

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
    ]
  },

  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}), // MIN CSS
      new UglifyJsPlugin({             // MIN JS
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
    new WebpackBar(),         // Progress bar
    new CleanWebpackPlugin(), // REMOVE 'dist' folder before new build
    new CompressionPlugin({ algorithm: 'gzip' }), // GZIP Compression

    // HTML //
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        useShortDoctype: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeRedundantAttributes: true
      }
    }),

    // CSS //
    new MiniCssExtractPlugin({ filename: 'bundle-[hash:8].css' }),
  ]
};
