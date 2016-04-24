var fs = require('fs');
var path = require('path');
var mysql = require('mysql');
var db = {};

//NOTE: Establishing connection
var connetion = mysql.createConnection({
  host: 'localhost',
});

connetion.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }

  console.log('Connection established');
});

//NOTE: creating crud functions.
exports.addUser = function () {

};

exports.readUser = function () {

};

exports.updateUser = function () {

};

exports.deleteUser = function () {

};

module.export = db;
