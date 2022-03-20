'use strict';

const now2 = new Date();
//? методы даты
// console.log(now2.getFullYear());
// console.log(now2.getMonth());
// console.log(now2.getDate());
// console.log(now2.getDay());
// console.log(now2.getHours());
// console.log(now2.getUTCHours());
// console.log(now2.getTimezoneOffset());
// console.log(now2.setHours(40));

let start = new Date();

for (let i = 0; i < 1000000; i++) {
    let some = i ** 3;
}
let end = new Date();

console.log(`Код отработал за ${end - start} милисекунд.`);