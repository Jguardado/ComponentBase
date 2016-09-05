const Webpack = require('webpack');
const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'public', 'build');
//NOTE: This can be used to link directly to the entry point file
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
          {
            test: /\.css$/,
            loader: 'style!css',
          },
      ],
    },
    resolve: {
      extensions: ['', '.js', '.es6', 'jsx'],
    },
    watch: true,
    plugins: [new Webpack.HotModuleReplacementPlugin()],
  };
