'use strict';
const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList);
// console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }
// btns[1].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
//     btns[1].classList.toggle('red');
// });

wrapper.addEventListener('click', (ev) => {
    if (ev.target && ev.target.matches('button.red')) {
        console.log(' hello');
    }
});

// btns.forEach(btn => {  //! нельзя использовать с динамическими элементами
//     btn.addEventListener('click', (ev) => {
//         console.log(' hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');  //! данная кнопка не будет работать с при переборе методом forEach созданным до нее;
wrapper.append(btn);

const container = document.querySelector('#container');
container.addEventListener('click', (ev) => {
    if (ev.target && ev.target.classList.contains('.remove-button')) {
        ev.target.parentElement.remove();
    }
});