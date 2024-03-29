angular.module('listaTelefonica').factory('contatosAPI', function($http, config){
	var _getContatos = function  () {
		return $http.get(config.baseUrl+'/contatos');
	};

	var _postContatos = function (contato) {
		
		return $http.post(config.baseUrl+'/contatos', contato);
	};

	return {
		getContatos  : _getContatos,
		postContatos : _postContatos
	};
});