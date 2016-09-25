//NOTE: switching approach to mongoDB version.
var mongod = require('mongodb');
var mongoose = require('mongoose');
var MongoClient = mongod.MongoClient;
mongoose.connect('mongodb://localhost/component_base');

//User model defined
var User = mongoose.model('User', { name: String, roles: Array, age: Number });

//NOTE: example of save functions:
// user1.save(function (err, userObj) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('saved successfully:', userObj);
//   }
// });

//NOTE: example of locating a updating functions
// User.findOne({ name: 'modulus admin' }, function (err, userObj) {
//   if (err) {
//     console.log(err);
//   } else if (userObj) {
//     console.log('Found:', userObj);
//
//     //For demo purposes lets update the user on condition.
//     if (userObj.age != 30) {
//       //Some demo manipulation
//       userObj.age += 30;
//
//       //Lets save it
//       userObj.save(function (err) {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log('Updated', userObj);
//         }
//       });
//     }
//   } else {
//     console.log('User not found!');
//   }
// });


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Copied from my boys Nick Bauer, Karun, Blaine Degannes, Sola
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//NOTE: The original CRUD functions were borrowed from my frineds whiel I
//rediscover this lovely thing call mongoDB and building out backend in general

//////////////////////////////////////////
//CREATE
//////////////////////////////////////////

exports.addUser = function (userObj, callback) {

  //user validation
  if (!userObj.password) {
    return callback('password field required', null);
  }else if (!userObj.userName) {
    return callback('userName field required', null);
  }

  var user = new User(userObj);

  user.save(function (err, user) {
    return callback(err, user);
  });
};

exports.addFamilyMember = function (idObj, familyObj, callback) {
  return accessUserById(idObj, 'add family', familyObj, callback);
};

exports.addHistory = function (idObj, historyObj, callback) {
  return accessUserById(idObj, 'add history', historyObj, callback);
};

//////////////////////////////////////////
//READ
//////////////////////////////////////////

exports.verifyUser = function (userObj, callback) {

  User.findOne(userObj, '_id', function (err, user) {
    if (!user) {
      return callback('user not found', null);
    }else {
      return callback(err, user['_id']);
    }
  });
};

//TODO: These should be reconfigured into practical usage for ComponentBase
exports.getAllFamily = function  (idObj, callback) {
  return accessUserById(idObj, 'get family', {}, callback);
};

exports.getSingleFamilyMember = function  (idObj, callback) {
  return accessUserById(idObj, 'get member', {}, callback);
};

exports.getAllActions = function (callback) {
  Action.find({}, callback);
};

//////////////////////////////////////////
//UPDATE
//////////////////////////////////////////

exports.updateFamilyMember = function (idObj, familyObj, callback) {
  return accessUserById(idObj, 'update family', familyObj, callback);
};

exports.updateHistory = function (idObj, historyObj, callback) {
  return accessUserById(idObj, 'update history', historyObj, callback);
};

//////////////////////////////////////////
//DELETE
//////////////////////////////////////////

exports.deleteFamilyMember = function (idObj, callback) {
  return accessUserById(idObj, 'delete family', {}, callback);
};

exports.deleteHistory = function (idObj, callback) {
  return accessUserById(idObj, 'delete history', {}, callback);
};
