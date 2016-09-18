const path = require('path');
const webpack = require('webpack');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'public', 'build');
const mainPath = path.resolve(__dirname, 'src', 'index.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: mainPath,
    output: {
        filename: 'bundle.js',
        publicPath: '/build/',
      },
    module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: [nodeModulesPath],
            loader: 'babel',
            query: {
              presets: ['react', 'es2015', 'stage-2'],
            },
          },
          { test: /\.css$/, loader: 'style-loader!css-loader' },
          { test: /\.scss$/, loader: 'style!css' },
          { test: /\.png$/, loader: 'url-loader?limit=100000' },
          {
            test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
            loader: 'file-loader',
          },
          {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff',
          },
          {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/octet-stream',
          },
          { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
          {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml',
          },
      ],
    },
    resolve: {
      extensions: ['', '.js', '.es6', 'jsx'],
    },
    watch: true,
    plugins: [
      new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production'),
          },
        }),
    ],
  };
