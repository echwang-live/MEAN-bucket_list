// Setup the variables and modules
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

// Connect to db
mongoose.connect('mongodb://localhost/bucketList');

// Construct path to models
var models_path = path.join(__dirname, './../models');

// Read all models
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') >= 0){
		require(models_path + '/' + file);
	}
});