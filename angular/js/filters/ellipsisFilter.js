angular.module('listaTelefonica').filter('ellipsis', function () {
	return function (input, size) {
		if(input.length <= size) return input;
		//size é = filter ellipsis:10
		var output = input.substring(0, (size || 6)) + '...';

		return output;
	};
});