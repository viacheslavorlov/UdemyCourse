import $ from 'jquery';

const btn = $('#btn');
//аналог //# document.querySelector()

console.log(btn);

$(document).ready(function () {
	$('.list-item:first').hover(function () {
		$(this).toggleClass('active');
	});

	$('.list-item:eq(2)').on('click', function () {
		$('.image:even').fadeToggle(1800);
	});

	$('.list-item:eq(4)').on('click', function () {
		$('.image:odd').animate({
			opacity: 'toggle',
			height: 'toggle'
		}, 2000);
	})
});