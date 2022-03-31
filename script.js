'use strict';

function sayHello() {
    console.log('Hello!');
}

sayHello();

function sayHi() {
    console.log('Hi!');
}

sayHi();

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sortedArray = array.sort(compareNumbers);

console.log(sortedArray);

function compareNumbers(a, b) {
    return b - a;
}
compareNumbers();

