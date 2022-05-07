'use strict';

export let one = 1; // экспорт переменной

let two = 2;

export {two}; // экспорт переменной 2 вариант - именованный

export function sayHi() {
    console.log('Hello!');
}

export default function sayHello() {
    console.log('Hi!');
}
