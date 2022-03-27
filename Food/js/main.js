'use strict';

// tabs
const tabButtons = document.querySelectorAll('.tabheader__item'),
    tabs = document.querySelectorAll('.tabcontent'),
    tabHeader = document.querySelector('.tabheader__items');

function hideTabs() {
    tabs.forEach(tab => {
        tab.classList.add('hide', 'fade');
        tab.classList.remove('show');
    });
    tabButtons.forEach(tab => {
        tab.classList.remove('tabheader__item_active');
    });
}

function showTabs(i = 0) {
    tabs[i].classList.add('show');
    tabs[i].classList.remove('hide');
    tabButtons[i].classList.add('tabheader__item_active');
}
hideTabs();
showTabs();

tabHeader.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('tabheader__item')) {
        tabButtons.forEach((tab, i) => {
            if (e.target == tab) {
                hideTabs();
                showTabs(i);
            }
        });
    }
});

//! deadline
// const deadline = '2022-03-21';

// function getTimeRemaning(endtime) {
//     const t = Date.parse(endtime) - (new Date()),
//                 days = Math.floor(t / (1000 * 60 * 60 * 24)),
//                 hours = Math.floor((t / (1000 * 60 * 60)) % 24),
//                 minutes = Math.floor((t / 1000 / 60) % 60),
//                 seconds = Math.floor((t / 1000) % 60);
//     return {
//         t,
//         days,
//         hours,
//         minutes,
//         seconds
//     };
// }

// function getZero(num) {
//     if (num >= 0 && num < 10) {
//         return `0${num}`;
//     } else {
//         return num;
//     }
// }

// function setClock(selector, endtime) {
//     const timer = document.querySelector(selector),
//           days = timer.querySelector('#days'),
//           hours = timer.querySelector('#hours'),
//           minutes = timer.querySelector('#minutes'),
//           seconds = timer.querySelector('#seconds'),
//           timeInterval = setInterval(updateClock, 1000);

//     updateClock();

//     function updateClock() {
//         const t = getTimeRemaning(endtime);

//         days.innerHTML = getZero(t.days);
//         hours.innerHTML = getZero(t.hours);
//         minutes.innerHTML = getZero(t.minutes);
//         seconds.innerHTML = getZero(t.seconds);

//         if (t.t <= 0) {
//             clearInterval(timeInterval);
//         }
//     }
// }

// setClock('.timer', deadline);

// ? set Timer (мой вариант)
// ! создать обект: для определения остатка времени от deadline до now
// {
//  total, //? общее количество секунд
//  days,
//  hours,
//  minutes,
//  seconds
// }
const deadline = '2022-03-29';


function setClock() {
    const total = Date.parse(deadline) - (new Date()); //значение времени до deadline в миллисекундах

    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor(total / (1000 * 60) % 60);
    const seconds = Math.floor(total / 1000 % 60);

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };

}

function getZero2(time) {
    return (time < 10) ? `0${time}` : time;
}

function setTimer(endtime) {
    const timer = document.querySelector('.timer'),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds');
    const timeInterval = setInterval(runTimer, 1000);

    runTimer();

    function runTimer() {
        const time = setClock(endtime);
        if (time.total > 0) {
            days.innerText = getZero2(time.days);
            hours.innerText = getZero2(time.hours);
            minutes.innerText = getZero2(time.minutes);
            seconds.innerText = getZero2(time.seconds);
        } else {
            clearInterval(timeInterval);
            days.innerText = '00';
            hours.innerText = '00';
            minutes.innerText = '00';
            seconds.innerText = '00';

            days.parentElement.style.backgroundColor = 'red';
            hours.parentElement.style.backgroundColor = 'red';
            minutes.parentElement.style.backgroundColor = 'red';
            seconds.parentElement.style.backgroundColor = 'red';
        }
    }
}


setTimer(deadline);

// модальное окно

const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');

function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
    
}

function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    
}

modalCloseBtn.addEventListener('click', closeModal);

modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

const modalTimerId = setTimeout(openModal, 8000);

function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
    }
}

window.addEventListener('scroll', showModalByScroll);


//? карточки с меню (Классы)
const cartHolders = document.querySelectorAll('.menu__item');
const names = ['"Фитнес"', '"Премиум"', '"Постное"'];
const images = ['img/tabs/vegy.jpg', 'img/tabs/elite.jpg', 'img/tabs/post.jpg'];
const alts = ['Фитнес', 'Премиум', 'Постное'];
const infos = [`Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!`,
               'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
               'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.'];
const prices = [229, 550, 300];
class FoodCart {
    constructor(name, img, alt, info, price, place) {
        this.name = name;
        this.img = img;
        this.alt = alt;
        this.info = info;
        this.price = price;
        this.place = place;
    }
    madeCart() {
        this.place.innerHTML = `
            <img src="${this.img}" alt="${this.alt}">
            <h3 class="menu__item-subtitle">Меню ${this.name}</h3>
            <div class="menu__item-descr">${this.info}</div>
            <div class="menu__item-divider"></div>
            <div class = "menu__item-price">
                <div class="menu__item-cost"> Цена: </div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день </div>
            </div>
        `;
    }
}

const newCart = new FoodCart(names[1], images[1], alts[1], infos[1], prices[1], cartHolders[0]);
newCart.madeCart();
const secondCart = new FoodCart(names[0], images[0], alts[0], infos[0], prices[0], cartHolders[1]);
secondCart.madeCart();