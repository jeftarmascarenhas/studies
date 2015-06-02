angular.module('atividadeCtrl', [] )
.controller('ProvaCtrl', provaCtrl);

//Fiz a chamda da função fora do controller para o código ficar organizado e crie o modulo atividadeCtrl

function provaCtrl($scope, $http){
	$http.get('base.json')
	.success(function (data) {
		$scope.data = [data];		

		$scope.data = $scope.data.forEach(function (element) {
			var properties = data.features
			  , i;
			for(i in properties){
				$scope.properties = properties;
				// console.log($scope.properties = properties);
			}

		
		});

		$scope.isProperty = function (propriedade) {
			$scope.properties.some(function (tipo) {
				if(propriedade.Type == tipo.properties.Type){
				$scope.endereco = tipo.properties;
				$scope.teste1 = tipo.geometry.coordinates;
				console.log(tipo.properties.Name);
			}else{
				console.log('Deu merda');
			}
			});
		};

	})
	.error(function (statusText) {
		console.log(statusText);
	});
	
		
}

provaCtrl['$inject'] = ['$scope', '$http'];
