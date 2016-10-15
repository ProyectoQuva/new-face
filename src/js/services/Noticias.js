(function(){
	'use strict';

	angular
		.module('vove.services')
		.constant('BaseUrl', 'http://69.61.93.75/resources/api/v1')
		.factory('Noticias', Noticias);

	function Noticias(BaseUrl, $resource){
		return $resource(BaseUrl + '/noticias', {});
	}
})();