const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  comment: String,
  creater: { type: Schema.Types.ObjectId, ref: "User" },
  activity: { type: Schema.Types.ObjectId, ref: "Activity" },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
