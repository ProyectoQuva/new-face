(function(){
	'use strict';

	angular
		.module('vove.controllers')
		.controller('NotaCtrl', NotaCtrl);

	function NotaCtrl(Noticias, Comentarios, $routeParams, $rootScope){
		var vm = this;
		
		Noticias.get({titulo: $routeParams.titulo}).$promise.then(function(res){
			vm.noticia = res.results;

			$rootScope.title = vm.noticia[0].titulo; console.log($rootScope.title);
			$rootScope.tipo = "nota";
			$rootScope.clase = vm.noticia[0].nombre.toLowerCase();
		});
		Comentarios.get({id: $routeParams.id}).$promise.then(function(res){
			vm.comentarios = res.results;
			vm.cantidad = res.cantidad;
		});
	}
})();