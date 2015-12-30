myApp.factory('UserFactory', function($http, $location){
	var factory = {};
	var user = {};

	// Function create user
	factory.createUser = function(info, callback){
		$http.post('/users', info).success(function(data){
			user = data;
			callback(user);
		})
	}

	// Function get the current active user
	factory.getCurrentUser = function(callback){
		if(!user.name)
		{
			
			callback({error:'error'});
		} else {
			console.log('User found');
			callback(user);			
		}
	}

	// Function to logout user
	factory.logout = function(user){
		user = "";
		$location.path('/');
	}

	// Function to get all users
	factory.getAllUsers = function(callback){
		$http.get('/users').success(function(data){
			callback(data);
		})
	}

	return factory;
})
