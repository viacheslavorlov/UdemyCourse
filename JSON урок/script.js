'use strict';

const persone = {
    name: 'Alex',
    tel: '+74444444444',
    parents: {
        mom: 'Ola',
        dad: 'Ivan'
    }
};

// console.log(JSON.stringify(persone));

const clone = JSON.parse(JSON.stringify(persone));

// persone.name = 'Stephan';
// persone.parents.mom = 'Ira';
const persone2 = persone;
persone.name = 'Valja';
console.log(persone2 === persone);
console.log(persone.name);