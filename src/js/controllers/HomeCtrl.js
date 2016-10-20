(function(){
	'use strict';

	angular
		.module('vove.controllers')
		.controller('HomeCtrl', HomeCtrl);
 
	function HomeCtrl(Noticias){
		var vm = this;

		Noticias.get({categoria: "politica", s: 20}).$promise.then(function(res){
			console.log(res.results);
			vm.notas_politica = res.results;
		});

		Noticias.get({categoria: "deportes", s: 20}).$promise.then(function(res){
			vm.notas_deportes = res.results;
		});

		Noticias.get({categoria: "entretenimiento", s: 20}).$promise.then(function(res){
			vm.notas_entretenimiento = res.results;
		});

		Noticias.get({categoria: "finanzas y negocios", s: 20}).$promise.then(function(res){
			vm.notas_economia = res.results;
		});

		Noticias.get({categoria: "actualidad", s: 20}).$promise.then(function(res){
			vm.notas_actualidad = res.results;
		});

		Noticias.get({categoria: "dialogo abierto", s: 20}).$promise.then(function(res){
			vm.notas_dialogo = res.results;
		});
	}
})();