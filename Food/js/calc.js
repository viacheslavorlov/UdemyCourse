"use strict";

// todo Калькулятор калорий 1. мой вариант
function calculator() {
	const gender = document.querySelectorAll('#gender .calculating__choose-item'),
		// allFields = document.querySelectorAll('.calculating__choose-item'),
		female = document.querySelector('#female'),
		male = document.querySelector('#male'),
		hwa = document.querySelectorAll('.calculating__choose_medium input'),
		myHeight = document.querySelector('#height'),
		myWeight = document.querySelector('#weight'),
		myAge = document.querySelector('#age'),
		activityLevels = document.querySelectorAll('.calculating__choose_big div'),
		resultKall = document.querySelector('#result-kal');
	let currentActivity = localStorage.getItem('currentActivity');

	resultKall.textContent = 'Введите все данные';

	function getCall() {
		if (male.classList.contains('calculating__choose-item_active')) {
			if (myWeight.value && myAge.value && myHeight.value && currentActivity) {
				resultKall.textContent =
					Math.round((88.36 + 13.4 * +myWeight.value + 4.8 * +myHeight.value - 5.7 * +myAge.value) * currentActivity) + ' ккал';
			}
		} else if (female.classList.contains('calculating__choose-item_active')) {
			if (myWeight.value && myAge.value && myHeight.value && currentActivity) {
				resultKall.textContent =
					Math.round((447.6 + 9.2 * +myWeight.value + 3.1 * +myHeight.value - 4.3 * +myAge.value) * currentActivity) + ' ккал';

			}
		} else {
			resultKall.textContent = 'Введите все данные!';
		}
	}

	function initCalcFields(selector, activeClass) {
		const elements = document.querySelectorAll(selector);
		elements.forEach(item => {
			item.classList.remove(activeClass);
			if (item.getAttribute('id') === localStorage.getItem('gender')) {
				item.classList.add(activeClass);
			}
		});
		if (localStorage.currentActivity) {
			let index = Math.round((localStorage.currentActivity - 1.2) / 0.175);
			activityLevels[index].classList.add(activeClass);
		}
	}

	initCalcFields('.calculating__choose-item', 'calculating__choose-item_active');

	gender.forEach(human => human.addEventListener('click', () => {
		gender.forEach(item => item.classList.remove('calculating__choose-item_active'));
		human.classList.add('calculating__choose-item_active');
		localStorage.setItem('gender', human.id);
		getCall();
	}));

	hwa.forEach(item => item.addEventListener('input', () => {
		if (item.value !== '' && !Number.isNaN(+item.value)) {
			item.classList.add('calculating__choose-item_active');
			getCall();
		} else {
			item.classList.remove('calculating__choose-item_active');
			item.value = '';
			resultKall.textContent = 'Введите все данные в числах!';
		}
	}));

	activityLevels.forEach((activity, i) => activity.addEventListener('click', () => {
			activityLevels.forEach(item => item.classList.remove('calculating__choose-item_active'));
			activity.classList.add('calculating__choose-item_active')
			currentActivity = (1.2 + i * 0.175).toFixed(3);
			localStorage.setItem('currentActivity', currentActivity);
			getCall();
		}
	));
}

module.exports = calculator;
