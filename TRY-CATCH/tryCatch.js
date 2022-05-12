"use strict";

try {
	console.log('Normal'); //работает
	console.log(a); //выдаст ошибку
	console.log('result'); // не сработает (из-за ошибки)
} catch (error) {
	console.log('error'); // выведет 'error' в консоль
	console.log('error.name', error.name); // имя ошибки
	console.log('error.message', error.message); // сообщение ошибки
	console.log('error.stack', error.stack); // отсылка к коду у котором произошла ошибка
} finally {
	console.log('finally');
}

console.log(a); //выдаст ошибку сразу
console.log('still works'); //работает не смотря на ошибку
