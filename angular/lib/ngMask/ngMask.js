(function () {

angular.module('ngMask',[])
 .directive('uiDate', uiDate)
 .directive('uiPhone', uiPhone);

uiDate.$inject = ['$filter'];

 function uiDate ($filter) {
	return {
		require: 'ngModel',
		link: function  (scope, element, attrs, ctrl) {

			var _formatDate = function (date) {
				date = date.replace(/[^0-9]+/g, "");
				if(date.length > 2){
					date = date.substring(0,2) + "/" + date.substring(2);
				}
				if(date.length > 5){
					date = date.substring(0,5) + "/" + date.substring(5,9);
				}
				return date;
			};

			element.bind('keyup', function () {
				ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
				ctrl.$render();
			});

			ctrl.$parsers.push(function (value) {
				if(value.length === 10){
					var dateArray = value.split("/");
					return new Date(dateArray[2], dateArray[1]-1, dateArray[0]).getTime();
					// return value;

				}
			});

			ctrl.$formatters.push(function (value) {
				return $filter("date")(value, "dd/MM/yyyy");
			});
		}
	};
};

function uiPhone ($filter) {
	return {
		require: 'ngModel',
		link: function (scope, element, attrs, ctrl) {
			// console.log('uiPhone', scope.$id, element, attrs);
			// console.log(attrs.ngModel);
			var _phoneDate = function (phone) {

				phone = phone.replace(/[^0-9]+/g, "");

				if(phone.length > 2){
					phone = phone.substring(0,0) + "(" + phone.substring(0);
				}
				if(phone.length > 3){
					phone = phone.substring(0,3) + ")" + phone.substring(3,11);
					console.log('teste )');
				}
				if(phone.length >= 8 || phone.length > 10){
					phone = phone.substring(0,8) + "-" + phone.substring(8,12);
				}

				return phone;
			};

			element.bind('keyup', function () {
				ctrl.$setViewValue(_phoneDate(ctrl.$viewValue));
				ctrl.$render();
			});
		}
	}
};

})();
