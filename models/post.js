const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserLikeSchema = new Schema({
    authorID: {type: String, default: ""}
}, {
    _id: false
});

const commentModel = new Schema(
    {
      createdBy: { type: Schema.Types.ObjectId, ref: "User"},
      content: { type: String, required: true }
    },
    { timestamps: { createdAt: "createdAt" } }
  );

  const descripstionSchema = new Schema({
      descripstiondetail: {type: String, required: true},
      descripstiontitle: {type: String, required: true}
  });

  const imagelist = new Schema({
    images: {type: String, required: true}
  });

  const taglist = new Schema({
    tag: {type: String, required: true}
  },{
      _id: false
  });

const PostSchema = new Schema({
    view: {type: Number, default: 0},
    like: {type: Number, default: 0},
    author: {type: Schema.Types.ObjectId, ref: "User"}, //ref tạo ra dữ liệu populate thêm vào dữ liệu??|| ref qua bảng user
    title: {type: String, default: ""},
    userliked: { type: [UserLikeSchema], default: []},
    comment: { type: [commentModel], default: [] },
    descripstionnew: { type: [descripstionSchema], default: []},
    listimages: { type: [imagelist], default: []},
    tags: {type: [taglist], default: []}
}, {
    timestamps: true // created at & update at
});

const constPost = mongoose.model("Post", PostSchema);

module.exports = constPost;