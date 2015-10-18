angular.module('ngFilterProduct', [])
	.filter('name', name)
	.filter('limit', limit)
	;

function name ($filter) {
	return function (input) {
		var listName = input.split(' ');
		var listaNameFormat = listName.map(function (name) {
			if(/de|de|para/g.test(name)) return name;
			return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
		});
		return listaNameFormat.join(' ');
	}
}

function limit ($filter) {
	return function (input, size) {
		if(input.length <= size) return input;

		var limitName = input.substring(0,size || 2) + '...';

		console.log(limitName);

		return limitName;
	}
}

name.$inject = ['$filter'];