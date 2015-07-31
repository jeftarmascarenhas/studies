'use strict';

(function () {
	
angular.module('filtersBotan',[]).filter('name',function () {
	return function (input) {
		var listaDeNomes = input.split(' ');
		if(/(da|de)/.test(name)) return name;
		var listaDeNomesFormatada = listaDeNomes.map(function (name) {
			return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
		});
		console.log(listaDeNomesFormatada);
		return listaDeNomesFormatada.join(' ');
	};
});

})();