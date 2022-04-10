'use strict';

// console.log('Вызов данных...');

// const req = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Подготовка данных...');

//         const product = {
//             name: 'TV',
//             price: 200
//         };
//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'Orderd';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data);
// }).catch(() => {
//     console.error('Произошла ошибка!');
// }).finally(() => {
//     console.log('Finally');
// });


const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));
 
// Promise.all([test(1000), test(3000)]).then(() =>{
//     console.log('all');
// });

Promise.race([test(1000), test(3000)]).then(() => {
    console.log('race');
});