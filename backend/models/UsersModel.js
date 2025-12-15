const mongoose = require("mongoose");
const UsersSchema = require("../schemas/UsersSchema");

module.exports = mongoose.model("User", UsersSchema);
