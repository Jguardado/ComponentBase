var CommentsSchema = mongoose.Schema({
  user: { type: String },
  componentName: { type: String, index: { unique: true } },
  content: { type: String },
  date: Date,
});

var Comments = mongoose.model('Comments', CommentsSchema);
exports.Comments;
