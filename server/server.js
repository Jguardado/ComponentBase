var express = require('express');
var webpack = require('webpack');
var path = require('path');
var config = require('../webpack.config.js');
var request = require('request');
var db = require('./db');
var bodyparser = require('body-parser');

// var env = require('node-env-file');

// var env = env(__dirname + '../.env');
var isDevelopment = (process.env.NODE_ENV !== 'production');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyparser());

app.use(express.static(__dirname + '/../'));

if (process.env.NODE_ENV === 'production') {
  var static_path = path.join(__dirname, 'public');
  console.log('this is the static_path', static_path);

  app.use(express.static(static_path))
    .get('/', function (req, res) {
      res.sendFile('index.html', {
        root: static_path,
      });
    }).listen(process.env.PORT || 8080, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Listening at localhost:', process.env.PORT);
      }
    });
} else {

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
        console.log('Listening at localhost:3001 development');
      }

    });

  app.listen(port);
}

//NOTE: Setting up url routes.

// app.get('/component', function (req, res) {
//   console.log('this is the res/req var', res, req);
//   var store = db.readUser(req.params.id);
//
//   console.log('this is when called on server file', store);
//
// });

// .then(function (result) {
//   if (result) {
//     res.send(result);
//   } else {
//     res.status(404);
//   }
// });
