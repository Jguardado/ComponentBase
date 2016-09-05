module.exports = {
    entry: ['babel-polyfill', './index.js'],
    output: {
        path: __dirname,
        filename: 'public/bundle.js',
      },
    module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015', 'stage-2'],
            },
          },
      ],
    },
    resolve: {
      extensions: ['', '.js', '.es6', 'jsx'],
    },
    watch: true,
  };
