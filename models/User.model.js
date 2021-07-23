const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    unique: String,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  description: { type: String, default: "NA" },
  image: String,
});

const User = model("User", userSchema);

module.exports = User;
