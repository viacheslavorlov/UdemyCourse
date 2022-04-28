'use strict';
const boxes = document.querySelectorAll('.box'),
    form = document.querySelector('#box-form'),
    inputFio = document.querySelector('#input-fio'),
    getButton = document.querySelector('#get-data'),
    sendButton = document.querySelector('#send-data'),
    db = document.querySelector('#db');

// console.log(boxes[3]);

// async function sendGetRequest(url, box) {
//     const response = await fetch(url);
//     const json = await response.json();
//     for (let i = 0; i < boxes.length; i++) {
//         console.log("🚀 ~ box[i]", box[i]);
//         console.log("🚀 ~ json[i]", json)
//         boxes[i].innerHTML = json[i].name;
//     }
// }

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => console.log(json));


// function getJsonDB(url, callback) {
//     const getFile = new XMLHttpRequest();
//     getFile.overrideMimeType('application/json');
//     getFile.open('GET', url, true);
//     getFile.onreadystatechange = function () {
//         if (getFile.readyState ===4 && getFile.status === 200) {
//             callback(getFile.responseText);
//         }
//     }
//     getFile.send(null);
// }
// getJsonDB('database.json', function (text) {
//     const data = JSON.parse(text);
//     for (let i = 0; i < boxes.length; i++) {
//
//     }
// });


// button.addEventListener('click', (e) => {
//     e.preventDefault();
//     sendGetRequest('database.json', boxes).then(res => console.log(res));
//     ;
// });

function appendData(data) {
    fillBoxes(data);
}

function fillBoxes(data) {
    for (let j = 0; j < Object.entries(data[j]).length; j++) {
        if (data[j]['ФИО'] === inputFio.value) {
            boxes.forEach((item, i) => {
                item.textContent = Object.values(data[j])[i];
                console.log(item.textContent);
            });
        }
    }
}

getButton.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('database.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
});


const obj = {
    name: 'Xtxtlk',
    age: '12345'
};
const filereader = new FileReader();

const file = new File(db, 'database.json');


console.log(filereader.readAsText(file, 'utf-8'));