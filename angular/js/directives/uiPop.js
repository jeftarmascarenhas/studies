angular.module('listaTelefonica').directive('uiPop', function () {
	return {
		templateUrl: 'view/pop.html',
		restrict: 'AE',
		scope:{
			title: '@'
		},
		transclude: true
	};
});