jQuery(window).on("load", function() {
	"use strict";

	/* -----------------------------------------
	 FlexSlider Init
	 ----------------------------------------- */
	jQuery(".flexslider").flexslider({
		controlNav: false,
		prevText: '',
		nextText: ''
	});

});

jQuery(document).ready(function($) {
	"use strict";

	/* -----------------------------------------
	 Main Navigation Init
	 ----------------------------------------- */
	$('ul#navigation').superfish({
		delay:       300,
		animation:   { opacity:'show', height:'show' },
		speed:       'fast',
		dropShadows: false
	});

	/* -----------------------------------------
	 Responsive Menus Init with jPanelMenu
	 ----------------------------------------- */
	$("#mobilemenu").mmenu();

	/* -----------------------------------------
	 Map Init
	 ----------------------------------------- */
	if ( $("#map").length ) {
		map_init();
	}

	/* -----------------------------------------
	 Fancybox Init
	 ----------------------------------------- */
	$(".fb").fancybox();

});

