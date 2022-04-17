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
//     let stringLengh = numberOfLines * 2;
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

// createTree(lines);
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j <= lines * 2; j++) {
//         if (j < lines - i) {
//             result += ' ';
//         }
//         if (j >= lines - i && j <= lines +i) {
//             result += '*';
//         }
//     }
//     result += '\n';
// }
// console.log(result);
// const euro = 32;
// const usdCourse = 28;
// function convert(amount, course) {
//     console.log(amount * course);
// }

// convert(500, usdCourse);   
// convert(30, euro);

// function returnNeighboringNumbers(number) {
//     let arr = [];
//     arr.push(number - 1);
//     arr.push(number);
//     arr.push(number + 1);
//     return arr;
// }

// console.log(returnNeighboringNumbers(5));

// function getMathResult(number, counter) {
//     let result = [];
//     if (typeof(counter) === 'number' && counter > 0) {
//         for (let i = 1; i <= counter; i++) {
//             result.push(number * i); 
//         }
//         return result.join('---');
//     } else {
//         return number;
//     }
// }

// console.log(getMathResult(10, 5));

// function calculateVolumeAndArea(lengthOfCube) {
//     if (typeof(lengthOfCube) === 'number' && lengthOfCube > 0 && lengthOfCube - Math.round(lengthOfCube) === 0) {
//         const volume = lengthOfCube * lengthOfCube * lengthOfCube;
//         const s = lengthOfCube * lengthOfCube * 6;
//         return `Объем куба: ${volume}, площадь всей поверхности: ${s}`;
//     } else {
//         return 'При вычислении произоша ошибка';
//     }
// }


function getCoupeNumber(placeNumber) {
    if (typeof(placeNumber) !== 'number' || placeNumber < 0 || placeNumber - placeNumber.toFixed(0) !== 0) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    } else if (placeNumber === 0 || placeNumber > 36) {
        return 'Таких мест в вагоне не существует';
    } else {
        return Math.ceil(placeNumber / 4);
    }
}
console.log("🚀 ~ file: logical operands.js ~ line 142 ~ getCoupeNumber", getCoupeNumber(12));


