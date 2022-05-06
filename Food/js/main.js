'use strict';
document.addEventListener('DOMContentLoaded', () => {
	const tabs = require('./tabs');
	tabs();

	const timer = require('./timer');
	timer();

	const cards = require('./cards');
	cards();

	const forms = require('./forms');
	forms();

	const modal = require('./modal');
	modal();

	const slider = require('./slider');
	slider();

	const calculator = require('./calc');
	calculator();

})