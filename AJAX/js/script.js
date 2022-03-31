'use strict';

const inputRub = document.querySelector('#rub'),
    inputUSD = document.querySelector('#usd'),
    inputEuro = document.querySelector('#eur');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json'); //? (method, url, asynch, login, pass)
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();


    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputRub.value / +data.current.usd).toFixed(2);
            inputEuro.value = (+inputRub.value / +data.current.euro).toFixed(2);
        } else {
            inputUSD.value = 'Что-то пошло не так';
        }
    });
    //status
    //statusText
    //response
    //readyState
});

inputUSD.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json'); 
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();


    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputRub.value = (+inputUSD.value * +data.current.usd).toFixed(2);
        } else {
            inputRub.value = 'Что-то пошло не так';
        }
    });
});

inputEuro.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();


    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputRub.value = (+inputEuro.value * +data.current.euro).toFixed(2);
        } else {
            inputRub.value = 'Что-то пошло не так';
        }
    });
});