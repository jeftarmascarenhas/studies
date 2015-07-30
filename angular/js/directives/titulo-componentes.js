angular.module('meusComponentes',[]).directive('meuTitulo', function () {
	
	var directive = {};

	directive.restrict = 'EA';
	
	directive.scope = {
		titulo: '@'
	};

	directive.template = 
	'<h3>{{titulo}}</h3>';

	return directive;
});