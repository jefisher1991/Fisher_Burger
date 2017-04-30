var orm = require("../config/orm.js");

var express = require("express");

var app = express();
var port = 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var burgers = {
	all: function(callback) {
		orm.all("burgers", function(res) {
			callback(res);
		});
	},
	create: function(burgerName, devoured, callback) {
	    orm.insertOne("burgers", burgerName, devoured, function(res) {
	    	callback(res);
	    });
  	}, 
	update: function(status, id, callback) {
		orm.updateOne("burgers", status, id, function(res) {
			callback(res);
		});
	}
}



module.exports = burgers;
