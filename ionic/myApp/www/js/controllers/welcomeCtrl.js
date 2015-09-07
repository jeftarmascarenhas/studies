(function  () {
	
	angular
	.module('starter')
	.controller('welcomeCtrl', welcomeCtrl);

	welcomeCtrl.$inject = ['$scope', '$state'];

	function welcomeCtrl ($scope, $state) {
		init();

		function init () {
			
		}
	}

})();