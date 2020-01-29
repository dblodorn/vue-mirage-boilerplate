const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const Dotenv = require('dotenv-webpack')
const path = require('path')
const helpers = require('./helpers');
const isDev = process.env.NODE_ENV === 'development';

const {
  htmlOptions
} = require('./build.config.js')

module.exports = {
  entry: [
    path.join(__dirname, '../src', 'main.js'),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
        include: [ helpers.root('src') ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader', { 
            loader: 'css-loader'
          },
        ]
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        include: [ helpers.root('src') ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env']
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]'
            }
          },
        ],
      },
    ]
  },
  plugins: [
    new Dotenv(),
    new VueLoaderPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.ExtendedAPIPlugin(),
    new LodashModuleReplacementPlugin({
      'shorthands': true,
      'flattening': true,
      'collections': true,
      'cloning': true,
    }),
    new HtmlWebpackPlugin({
      ...htmlOptions,
      template: './templates/index.pug'
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.vue'],
    alias: {
      '@': helpers.root('src')
    }
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
    }
  }
}
