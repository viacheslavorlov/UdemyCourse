'use strict';

// const ham = 5;
// const fri = NaN;

// if (ham && fri) {
//     console.log('Tlf!');
// } 

// ! False значения:
// ! NaN, null, 0, '', undefined;

// console.log(0 == false); //true

// console.log(NaN || 2 || undefined); //2 

// console.log(NaN && 2 && undefined); //NaN

// console.log(1 && 2 && 3); //3

// console.log(!1 && 2 || !3); //false

// console.log(25 || null && !3); //25

// console.log(NaN || null || !3 || undefined || 5); //5

// console.log(NaN || null && !3 && undefined || 5); //5

// console.log(5 === 5 && 3 > 1 || 5); //true


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//     console.log('Done!');
// }


// let john, andrey, maria = 'done';

// john = 'ready';

// console.log(john || andrey || maria);

// console.log(!0);


//цикл в цикле

//! // // // // // // // // /
const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
// console.log('  1  \n 111 \n11111');
function createTree(numberOfLines) {
    let stringLengh = numberOfLines * 2 + 1;
    for (let i = 0; i <= numberOfLines; i++) {
        for (let j = 0; j <= stringLengh; j++) {
            if (j >= (stringLengh / 2) - i && j <= (stringLengh / 2) + i) {
                result += '*';
            } else {
                result += ' ';
            }
        }
        result +='\n';
    }
    return result;
}

console.log(createTree(lines));