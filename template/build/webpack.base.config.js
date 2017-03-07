var Path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var Webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./src/app.js'],
    vendor: [
      'vue',
      'vue-router',
      'vuex'
    ]
  },
  output: {
    path: Path.join(__dirname, '../dist'),
    filename: 'js/[name].[hash:7].js',
    chunkFilename: 'js/[name].[hash:7].js'
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
          name: 'img/[name].[hash:7].[ext]'
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
          name: 'font/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.css', '.jpg', '.png', '.less'],
    alias: {
      '@': Path.join(__dirname, '../src')
    }
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
    new Webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: 2
    }),
    new HtmlWebpackPlugin({
      filename: 'app.html',
      template: 'src/app.tpl',
      chunks: ['vendor', 'app'],
      minify: {
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
        removeTagWhitespace: true,
        removeScriptTypeAttributes: true
      },
      cache: true,
      inject: true,
      hash: false
    })
  ]
};
