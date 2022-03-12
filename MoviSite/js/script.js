'use strict';
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */



const movieDB = {
    movies: [
        "Логан",
        "Лига несправедливости",
        "Ла-бла лэнд",
        "Недержимость",
        "Скотт Пилигрим против..."
    ]
};
// убрать рекламу (скрыть)
// document.querySelector('.promo__adv').style.display = 'none';
// убрать рекламу (удалить, только рекламные блоки)
const adv = document.querySelectorAll('.promo__adv img');
adv.forEach(item => item.remove());
// Изменить жанр фильма, поменять "комедия" на "драма"
const genre = document.querySelector('.promo__genre');
genre.textContent = 'ДРАМА';

//Изменить задний фон постера с фильмом на изображение "bg.jpg".Оно лежит в папке img.
//Реализовать только при помощи JS
const backgroundPromo = document.querySelector('.promo__bg');
backgroundPromo.style.backgroundImage = `url("./img/bg.jpg")`;
// backgroundPromo.style.background = 'center/cover;';

// Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту
// добавить нумерацию фильмов
// * мой рабочий метод)

const listOfFilms = document.querySelectorAll('.promo__interactive-item');
movieDB.movies.sort();
listOfFilms.forEach((item, index) => item.textContent = `${index + 1}. ${movieDB.movies[index]} `);

//? метод Петреченко (сложнее)
// const listOfFilms = document.querySelector('.promo__interactive-list');
// listOfFilms.innerHTML = '';
// movieDB.movies.sort();
// movieDB.movies.forEach((item, i) => {
//     listOfFilms.innerHTML += `
//         <li class="promo__interactive-item">${i+1}. ${item}
//             <div class="delete></div>
//         </li>
//     `;
// });