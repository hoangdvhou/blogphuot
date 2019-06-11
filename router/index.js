const express = require("express");
const Router = express.Router();

const userRouter = require("./user");
const postRouter = require("./post");
const commentRouter = require("./comment");
const addCommentRouter = require("./addComment");

// comment = weather

 Router.use("/api/user", userRouter );

 Router.use("/api/post", postRouter );

 Router.use("/api/weather", commentRouter);

Router.use("/api/addComment", addCommentRouter);

 module.exports = Router;
