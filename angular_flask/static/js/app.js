'use strict';

angular.module('AngularFlask', ['angularFlaskServices'])
	.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'static/partials/landing.html',
			controller: IndexController
		});
		$locationProvider.html5Mode(true);
	}])
;