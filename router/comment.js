const express = require("express");
const WeatherRouter = express.Router();
const requestt = require('request');

// const CommentModel = require("../models/comment");

//TODO: CRUD for post
//"/api/weather"

// require('es6-promise').polyfill();
// require('isomorphic-fetch');

const url = "http://api.openweathermap.org/data/2.5/forecast?q=";
const apikey = ",vn&cnt=40&APPID=5ac79f3ec738990c78a7222ab7680dc4";

WeatherRouter.get('/:local', (req, res) => {
    const local = req.params.local;
    // fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + local + ',vn&cnt=4&APPID=5ac79f3ec738990c78a7222ab7680dc4')
    // .then(function(response, req, body) {
    //     if (response.status >= 400) {
    //         throw new Error("Bad response from server");
    //     }
    //     res.json(body);
    // })
    // .then(function(stories) {
    //     // console.log(stories);
    // });
    requestt(url + local + apikey, function(err, ress, body){
        if(err){
            res.json(ress.statusCode);
        }else{
            var data = JSON.parse(body);
            res.json(data);
        }
        res.end();
    });
});

WeatherRouter.get('/:local/day', (req, res) => {
    const local = req.params.local;
    requestt(url + local + apikey, function(err, ress, body){
        if(err){
            res.json(ress.statusCode);
        }else{
            const data = JSON.parse(body);
            const listdata = data.list;
            var listday = [];
            for (let index = 0; index < listdata.length; index++) {
                if(index % 8 == 0){
                    listday.push(listdata[index]);
                }
            }  
            res.json(listday);
        }
        res.end();
    });
});

WeatherRouter.get('/:local/oneday', (req, res) => {
    const local = req.params.local;
    requestt(url + local + apikey, function(err, ress, body){
        if(err){
            res.json(ress.statusCode);
        }else{
            const data = JSON.parse(body);
            const listdata = data.list;
            var listaday3h = [];
            for (let index = 0; index < listdata.length; index++) {
                if(index < 8)
                {
                    listaday3h.push(listdata[index]);
                }
            }
            res.json(listaday3h);
        }
        res.end();
    });
});


module.exports = WeatherRouter;