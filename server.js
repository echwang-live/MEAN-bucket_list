var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.json());

// Set client folder to look for views
app.use(express.static(path.join(__dirname, './client')));

// Set up the configuration for mongoose and routes
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

// Start node and express
app.listen(8000, function(){
	console.log('listening on 8000');
});