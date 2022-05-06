"use strict";

function modal(){
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
}

module.exports = modal;