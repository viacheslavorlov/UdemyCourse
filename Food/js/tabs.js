"use strict";

function tabs() {           // tabs
	const tabButtons = document.querySelectorAll('.tabheader__item'),
		tabs = document.querySelectorAll('.tabcontent'),
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
}

module.exports = tabs;