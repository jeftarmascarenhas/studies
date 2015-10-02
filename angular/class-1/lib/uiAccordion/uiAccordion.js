
(function  () {
	
angular.module('uiAccordion', [])
	.directive('uiAccordions', uiAccordions)
	.directive('uiAccordion', uiAccordion);

function uiAccordions () {
	return {

		controller: function ($scope, $element, $attrs) {
			var accordions = [];

			this.registerAccordion = function (accordion) {
				accordions.push(accordion);
			};

			this.closeAll = function  () {
				accordions.forEach(function (accordion) {
					accordion.isOpen = false;	
				});
			};
		}
	};
};



	function uiAccordion () {
		return{
	
			directive: 'AE',
			scope:{
				title: '@'
			},
			require: '^uiAccordions',
			templateUrl:'view/directivies/accordion.html',
			transclude: true,
			link: function (scope, element, attrs, ctrl) {
				ctrl.registerAccordion(scope);
				scope.open = function () {
					ctrl.closeAll();
					scope.isOpen = true;
				};
			}
		};
	};

})();
