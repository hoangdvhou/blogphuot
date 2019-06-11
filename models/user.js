const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Like_by_user = Schema({
    // PostImageID: [{type: Schema.Types.ObjectId, ref: "Post"}]
    PostImageID: [{type: String, default: ""}]
});

const UserSchema = new Schema({
    username: {type: String, required: true, unique: true, min: 3},
    password: {type: String, required: true, min: 6, max: 18},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    fullname: {type: String, required: true},
    like_by_user: {type: [Like_by_user], default: []},
    image: {type: String, default: ""},
    descripstion: {type: String, default: ""},
    role: {type: String, default: "menber"}
});

const constUser = mongoose.model("User", UserSchema);

module.exports = constUser;
