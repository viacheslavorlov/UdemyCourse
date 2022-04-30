'use strict';

//! объект дескрипторов свойств объектов
// {
//     value: 'value', // значение
//     writable: true or false, //перезапись
//     enumerable: true or false, //перечисление/перебор
//     configurable: true or false 
// }
const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));

// Object.defineProperty(user, 'birthday', {
//     writable: false
// }); // cannot rewrite name
// Object.defineProperty(user, 'gender', {
//     value: 'male'
// }); //при создании свойства в ручную
// writable: false, enumerable: false, configurable: false

//writable
// user.birthday = '12341235'; //TypeError: 
//Cannot assign to read only property 'birthday' of object
// console.log(user);
//enumerable
// Object.defineProperty(user, 'showMyPublicData', {
//     enumerable: false
// });
// исключает метод или свойство из перечисления в цикле
// for (let key in user) {
    // console.log(key);
// }
//confgurable - совмещает writable + enumerable //! дорога в один конец

// Object.defineProperties(user, {
//     maried: {
//         value: true,
//         configurable: true
//     },
//     children: {value: 2}
// });

// console.log(user);

// ! Другие полезные способы
// Object.preventExtensions() Object.isExtensible() нельзя добавлять новые свойства/методы
// Object.seal() Object.isSealed() writable : false
// Object.freeze() Object.isFrozen() writable+configurable : false


Object.keys() //- возвращает ключи объекта

Object.values() //- возвращает значения объекта

Object.entries() // возвращает массив из пар [ключ, значение]