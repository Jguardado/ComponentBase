const Webpack = require('webpack');
const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'public', 'build');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const mainPath = path.resolve(__dirname, 'src', 'index.js');

module.exports = {
    devtool: 'eval',
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      mainPath,
    ],
    output: {
        path: buildPath,
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
          { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
          { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
          { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
          { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      ],
    },
    resolve: {
      extensions: ['', '.js', '.es6', 'jsx', '.css'],
    },
    watch: true,
    plugins: [new Webpack.HotModuleReplacementPlugin()],
  };
