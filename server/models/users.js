var UserSchema = mongoose.Schema({
  userName: { type: String, index: { unique: true } },
  password: String,
});

var User = mongoose.model('User', UserSchema);
exports.User;
