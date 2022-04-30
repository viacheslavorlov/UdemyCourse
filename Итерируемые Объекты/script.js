'use strict';

// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function () {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };

// for (const key in user) {
//     console.log(user[key]);
// }

// const arr = ['b', 'a', 'c'];

// for (let key in arr) {
//     console.log(arr[key]);
// }

// const str = 'string';

// for (let key of str) {
//     console.log(key);
// }

// console.dir(user);

// console.dir(arr);

// console.dir(str);


// const salaries = {
//     ann: 500,
//     ivan: 1000,
//     john: 5000,
//     sayHello: function () {
//         console.log('Hello');
//     }
// };
// salaries[Symbol.iterator] = function () {
//     return {
//         current: this.ann,
//         last: this.john,
//         next() {
//             if (this.current < this.last) {
//                 this.current = this.current + 500;
//                 return {
//                     done: false,
//                     value: this.current
//                 };
//             } else {
//                 {done: true}
//             }

//         }
//     };
// };

// for (let res of salaries) {
//     console.log(res);
// }


const boxes = document.querySelectorAll('.box');
console.log(boxes);

boxes.forEach((item, index) => {
    item.textContent = index;
});