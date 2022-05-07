"use strict";

function cards() {

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
//--------------------------------------
// функция для создания карточек с товаром из db.json
// const getResource = async (url) => {
//     const res = await fetch(url);
//     if (!res.ok) {
//         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//     }
//     return await res.json();
// };
//--------------------------------------

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
}
export default cards;

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
