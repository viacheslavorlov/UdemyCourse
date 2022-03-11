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

/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// ? "+" нужен для перевода введённого пользователем значения в цифры

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    start: function () {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (this.count == '' ||
            this.count == null ||
            isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function () {
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
                this.movies[lastFilm] = filmScore;
                alert('done');
            } else {
                alert('Error! Ошибка ввода данных! Повторите ввод с правильными значениямми');
                i--;
            }
        }
    },

    detectPersonalLvl: function () {
        let zritel;
        if (this.count < 10 && this.count >= 0) {
            zritel = "Просмотрено довольно мало фильмов";
        } else if (this.count >= 10 && this.count <= 30) {
            zritel = "Вы классический зритель";
        } else if (this.count > 30) {
            zritel = "Вы киноман";
        } else {
            zritel = "Произошла ошибка";
        }
        console.log(zritel);
    },

    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            this.genres[i] = prompt(`Ваш любимы жанр под номером ${i + 1}`, '');
            while (this.genres[i] == null ||
                this.genres[i] === '' ||
                this.genres[i].length < 2) {
                this.genres[i] = prompt(`Ваш любимы жанр под номером ${i + 1}`, '');
            }
        }
        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i + 1} - это ${item}`);
        });
    },

    toogleVisibleMyDB: function () {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    },

    showMyDB: function () {
        if (!this.privat) {
            console.dir(this);
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLvl();
personalMovieDB.writeYourGenres();
personalMovieDB.toogleVisibleMyDB();
personalMovieDB.showMyDB();
