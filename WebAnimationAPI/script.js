'use strict';

const btnPhone = document.querySelector('#iphone'),
	btnMacbook = document.querySelector('#macbook'),
	images = document.querySelectorAll('img');

// new Animation(effect, timeline)

// Element.animate(//)

let objectAnimated1; // неопределённые переменые
let objectAnimated2; // для анимаций

function rotateAnimation(animatedObject, animation, options) { // объект анимации, кейфреймы
	// анимации, опции(время,
	// повторения, и другое

		if (!objectAnimated1) {
			objectAnimated1 = animatedObject.animate(animation, options);
		} else if (objectAnimated1.playState === "paused") {
			objectAnimated1.play();
		} else {
			objectAnimated1.pause();
		}
}
btnPhone.addEventListener('click', () => rotateAnimation(images[0], [
			{
				transform: 'translateY(0) rotate(0deg)',
				filter: 'opacity(100%)'
			},
			{
				transform: 'translateY(100px) rotate(90deg)',
				filter: 'opacity(50%)'
			},
			{
				transform: 'translateY(-100px) rotate(270deg)',
				filter: 'opacity(25%)'
			},
			{
				transform: 'translateY(0) rotate(360deg)',
				filter: 'opacity(99%)'
			}
		],
		{
			duration: 3000,
			iterations: Infinity
		}
	));

//
images[0].addEventListener('click', () => rotateAnimation(images[0], [
		{
			transform: 'translateY(0) rotate(0deg)',
			filter: 'opacity(100%)'
		},
		{
			transform: 'translateY(100px) rotate(90deg)',
			filter: 'opacity(50%)'
		},
		{
			transform: 'translateY(-100px) rotate(270deg)',
			filter: 'opacity(25%)'
		},
		{
			transform: 'translateY(0) rotate(360deg)',
			filter: 'opacity(99%)'
		}
	],
	{
		duration: 3000,
		iterations: Infinity
	}
));

function scaleAnimation(animatedObject, animation, options) { // объект анимации, кейфреймы
	// анимации, опции(время,
	// повторения, и другое

	if (!objectAnimated2) {
		objectAnimated2 = animatedObject.animate(animation, options);
	} else if (objectAnimated2.playState === "paused") {
		objectAnimated2.play();
	} else {
		objectAnimated2.pause();
	}
}

btnMacbook.addEventListener('click', () => scaleAnimation(
	images[1],
	[
		{
			transform: 'scale(1)'
		},
		{
			transform: 'scale(.5)'
		},
		{
			transform: 'scale(1.5)'
		},
		{
			transform: 'scale(1)'
		}
	],
	{
		duration: 2000,
		iterations: Infinity,
		easing: 'ease-in-out'

	}
));