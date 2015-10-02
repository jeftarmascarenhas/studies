(function () {

angular.module('product').controller('productController', productController);

productController.$inject = ['$scope'];

function productController ($scope) {
		$scope.contatos = [
			{nome:'Jeftar', telefone:812338800},
			{nome:'Samires', telefone:812338800},
			{nome:'Kevin', telefone:812338800},
			{nome:'Sales', telefone:812338800}
		];
}

})();