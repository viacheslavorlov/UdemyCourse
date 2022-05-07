'use strict';

const app = 'data';


// const number= 1;
//
// (function (){
// 	let number = 2;
// 	console.log(number);
// 	console.log(number+3);
// }());
//
// console.log(number);

const user = (function () {
	const privat = function () {
		console.log('i am privat');
	};
	return {
		sayHello: privat
	};
}());

user.sayHello()