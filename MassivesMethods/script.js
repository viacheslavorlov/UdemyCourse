'use strict';

// ! filter
// возвращет новый массив!
// const names = ['ivan', 'Ann', 'Ksenia', 'Voldemort'];
//
// const shortNames = names.filter(function(name) {
//    return name.length < 5;
// });
//
// console.log(shortNames);

// map

// let answers = ['IvaN', 'AnnA', 'HeLLo'];
//
// const rightAnswers = answers.map((item) => {
//     let temp = item.toLowerCase().split('');
//     temp[0] = temp[0].toUpperCase();
//     return temp.join('');
// });
//
// console.log(rightAnswers);

//  every ///  some
//
// const someArr = [4, 'qwer', 'asdfasdfa'];
//
// console.log(someArr.some(item => typeof(item) === 'string'));
//
// const everyArr = [4, 5, 6];
// console.log(everyArr.every(item => typeof(item) === 'number'));


////    reduce     /////
// складывает массив
//первый аргумент - аккумулятор (изначально равен нулю),
// второй аргумент - текущий элемент
// const arr = [4, 1, 4, 5, 6, 7, 8];
// const result = arr.reduce((sum, current) => sum + current);
// console.log(result);
//
// const arr = ['apple', 'pineapple', 'mango', 'watermelon'];
// const result = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(result);


const object = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};
const newArr = Object.entries(object)
    .filter(item => item[1] === 'person')
    .map(item => item[0]);

console.log(newArr);
