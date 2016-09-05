const path = require('path');
const webpack = require('webpack');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'public', 'build');
const mainPath = path.resolve(__dirname, 'src', 'index.js');

module.exports = {
    devtool: 'source-map',
    entry: mainPath,
    output: {
        path: buildPath,
        filename: 'bundle.js',
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
    plugins: [
      new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production'),
          },
        }),
    ],
  };
