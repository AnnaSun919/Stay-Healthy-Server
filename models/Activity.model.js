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
  comment: { type: Schema.Types.ObjectId, ref: "Comment" },
  // creater: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Activity = model("Activity", activitySchema);

module.exports = Activity;
