// let id = Symbol('id');
// const obj = {
//     name: 'Test',
//     [id]: 1,
//     getId: function () {
//         return this[id];
//     }
// };

// let id = Symbol('id'); // ! назначаются без new
// obj[id] = 1;
// console.log(obj[id]);
// console.log(obj'id');
// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);
// for (let iten in obj) {
//     console.log(iten);
// }

const myAwesomeDB = {
    movies: [],
    actors:[],
    [Symbol('id')]: 123//
};

//сторонний код
myAwesomeDB.id = '92323';

console.log(myAwesomeDB);

