
(function  () {
	
angular.module('uiAccordion', []).directive('uiAccordion', uiAccordion);

	function uiAccordion () {
		return{
			directive: 'AE',
			template:'<h1>uiAccordion</h1>',
			transclude: true
		}	
	};
})();
