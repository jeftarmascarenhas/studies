angular.module('meusComponentes',[]).directive('uiAlert', function () {
	return{
		templateUrl: 'view/alert.html',
		restrict: 'AE',
		scope:{
			title: '@'
		},
		transclude: true
	};
});