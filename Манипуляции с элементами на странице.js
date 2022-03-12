'use strict';


//*выбор элементов страницы
const box = document.getElementById('box');
const buttons = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
// const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

//* Неочевидная возможность получить элемент

const hearts = wrapper.querySelector('.wrapper');

//? изменение стилей элементов страницы
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
buttons[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

box.style.cssText = 'background-color: blue; width: 500px;';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'pink';
// } //! цикл для перебора псевдомассива

//! hearts.forEach(item => {
//     item.style.backgroundColor = 'green';
// }); // !для перебора NodeList


//? Создание элементов страницы!
const div = document.createElement('div');

const text = document.createTextNode('Тут будет жлемент');

div.classList.add('box'); //? Добавить классы к существующим элементам

//? document.querySelector('.wrapper').append(div);

//? wrapper.prepend(div);

//? hearts[1].before(div);

//? hearts[1].after(div);

//? circles[0].remove();

//? hearts[2].replaceWith(buttons[2]);

//* Устаревшие конструкции!

//? wrapper.appendChild(div);  == append()

//? wrapper.insertBefore(div, hearts[0]);

//? wrapper.removeChild(hearts[1]); ==remove();

wrapper.replaceChild(box, hearts[2]); //==replaceWith()

div.innerHTML = "<h1>Hello World</h1>";

//? div.textContent = "Hello World";

//? div.insertAdjacentHTML('afterend', '<h2>Hello World</h2>');
