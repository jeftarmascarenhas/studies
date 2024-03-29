(function () {		

	angular.module('controllerLista',[])
	.controller('listaTelefonicaCtrl', listaTelefonicaCtrl);

		function listaTelefonicaCtrl ($scope, contatosAPI, operadoraAPI) {

			$scope.contatos = [];
			$scope.operadoras = [];

			$scope.app = 'Lista Telefonica';

			var carregarContatos = function () {
				contatosAPI.getContatos()
				.success(function (data) {

					$scope.contatos = data;
					
				}).error(function (data, status) {
					$scope.error = 'Não fui possível carregar';
					console.log(status);
				});
			};
			
			var carregarOperadoras =  function () {
				operadoraAPI.getOperadora()
				.success(function (data) {
					$scope.operadoras = data;
				});
			};

			$scope.adicionarContato = function (contato) {
				// $scope.data = new Date();
				contatosAPI.postContatos(contato)
				.success(function (data) {
					
					delete $scope.contato;
					$scope.contatoForm.$setPristine();
					console.log($scope.contatos);
				
				//A performance é melhor $scope.contatos.push(angular.copy(data));
				
				carregarContatos(); // Amarra todos os eventos da mais segurança.

				}).error(function (data, status) {
					$scope.message = 'Aconteceu um problema: ' + data;
				});
				
			};
				
			$scope.isContatoSelecionado = function (contatos) {
				return contatos.some(function (contato) {
					return contato.selecionado;
				});
			};

			carregarContatos();
			carregarOperadoras();
			
		};
	
})();