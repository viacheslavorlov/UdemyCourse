'use strict';

// const box = document.querySelector('.box');
//
// const newHeight = 100;
// const newWidth = 400;
//
// function changeParams(elem, h, w) {
//     elem.style.height = `${h ?? 200}px`;
//     elem.style.width = `${w ?? 200}px`;
//     elem.innerHTML = (h ?? 200) * (w ?? 200);
// }
//
// changeParams(box, newHeight, newWidth);


// let userName;
// let usrKey;

// console.log((userName && usrKey) ?? 'User'); //! нельзя использовать одновременно с && или ||

// const box = document.querySelector('.box');
// const block = document.querySelector('.block');

// console.log(block);

// if (block) {
//     console.log(block.textContent);
// }


// console.log(block?.textContent); //? только на чтение, нельзя использовать для назначения переменных


// console.log(1 + 2);
// ? пример
// const userData = {
//     name: 'Ivan',
//     age: null
// };

// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }

// console.log(userData.skills?.js);

// const boxQuery = document.querySelectorAll('.box');
// const boxClass = document.getElementsByClassName('box');

// boxQuery.forEach(box => {
//     if (box.matches('.this')) {
//         console.log('This one!', box);
//     }
// });

// console.log(boxQuery[0].closest('.wrapper'));

// boxQuery[0].remove();
// boxClass[0].remove();

// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div);
// }


// console.log(boxQuery);
// console.log(boxClass);
// console.log(document.body.children);

// console.log(Array.from(boxClass));
let id = Symbol('id');
const obj = {
    name: 'Test',
    [id]: 1,
    getId: function() {
        return this[id];
    }
};

// let id = Symbol('id'); // ! назначаются без new
// obj[id] = 1;
// console.log(obj[id]);
// console.log(obj'id');
console.log(obj.getId());
// for (let iten in obj) {
//     console.log(iten);
// }

