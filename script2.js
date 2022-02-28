'use strict';
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


let numberOfFilms;
// ? "+" нужен для перевода введённого пользователем значения в цифры

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
        const filmScore = +prompt('На сколько оцените его? от "0" до "10"', '');

        if (lastFilm != null &&
            lastFilm != '' &&
            lastFilm.length < 50 &&
            filmScore != null &&
            filmScore != '' &&
            filmScore < 10 &&
            filmScore >= 0 &&
            !Number.isNaN(filmScore)) {
            personalMovieDB.movies[lastFilm] = filmScore;
            alert('done');
        } else {
            alert('Error! Ошибка ввода данных! Повторите ввод с правильными значениямми');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLvl() {
    let zritel;
    if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
        zritel = "Просмотрено довольно мало фильмов";
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        zritel = "Вы классический зритель";
    } else if (personalMovieDB.count > 30) {
        zritel = "Вы киноман";
    } else {
        zritel = "Произошла ошибка";
    }
    console.log(zritel);
}

// detectPersonalLvl();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } 
}
showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимы жанр под номером ${i + 1}`, '');
        while (personalMovieDB.genres[i] == null ||
            personalMovieDB.genres[i] === '' ||
            personalMovieDB.genres[i].length < 2) {
            personalMovieDB.genres[i] = prompt(`Ваш любимы жанр под номером ${i + 1}`, '');
        }
    }
}
writeYourGenres();