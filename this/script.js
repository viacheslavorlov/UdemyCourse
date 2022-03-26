'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// ! Обычная функция: this == window если 'use strict' - то undefined
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };

// ! контекст вызова у метода объекта - объект
// obj.sum();


// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// ! контекст вызова у конструктора и классах - новый экземпляр объекта
// let ivan = new User('Ivan', 23);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this * num;
// }
// //! ручная привязка this (call, apply, bind)
// const doble = count.bind(2);
// console.log(doble(2));
// console.log(doble(13));

// const btn = document.querySelector('button');
// ! контеск вызова - элемент на котором произошло событие
//? если функция стрелочная - она может не имеет контекста вызова. нужен event.target вместо this
// btn.addEventListener('click', function() {
//     this.style.backgroundColor = 'red';
// });
 
// const obj = {
//     num: 5,
//     sayNum: function() {
//         const say = () => {
//             console.log(this.num);
//         };
//         say();
//     }
// };

// obj.sayNum();

const dobble = a => a * 2;
// если в одну строчку - return не нужен
console.log(dobble(5));