(function () {

angular.module('product').controller('productController', productController);

productController.$inject = ['$scope', 'productService'];

function productController ($scope, productService) {
		
		$scope.products = [];

		var loadProducts = function() {

			productService.getProducts()
			.success(function(data){

				$scope.products = data;

			})
			.error(function(data, status){
				$scope.error = 'Não fui possível carregar';
				console.log(status);
			});
		};

		loadProducts();
}


})();