(function(){
	'use strict';

	angular
		.module('vove', ['ngRoute', 'vove.controllers', 'vove.services'])
		.config(config);

	function config($locationProvider, $routeProvider){
		$locationProvider.html5Mode(true);
		$routeProvider
		.when('/', {
     		templateUrl: 'templates/principal.html',
     		controller: 'HomeCtrl',
     		controllerAs: 'home'
	    })
	    .when('/categoria',{
	      templateUrl: 'templates/categoria.html'
	    })
	    .when('/nota', {
	    	templateUrl: 'templates/nota-comun.html'
	    })
	    .otherwise({
	    	redirectTo: '/'
	    });
	}
})();