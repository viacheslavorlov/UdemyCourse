//* функция  с мемоизацией на основании замыкания

// const memoizedSum = () => {
//     let cache = {}; // ! хранилище
//     return (n, i) => {
//         if (`${n}+${i}` in cache) { //? запрос к хранилищу по ключу из двух переменных 
//                                     //? (не обязательно так делать - но это удобно)
//             console.log('Fetching from cache', cache[`${n}+${i}`]);
//             return cache[`${n}+${i}`];//* если хранилище содержит такой ключ
//         } else {                      //* то возбращается его значениие
//             console.log('Calculating result');
//             let result = n + i;
//             cache[`${n}+${i}`] = result;
//             console.log(result);
//             return result;
//         }
//     };
// };

const memoizedSum = () => {
    let cache = {}; // ! хранилище
    return (n, i) => {
        if (n in cache && i in cache[n]) { //? запрос к хранилищу по ключу из двух переменных 
            //? (не обязательно так делать - но это удобно)
            console.log('Fetching from cache', cache[n][i]);
            return cache[n][i]; //* если хранилище содержит такой ключ
        } else { //* то возбращается его значениие
            console.log('Calculating result');
            let result = n + i;
            if (!cache[n]) {
                cache[n] = {
                    [i]: result
                };
            } else {
                cache[n] = {...cache[n], [i]: result};
            }
            console.log(result, cache);
            return result;
        }
    };
};



const sum = memoizedSum();

sum('foo', 'bar');
sum('foo', 'bar');
sum('foo', 'barrzzz');
sum('foo', 'barrzzz');
sum(1, 2);
sum(1, 2);
sum(1, 3);
sum(3, 5);
sum('foo', 'barrzzz');