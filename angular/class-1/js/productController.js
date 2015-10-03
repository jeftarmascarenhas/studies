(function () {

angular.module('product').controller('productController', productController);

productController.$inject = ['$scope'];

function productController ($scope) {
		$scope.products = [
			{name:'Sandalias', price:30},
			{name:'Cueca', price:20},
			{name:'Par de meioa', price:10},
			{name:'Carteira', price:15}
		];
}

})();