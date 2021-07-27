const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const activitySchema = new Schema({
  image: String,
  location: String,
  category: String,
  name: String,
  date: { type: Date, default: Date.now },
  time: String,
  description: String,
  creater: { type: Schema.Types.ObjectId, ref: "User" },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  joins: [{ type: Schema.Types.ObjectId, String, ref: "User" }],
  // creater: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Activity = model("Activity", activitySchema);

module.exports = Activity;

// [{ type: Schema.Types.ObjectId, ref: "Comment" }]
