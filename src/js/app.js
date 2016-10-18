(function(){
	'use strict';

	angular
		.module('vove', ['ngRoute', 'vove.controllers', 'vove.services','wu.masonry'])
		.config(config);

	function config($locationProvider, $routeProvider){
		$locationProvider.html5Mode(true);
		$routeProvider
		.when('/', {
     		templateUrl: 'templates/principal.html',
     		controller: 'HomeCtrl',
     		controllerAs: 'home'
	    })
	    .when('/categoria/:categoria',{
	      templateUrl: 'templates/categoria.html',
	      controller: 'CategoriaCtrl',
	      controllerAs: 'categoria'
	    })
	    .when('/nota', {
	    	templateUrl: 'templates/nota-comun.html'
	    })
	    .otherwise({
	    	redirectTo: '/'
	    });
	}
})();