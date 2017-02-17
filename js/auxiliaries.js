/* ------------------- Javascript Auxiliaries -------------------*/

//Tooltip Initiation
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})

// Menu Button collapse on menu item click
jQuery(document).ready(function($){
	$('.navbar-nav > li > a').click(function () {
		$('#navbar').removeClass('in')
		$('#header .navbar .navbar-toggle').addClass('collapsed')
	});
	
});

