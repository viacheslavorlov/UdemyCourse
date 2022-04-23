'use strict';

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    let goodfilms = [];
    for (let item of arr) {
        if (item.rating >= 8) {
            goodfilms.push(item);
        }
    }
    return goodfilms;
}


function showListOfFilms(arr) {
    let listOfFilms = [];
    for (let item of arr) {
        listOfFilms.push(item.name);
        }
    return listOfFilms.join(', ');
}


function setFilmsIds(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].id = i;
    }
    return arr;
}


const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(item => item.hasOwnProperty('id'));
}

function checkFilms2(arr) {
    return arr.every(film => film.id || film.id === 0)
}
const t1 = new Date();
checkFilms(tranformedArray);
const t3 = new Date();
console.log(t3 - t1);

const t2 = new Date();
checkFilms2(tranformedArray);
const t4 = new Date();
console.log(t4 - t2);
console.log(t4 - t1);