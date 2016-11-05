(function(){
	
	angular
		.module('vove.services')
		.factory('MetaData', MetaData);

	function MetaData(){
		var data = {};
		return {
			data: data
		};
	}

})();