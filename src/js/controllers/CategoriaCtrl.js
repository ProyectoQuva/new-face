(function(){
	'use strict';

	angular
		.module('vove.controllers')
		.controller('CategoriaCtrl', CategoriaCtrl);

	function CategoriaCtrl($routeParams, Noticias){
		var vm = this;

		Noticias.query({categoria: $routeParams.categoria}).$promise.then(function(res){
			vm.notas_categoria = res;
		});
	}

})();