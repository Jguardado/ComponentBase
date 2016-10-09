var fs = require('fs');
var path = require('path');
var mysql = require('mysql');

//Creating a user object constructor:
var User = function (id, name, github) {
  this.name = name;
  this.github = github;
  this.id = id;
};

//NOTE: Establishing connection
var connection = mysql.createConnection({
  host: 'localhost',
  database: 'test',
});

connection.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db', err);
    return;
  }

  console.log('Connection established');
});

//NOTE: creating C.R.U.D. functions.
exports.addUser = function (newUser) {
  connection.query('INSERT INTO users SET ?', newUser, function (err, res) {
    if (err) {
      conosle.error('add user didnt work');
    }

    console.log('Last insert ID:', res.insertId);
  });

};

exports.readUser = function (id) {
  connection.query('SELECT * FROM users WHERE id = ?', [id], function (err, res) {
      if (err) {
        console.error('read user didnt work');
      }

      console.log('this is your user', res);
      return res;
    }
  );

};

exports.updateUser = function (category, itemForUpdate, id) {
  //this needs more adjustments I'll need to identfiy what I want passed in
  connection.query('UPDATE users SET ' + category + ' = ? Where ID = ?', [itemForUpdate, id], function (err, result) {
      if (err) {
        console.error('update user did not work');
      }

      console.log('Changed ' + result.changedRows + ' rows');
    }
  );

};

exports.deleteUser = function (id) {
  connection.query('DELETE FROM users WHERE id = ?', [id], function (err, result) {
      if (err) {
        console.error('delete user didnt work', err);
      } else {
        console.log('Deleted ' + result.affectedRows + ' rows');
      }

    }
  );

};
