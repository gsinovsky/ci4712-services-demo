'use strict';

var app = angular.module('DemoTwitterSOA', ['ngRoute', 'ngSanitize', 'twitterApp.services', 'jsonFormatter']);

app.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
            $routeProvider
            .when('/', {
                templateUrl: 'static/partials/base.html',
            });
	}]);

