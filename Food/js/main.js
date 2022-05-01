'use strict';
document.addEventListener('DOMContentLoaded', () => {
// tabs
const tabButtons = document.querySelectorAll('.tabheader__item'), tabs = document.querySelectorAll('.tabcontent'),
	tabHeader = document.querySelector('.tabheader__items');

function hideTabs() {
	tabs.forEach(tab => {
		tab.classList.add('hide', 'fade');
		tab.classList.remove('show');
	});
	tabButtons.forEach(tab => {
		tab.classList.remove('tabheader__item_active');
	});
}

function showTabs(i = 0) {
	tabs[i].classList.add('show');
	tabs[i].classList.remove('hide');
	tabButtons[i].classList.add('tabheader__item_active');
}

hideTabs();
showTabs();

tabHeader.addEventListener('click', (e) => {
	if (e.target && e.target.classList.contains('tabheader__item')) {
		tabButtons.forEach((tab, i) => {
			if (e.target === tab) {
				hideTabs();
				showTabs(i);
			}
		});
	}
});

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
const deadline = '2022-03-29';


function setClock() {
	let days, hours, minutes, seconds;
	const total = Date.parse(deadline) - (new Date()); //значение времени до deadline в миллисекундах

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
	const timer = document.querySelector('.timer'), days = timer.querySelector('#days'),
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
			days.innerText = '00';
			hours.innerText = '00';
			minutes.innerText = '00';
			seconds.innerText = '00';

			days.parentElement.style.backgroundColor = 'red';
			hours.parentElement.style.backgroundColor = 'red';
			minutes.parentElement.style.backgroundColor = 'red';
			seconds.parentElement.style.backgroundColor = 'red';
		}
	}
}


setTimer(deadline);

// модальное окно

const modalTrigger = document.querySelectorAll('[data-modal]'), modal = document.querySelector('.modal');

function openModal() {
	modal.classList.add('show');
	modal.classList.remove('hidden');
	document.body.style.overflow = 'hidden';
	clearInterval(modalTimerId);

}

function closeModal() {
	modal.classList.add('hidden');
	modal.classList.remove('show');
	document.body.style.overflow = '';

}

modalTrigger.forEach(btn => {
	btn.addEventListener('click', openModal);
});

modal.addEventListener('click', (e) => {
	if (e.target === modal || e.target.getAttribute('data-close') === '') {
		closeModal();
	}
});

//*

document.addEventListener('keydown', (e) => {
	if (e.code === 'Escape' && modal.classList.contains('show')) {
		closeModal();
	}
});

const modalTimerId = setTimeout(openModal, 8000);

function showModalByScroll() {
	if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
		openModal();
		window.removeEventListener('scroll', showModalByScroll);
	}
}

window.addEventListener('scroll', showModalByScroll);

//--------------------------------------------------
//? карточки с меню (Классы)
// const cartHolders = document.querySelectorAll('.menu__item');
// const names = ['Фитнес', 'Премиум', 'Не очень Постное'];
// const images = ['img/tabs/vegy.jpg', 'img/tabs/elite.jpg', 'img/tabs/post.jpg'];
// const alts = ['Фитнес', 'Ghtvbev', 'Не очень Постное'];
// const infos = [`Меню "Фитнес" - это новый подход к приготовлению блюд:
//                 больше свежих овощей и фруктов. Продукт активных и здоровых людей.
//                 Это абсолютно новый продукт с оптимальной ценой и высоким качеством!`,
//     `В меню “Премиум” мы используем не только красивый дизайн упаковки,
//                 но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты -
//                 ресторанное меню без похода в ресторан!`,
//     `Меню “Постное” - это тщательный подбор ингредиентов:
//                 полное отсутствие продуктов животного происхождения, молоко из миндаля,
//                 овса, кокоса или гречки, правильное количество белков за счет тофу
//                 и импортных вегетарианских стейков.`
// ];
// const prices = [200, 500, 300];
//--------------------------------------------------------------------------------


//КЛАСС для создания карточек
class FoodCart {
	constructor(name, img, alt, info, price, element, parentSelector, ...classes) {
		this.name = name;
		this.img = img;
		this.alt = alt;
		this.info = info;
		this.price = price;
		this.classes = classes;
		this.element = element;
		this.parent = document.querySelector(parentSelector);
		this.transfer = 0.7;
		this.changeToUAH();
	}

