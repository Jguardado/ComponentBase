//NOTE: switching approach to mongoDB version.
var mongod = require('mongodb');
var mongoose = require('mongoose');
var MongoClient = mongod.MongoClient;
var User = require('./models/users');
var { callback, performAction } = require('./dbactions');

mongoose.connect('mongodb://localhost/component_base');

//NOTE: Damn NICK lol bossy.
var accessUserById = function (ids, action, callback) {
  return User.findOne({ _id: ids.userId }, 'family', function (err, user) {
    if (err) {
      return callback(err, null);
    }else if (!user) {
      return callback('user _id ' + ids.userId + ' not found', null);
    }

    performAction[action](user, callback);
  });
};

var accessComponentById = function (ids, callback) {
  return Component.findOne({ _id: ids.componentId }, function (err, user) {
    if (err) {
      return callback(err, null);
    }else if (!component) {
      return callback('[Component] ' + ids.componentId + ' not found', null);
    }

    performAction[action](user, callback);
  });
};


//NOTE: This needs to be trimmed down to probably two filtering conditionals
// one for component the other for component history (i.e. )
var accessCommentByComponentId = function (ids, action, properties, callback) {
    return Component.findOne({ _id: ids.userId }, 'family', function (err, user) {
      if (ids.commentsId) {
        commentHistory = _.find(ids.comments, function (comments) {
          return comments._id.toString() === ids.commentsId;
        });

        if (!commentHistory) {
          return callback('history _id ' + ids.historyId + ' not found', null);
        }
      }

      performAction[action](user, callback, commentHistory);
    });
  };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Copied from my boys Nick Bauer, Karun, Blaine Degannes, Sola
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//NOTE: The original CRUD functions were borrowed from my friends while I
//rediscover this lovely thing called mongoDB and building out backend in general

//////////////////////////////////////////
//CREATE
//////////////////////////////////////////

//NOTE: looks like callback really allows for two args but not clearly defined,
//probably an `alert`.

// exports.addUser = function (userObj, callback) {
//   //user validation
//   if (!userObj.password) {
//     return callback('password field required', null);
//   }else if (!userObj.userName) {
//     return callback('userName field required', null);
//   }
//
//   var user = new User(userObj);
//
//   user.save(function (err, user) {
//     return callback(err, user);
//   });
// };
//
// exports.addComponent = function (compObj, callback) {
//   component.save(function (err, component) {
//     return callback(err, component);
//   });
// };
//
// exports.addHistory = function (idObj, historyObj, callback) {
//   return accessUserById(idObj, 'add history', historyObj, callback);
// };
//
// //////////////////////////////////////////
// //READ
// //////////////////////////////////////////
//
// exports.verifyUser = function (userObj, callback) {
//
//   User.findOne(userObj, '_id', function (err, user) {
//     if (!user) {
//       return callback('user not found', null);
//     }else {
//       return callback(err, user['_id']);
//     }
//   });
// };
//
// //TODO: These should be reconfigured into practical usage for ComponentBase
// exports.getAllFamily = function  (idObj, callback) {
//   return accessUserById(idObj, 'get family', {}, callback);
// };
//
// exports.getSingleFamilyMember = function  (idObj, callback) {
//   return accessUserById(idObj, 'get member', {}, callback);
// };
//
// exports.getAllActions = function (callback) {
//   Action.find({}, callback);
// };
//
// //////////////////////////////////////////
// //UPDATE
// //////////////////////////////////////////
//
// exports.updateFamilyMember = function (idObj, familyObj, callback) {
//   return accessUserById(idObj, 'update family', familyObj, callback);
// };
//
// exports.updateHistory = function (idObj, historyObj, callback) {
//   return accessUserById(idObj, 'update history', historyObj, callback);
// };
//
// //////////////////////////////////////////
// //DELETE
// //////////////////////////////////////////
//
// exports.deleteFamilyMember = function (idObj, callback) {
//   return accessUserById(idObj, 'delete family', {}, callback);
// };
//
// exports.deleteHistory = function (idObj, callback) {
//   return accessUserById(idObj, 'delete history', {}, callback);
// };
