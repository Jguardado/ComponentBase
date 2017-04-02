var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, 'public');

var db = require('./server/db');

app.use(express.static(publicPath));

if (!isProduction) {
  var bundle = require('./server/bundle.js');
  bundle();

  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:3000',
      });
  });
}

proxy.on('error', function (e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening at localhost:', port);
  }
});

//NOTE: Setting up url routes.

app.get('/users', function (req, res) {
  console.log('hitting end point');
  var store = db.accessAllUsers();

  console.log('this is when called on server file', store);

});

//
// .then(function (result) {
//   if (result) {
//     res.send(result);
//   } else {
//     res.status(404);
//   }
// });
