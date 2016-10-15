(function(){
	'use strict';

	angular
		.module('vove.controllers')
		.controller('HomeCtrl', HomeCtrl);

	function HomeCtrl(Noticias){
		var vm = this;

		Noticias.query({categoria: 1, s: 31}).$promise.then(function(res){
			vm.notas_politica = res;
		});

		Noticias.query({categoria: 3, s: 31}).$promise.then(function(res){
			vm.notas_deportes = res;
		});

		Noticias.query({categoria: 4, s: 31}).$promise.then(function(res){
			vm.notas_economia = res;
		});

		Noticias.query({categoria: 2, s: 31}).$promise.then(function(res){
			vm.notas_actualidad = res;
		});

		Noticias.query({categoria: 7, s: 20}).$promise.then(function(res){
			vm.notas_dialogo = res;
		});
	}
})();