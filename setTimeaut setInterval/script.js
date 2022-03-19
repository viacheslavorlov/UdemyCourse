'use strict';

//!     устаноить таймер выполнения функции:
//?     const functionName = setTimeout(function([arg]) {
//?         function code
//?     }, time(2000 = 2000ms)[, arg]);  
// !    чтобы убрать таймер:
//?     clearInterval(functionName) 
//!     чтобы установить интервал
//?     const functionName = setInterval(function([arg]) {
//?         function code
//?     }, time(2000 = 2000ms)[, arg]);  

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id =  setInterval(frame, 15);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
btn.addEventListener('click', myAnimation);
// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 2000);
// });

// function logger() {
//     console.log('Hello World!');
    
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     i++;
// }

// let id = setTimeout(function log() {
//     console.log('Hello!');
//     id = setTimeout(log, 500);
// }, 500);

