// Setup the necessary controllers
var users = require('../controllers/users.js');
var bucketList = require('../controllers/bucketList.js');


// Setup restful routes and controllers
module.exports = function(app){
	// no data required
	app.get('/users',  				users.index ), //used
	
	// app.get('/bucketList',  		bucketList.index ),
	
	// data in req.params
	app.get('/users/:id',  			users.show ), //used
	app.get('/usersCompleted/:id',  users.showCompleted), //used
	app.get('/bucketList/:id',  	bucketList.show ),

	
	// data in req.body
	app.post('/users',  			users.create ),
	app.post('/bucketList',  		bucketList.create ),
	app.post('/bucketList/insert',  bucketList.create ),
	
	// data in req.params and req.body
	app.patch('/users/:id',  		users.update ),
	app.patch('/bucketList/:id',  	bucketList.update ),
	
	// data in req.params
	app.delete('/users/:id',		users.delete ),
	app.delete('/bucketList/:id',  	bucketList.delete )
}