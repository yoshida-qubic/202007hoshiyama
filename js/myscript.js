
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
	$('header .menu01').hover(
		function(){
			$('header .menu01_in').show();
		},
		function(){
			$('header .menu01_in').hide();
		}
	);




});