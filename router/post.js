const express = require("express");
const PostRouter = express.Router();

const PostModel = require("../models/post")

//TODO: CRUD for post
//"/api/post"
PostRouter.post("/", (req, res) => {
    const newPost = req.body;
    PostModel.create(newPost, (err, userCreated) =>{
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else res.status(201).json({
            success: 1,
            message: "Post Success"
        });
    });
});


//Get all
PostRouter.get("/", (req, res) => {
    PostModel.find({})
    .populate({
        path: "author",
        select: {
            username: 1,
            image: 1,
            // password: 0,
            // email: 0,
            // phone: 0,
            // chỉ chọn tất cả 1 hoặc tất cả 0 || 1 - hiện 0 - ẩn
            fullname: 1
        }
    })
    .exec((err, data) => {
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else res.json(data);
    });
});

// Get by id
PostRouter.get("/id=:id", (req, res) => {
    PostModel.findById(req.params.id, (err, data) => {
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else res.json(data);
    });
});

// PostRouter.put('/:id/like', (req, res) => {
//     PostModel.findByIdAndUpdate(req.params.id, {$set:req.body}, (err, data) => {
//         if(err) {
//             res.status(500).json({
//                 success: 0,
//                 message: err
//             });
//         }else{

//         }
//     });
// });


PostRouter.put('/update=:id', (req,res) => {
    PostModel.findByIdAndUpdate(req.params.id, {$set:req.body} ,(err, data)=> {
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else res.status(201).json({
            success: 1,
            message: "Update Complete"
        });
    });
});

//MidleWare
// app.use((req, res, next) => {
//     console.log(req.sessionID);
//     next();
// });
// UserRouter.use((req, res, next) => {
// 	// console.log(req.session.userInfo);
// 	// console.log(req.sessionID);
// 	if(req.session.userInfo && req.session.userInfo.role == "admin") {
// 		next();
// 	} else res.status(401).json({ success: 0, message: "Unauthorized" });
// });

PostRouter.delete('/delete=:id',(req,res)=>{
    PostModel.findByIdAndDelete(req.params.id, req.body ,(err, data)=> {
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else res.status(201).json({
            success: 1,
            message: "Data Del Ok"
        });
    });
});

PostRouter.get('/search=:keyword', (req, res) => {
    var dataResponse = [];
    const key = req.params.keyword;
    console.log(key);
    PostModel.find({})
    .populate({
        path: "author",
        select: {
            username: 1,
            image: 1,
            // password: 0,
            // email: 0,
            // phone: 0,
            // chỉ chọn tất cả 1 hoặc tất cả 0 || 1 - hiện 0 - ẩn
            fullname: 1
        }
    })
    .exec((err, data) => {
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else {
            data.forEach(elementdata => {
                elementdata.tags.forEach(tagdata => {
                    if(key === tagdata.tag){
                        dataResponse.push(elementdata);
                    }
                })
            });
        } 
        res.json(dataResponse);
    });
});
module.exports = PostRouter;