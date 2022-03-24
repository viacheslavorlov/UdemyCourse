'use strict';

// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log(`Hello ${this.name}`);
//     }
//     exit() {
//         console.log(`User ${this.name}`);
//     }
// }


// User.prototype.exit = function (name) {

// };

// const inan = new User('Ivan', 29);

// const alex = new User('Alex', 39);

// console.log(inan);
// console.log(alex);


// inan.hello();
// alex.hello();
// inan.exit();


class Calculator {
    constructor() {
        
    }
    read() {
        this.a = +prompt('введите первое число', '');
        this.b = +prompt('введите второе число', '');
    }
    sum() {
        return this.a + this.b;
    }
    multi() {
        return this.a * this.b;
    }
}

const clc = new Calculator();

console.log(clc);

