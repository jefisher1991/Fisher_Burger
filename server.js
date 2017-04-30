var express = require("express"); 
var methodOverride = require("method-override"); 
var bodyParser = require("body-parser"); 
var path = require("path");
var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

require("./controllers/burgers_controller.js")(app);

app.listen(PORT, function() {
	console.log("Server started running on port: " + PORT);
})