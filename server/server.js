var express = require('express');
var webpack = require('webpack');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var config = require('../webpack.config.js');

app.use(express.static(__dirname + '/../'));

var WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true,
    proxy: {
      '*': 'http://localhost:3000',
    },
  }).listen(3001, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log('Listening at localhost:3001');
    }

  });

app.listen(port);
