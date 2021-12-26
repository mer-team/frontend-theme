/* JS Document */

/******************************

[Table of Contents]

1. Loading Bar
2. Vars and Inits
3. Set Header
4. Init Menu
5. Init Milestones

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

	var ctrl = new ScrollMagic.Controller();

	setHeader();
	initMenu();
	initMilestones();

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


	/*
	5. Init Milestones
	*/

	function initMilestones()
	{
		if($('.milestone_counter').length)
		{
			var milestoneItems = $('.milestone_counter');

	    	milestoneItems.each(function(i)
	    	{
	    		var ele = $(this);
	    		var endValue = ele.data('end-value');
	    		var eleValue = ele.text();

	    		/* Use data-sign-before and data-sign-after to add signs
	    		infront or behind the counter number */
	    		var signBefore = "";
	    		var signAfter = "";

	    		if(ele.attr('data-sign-before'))
	    		{
	    			signBefore = ele.attr('data-sign-before');
	    		}

	    		if(ele.attr('data-sign-after'))
	    		{
	    			signAfter = ele.attr('data-sign-after');
	    		}

	    		var milestoneScene = new ScrollMagic.Scene({
		    		triggerElement: this,
		    		triggerHook: 'onEnter',
		    		reverse:false
		    	})
		    	.on('start', function()
		    	{
		    		var counter = {value:eleValue};
		    		var counterTween = TweenMax.to(counter, 4,
		    		{
		    			value: endValue,
		    			roundProps:"value", 
						ease: Circ.easeOut, 
						onUpdate:function()
						{
							document.getElementsByClassName('milestone_counter')[i].innerHTML = signBefore + counter.value + signAfter;
						}
		    		});
		    	})
			    .addTo(ctrl);
	    	});
		}
	}
});