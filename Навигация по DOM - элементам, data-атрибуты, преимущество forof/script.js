"use strict";

// console.log(document.documentElement);
// console.log(document.childNodes);
// console.log(document.body.childNodes);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes) { //? перебор nodeList с помощью for...of
                                             //! позволяет пользоваться break и continue   
    if (node.nodeName == '#text') {
        continue; //? условие для исключения техтовых узлов
    }
    console.log(node);
}