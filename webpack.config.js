module.exports = {
    entry: ['./global.js', './index.js'],
    output: {
        path: __dirname,
        filename: 'bundle.js',
      },
    module: {
      preLoaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'jshint-loader',

        },
      ],
      loaders: [
          {
            test: [/\.js$/, /\.es6$/],
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015'],
            },
          },
      ],
    },
    resolve: {
      extensions: ['', '.js', '.es6', 'jsx'],
    },
    watch: true,
  };
