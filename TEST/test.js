'use strict';
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('foo');
	}, 300);
});

promise.then((value) => {
	console.log(value);
});