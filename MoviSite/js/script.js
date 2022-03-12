/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига несправедливости",
        "Ла-бла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// убрать рекламу
document.querySelector('.promo__adv').style.display = 'none';
// Изменить жанр фильма, поменять "комедия" на "драма"
const genre = document.querySelector('.promo__genre');
genre.textContent = 'ДРАМА';

//Изменить задний фон постера с фильмом на изображение "bg.jpg".Оно лежит в папке img.
//Реализовать только при помощи JS
const backgroundPromo = document.querySelector('.promo__bg');
backgroundPromo.style.background = `url("./img/bg.jpg") no-repeat center center/cover`;

// Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту
movieDB.movies.sort();
const listOfFilms = document.querySelectorAll('.promo__interactive-item');
listOfFilms.forEach((item, index) => item.textContent = `${index + 1}. ${movieDB.movies[index]} `);