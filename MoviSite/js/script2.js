'use strict';
/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// document.addEventListener('DOMContentLoaded', () => {

// });

//переменные:
const movieDB = {
    movies: [
        "Логан",
        "Лига несправедливости",
        "Ла-бла лэнд",
        "Недержимость",
        "Скотт Пилигрим против..."
    ]
};
const adv = document.querySelectorAll('.promo__adv img');
const genre = document.querySelector('.promo__genre');
const backgroundPromo = document.querySelector('.promo__bg');
const listOfFilms = document.querySelector('.promo__interactive-list');
const form = document.querySelector('form.add');
const inputFilm = document.querySelector('.adding__input');
const button = document.querySelector('button');
const inputFavorite = document.querySelector('input[type="checkbox"]');




form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newFilm = inputFilm.value;
    let favorite = inputFavorite.checked;
    if (favorite) {
        console.log('Добавляем любимый фильм');
        favorite = false;
    }

    if (newFilm) {
        movieDB.movies.push(newFilm);
        arrSort(movieDB.movies);
        createMovieList(movieDB.movies, listOfFilms);
        e.target.reset();
    }
});

//* Заполнить список фильмов
// Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту
// добавить нумерацию фильмов

const arrSort = (arr) => {
    arr.sort();
};


function createMovieList(films, parent) {
    parent.innerHTML = '';
    arrSort(movieDB.movies);
    films.forEach((item, i) => {
        parent.innerHTML += `
        <li class="promo__interactive-item">
            ${i+1}. ${item = (item.length < 21) ? item : item.slice(0, 21) + '...'}
            <div class="delete"></div>
        </li>`;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieList(films, parent);
        });
    });
}

createMovieList(movieDB.movies, listOfFilms);

// убрать рекламу (скрыть)
// document.querySelector('.promo__adv').style.display = 'none';
// убрать рекламу (удалить, только рекламные блоки)

const deletAddv = (arr) => {
    arr.forEach(item => item.remove());
};

deletAddv(adv);


// Изменить жанр фильма, поменять "комедия" на "драма"
//Изменить задний фон постера с фильмом на изображение "bg.jpg".Оно лежит в папке img.
//Реализовать только при помощи JS
const makeChanges = () => {
    genre.textContent = 'ДРАМА';
    backgroundPromo.style.backgroundImage = `url("./img/bg.jpg")`;
};
makeChanges();

