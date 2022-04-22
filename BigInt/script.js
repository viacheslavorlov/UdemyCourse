'use strict';
//
// const bigint = 12348971209384709128734098127340n;
//
// const sameBigInt = BigInt(12348971209384709128734098127340);
//
// console.log(typeof sameBigInt, typeof bigint);
//
// //нельзя использовать с объектами Math
// console.log(Math.round(5n))
// //нельзя смешивать с обычными числами (integers, float)
// console.log(5n + 5);
//
// //операции с BigInt будут возвращать BigInt
//
// // сравнения
// console.log(5n == 5);//true
//
// console.log(5n === 5);// false

//для складывания нужно конвертировать
// значения либо к Number либо к BigInt
//через Number() и BigInt()
const t1 = new Date();

function amountOfPages(summary){
    let preResult = 0;
    for (let i = 1; summary > 0; i++) {
        if (i < 10) {
            preResult += 1;
            summary -= 1;
        } else if (i < 100) {
            preResult += 1;
            summary -= 2;
        } else if (i < 1000) {
            preResult += 1;
            summary -= 3;
        }
    }
    return preResult;
}
// # Лучшеерешение

// function amountOfPages(summary){
//     let result = '';
//     let n = 0;
//
//     for (let i = 1; i <= summary; i++) {
//         result += i;
//         if (result.length === summary) {
//             n = i;
//             break;
//         }
//     }
//     return n;
// }

console.log(amountOfPages(10805));
const t2 = new Date();
console.log('время выполнения кода = ' + (t2 - t1) + ' ms');