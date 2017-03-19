var express = require("express");

var router = express.Router();

//Import the model to use its database functions
var burger = require("../models/burger.js");

//Create routes and set up logic
router.get("/", function(req, res){
	burger.all(function(data){
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/", function(req, res){
	burger.
});