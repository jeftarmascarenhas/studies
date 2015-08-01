'use strict';

//Array Create
//---------------------------------------------------------

//Form but simple to crear an array
var carrosIndices = [];

//use indices
carrosIndices[0] = 'Ka';
carrosIndices[1] = 'Corsa';
carrosIndices[2] = 'Palio';

console.log('Simple to crear an array -> ' + carrosIndices);

//Initialized array inline
var carrosInline = ['Ka', 'Corsa', 'Palio'];
console.log('Initialized array -> ' + carrosInline);

//Constructor
var carrosConstructor = new Array('Ka', 'Corsa', 'Palio');
console.log('Constructor Array -> ' + carrosConstructor);

//MULTIDIMENSIONAL ARRAY


var myArray = [];
myArray[0] = [1,2,3];
myArray[1] = [4,5,6];

console.log(myArray[0][2]);
console.log(myArray[1][0]);

var arrayMult = new Array(
	Array(
		
		Array(
			'Olá',
			'Outra chave',
			'Mais uma chave'
		),

		'Outra chave',
		'Mais um chave'
	),

	'Outra chave',
	'Mais uma chave'
);


console.log(arrayMult);

var carros = {
	modelo: ['Ka', 'Corsa', 'Palio'],
	marca: ['Chevrolet', 'Ford', 'Fiat'],
};

console.log(carros.modelo);
console.log(carros.marca);


//Methods array object in JavaScript Array API
//---------------------------------------------------

//Length()
console.log('Method Length: ' + myArray);

//ValueOf()
console.log('Values of array: ' + myArray.valueOf());

//toString()
console.log('Convert array in string: ' + myArray.toString());

//Insert new Element in the array (Last)
//--------------------------------------------------------

//Push()
carrosInline.push('Gol');
console.log('Insert new element: ' + carrosInline + '\n');

//Pop() Remove element array (Last)

console.log('Array normal -> ' + carrosInline);
carrosInline.pop()
console.log('Remove last valeu array -> ' + carrosInline);

//Insert new Element in the array (First)
//--------------------------------------------------------

//Unshift()
carrosInline.unshift('Gol');

console.log('Insert Element First Array -> ' + carrosInline);

//Shift() remove first element in the array
carrosInline.shift();

console.log('Remove First Element -> ' + carrosInline);


//IndexOf() Location element in the array

console.log(carrosInline.indexOf('Palio'));


