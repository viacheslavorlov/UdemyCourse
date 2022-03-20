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

//deadline
const deadline = '2022-03-21';

function getTimeRemaning(endtime) {
    const t = Date.parse(endtime) - (new Date()),
                days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor((t / (1000 * 60 * 60)) % 24),
                minutes = Math.floor((t / 1000 / 60) % 60),
                seconds = Math.floor((t / 1000) % 60);
    return {
        t,
        days,
        hours,
        minutes,
        seconds
    };
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);

    updateClock();
    
    function updateClock() {
        const t = getTimeRemaning(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.t <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('.timer', deadline);