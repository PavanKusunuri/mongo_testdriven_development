const mongoose = require("mongoose");
// mongoose.connect("localhost/users_test");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
});

const User = mongoose.model("user", userSchema);

module.exports = User;
