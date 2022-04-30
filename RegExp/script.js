'use strict';

// new RegExp('pattern', 'g u i'); //flags: i, g, d, u, s, m, y
// i - независимо от регистра
// g - глобальный поиск

// /pattern/f

// const ans = prompt('введите ваш текст', '');

const reg = /n/g;
// console.log(ans.search(reg)); // возвращает индекс первого выявленогосовпадающего индекса
// не работает с g - флагом


// console.dir(ans.match(reg)); // возвращает список ЭЛЕМЕНТ[0] - вый элемент совпадающий с regexp
//  с флагом g - возвращает список найденных эелментов

// const pass = prompt('Password');
// console.log(pass.replace(/./g, '*'))

// экранирование символа - обратный слэш '\'


//замена символов в строке
console.log('12-34-56'.replace(/-/g, ''));


// console.log(reg.test(ans)); //вернёт true/false

// \d - цифры           \D - не числа
// \w - буквы           \W - не буквы
// \s - пробелы         \S - yt пробелы

// console.log(ans.match(reg));

const css = '200px';

console.log(css.replace(/\D/g, ''));


const str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/i));

