/**
* @author dhsign
* @copyright Copyright (c) 2016 dhsign
* @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or later
*/
jQuery(function($) {

    "use strict";
	//Slidorion
	$(function(){
		$('#slidorion').slidorion({
			autoPlay: false,
			effect: 'fade',
			hoverPause: true,
			// interval: 20000,
			// speed: 800,
			controlNav: false,
			controlNavClass: 'slidorion-nav'
		});
	});
});	