(function(){
	'use strict';

	angular
		.module('vove', ['ngRoute', 'vove.controllers', 'vove.services','wu.masonry','ngSanitize', 'ngMeta'])
		.config(config)
		.run(run);

	function config($locationProvider, $routeProvider){
		$locationProvider.html5Mode(true);
		$routeProvider
		.when('/', {
     		templateUrl: 'templates/principal.html',
     		controller: 'HomeCtrl',
     		controllerAs: 'home',
     		meta: {
     			about: "¿Queres saber de qué están hablando los tucumanos? Noticias las 24 horas - San Miguel de Tucuman - Argentina",
     			keywords: "tucuman, argentina, local, diario, digital, actualizacion, actualidad, deportes, politica, dialogo, espectaculos, economia, noticias, revista, informacion"
     		}
	    })
	    .when('/nota/:id/:categoria/:titulo', {
	    	templateUrl: 'templates/nota-comun.html',
	    	controller: 'NotaCtrl',
	    	controllerAs: 'nota',
	    	resolve: {
	    		data: function(MetaData, ngMeta) {
	    			ngMeta.setTag('titulo', MetaData.data.title);
	    			ngMeta.setTag('description', MetaData.data.description)
	    		}
	    	}
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

	function run(ngMeta){
  		ngMeta.init();
	}
})();