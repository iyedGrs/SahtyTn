const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: String, default: Date.now },
  role: { type: String, required: true },
  id_doctor: { type: String, default: null },
});

module.exports = mongoose.model("User", UserSchema);
