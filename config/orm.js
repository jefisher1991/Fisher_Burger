var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {selectAll: function(table) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      console.log(result);
      callBack(result)
   });
  }, 


var orm = {insertOne: function(table, burger_name) {
    var queryString = "INSERT INTO ?? (?, ) VALUES ()"
    connection.query(queryString, [table, burger_name], function(err, result) {
      console.log(result);
      callBack(result)
   });
  }, 


var orm = {updateOne: function(table, colName, burgerName ) {
    var queryString = "UPDATE ?? SET ?? WHERE ? = ?";
    connection.query(queryString, [table, colName, burgerName], function(err, result) {
      console.log(result);
      callBack(result)
   });
  }, 



};

module.exports = orm;