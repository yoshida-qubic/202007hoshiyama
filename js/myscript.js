
'use strict';

const w = $(window).width();
const spwidth = 767;
const tabletwidth = 1025;

{
	const openMenu = document.getElementById('menu_open');
	const Nav = document.querySelector('header nav');

	openMenu.addEventListener('click', function () {
		openMenu.classList.toggle('active');
		Nav.classList.toggle('active');
	});
}


$(function () {

	// JQueryの範囲
	if(w > spwidth){
		$('header .menu01').hover(
			function(){
				$('header .menu01_in').slideDown(300);
			},
			function(){
				$('header .menu01_in').slideUp(300);
			}
		);

		$('header .h_btn.tel').hover(
			function(){
				$(this).children('.tel_in').fadeIn(300);
			},
			function(){
				$(this).children('.tel_in').fadeOut(300);
			}
		);
	}

});

$(window).scroll(function () {
	if ($(window).scrollTop() > 500) {
		$('header').addClass('active');
	} else {
		$('header').removeClass('active');
	}
});