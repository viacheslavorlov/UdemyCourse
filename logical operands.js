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
// const lines = 5;
// let result = '';
// Проверяется именно переменная result, формируйте строку в ней
// console.log('  1  \n 111 \n11111');
// function createTree(numberOfLines) {
//     let stringLengh = numberOfLines * 2 + 1;
//     for (let i = 0; i <= numberOfLines; i++) {
//         for (let j = 0; j <= stringLengh; j++) {
//             if (j >= (stringLengh / 2) - i && j <= (stringLengh / 2) + i) {
//                 result += '*';
//             } else {
//                 result += ' ';
//             }
//         }
//         result +='\n';
//     }
//     return result;
// }

// console.log(createTree(lines));

// function getTimeFromMinutes(minutes) {
//     if (Number.isInteger(minutes) && minutes >= 0) {
//         const hours = Math.floor(minutes / 60);
//         let hoursName;
//         switch (hours) {
//             case 1:
//                 hoursName = 'час';
//                 break;
//             case 2:
//                 hoursName = 'часа';
//                 break;
//             case 3:
//                 hoursName = 'часа';
//                 break;
//             case 4:
//                 hoursName = 'часа';
//                 break;
//             default:
//                 hoursName = 'часов';
//                 break;
//         }

//         let minut = minutes % 60;

//         return `Это ${hours} ${hoursName} и ${minut} минут`;
//     } else {
//         return 'Ошибка, проверьте данные';
//     }
// }

// console.log(getTimeFromMinutes(0));

// function findMaxNumber(num1, num2, num3, num4) {
//     if (typeof (num1) === 'number' && typeof (num2) === 'number'&&
//     typeof (num3) === 'number' && typeof (num4) === 'number') {
//         return Math.max(num1, num2, num3, num4);
//     } else {
//         return 0;
//     }
// }

function fib(num) {
    let result = '';
    let first = 0;
    let second = 1;

    if (Number.isInteger(num) && num > 0) {
        for (let i = 0; i < num; i++) {
            if (i + 1 === num) {
                result += `${first}`;
            } else {
                result += `${first} `;
            }
            let tird = first + second;
            first = second;
            second = tird;
        }
        
        return result;
    } else {
        return '';
    }
}

console.log(fib(3));