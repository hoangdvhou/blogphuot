const express = require("express");
const UserRouter = express.Router();
const bcrypt = require("bcrypt")

const UserModels = require("../models/user")

//TODO: CRUD for user
//"/api/user"
UserRouter.post("/", (req, res) => {
    const newUser = req.body; 
    const salt = bcrypt.genSaltSync(12);
    const hasPassword = bcrypt.hashSync(newUser.password, salt || 12) // 12 số vòng mã hóa || string thêm string vào pass để mã hóa
    newUser.password = hasPassword;
    UserModels.create(newUser, (err, userCreated) =>{
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else res.status(201).json({
            success: 1,
            message: "Creat Success"
        })
    });
});

// Get all
UserRouter.get("/", (req, res) => {
    UserModels.find({}, (err, data) =>{
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else res.json(data);
    });
}); 

//Get by id
UserRouter.get("/id=:id", (req, res) => {
    UserModels.findById(req.params.id, (err, data) => {
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else res.json(data);
    });
});

UserRouter.put('/update=:id', (req,res) => {
    UserModel.findById(req.params.id, {$set:req.body}, (err, data)=> {
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else {
            if(!data || !data._id) {
                res.status(404).json({
                    success: 0,
                    message: "Not Found"
                });
            }
            else {
                if(req.body.password && !bcrypt.compareSync(req.body.password, data.password)) {
                    req.body.password = bcrypt.hashSync(req.body.password, 12);
                }
                else {
                    req.body.password = undefined;
                }
            }
            for(key in req.body){
                if(req.body[key] && data[key]){
                    data[key] = req.body[key];
                }
            }
            data.save(function(err) {
                if(err) res.status(500).json({
                    success: 0,
                    message: err
                });
                else res.json({success: 1, message: "save Ok"});
            });
        }
    });
});

UserRouter.delete('/delete=:id',(req,res)=>{
    UserModel.findByIdAndDelete(req.params.id, (err, data) =>{
        if(err) res.status(500).json({
            success: 0,
            message: err
        });
        else res.status(201).json({
            success: 1,
            message: "Data Del Ok"
        });
    })
})
module.exports = UserRouter;