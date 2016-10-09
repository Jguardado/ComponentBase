var callback = function (string, arg) {
  if (string) {
    console.log(string);
  }

  return arg;
};

//NOTE: Examine each function and find utility within database
var performAction = {
  'get family': function (user, callback) {
    return callback(null, user.family);
  },

  'get id': function (user, callback) {
    return callback(null, user['_id']);
  },

  'get member': function (user, callback, properties, familyMember) {
    return callback(null, familyMember);
  },

  'add family': function (user, callback, properties) {
    user.family.push(properties);
    user.save(function (err, user) {
      return callback(err, user.family[user.family.length - 1]);
    });
  },

  'update family': function (user, callback, properties, familyMember) {
    if (!familyMember) {
      return callback('update family: a family id must be provided', null);
    }

    _.extend(familyMember, properties);
    user.save(function (err, user) {
      return callback(err, familyMember);
    });
  },

  'add history': function (user, callback, properties, familyMember) {
    if (!familyMember) {
      return callback('add history: a family id must be provided', null);
    }
    //save history into model
    familyMember.history.push(properties);

    //update nextContactDate, if action is within 5 days of the current nextContactDate
    if (Math.abs(moment.duration(moment(properties.date).diff(familyMember.nextContactDate)).days()) < 5) {
      familyMember.nextContactDate = moment(familyMember.nextContactDate).add(familyMember.contactFrequency, 'days');
    }

    //save it!
    user.save(function (err, user) {
      return callback(err, { nextContactDate: familyMember.nextContactDate, historyItem: familyMember.history[familyMember.history.length - 1] });
    });

  },

  'delete family': function (user, callback, properties, familyMember) {
    if (!familyMember) {
      return callback('add history: a family id must be provided', null);
    }

    user.family = _.reject(user.family, function (user) {
      return user === familyMember;
    });

    user.save(function (err, user) {
      return callback(err, familyMember);
    });
  },

  'update history': function (user, callback, properties, familyMember, historyEvent) {
    if (!historyEvent) {
      return callback('update history: a history id must be provided', null);
    }

    _.extend(historyEvent, properties);
    user.save(function (err, user) {
      return callback(err, historyEvent);
    });
  },

  'delete history': function (user, callback, properties, familyMember, historyEvent) {
    if (!historyEvent) {
      return callback('delete history: a history id must be provided', null);
    }

    familyMember.history = _.reject(familyMember.history, function (event) {
      return event === historyEvent;
    });

    user.save(function (err, user) {
      return callback(err, historyEvent);
    });
  },
};

module.exports = { callback, performActionOnUser };
