myApp.factory('BucketListFactory', function($http){
	var factory = {};

	factory.addItemToList = function(newItem, callback){
		$http.post('/bucketList', newItem).success(function(data){
			callback(data);
		})
	}

	factory.getUserProfile = function(userId, callback){
		$http.get('/users/' + userId).success(function(data){
			//console.log('factory getUserProfile', data);
			callback(data);
		})
	}

	factory.getCompletedList = function(userId, callback){
		$http.get('/usersCompleted/' + userId).success(function(data){
			//console.log('factory getUserProfile', data);
			callback(data);
		})
	}

	factory.getOwnList = function(userId, callback){
		$http.get('/users/' + userId).success(function(data){
			// console.log('factory getUserProfile', data);
			callback(data);
		})
	}

	factory.updateItem = function(item, callback){
		$http.patch('/bucketList/' + item._id, item).success(function(data){
			callback(data);
		})
	}


	return factory;
})
