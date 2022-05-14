"use strict";

//
// console.log(1); // 1
//
// setTimeout(() => {
// 	console.log('timeout2k'); //предпоследняя (3)
// }, 2000);
//
// setTimeout(() => {
// 	console.log('timeout4k');// последняя (4)
// }, 4000);
//
// console.log(2);  // 2

// Макро и микрозадачи
setTimeout(() => console.log('timeout'));// макро

Promise.resolve() //микро
	.then(() => console.log('promise'));
queueMicrotask(() => console.log('queueMicrotask'));
console.log('code1');
setTimeout(() => console.log('timeout2'));
Promise.resolve() //микро
	.then(() => console.log('promise_2'));

console.log('code2'); //макро
// Порядок выполнения задач
// 1. макрозадачи: функции
// 2. микрозадачи: .then .catch .finally await
// 3. render страницы

// 1. макрозадачи: функции
// 2. микрозадачи: .then .catch .finally await
// 3. render страницы

// 1. макрозадачи: функции
// 2. микрозадачи: .then .catch .finally await
// 3. render страницы