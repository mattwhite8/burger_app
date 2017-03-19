//Dependencies
var connection = require("./connection.js");

var orm = {
	selectAll: function(table, cb){
		var queryString = "SELECT * FROM " + table + ";";
		connection.query(queryString, function(err, result){
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	insertOne: function(table, vals, cb){
		var queryString = "INSERT INTO " + table;
		queryString += " (burgers) ";
		queryString += "VALUES (";
		queryString += "?";
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result){
			if(err){
				throw err;
			}
			cb(result);
		});
	},
	updateOne: function(table, condition, cb){
		var queryString = "INSERT INTO " + table;
		queryString += "SET devoured WHERE ";
		queryString += condition;

		console.log(queryString);

		connection.query(queryString, function(err, result){
			if(err){
				throw err;
			}
			cb(result);
		});
	}
};

//Export the orm object for the model
module.exports = orm;