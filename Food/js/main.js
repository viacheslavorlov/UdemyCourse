'use strict';
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

	tabs();
	timer();
	cards();
	forms('form', modalTimerId);
	modal('[data-modal]', '.modal', modalTimerId);
	slider();
	calculator();
});