	madeCart() {
		const divElement = document.createElement(this.element);
		//? если классы не указаны (...rest в аргументах функции пустой!)
		if (this.classes.length === 0) {
			this.classes.push('menu__item');
		}

		this.classes.forEach(classItem => divElement.classList.add(classItem));

		divElement.innerHTML = `
            <img src=${this.img} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.name}</h3>
            <div class="menu__item-descr">${this.info}</div>
            <div class="menu__item-divider"></div>
            <div class = "menu__item-price">
                <div class="menu__item-cost"> Цена: </div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день </div>
            </div>
        `;
		this.parent.append(divElement);
	}

	changeToUAH() {
		this.price = (this.price * this.transfer).toFixed(2);
	}
}

// функция для создания карточек с товаром из db.json
// const getResource = async (url) => {
//     const res = await fetch(url);
//     if (!res.ok) {
//         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//     }
//     return await res.json();
// };

//? вызов функции для создания карточек с использованием библиотеки
//? axios
axios.get('http://localhost:3000/menu')
	.then(data => {
		data.data.forEach(({
			                   name, img, alt, info, price
		                   }) => {
			new FoodCart(name, img, alt, info, price, 'div', '.menu .container').madeCart();
		});
	});


// вызов функции для создаия карточек из базы данны (db.json) "best practice?"
// getRes


//---------------------------------------------------------------
//вариант создания без класса и без шаблонизации
// getResource('http://localhost:3000/menu')
//     .then(data => createCart(data));
//
// function createCart(data) {
// data.forEach(({name, img, alt, info, price}) => {
//     const element = document.createElement('div');
//     element.classList.add('menu__item');
//     element.innerHTML = `
//         <img src=${img} alt=${alt}>
//         <h3 class="menu__item-subtitle">${name}</h3>
//         <div class="menu__item-descr">${info}</div>
//         <div class="menu__item-divider"></div>
//         <div class = "menu__item-price">
//             <div class="menu__item-cost"> Цена: </div>
//             <div class="menu__item-total"><span>${price}</span> грн/день </div>
//         </div>
//     `
//     document.querySelector('.menu .container').append(element);
// });

//---------------------------------------------------------------
// const newCart = new FoodCart(
//     names[1], images[1], alts[1],
//     infos[1], prices[1], 'div',
//     '.menu__field .container',
//     'menu__item', 'big');
// newCart.madeCart(); //! стандартный метод создания
// const secondCart = new FoodCart(
//     names[0], images[0], alts[0],
//     infos[0], prices[0], 'div',
//     '.menu__field .container',
// );
// secondCart.madeCart();
//
// new FoodCart(
//     names[2], images[2], alts[2],
//     infos[2], prices[2], 'div',
//     '.menu__field .container',
// ).madeCart();

// ? Forms

// const message = {
//     loading: 'Загрузка',
//     success: 'Спасибо! Мы с вами свяжемся!',
//     failure: 'Что-то пошло не так...'
// };

// const forms = document.querySelectorAll('form');
// function postData(form) {
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const statusMessage = document.createElement('div');
//         statusMessage.classList.add('status');
//         statusMessage.textContent = message.loading;
//         form.append(statusMessage);

//         const request = new XMLHttpRequest();
//         request.open('POST', 'server.php');
//     //? request.setRequestHeader('Content-type', 'application/json');  Если JSON
//     //! request.setRequestHeader('Content-type', 'multipart/form-data'); Если передаётся форма,
//                                                                           //! то Content-type устанавливается
//                                                                           //! автоматически;
//         const formData = new FormData(form);

// const object = {};
// formData.forEach(function(value, key) {
//     object[key] = value;
// });

// const json = JSON.stringify(object);

//         request.send(formData); //или form
//         request.addEventListener('load', () => {
//             if (request.status === 200) {
//                 console.log(request.response);
//                 statusMessage.textContent = message.success;
//                 form.reset();
//                 setTimeout(() => {
//                     statusMessage.remove();
//                 }, 2000);
//             } else {
//                 statusMessage.textContent = message.failure;
//             }
//         });

