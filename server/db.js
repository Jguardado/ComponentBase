//NOTE: switching approach to mongoDB version.
var mongod = require('mongodb');
var mongoose = require('mongoose');
var MongoClient = mongod.MongoClient;
var User = require('./models/users');
var { callback, performAction } = require('./dbactions');

mongoose.connect('mongodb://localhost/component_base');

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Copied from my boys Nick Bauer, Karun Siddana, Blaine Degannes, Sola Harrison
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//NOTE: Damn NICK lol bossy.
exports.accessAllUsers = function (callback) {
  console.log('calling for user');
  return User.find();
};

exports.accessUserById = function (ids, action, callback) {
  return User.findOne({ _id: ids.userId }, 'family', function (err, user) {
    if (err) {
      return callback(err, null);
    }else if (!user) {
      return callback('user _id ' + ids.userId + ' not found', null);
    }

    performAction[action](user, callback);
  });
};

exports.accessComponentById = function (ids, callback) {
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
exports.accessCommentByComponentId = function (ids, action, properties, callback) {
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
// Copied from my boys Nick Bauer, Karun Siddana, Blaine Degannes, Sola Harrison
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//NOTE: The original CRUD functions were borrowed from my friends while I
//rediscover this lovely thing called mongoDB and building out backend in general

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

exports.addComponent = function (compObj, callback) {

  var component = new Component(userObj);
  component.save(function (err, component) {
    return callback(err, component);
  });
};

exports.addComment = function (idObj, commentHistoryObj, callback) {
  return accessCommentByComponentId(idObj, 'add history', commentHistoryObj, callback);
};

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
//////////////////////////////////////////
//UPDATE
//////////////////////////////////////////

exports.updateUser = function (idObj, familyObj, callback) {
  return accessUserById(idObj, 'update family', familyObj, callback);
};

exports.updateComment = function (idObj, historyObj, callback) {
  return accessUserById(idObj, 'update history', historyObj, callback);
};

// //////////////////////////////////////////
// //DELETE
// //////////////////////////////////////////
//
exports.deleteFamilyMember = function (idObj, callback) {
  return accessUserById(idObj, 'delete family', {}, callback);
};
//
// exports.deleteHistory = function (idObj, callback) {
//   return accessUserById(idObj, 'delete history', {}, callback);
// };
