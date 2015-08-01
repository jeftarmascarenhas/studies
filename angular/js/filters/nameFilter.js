'use strict';

(function () {
	
angular.module('filtersBotan',[]).filter('name',function () {
	return function (input) {
		var listaDeNomes = input.split(' ');
		var listaDeNomesFormatada = listaDeNomes.map(function (name) {
			if(/(da|de)/.test(name)) return name;
			return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
		});
		console.log(listaDeNomesFormatada);
		return listaDeNomesFormatada.join(" ");
	};
});

})();