//     });
// }
// forms.forEach(item => {
//     postData(item);
// });
//---------------------------------------------------------------

//! Forms
const forms = document.querySelectorAll('form');

const responseMessages = {
	success: 'Передача данных прошла успешно! Мы с вами свяжемся!',
	loading: 'Идёт загрузка данных...',
	error: 'Что-то пошло не так, попробуйте ещё раз:)'
};

const postData = async (url, data) => {
	const res = await fetch(url, {
		method: 'POST', headers: {
			'Content-type': 'application/json' //для JSON
		}, body: data
	});
	return await res.json();
};

function bindPostData(form) {
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const messageDiv = document.createElement('img');
		messageDiv.src = 'img/spinner.svg';
		messageDiv.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
		form.insertAdjacentElement('afterend', messageDiv);

		const formData = new FormData(form);

		// const object = {};
		// formData.forEach((key, value) => {
		//     object[key] = value;
		// });

		const json = JSON.stringify(Object.fromEntries(formData.entries()));


		postData('http://localhost:3000/requests', json)
			.then(data => {
				console.log(data);
				showTanksModal(responseMessages.success);
				setTimeout(() => {
					messageDiv.remove();
				}, 3000);
			}).catch(() => {
			showTanksModal(responseMessages.error); //не появится в этой конструкции
		}).finally(() => {
			form.reset();
		});


		// ! устаревший способ передачи данных
		// const request = new XMLHttpRequest();
		// request.open('POST', 'server.php', true);
		// request.setRequestHeader('Content-type', 'application/json');
		// request.send(json);

		// request.addEventListener('load', () => {
		//     if (request.status === 200) {
		//         console.log(request.readyState, request.response);
		//         showTanksModal(responseMessages.success);
		//         form.reset();
		//         setTimeout(() => {
		//             messageDiv.remove(messageDiv);
		//         }, 3000);
		//     } else {
		//         showTanksModal(responseMessages.error);
		//         console.log(request.readyState, request.response);
		//     }
		// });
	});
}


