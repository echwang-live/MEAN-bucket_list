var myApp = angular.module('myApp', ['ngRoute', 'ngMessages']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/static/views/partials/login.html',
		controller: 'BucketListController as BCC'
	})
	.when('/logout', {
		templateUrl: '/static/views/partials/login.html',
		controller: 'BucketListController as BCC'
	})
	.when('/dashboard', {
		templateUrl: '/static/views/partials/dashboard.html',
		controller: 'BucketListController as BCC'
	})
	.when('/users/:id', {
		templateUrl: '/static/views/partials/userInfo.html',
		controller: 'BucketListController as BCC'
	})
	.otherwise({
			redirectTo: '/'
	});
})
