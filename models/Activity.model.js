const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const activitySchema = new Schema({
  Name: {
    type: String,
  },
});

const Activity = model("User", activitySchema);

module.exports = Activity;
