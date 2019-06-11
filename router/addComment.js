const postModel = require("../models/post");
const fs = require("fs");

const express = require("express");
const addCommentRouter = express.Router();
const multer = require("multer");
const authMiddleware = require("./auth");

addCommentRouter.post("/:postId", authMiddleware.authorize, (req, res) => {
  const addComment = (postId, {
      userId,
      content
    }) =>
    new Promise((resolve, reject) => {
      postModel
        .update({
          _id: postId
        }, {
          $push: {
            comment: {
              createdBy: userId, content
            }
          }
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  console.log(req.session);
  req.body.userId = req.session.userInfo.id;
  console.log(res.body);
  addComment(req.params.postId, req.body)
    .then(result => res.send(result))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

module.exports = addCommentRouter
