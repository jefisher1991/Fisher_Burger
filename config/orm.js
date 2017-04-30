var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
	all: function(table, callBack) {
    	var queryString = "SELECT * FROM ??";
	    connection.query(queryString, [table], function(err, result) {
	      console.log(result);
	      callBack(result); 
	   });
  	},
  	insertOne: function(table, burgerName, devoured, callBack) {
	    var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)"
	    connection.query(queryString, [table, burgerName, devoured], function(err, result) {
	      console.log(result);
	      callBack(result); 
	   });
  	},
  	updateOne: function(table, status, id, callBack) {
	    var queryString = "UPDATE ?? SET devoured = ? WHERE id = ?";
	    connection.query(queryString, [table, status, id], function(err, result) {
	      console.log(result);
	      callBack(result); 
	   });
  	}
  };

module.exports = orm;