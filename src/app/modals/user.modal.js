const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    banks: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'banks'
    }
});

const Users = mongoose.model("user", userSchema);

module.exports = {
  Users,
};
