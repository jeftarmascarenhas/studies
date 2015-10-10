(function () {
	angular.module('product').factory('productService', productService);
	
	productService.$inject = ['$http'];

	function productService ($http){
		
		var _getProducts = function(){
			return $http.get('http://localhost:3412/products');
		};

		return {
			getProducts: _getProducts
		};
	}

	


})();