(function(){
	'use strict';

	angular
		.module('vove.controllers')
		.controller('NotaCtrl', NotaCtrl);

	function NotaCtrl(Noticias, $routeParams){
		var vm = this;
		
		Noticias.get({titulo: $routeParams.titulo}).$promise.then(function(res){
			vm.noticia = res.results;
		});
	}
})();