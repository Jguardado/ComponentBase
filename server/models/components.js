var mongoose = require('mongoose');
var CommentsSchema = require("./comments")

var ComponentSchema = mongoose.Schema({
  componentName: { type: String, index: { unique: true } },
  codeMirror: { type: String },
  link: { type: String }
});

var Component = mongoose.model('Component', ComponentSchema);
console.log('this Component in Model: ', Component);

module.exports = {
  Component: Component
}
