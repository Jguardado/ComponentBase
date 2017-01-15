var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  userName: { type: String, index: { unique: true } },
  password: String,
});

var User = mongoose.model('User', UserSchema);
console.log('this User in Model: ', User);

module.exports = {
  User: User,
};
