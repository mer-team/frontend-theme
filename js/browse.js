/* JS Document */

/******************************

[Table of Contents]

1. Loading Bar
2. Vars and Inits
3. Set Header
4. Init Menu

******************************/

/*
1. Loading Bar
*/

var loadingBar = createLoadingBar();
playFakeLoadingDemo(loadingBar);

function createLoadingBar() {
	return new ProgressBar.Line("#loading-bar", { color: "#ff3500", svgStyle: { width: "100%", height: "100%", display: "block" } });
}

function playFakeLoadingDemo(loadingBar) {
	setTimeout(function () {
		return loadingBar.animate(0.1);
	}, 500);
	setTimeout(function () {
		loadingBar.animate(1, { duration: 500, easing: "easeIn" });
	}, 1e3);
	setTimeout(function () {
		loadingBar.set(0);
	}, 1700);
}

$(document).ready(function()
{
	"use strict";

	/*
	2. Vars and Inits
	*/

	setHeader();
	initMenu();

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	/*
	3. Set Header
	*/

	function setHeader()
	{
		var header = $('.header');

		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/*
	4. Init Menu
	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			var menu = $('.menu');
			var hamburger = $('.hamburger');
			var close = $('.menu_close');

			hamburger.on('click', function()
			{
				menu.toggleClass('active');
			});

			close.on('click', function()
			{
				menu.toggleClass('active');
			});
		}
	}
});