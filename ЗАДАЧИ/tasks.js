'use strict';
//
// const films = [
//     {
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];
//
// function showGoodFilms(arr) {
//     let goodfilms = [];
//     for (let item of arr) {
//         if (item.rating >= 8) {
//             goodfilms.push(item);
//         }
//     }
//     return goodfilms;
// }
//
// console.log(showGoodFilms(films));
//
//
// function showListOfFilms(arr) {
//     let listOfFilms = [];
//     for (let item of arr) {
//         listOfFilms.push(item.name);
//     }
//     return listOfFilms.join(', ');
// }
//
//
// function setFilmsIds(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i].id = i;
//     }
//     return arr;
// }
//
//
// const tranformedArray = setFilmsIds(films);
//
// function checkFilms(arr) {
//     return arr.every(item => item.hasOwnProperty('id'));
// }
//
// function checkFilms2(arr) {
//     return arr.every(film => film.id || film.id === 0)
// }
//
// const t1 = new Date();
// checkFilms(tranformedArray);
// const t3 = new Date();
// console.log(t3 - t1);
//
// const t2 = new Date();
// checkFilms2(tranformedArray);
// const t4 = new Date();
// console.log(t4 - t2);
// console.log(t4 - t1);

const funds = [
    {amount: 1400},
    {amount: 2400},
    {amount: 1000},
    {amount: 500},
    {amount: 10400},
    {amount: 11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.filter(item => item.amount > 0)
        .reduce((acc, item) => acc + item.amount, 0)
};
// console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
    if (!data.every(item => item.amount > 0)) {
        return data.reduce((acc, item) => acc + item.amount, 0);
    } else {
        console.log('positive');
        return getPositiveIncomeAmount(data);
    }
};
// console.log(getTotalIncomeAmount(funds));
