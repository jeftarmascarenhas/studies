angular.module('listaTelefonica').directive('uiPop', function () {
	return {
		restrict: 'AE',
		scope:{
			titulo: '@titulo'
		},
		templateUrl: 'view/pop.html',
		transclude: true
	};
});