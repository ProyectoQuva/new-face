(function(){
	'use strict';

	angular
		.module('vove.controllers')
		.controller('CategoriaCtrl', CategoriaCtrl);

	function CategoriaCtrl($routeParams, Noticias, $rootScope){
		var vm = this;

		Noticias.get({categoria: $routeParams.categoria}).$promise.then(function(res){
			vm.notas_categoria = res.results;
			console.log(res.results);

			$rootScope.title = vm.notas_categoria[0].nombre.toLowerCase(); console.log($rootScope.title);
			$rootScope.tipo = "categoria"; console.log($rootScope.tipo);
			$rootScope.clase = vm.notas_categoria[0].nombre.toLowerCase();console.log($rootScope.clase);
		});
	}

})();