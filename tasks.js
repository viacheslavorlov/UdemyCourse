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

// ! числа Фибоначи
// function fib(num) {
//     let result = '';
//     let first = 0;
//     let second = 1;

//     if (Number.isInteger(num) && num > 0) {
//         for (let i = 0; i < num; i++) {
//             if (i + 1 === num) {
//                 result += `${first}`;
//             } else {
//                 result += `${first} `;
//             }
//             let tird = first + second;
//             first = second;
//             second = tird;
//         }

//         return result;
//     } else {
//         return '';
//     }
// }

// console.log(fib(3));

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function (plan) {
//         const {languages} = plan.skills;
//         return `Мне ${plan.age} и я владею языками: ${languages.join(' ').toUpperCase()} `;
//     }
// };

// function showExperience(plan) {
//     const {
//         exp
//     } = plan.skills;
//     return exp;
// }

// function showProgrammingLangs(plan) {
//     const {
//         programmingLangs
//     } = plan.skills;
//     let result = '';
//     if (typeof (programmingLangs) === 'object') {
//         for (let lang in programmingLangs) {
//             result += `Язык ${lang} изучен на ${programmingLangs[lang]}\n`;
//         }
//     }
//     return result;
// }

// console.log(showProgrammingLangs(personalPlanPeter));

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
// personalPlanPeter.skills.languages = ['ur', 'tr', 'df'];
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     if (arr.length === 0) {
//         return 'Семья пуста';
//     }
//     const familyMembers = arr.join(' ');
//     return `Семья состоит из: ${familyMembers}`;
// }

// console.log(showFamily(family));
// console.log(showFamily([]));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(item => {
//         console.log(item.toLowerCase());
//     });
// }


// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return 'Ошибка!';
//     }
//     return str.split('').reverse().join('');
// }

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     if (arr.length === 0) {
//         return 'Нет доступных валют';
//     } 
//     let result = 'Доступные валюты:\n';
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === missingCurr) {
//             arr.splice(i, 1);
//         } else {
//             result += `${arr.indexOf(arr[i]) + 1} - ${arr[i]}\n`;
//         }
//     }
//     return result;
// }

// console.log(reverse(someString));
// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'USD'));


// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

// arr.forEach(function (curr, i) {
//     if (curr !== missingCurr) {
//         str += `${i + 1} - ${curr}\n`;
//     }
// });

// Или
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === missingCurr) {
//             continue;
//         }
//         str += `${i + 1} - ${arr[i]}\n`;
//     }

//     return str;
// }

// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'USD'));

// const shoppingMallData = {
//     shops: [{
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }, 
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 3,
//     moneyPer1m3: 30,
//     budget: 5000
// };

// function isBudgetEnough(data) {
//     let volume = 0;
//     data.shops.forEach(item => {
//      volume += item.width * item.length * data.height;
//     });

//     return (data.budget - volume * data.moneyPer1m3 > 0) ? 'Бюджета достаточно' : 'Бюджета недостаточно';
// }
// console.log(isBudgetEnough(shoppingMallData));

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Sam', 'ZZtpo', 'Opfash'];

// function sortStudentsByGroups(arr, numOfGroups, numInGruop) {
//     let result = [];
//     arr = arr.sort();

//     for (let i = 0; i < numOfGroups; i++) {
//         let item = [];
//         for (let j = (result.length * numInGruop); j < (result.length * numInGruop) + numInGruop; j++) {
//             item.push(arr[j]);
//         }
//         result.push(item);
//     }
//     result.push(`Оставшиеся студенты: ${(arr.slice(numInGruop * numOfGroups).length > 0) ?
//          arr.slice(numInGruop * numOfGroups).join(', ') : '-'}`);
//     return result;
// }
// console.log(sortStudentsByGroups(students, 4, 1));
// console.log(students);


// ! Замыкания
// ? 1.
// let number = 5; debugger

// function logNumber() {
//     console.log(number); debugger
// }

// number = 6; debugger

// logNumber(); debugger

// ? 2.

// function createCounter() {
//     let counter = 0;

//     const myFunction = function() {
//         counter += 1;
//         return counter;
//     };

//     return myFunction;
// }

// const increment = createCounter();

// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);

// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Открыто' : answer = 'Закрыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (parseInt(fDish.price) + parseInt(sDish.price) < parseInt(average)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[2], restorantData.menu[3], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = JSON.parse(JSON.stringify(data));

//     copy.waitors.push({name: 'Mike', age: 32});
//     return copy;
// }

// console.log(transferWaitors(restorantData));

// console.log(restorantData);

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++){
//         result *= x;
//     }

//     return result;

// }

// let students = {
//     js: [{
//         name: 'John',
//         progress: 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],

//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18
//         }, {
//             name: 'Sam',
//             progress: 10
//         }],
//         semi: {
//             students: [{
//                 name: 'Test',
//                 progress: 100
//             }]
//         }
//     }
// };

// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;
//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for(let subCourse of Object.values(course)) {
//                 students += subCourse.length;
//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total / students;
// }

// console.log(getTotalProgressByIteration(students));

// function getTotalProgressByRecursion(data) {
//     if (Array.isArray(data)) {
//         let total = 0;
//         for (let i = 0; i < data.length; i++) {
//             total += data[i].progress;
//         }
//         return [total, data.length];
//     } else {
//         let total = [0, 0];
//         for (let subData of Object.values(data)) {
//             const subDataArr = getTotalProgressByRecursion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }
//         return total;
//     }
// }

// const result = getTotalProgressByRecursion(students);
// console.log(result[0] / result[1]);

// function factorial(n) {
//     if (Number.isInteger(n)) {
//         if (n < 1) {
//             return 1;
//         } else {
//             return n * factorial(n - 1);
//         }
//     } else {
//         return 'Введите целое число';
//     }
// }
// console.log(factorial(23.2));

function findOutlier(integers) {
    let oddNums = 0;
    let evenNums = 0;
    for (let i = 0; i < 3; i++) {
        if (integers[i] % 2 === 0) {
            evenNums += 1;
        } else {
            oddNums += 1;
        }
    }
    if (oddNums > evenNums) {
        for (let j = 0; j < integers.length; j++) {
            if (integers[j] % 2 === 0) {
                return integers[j];
            }
        }
    } else {
        for (let k = 0; k < integers.length; k++) {
            if (integers[k] % 2 !== 0) {
                return integers[k];
            }
        }
    }
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));