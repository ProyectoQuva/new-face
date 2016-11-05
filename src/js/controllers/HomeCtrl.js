(function(){
	'use strict';

	angular
		.module('vove.controllers')
		.controller('HomeCtrl', HomeCtrl);
 
	function HomeCtrl(Noticias, MetaData, $rootScope){
		var vm = this;

		$rootScope.title = "Noticias"; console.log($rootScope.title);
		$rootScope.tipo = "principal"; console.log($rootScope.tipo);

		Noticias.get({categoria: "politica", s: 18}).$promise.then(function(res){
			console.log(res.results);
			vm.notas_politica = res.results;
		});

		Noticias.get({categoria: "deportes", s: 18}).$promise.then(function(res){
			vm.notas_deportes = res.results;
		});

		Noticias.get({categoria: "entretenimiento", s: 18}).$promise.then(function(res){
			vm.notas_entretenimiento = res.results;
		});

		Noticias.get({categoria: "finanzas y negocios", s: 18}).$promise.then(function(res){
			vm.notas_economia = res.results;
		});

		Noticias.get({categoria: "actualidad", s: 18}).$promise.then(function(res){
			vm.notas_actualidad = res.results;
		});

		Noticias.get({categoria: "dialogo abierto", s: 20}).$promise.then(function(res){
			vm.notas_dialogo = res.results;
		});

		vm.prepare_meta = function(titulo, bajada){
			MetaData.data.title = titulo;
			MetaData.data.description = bajada;
		};
	}
})();