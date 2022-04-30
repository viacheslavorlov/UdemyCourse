'use strict';

const budget = [5000, 15000, 25000];

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 20}
];

const user = {
    name: 'alex',
    surname: 'smit',
    birthday: '12.2.1234'
};

const userMap = new Map(Object.entries(user));
console.log(userMap);

const newUserObj = Object.fromEntries(userMap);

console.log(newUserObj, userMap.size);
// const map = new Map([
//     [{paper: 400}, 8000]
// ]);

// shops.forEach((shop, i) => {
//     map.set(shop, budget[i]);
// });


// console.log(map);
// const goods = [];
// for (let shop of map.keys()) {
//     goods.push(Object.keys(shop));
// }

// console.log(goods);


// const prices = [];
// for (let shop of map.keys()) {
//     prices.push(Object.values(shop));
// }

// console.log(prices);


// const prices = [];


// for (let item of map.entries()) {
//     prices.push(item);
// }

// 
// const prices = [];
// map.forEach((value, key, map) => {
//     let item = [];
//     item.push(value, key);
//     prices.push(item);
// });
// console.log(prices);
