"use strict";

import {closeModal, openModal} from './modal';
import {postData} from "./services/services";

//! Forms
function forms(formSelector, modalTimerId) {
	const forms = document.querySelectorAll(formSelector);

	const responseMessages = {
		success: 'Передача данных прошла успешно! Мы с вами свяжемся!',
		loading: 'Идёт загрузка данных...',
		error: 'Что-то пошло не так, попробуйте ещё раз:)'
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
					}, 5000);
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
		openModal('.modal', modalTimerId);

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
			closeModal('.modal');
		}, 4000);
	}

	forms.forEach(item => {
		bindPostData(item);
	});
}

export default forms;


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