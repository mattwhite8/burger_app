//Dependencies
var connection = require("./connection.js");

var orm = {
	createTable: function(){
		var queryString = "CREATE TABLE IF NOT EXISTS burgers (";
		queryString += "id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,";
		queryString += "burger_name VARCHAR(255),";
		queryString += "devoured BOOLEAN NOT NULL DEFAULT 0,";
		queryString += "date TIMESTAMP);";

		connection.query(queryString, function(err, result){
			if (err) {
				throw err;
			}
		});
	},
	selectAll: function(table, cb){
		var queryString = "SELECT * FROM " + table + ";";
		connection.query(queryString, function(err, result){
			if (err) {
				throw err;
			}
			cb(result);
			connection.resolve();
		});
	},
	insertOne: function(table, vals, cb){
		var queryString = "INSERT INTO " + table;
		queryString += " (burger_name) ";
		queryString += "VALUES (";
		queryString += "?";
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result){
			if(err){
				throw err;
			}
			cb(result);
			connection.resolve();
		});
	},
	updateOne: function(table, condition, cb){
		var queryString = "UPDATE " + table;
		queryString += " SET devoured = 1 WHERE ";
		queryString += condition;

		console.log(queryString);

		connection.query(queryString, function(err, result){
			if(err){
				throw err;
			}
			cb(result);
			connection.resolve();
		});
	}
};

//Export the orm object for the model
module.exports = orm;