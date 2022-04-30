'use strict';

const input = document.querySelector('.form-control');
const checkbox = document.querySelector('#checkbox');
const confirmBtn = document.querySelector('.btn');
const chengeColorBtn = document.querySelector('#color'),
      form = document.querySelector('form');

if (localStorage.isChecked === 'true') {
    checkbox.checked = true;
    // console.log(typeof(localStorage.isChecked));
}

if (localStorage.bg === 'changed') {
    form.style.backgroundColor = 'blue';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', 'true');
});

chengeColorBtn.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = 'white';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'blue';
    }
})

const person = {
    name: 'Slava',
    age: 34
}

const strObj = JSON.stringify(person);
console.log(person);
localStorage.setItem('person', strObj);

console.log(JSON.parse(localStorage.person));