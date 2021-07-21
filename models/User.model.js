const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    unique: String,
  },
  password: String,
  description: { type: String, default: "NA" },
});

const User = model("User", userSchema);

module.exports = User;
