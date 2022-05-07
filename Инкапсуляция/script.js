'use strict';

class User {
	constructor(name, age) {
		this.name = name;
		this._age = age;
	}

	say() {
		console.log(`Имя пользователя ${this.name}, возраст ${this._age}`);
	}

	get age() {
		return this._age;
	}

	set age(newAge) {
		if (typeof(newAge === 'number') && newAge > 0 && newAge < 100) {
			this._age = newAge;
		} else {
			console.log('Недопустимое значение!')
		}
	}
}

const slava = new User('Slava', 34);
// console.log(slava.name, slava.age);

console.log(slava.age);

slava.say()