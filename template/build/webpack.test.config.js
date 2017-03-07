var Path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var Webpack = require('webpack');

module.exports = {
  output: {
    path: Path.join(__dirname, '../dist'),
    filename: '[name].[hash:7].js',
    chunkFilename: '[name].[hash:7].js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue!eslint'
      },
      {
        test: /\.js$/,
        loader: 'babel!eslint',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextWebpackPlugin.extract('style', 'css')
      },
      {
        test: /\.less$/,
        loader: ExtractTextWebpackPlugin.extract('style', 'css!less')
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.css', '.jpg', '.png', '.less'],
    alias: mAlias
  },
  postcss: function() {
    return [autoprefixer];
  },
  vue: {
    autoprefixer: {
      browsers: ['last 2 versions']
    }
  },
  babel: {
    presets: ['es2015', 'stage-2'],
    plugins: ['transform-runtime']
  },
  plugins: [
    new ExtractTextWebpackPlugin('[name].[hash:7].css'),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"test"'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'app.html',
      template: 'src/app.tpl',
      chunks: ['app'],
      inject: true,
      hash: false
    })
  ]
};
