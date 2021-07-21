const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  comment: String,
  creater: [{ type: Schema.Types.ObjectId, ref: "User" }],
  creater: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Comment = model("Comment", userSchema);

module.exports = User;
