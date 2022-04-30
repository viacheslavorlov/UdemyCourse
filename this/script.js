'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;   // this.a + this.b не будет работать
//     }
//     console.log(sum());
// }
// showThis(4, 5);
// ! Обычная функция: this == window но если стоит 'use strict' - то undefined


// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function shout(){
//             console.log(this);
//         }
//         shout();
//     }
// };

// ! контекст вызова у метода объекта - сам объект в котором это метод расположен
// obj.sum();


// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello, I am ' + this.name);
//     };
// }
// ! контекст вызова this в конструкторах и классах
// ! это новый экземпляр объекта
// let ivan = new User('Ivan', 23);
// ivan.hello();


//? методы для другого this к функции!
//? .call(object, funcArg1, funcarg2, ...)    .apply(object, [funcargs])


// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + ' ' + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);  //* даже если аргумент один 
//* то он передаётся в массиве


//! ручная привязка this (bind)
// function count(num) {
//     return this * num; //? тут this === undefined
// }

// const doble = count.bind(2);  //todo   создаётся новая фунция 
// console.log(doble(2));        //todo   черз метод .bind()
// console.log(doble(13));       //todo   аргумент в bind передаётся как this


// ! контеск вызова - элемент на котором произошло событие

// const btn = document.querySelector('button');


// btn.addEventListener('click', function() {//*если функция стрелочная нужен event.target вместо this (this не будет работать)
//     console.log(this); //* this - элемент на котором произошло событие
//     this.parentElement.style.backgroundColor = 'red';
// });

// const obj = {
//     num: 5,
//     sayNum: function() {
//? если функция стрелочная - она не имеет своего контекста вызова,
//? берёт контекст у своего родителя.
//         const say = () => {
//             console.log(this.num);
//         };
//         say();
//     }
// };

// obj.sayNum();

//! стрелочные функции в объекте напрямую не использовать
// const user = {
//     name: 'John',
//     sayName: () => {
//         console.log(this.name);
//todo  вернёт undefined
//todo  из-за отсутствия контекста вызова
    // },
    // sayNameRight: function() {
    //     const say = () => {
    //         console.log(this.name);
            //*  вернёт 'John'
            //*  так как получила контекст от родительской функции
//         };
//         say();
//     }
// };
// user.sayName();
// user.sayNameRight();


//* если аргумент стрелочной функции один - можно писать его без скобок
const dobble = a => a * 2; //* если тело функции - простое выражениие и в одной строчке - return не нужен
console.log(dobble(5));


function getSum(a, b) {
    function sum() {
        console.log(this.a);
        return a + b;
    }

    console.log(sum());
}

getSum(4, 5);