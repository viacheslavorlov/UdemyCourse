'use strict';

const box = document.getElementById('box');

console.log(box);

const buttons = document.getElementsByTagName('button');
//! возвращает массив элементов (даже если элемент один!!!!)
console.log(buttons[1]);

const circles = document.getElementsByClassName('circle');

console.log(circles);

const hearts = document.querySelectorAll('.heart');
console.log(hearts);
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);