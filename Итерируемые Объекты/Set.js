'use strict';

const arr = ['alex', 'anna', 'oleg', 'alex']; 

const set = new Set(arr);
for (let value of set) {
    console.log(value);
}
// console.log(set, set.size);
set.add('ivan');
// set.add('oleg'); //не добавит так как такой элемент уже есть
// console.log(set, set.size);
// const newArr = Array.from(set); //создать массив из Set'a

// console.log(newArr);

// .delete(value) удалить жлемент
// .has(value) провверить наличие
// .clear() полностью очистит Set
//set.size  возвращает количество элеменотв Set'a

// for (let value of set) {
//     console.log(value);
// }

// console.log(set.values());

// console.log(set.keys());

// console.log(set.entries());

//! быстрая фильтрация на уникальность (удаляет копии)
function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(arr));