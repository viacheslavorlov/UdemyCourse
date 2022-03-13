//  !   Плохой способ обработки событи((((

const btn =  document.querySelector('button');
btn.onclick = function() {
    alert('It\'s works!');
};

// *  Хороший способ обработкий событий

const btn2 = document.querySelectorAll('button')[1];
//вторая кнопка

//overlay
const overlay = document.querySelector('.overlay');

btn2.addEventListener('click', () => {
    alert('Правильный обработчик событий!');
}, {
    once: true
});
//? можно назначать по несколько обработчиков на одно событие!
// btn2.addEventListener('click', () => {
//     alert('Ещё одно событие!');
// });
// btn2.addEventListener('mouseenter', (event) => {
//     console.log(event);
//     event.target.remove(); //! удалить элемент
//     console.log('Hover!!!');
// });
// let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i===1) {
    //     btn2.removeEventListener('click', deleteElement);
    //* Удалить обработчик событий!
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);


const link = document.querySelector('a');
link.addEventListener('click', function (event) {
    event.preventDefault(); //! отменить стандартное поведение браузера
    console.log(event.target);
});


//* Обработчик событий на псевдомассивы эелментов!
const allButtons = document.querySelectorAll('button');
allButtons.forEach(item => {
    item.addEventListener('click', (event) => {
        console.log(event.target);
    }, {once: true}); //! опция для однократного применения данного обработчика
});