//Smooth Scrolling for ScrollSpy
jQuery(document).ready(function ($) {
	screenwidth = $(document).width();	
	"use strict";
	// If NOT Phone Screen
	if (screenwidth >= 767) {
		// jQuery for page scrolling feature - requires jQuery Easing plugin
		$('a.page-scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: ($($anchor.attr('href')).offset().top - 59)
			}, 1250, 'easeInOutExpo');
			event.preventDefault();
		});		
	}
});

//Sticky Bar code
jQuery(document).ready(function ($) {
	screenwidth = $(document).width();	
	"use strict";
	// If NOT Phone Screen
	if (screenwidth >= 767 && screenwidth > 0 ) {
		var height = 100;
		$('body').css('padding-top', height + 'px');
		$(window).scroll(function() { 					// Make navbar sticky after 60 pixels of scrolling from the top
				if($(this).scrollTop() > 60)
				{
					$('#header').addClass("sticky");
					$('.before-header').css('display', 'none');
					$('body').css('padding-top', height + 'px');
				}
				else if($(this).scrollTop() <= 60)
				{
					$('#header').removeClass("sticky");
					$('.before-header').css('display', 'block');
					$('body').css('padding-top','150');
				}
		});
		$(window).scroll();
	}
	// If Phone Screen
	else {
		$('#header .navbar').addClass("navbar-fixed-top"); 	// Make Phone navbar fixed
		$('#header .navbar').removeClass("navbar-default"); 	// Remove default navbar
		$('#header .navbar').addClass("navbar-inverse"); 	// Make Phone navbar black
	}
});