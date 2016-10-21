(function(){
	'use strict';

	angular
		.module('vove.controllers')
		.controller('CategoriaCtrl', CategoriaCtrl);

	function CategoriaCtrl($routeParams, Noticias){
		var vm = this;

		Noticias.get({categoria: $routeParams.categoria}).$promise.then(function(res){
			console.log(res.results);
			vm.notas_categoria = res;
		});
	}

})();