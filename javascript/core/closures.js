//Closueres simple
var outerValue = 'ninja';
var later;

function outerFunction () {
	var innerValue = 'samurai';

	function innerFunction () {
		console.log(outerValue +'\n');
		console.log(innerValue + '\n');
	}

	later = innerFunction;
}

outerFunction();
later();

//Closuere params
var outerValue2 = 'ninja';
var later2;


function outerFunction2 () {
	var innerValue2 = 'samurai';

	function innerFunction (paramValue) {
		console.log(outerValue2 +'\n');
		console.log(innerValue2 + '\n');
		console.log(paramValue + '\n');
	}

	later2 = innerFunction;
}

var tooLate = 'ronin';

outerFunction2();
later2('wakizashi');