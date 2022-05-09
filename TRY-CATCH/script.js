"use strict";
try {
	document.querySelector("utton").addEventListener('click', (e) => {
		console.log(e); // неверно указан селектор
	});

} catch (err) {
	console.log(err);    //выведет ошибку в консоль
} finally {              // но код не сломается
	console.log('works');
}

console.log('norm');