var express = require("express");
// var connection = require("./burger.js");

var path = require("path");
var burger = require("../models/burger.js");
var methodOverride = require("method-override");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.redirect("/burgers");
    })

    app.get("/burgers", function(req, res) {
        burger.all(function(data) {
            var myResult = {
                burgers: data
            }
            console.log(myResult);
            res.render("index", myResult);
        })
    })

    app.post("/burgers/create", function(req, res) {
        burger.create(req.body.myNewBurger, false, function(data) {
            res.redirect("/burgers");
        })
    });

    app.put("/burgers/update/:id", function(req, res) {
        var burgerId = req.params.id;
        burger.update(true, burgerId, function(data) {

        })
        res.redirect("/burgers");
    });
}