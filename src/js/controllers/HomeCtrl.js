(function(){
	'use strict';

	angular
		.module('vove.controllers')
		.controller('HomeCtrl', HomeCtrl);
 
	function HomeCtrl(Noticias){
		var vm = this;

		Noticias.query({categoria: "politica", s: 20}).$promise.then(function(res){
			vm.notas_politica = res;
		});

		Noticias.query({categoria: "deportes", s: 20}).$promise.then(function(res){
			vm.notas_deportes = res;
		});

		Noticias.query({categoria: "entretenimiento", s: 20}).$promise.then(function(res){
			vm.notas_entretenimiento = res;
		});

		Noticias.query({categoria: "finanzas y negocios", s: 20}).$promise.then(function(res){
			vm.notas_economia = res;
		});

		Noticias.query({categoria: "actualidad", s: 20}).$promise.then(function(res){
			vm.notas_actualidad = res;
		});

		Noticias.query({categoria: "dialogo abierto", s: 20}).$promise.then(function(res){
			vm.notas_dialogo = res;
		});
	}
})();