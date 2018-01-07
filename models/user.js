const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    isAdmin: {type: Boolean, default: false}
}, { usePushEach: true });

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);