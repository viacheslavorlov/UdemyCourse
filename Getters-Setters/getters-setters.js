'use strict';
const person = {
	name: 'Alex',
	age: 25,

	get userAge() {
		return this.age;
	},

	set userAge(num) {
		return this.age = num;
	}
}

console.log(person.userAge);
console.log(person.userAge = 35);

console.log(person.userAge);