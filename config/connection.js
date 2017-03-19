//Set up MySQL Connection
var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 8889,
	host: "localhost",
	user: "root",
	password: "root",
	database: "burgers_db"
});

//Make connection 
connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadID);
});

//Export connection for ORM to use
module.exports = connection;