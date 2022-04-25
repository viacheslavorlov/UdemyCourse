'use strict';

// const user = {
//     4: 'Alex',
//     surname: 'Smith',
//     birthday: '21/12/2000',
//     showMyData: function() {
//         console.log(`${this. name} ${this.surname}`);
//     }
// };

// console.log(typeof(Object.keys(user)[0]), (Object.keys(user)[0]));

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 15000, 20300];

const map = new Map();

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});

// map.set(shops[0], 5000)
//     .set(shops[1], 5000)
//     .set(shops[2], 5000);

console.log(map.get(shops[2]));

console.log(map.has(shops[2]));

// map.delete(key);

// map.clear();
// map.size;

console.log(map, map.size);

