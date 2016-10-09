var ComponentSchema = mongoose.Schema({
  componentName: { type: String, index: { unique: true } },
  codeMirror: { type: String },
  link: { type: String },
  comments: [CommentsSchema],
});

var Component = mongoose.model('Component', ComponentSchema);
exports.Component;
