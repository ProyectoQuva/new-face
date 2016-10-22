(function(){
	'use strict';

	angular
		.module('vove', ['ngRoute', 'vove.controllers', 'vove.services','wu.masonry','ngSanitize'])
		.config(config);

	function config($locationProvider, $routeProvider){
		$locationProvider.html5Mode(true);
		$routeProvider
		.when('/', {
     		templateUrl: 'templates/principal.html',
     		controller: 'HomeCtrl',
     		controllerAs: 'home'
	    })
	    .when('/nota/:id/:categoria/:titulo', {
	    	templateUrl: 'templates/nota-comun.html',
	    	controller: 'NotaCtrl',
	    	controllerAs: 'nota'
	    })
	    .when('/categoria/:categoria',{
	      templateUrl: 'templates/categoria.html',
	      controller: 'CategoriaCtrl',
	      controllerAs: 'catego'
	    })
	    .when('/nota', {
	    	templateUrl: 'templates/nota-comun.html'
	    })
	    .otherwise({
	    	redirectTo: '/'
	    });
	}
})();