'use strict';
//
// function isPangram(string) {
//     const setArr = new Set(string.toLowerCase().replace(/[^a-z]/g, '').split(''));
//     console.log(setArr);
//     return setArr.size === 26;
// }
//
// console.log(isPangram('abc def 5 2 4 ergssdfg ghijkl mnopqr stuvwxyz'));

function deepCount(a){
    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) {
            return a.length + deepCount(a[i]);
        }
    }
    return a.length;
}

console.log(deepCount([]));