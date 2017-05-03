var express = require("express"); 
var methodOverride = require("method-override"); 
var bodyParser = require("body-parser"); 
var path = require("path");
var handlebars = require("express-handlebars");
var app = express();
var PORT = 3000;


app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.use(methodOverride('_method'));



app.engine("handlebars", handlebars({
	defaultLayout: 'main'
}));
app.set("view engine", "handlebars");


require("./controllers/burgers_controller.js")(app);

app.listen(PORT, function() {
	console.log("Server started running on port: " + PORT);
})