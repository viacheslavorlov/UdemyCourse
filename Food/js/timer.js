"use strict";

function timer(selector, deadLine) {
	function setClock() {
		let days, hours, minutes, seconds;
		const total = Date.parse(deadLine) - (new Date()); //значение времени до deadline в миллисекундах

		if (total <= 0) {
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
		} else {
			days = Math.floor(total / (1000 * 60 * 60 * 24));
			hours = Math.floor((total / (1000 * 60 * 60)) % 24);
			minutes = Math.floor(total / (1000 * 60) % 60);
			seconds = Math.floor(total / 1000 % 60);
		}

		return {
			total, days, hours, minutes, seconds
		};

	}

	function getZero2(time) {
		return (time < 10) ? `0${time}` : time;
	}

	function setTimer(endtime) {
		const timer = document.querySelector(selector), days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'), minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds');
		const timeInterval = setInterval(runTimer, 1000);

		runTimer();

		function runTimer() {
			const time = setClock(endtime);
			if (time.total > 0) {
				days.innerText = getZero2(time.days);
				hours.innerText = getZero2(time.hours);
				minutes.innerText = getZero2(time.minutes);
				seconds.innerText = getZero2(time.seconds);
			} else {
				clearInterval(timeInterval);
				days.textContent = '00';
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';

				days.parentElement.style.backgroundColor = 'red';
				hours.parentElement.style.backgroundColor = 'red';
				minutes.parentElement.style.backgroundColor = 'red';
				seconds.parentElement.style.backgroundColor = 'red';
			}
		}
	}

	setTimer(deadLine);
}

export default timer;

//! deadline
// const deadline = '2022-03-21';

// function getTimeRemaning(endtime) {
//     const t = Date.parse(endtime) - (new Date()),
//                 days = Math.floor(t / (1000 * 60 * 60 * 24)),
//                 hours = Math.floor((t / (1000 * 60 * 60)) % 24),
//                 minutes = Math.floor((t / 1000 / 60) % 60),
//                 seconds = Math.floor((t / 1000) % 60);
//     return {
//         t,
//         days,
//         hours,
//         minutes,
//         seconds
//     };
// }

// function getZero(num) {
//     if (num >= 0 && num < 10) {
//         return `0${num}`;
//     } else {
//         return num;
//     }
// }

// function setClock(selector, endtime) {
//     const timer = document.querySelector(selector),
//           days = timer.querySelector('#days'),
//           hours = timer.querySelector('#hours'),
//           minutes = timer.querySelector('#minutes'),
//           seconds = timer.querySelector('#seconds'),
//           timeInterval = setInterval(updateClock, 1000);

//     updateClock();

//     function updateClock() {
//         const t = getTimeRemaning(endtime);

//         days.innerHTML = getZero(t.days);
//         hours.innerHTML = getZero(t.hours);
//         minutes.innerHTML = getZero(t.minutes);
//         seconds.innerHTML = getZero(t.seconds);

//         if (t.t <= 0) {
//             clearInterval(timeInterval);
//         }
//     }
// }

// setClock('.timer', deadline);

// ? set Timer (мой вариант)
// ! создать обект: для определения остатка времени от deadline до now
// {
//  total, //? общее количество секунд
//  days,
//  hours,
//  minutes,
//  seconds
// }