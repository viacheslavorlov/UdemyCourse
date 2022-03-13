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

'use strict';
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
const form = document.querySelector('.add');
const inputFilm = document.querySelector('.adding__input');
const button = document.querySelector('button');
const inputFavorite = document.querySelector('input[type="checkbox"]');
const delItems = document.querySelectorAll('.delete');


// убрать рекламу (скрыть)
// document.querySelector('.promo__adv').style.display = 'none';
// убрать рекламу (удалить, только рекламные блоки)

adv.forEach(item => item.remove());

// Изменить жанр фильма, поменять "комедия" на "драма"

genre.textContent = 'ДРАМА';

//Изменить задний фон постера с фильмом на изображение "bg.jpg".Оно лежит в папке img.
//Реализовать только при помощи JS
backgroundPromo.style.backgroundImage = `url("./img/bg.jpg")`;

// Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту
// добавить нумерацию фильмов
// * мой рабочий метод)
// const listOfFilms = document.querySelectorAll('.promo__interactive-item');
// movieDB.movies.sort();
// listOfFilms.forEach((item, index) => item.textContent = `${index + 1}. ${movieDB.movies[index]} `);

//* Заполнить список фильмов
const writeListOfFilms = () => {
    listOfFilms.innerHTML = '';
    movieDB.movies.sort();
    movieDB.movies.forEach((item, i) => {
        listOfFilms.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${item = (item.length < 21) ? item : item.slice(0, 21) + '...'}
            <div class="delete"></div>
        </li>`;
    });
    delItem();
};

const delItem = () => {
    delItems.forEach((item, i) => {
        item.addEventListener('click', () => {
            item.parentElement.remove();
            movieDB.movies.splice(i, 1);
        });
    });
};

writeListOfFilms();

button.addEventListener('click', addListItem);

function addListItem(e) {
    e.preventDefault();

    if (inputFavorite.checked) {
        console.log('Добавляем любимый фильм');
        inputFavorite.checked = false;
    }
    movieDB.movies.forEach((item, i) => {
        listOfFilms.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${item = (item.length < 21) ? item : item.slice(0, 21) + '...'}
                <div class="delete"></div>
            </li>`;
    });
    inputFilm.value = '';
    const delItem = document.querySelectorAll('.delete');
    delItem.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            item.parentElement.remove();
            movieDB.movies.splice((i), 1);
        });
    });
}