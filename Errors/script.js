'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'fff',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
];
try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);

        if (!blockObj.id) {
            throw new SyntaxError(`В данных под номером ${i + 1} ошибка`);
        }       // создание своей ошибки

        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
} catch (e) {
    if (e.name === 'SyntaxError') {
        console.error(e.name);
        console.error(e.message);
        console.error(e.stack);
    } else {
        throw e;
    }


}

//
// const err = new Error('al;skdjf;laksjdf')
// console.log(err.name);
// console.log(err.message);
// console.log(err.stack);
