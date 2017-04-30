var express = require("express"); 
// var connection = require("./burger.js");
var path = require("path");
var burger = require("../models/burger.js");

module.exports = function (app) {
	app.get("/index", function (req, res) {
		res.send("hello");
	});

}