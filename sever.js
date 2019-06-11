const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const sesstion = require("express-session");
const bcrypt = require("bcrypt");
const cors = require('cors')

const RootRouter = require("./router");
const userModel = require("./models/user");

mongoose.connect("mongodb://test:123heyABC@ds155714.mlab.com:55714/severlocalweb16",
                {
                    useNewUrlParser: true
                }, (err) => {
                    if(!err) console.log("DB Conneted");
                });

const app = express();
app.use((req, res, next) => {
    res.setHeader("X-Frame-Options", "ALLOWALL");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "POST, GET, PUT, DELETE, OPTIONS"
    );
    const acceptedOrigins = [ "http://localhost:3000","http://localhost:1234"];
    if (req.headers.origin) {
      res.setHeader("Access-Control-Allow-Origin", req.headers.origin);// cho phep truy cap cheo cac server
    }

     res.setHeader("Access-Control-Allow-Credentials", true);

    res.setHeader(
      "Access-Control-Allow-Headers",
      "Authorization, Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
app.use(express.static("data"));
var corsOptions = {
    origin: ['http://localhost:3000','http://localhost:1234']
    }
app.use(cors(corsOptions))
// app.use(express.bodyParser());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: false }));



// const userModel = require("./models/user");

app.use(sesstion({
    secret: "Chào Anh Em nhé",
    resave: false,
    saveUninitialized: true, // lưu lại sesstion
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 7*24*60*60*1000
    }
}));
app.use("/", RootRouter);

app.post("/login", (req, res) => {
    const {username, password} = req.body;
    if(username && password) {
        userModel.findOne({username}, function(err, userFound) {
            if(err) res.status(500).json({ success: 0, message: err});
            else if(!userFound || !userFound._id) res.status(404).json({success: 0, message:"Not found"});
                else{
                    if(bcrypt.compareSync(password, userFound.password)){
                        const {username, email, _id} = userFound;
                        req.session.userInfo = {username, email, userId: _id}
                        // res.json({success: 1, message: "login ok"});
                        res.json(req.session.userInfo);
                        req.session.save()
                    }
                    else{
                        res.status(401).json({success: 0, message: "Login Fail"})
                    }
                }
        });
    }
});

app.delete("/logout", (req, res) => {
    req.session.destroy();
    res.json({success: 1, message: "logout ok"});
});

const port = process.env.PORT || 1234;
app.listen(port, (err) => {
    if(!err) console.log("OK");
});
