'use strict';

const box = document.querySelector('.box');

// const width = box.clientWidth;
// const heit = box.clientHeight;

// const width = box.offsetWidth;
// const heit = box.offsetHeight;

const width = box.scrollWidth;
const heit = box.scrollHeight;

console.log(width, heit);

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    box.style.height = `${box.scrollHeight}px`;
    console.log(box.scrollTop);
});

// console.log(box.getBoundingClientRect().top);
// const style = window.getComputedStyle(box);
// console.log(style.display);

console.log(document.documentElement.scrollTop);