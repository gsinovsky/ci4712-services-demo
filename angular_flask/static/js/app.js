'use strict';

angular.module('AngularFlask', ['angularFlaskServices', 'ngRoute'])
	.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'static/partials/landing.html',
			controller: BaseController
		});
	}])
;