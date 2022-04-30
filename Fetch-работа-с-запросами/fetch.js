'use strict';

function sendReq(method, url, ...rest) {
    const headers = {
        'Content-Type': 'application/json'
    };
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            return response.json().then(error => {
                const e = new Error("Чтото пошло не так!");
                e.data = error;
                throw error;
            })
        }

    })
}

sendReq('GET', 'database.json')
    .then(data => console.log(data))
    .catch(err => console.error(err));

const body = {
    name: 'SlavaKPSS'
}

sendReq('POST', 'https://jsonplaceholder.typicode.com/users', [body])
    .then(data => console.log(data))
    .catch(err => console.error(err));