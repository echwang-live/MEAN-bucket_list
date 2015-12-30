myApp.controller('BucketListController', function(BucketListFactory, UserFactory, $location, $routeParams){
	var _this = this;
	_this.userError = "";
	_this.titleError = "";
	_this.descriptionError = "";
	_this.ownList = [];

	UserFactory.getCurrentUser(function(data){
		_this.currentUser = data;
	});

	UserFactory.getAllUsers(function(data){
		_this.allUsers = data;
	})

	BucketListFactory.getOwnList(_this.currentUser._id, function(data){
		_this.ownList = data;
	})

	BucketListFactory.getUserProfile($routeParams['id'], function(data){
		_this.userInfo = data;
	})

	BucketListFactory.getCompletedList($routeParams['id'], function(data){
		_this.userCompletedInfo = data;
	})

	this.addUser = function(){
		UserFactory.createUser(_this.newUser, function(data){
			console.log(data);
			if (data.errors){
				_this.userError = data.errors.name.message;
			} else {
				_this.currentUser = data;
				$location.path('/dashboard');
			}
		})
	};

	this.addItemToList = function(){
		_this.newItem.originalUser = _this.currentUser;
		BucketListFactory.addItemToList(_this.newItem, function(data){
			if (data.errors){
				if(data.errors.title){
					_this.titleError = data.errors.title.message;
	
				} 

				if (data.errors.description){
					_this.descriptionError = data.errors.description.message;
				}
			} else {
				BucketListFactory.getOwnList(_this.currentUser._id, function(data){
					_this.ownList = data;
					_this.newItem = "";
				})
			}
			
		})
	}

	this.update = function(item){
		console.log(item);
		BucketListFactory.updateItem(item, function(data){
			// sth
		})
	}

	// Log the user out
	this.logout = function(){
		UserFactory.logout();
		window.location.reload();
	};

})
