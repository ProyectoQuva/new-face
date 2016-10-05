(function(){
	'use strict';

	angular
		.module('vove', ['ngRoute','wu.masonry'])
		.config(config);

	function config($locationProvider, $routeProvider){
		$locationProvider.html5Mode(true);
		$routeProvider
		.when('/', {
     	templateUrl: 'templates/principal.html'
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