'use strict';
//
// let user = {name: 'Ivan'};// создан облъект
//
// const arr = [user]; //ссылка на объект помещена в массив
//
// let map = new Map(); //создана карта
// map.set(user, 'data'); // ссылка на user помещена в map
// user = null; // user удалён
//
// console.log(map, arr); // получены данные удалённого объекта в карте и списке

//      WeakMap
// add, has, delete, get
let cache = new WeakMap();

function cacheUser (user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }
    return cache.get(user);
}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

lena = null; // если объект удалён,
            // то ссылки  на него не работают для WeakMap

// console.log(cache.has(lena));
// console.log(cache.has(alex));

///   WeakSet
// add, has, delete
let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'Hello', from: 'Alex'},
    {text: 'Hello', from: 'Ann'}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);
messages.shift();
console.log(readMessages.has(messages[0]));

//WeakSet & WeakMap чаще всего
// используются в качестве дополнительного хранилища данных
// при удалениии объекта ссылка на него
// для в WeakSet & WeakMap перестаёт работать