'use strict';
require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';
import 'axios';

import calculator from './calc';
import cards from './cards';
import forms from './forms';
import modal from './modal';
import slider from './slider';
import tabs from './tabs';
import timer from './timer';
import {openModal} from './modal';


document.addEventListener('DOMContentLoaded', () => {

	const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 8000);

	tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
	timer('.timer', '2022-05-07');
	cards();
	forms('form', modalTimerId);
	modal('[data-modal]', '.modal', modalTimerId);
	slider({
		container: '.offer__slider',
		slides: '.offer__slide',
		totalImage: '#total',
		nextArr: '.offer__slider-next',
		prevArr: '.offer__slider-prev',
		currImg: '#current',
		wrapper: '.offer__slider-wrapper',
		field: '.offer__slider-inner'
	});
	calculator();
});