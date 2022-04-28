'use strict';
// const boxes = document.querySelectorAll('.box'),
//     button = document.querySelector('button');

// function fetchDataForeSubstitute(url) {
//     fetch(url, {
//         method: 'GET',
//         headers: [
//             ['Content-Type', 'application/json']
//         ]
//     })
//         .then(data => {
//             if (data.ok) {
//                 console.log(data)
//             }
//         })
//         .then(data => {
//             data.text();
//         })
// }
//
// fetchDataForeSubstitute('http://localhost:3000/gets');

// const req = new XMLHttpRequest();
//
// req.open('GET', 'https://jsonplaceholder.typicode.com/fusers', true);
// req.responseType = 'json';
// req.onload = () => {
//     if (req.status >= 400) {
//         console.error(req.response);
//     } else {
//         console.log(req.response);
//     }
// }
//
// req.onerror = () => {
//     console.log(req.response);
// }
// req.send();


function sendReq(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();

        req.open(method, url);
        req.responseType = 'json';
        req.setRequestHeader('Content-Type', 'application/json')
        req.onload = () => {
            if (req.status >= 400) {
                reject(req.response);
            } else {
                resolve(req.response);
            }
        }

        req.onerror = () => {
            reject(req.response);
        }
        req.send(JSON.stringify(body));
    })
}

// sendReq('Get', 'https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(JSON.parse(data)))
//     .catch(err => console.error(err));

const body = {
    name: 'SlavaKPSS'
}

sendReq('POST', 'https://jsonplaceholder.typicode.com/users', body)
    .then(data => console.log(data))
    .catch(err => console.error(err));