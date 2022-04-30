'use strict';
//
// const box = document.querySelector('.box');
//
// let observer = new MutationObserver(mutationRecords => {
//    console.log(mutationRecords); //создание наблюдателя
// });
//
// observer.observe(box,/*за каким элементом наблюдать*/ {
//     childList: true //за чем конкретно наблюдать (для полного списка смотреть документацию)
// });
//
// observer.disconnect()
const urlObj = {
    protocol: 'https',
    domain: 'mysite.com'
};

function showCurrentURL() {
    const extractCurrDomain = () => {
        return this.domain;
    };
    const extractCurrProtocol = () => {
        return this.protocol;
    };

    console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`);
}

const url = showCurrentURL.bind(urlObj);

console.log(url);