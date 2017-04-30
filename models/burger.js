var orm = require("./config/orm.js");

var express = require("express");

var app = express();
var port = 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");






orm.selectAll(function(result) {
	var allData = result;
  	console.log(data);
});

orm.insertOne();

orm.updateOne();
