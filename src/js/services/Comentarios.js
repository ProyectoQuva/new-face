(function(){
	'use strict';

	angular
		.module('vove.services')
		.factory('Comentarios', Comentarios);

	function Comentarios(BaseUrl, $resource){
		return $resource(BaseUrl + '/comentarios', {});
	}
})();