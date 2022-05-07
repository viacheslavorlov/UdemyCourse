"use strict";

function tabs(tabButtonsSelector, tabsSelector, tabHeaderSelector, activeClass) {           // tabs
	const tabButtons = document.querySelectorAll(tabButtonsSelector),
		tabs = document.querySelectorAll(tabsSelector),
		tabHeader = document.querySelector(tabHeaderSelector);

	function hideTabs() {
		tabs.forEach(tab => {
			tab.classList.add('hide', 'fade');
			tab.classList.remove('show');
		});
		tabButtons.forEach(tab => {
			tab.classList.remove(activeClass);
		});
	}

	function showTabs(i = 0) {
		tabs[i].classList.add('show');
		tabs[i].classList.remove('hide');
		tabButtons[i].classList.add(activeClass);
	}

	hideTabs();
	showTabs();

	tabHeader.addEventListener('click', (e) => {
		if (e.target && e.target.classList.contains(tabButtonsSelector.slice(1))) {
			tabButtons.forEach((tab, i) => {
				if (e.target === tab) {
					hideTabs();
					showTabs(i);
				}
			});
		}
	});
}

export default tabs;