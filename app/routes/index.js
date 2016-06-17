'use strict';

var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
/*
var fs = require("fs");
 var stats = fs.statSync(inputFile);
 var fileSizeInBytes = stats["size"]
*/


var path = process.cwd();
module.exports = function (app) {


	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

	app.route('/').post(upload.single('inputFile'), function(req, res, next) {
		res.send("Your file " + req.file.originalname + " is a " + req.file.mimetype + " type of file and has a filesize of " + req.file.size + " bytes");
	});


};
