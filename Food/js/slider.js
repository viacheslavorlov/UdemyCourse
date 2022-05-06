"use strict";

function slider() {
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
}

module.exports = slider;