function showTanksModal(message) {
	const prevModalDialog = document.querySelector('.modal__dialog');

	prevModalDialog.classList.add('hide');
	openModal();

	const tanksModal = document.createElement('div');
	tanksModal.classList.add('modal__dialog');
	tanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${message}</div>
        </div>
    `;

	document.querySelector('.modal').append(tanksModal);

	setTimeout(() => {
		tanksModal.remove();
		prevModalDialog.classList.add('show');
		prevModalDialog.classList.remove('hide');
		closeModal();
	}, 4000);
}

forms.forEach(item => {
	bindPostData(item);
});


//? Слайдер

//переменные
const images = document.querySelectorAll('.offer__slide'),
	slider = document.querySelector('.offer__slider'),
	totalImg = document.querySelector('#total'),
	currentImageNumber = document.querySelector('#current'),
	prevArrow = document.querySelector('.offer__slider-prev'),
	nextArrow = document.querySelector('.offer__slider-next'),
	slideWrapper = document.querySelector('.offer__slider-wrapper'),
	sliderField = document.querySelector('.offer__slider-inner'),
	width = window.getComputedStyle(slideWrapper).width;
// установка настроек для слайдера - карусели
let currentImg = 1;
let offset = 0;
sliderField.style.width = 100 * images.length + '%';
sliderField.style.display = 'flex';
sliderField.style.transition = '.45s all';
slideWrapper.style.overflow = 'hidden';
images.forEach(img => {
	img.style.width = width;
});

//функция для установки номеров текущего и  общего слайда
function getRightNum(field, num) {
	if (num < 10) {
		field.textContent = `0${num}`;
	} else {
		field.textContent = `${num}`;
	}
}

getRightNum(currentImageNumber, currentImg);
getRightNum(totalImg, images.length);

//создание точек под слайдером
const divDots = document.createElement("div");
divDots.style.height = '25px';
divDots.style.margin = '0 auto';
divDots.style.top = '20px';
divDots.cssText = `
    position: 'absolute';
    display: flex;
    margin-left = '15%';
    margin-right = '15%';

`;

// slider.style.position = 'relative';

images.forEach(() => {
	const dot = document.createElement('button');
	dot.classList.add('dot-button');
	dot.style.width = '25px';
	dot.style.height = '10px';
	dot.style.border = 'none';
	dot.style.borderRadius = '18%';
	dot.style.backgroundColor = 'lightgrey';
	dot.style.margin = '10px';
	dot.style.transform = 'translateY(-40px)';
	// dot.style.border = 'solid 2px white';
	dot.style.opacity = '0.8';
	divDots.append(dot);
});
slider.append(divDots);


const dots = document.querySelectorAll('.dot-button');

dots.forEach((item, index, alldots) => {
	item.style.backgroundColor = 'grey';
	item.addEventListener('click', () => {
		offset = parseInt(width) * index;
		sliderField.style.transform = `translateX(-${offset}px`;
		alldots.forEach(dot => {
			dot.style.backgroundColor = 'grey';
		});
		item.style.backgroundColor = 'white';
		getRightNum(currentImageNumber, index + 1);
	});
});

function getSlideRightDotsAndNumbs() {
	sliderField.style.transform = `translateX(-${offset}px`;
	currentImg = (offset / parseInt(width)) + 1;
	dots.forEach(dot => {
		dot.style.backgroundColor = 'grey';
	});
	dots[currentImg - 1].style.backgroundColor = 'white';
	getRightNum(currentImageNumber, currentImg);
}


dots[currentImg - 1].style.backgroundColor = 'white';
nextArrow.addEventListener('click', () => {
	if (offset === parseInt(width) * (images.length - 1)) {
		offset = 0;
	} else {
		offset += parseInt(width);
	}
	getSlideRightDotsAndNumbs();
});
prevArrow.addEventListener('click', () => {
	if (offset === 0) {
		offset = parseInt(width) * (images.length - 1);
	} else {
		offset -= parseInt(width);
	}
	getSlideRightDotsAndNumbs();
});


// ? -----------------------------------
// todo Мой вариант
// оставить первую картинку
// images.forEach(img => {
//     img.style.display = 'none';
//     img.classList.add('fade');
// });
// images[0].style.display = 'block';

// let currentImg = 0;
// currentImageNumber.textContent = `0${currentImg + 1}`;

// функция в прослушивателе событий простой вариант через display или классы
// sliderCounter.addEventListener('click', (e) => {
//     if (e.target === prevArrow || e.target === prevArrow.querySelector('img')) {
//         images.forEach(item => {
//             item.style.display = 'none';
//         });
//         if (currentImg - 1 < 0) {
//             currentImg = images.length - 1;
//             images[currentImg].style.display = 'block';
//             currentImageNumber.textContent = (images.length < 10) ?
//                 `0${currentImg + 1}` : `${currentImg + 1}`;
//         } else if ((currentImg - 1) >= 0 && (currentImg - 1) < images.length - 1) {
//             currentImg -= 1;
//             images[currentImg].style.display = 'block';
//             currentImageNumber.textContent = (images.length < 10) ?
//                 `0${currentImg + 1}` : `${currentImg + 1}`;
//         }
//     } else if (e.target === nextArrow || e.target === nextArrow.querySelector('img')) {
//         images.forEach(item => {
//             item.style.display = 'none';
//         });
//         if (currentImg + 1 > images.length - 1) {
//             currentImg = 0;
//             images[currentImg].style.display = 'block';
//             currentImageNumber.textContent = (images.length < 10) ?
//                 `0${currentImg + 1}` : `${currentImg + 1}`;
//         } else if ((currentImg + 1) >= 0 && (currentImg - 1) < images.length - 1) {
//             currentImg += 1;
//             images[currentImg].style.display = 'block';
//             currentImageNumber.textContent = (images.length < 10) ?
//                 `0${currentImg + 1}` : `${currentImg + 1}`;

//         }
//     }
// });

//----------------------------------------

// todo Калькулятор калорий 1. мой вариант

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

function initCalcFields(selector,activeClass) {
	const elements = document.querySelectorAll(selector);
	elements.forEach(item => {
		item.classList.remove(activeClass);
		if (item.getAttribute('id') === localStorage.getItem('gender')) {
			item.classList.add(activeClass);
		}
	});
	if(localStorage.currentActivity) {
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


// todo Калькулятор калорий 1. Вариант Петреченко

})