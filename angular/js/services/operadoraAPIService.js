angular.module('listaTelefonica').service('operadoraAPI', function ($http, config) {
	this.getOperadora = function () {
		return $http.get(config.baseUrl+'/operadoras');
	};
});