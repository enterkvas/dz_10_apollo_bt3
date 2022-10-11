$(document).ready(function () {
	var menu = $('.menu__list'),
			pull = $('#navigation-toggle'),
			anchor = $('.navigation a');
	// Script for showing and hiding the drop -down menu on smartphones
	// Create variables for the button, menu and links:		
	// We describe the event when pressing the Burger button
	$(pull).on("click", function (e) {
		// We cancel the standard behavior in the browser
		e.preventDefault();		
		// Open/hide the menu
		menu.slideToggle();		
		// Add the modifier --active
		$(this).toggleClass('navigation__toggle-button--active');    
		$('body').animate({ scrollTop: 0 }, 1000);
		$('html').animate({ scrollTop: 0 }, 1000);		
	});

	// In the drop -down menu
	// By clicking on the link in the menu, launch F-F-FNSTART (); hide the menu on the smartphone and tablet when clicking on points 
	anchor.on("click", function () {
		fnstart();
	});
	// In f-fnstart ();Check -if the menu is openly (check for the presence of class --active at the Pull button)
	// Then we remove the class-the Modifier -Active class from the Pull button (which sets the dark blue background button)
	// and turn/hide the menu 
	function fnstart() {
		if (pull.hasClass("navigation__toggle-button--active")) {
			pull.toggleClass('navigation__toggle-button--active');
			menu.slideToggle();
		}
	};

	// This script should work for the text below when loading st.
	// var w = $(window).width();
	// if (w > 991) {
	// 	$('#change_text_1200').html('<div id="change_text_1200" class="slider__slogan">Place your portfolio and sites customers. Reliable servers, responsive technical support.</div>');
	// } else {
	// 	$('#change_text_1200').html('<div id="change_text_1200" class="slider__slogan">Place your portfolio and customer sites. Reliable servers, responsive technical support.</div>');
	// }	
	// When the window size changes, in the larger direction, if the menu was hidden, show it
	// And from the button we remove the modifier --active	
	$(window).resize(function () {		
		if (w > 991) {
			menu.removeAttr('style');
			pull.removeClass('navigation__toggle-button--active');
			// This script should work for the text below when the window width changes:			
			$('#change_text_1200').html('<div id="change_text_1200" class="slider__slogan">Place your portfolio and sites customers.Reliable servers, <br> responsive technical support.</div>');
			// We remove the indentations from above (we needed for w<992px)
			$('.prices').css('margin-top', '0px');
			$('.benefits').css('margin-top', '0px');
		} else {
			$('#change_text_1200').html('<div id="change_text_1200" class="slider__slogan">Place your portfolio and customer sites.Reliable servers, <br> responsive technical support.</div>');
		};		
	});	

	// Calling the slider owl-carousel

	$("#top-slider").owlCarousel({
		singleItem: true,
		navigation: true,
		theme: "top-slider-theme",
		navigationText: ["", ""],
		slideSpeed: 600
	});

	//slide2id - smooth scrolling from the links inside the page (I made this script also a worker on the native js, only on jQuery)
	// $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	// 	highlightSelector: "nav a"
	// });

// Button up (.btn_up)
	$('body').append('<div title="Наверх"><button class="btn_up"></button></div>');

	$('.btn_up').click(function () {
		if (pull.hasClass("navigation__toggle-button--active")) {
			pull.toggleClass('navigation__toggle-button--active');
			menu.slideToggle();
		}
		$('body').animate({ scrollTop: 0 }, 1000);
		$('html').animate({ scrollTop: 0 }, 1000);	
	});

	$(window).scroll(function () {	
		if ($(window).scrollTop() > 200) {
			$('.btn_up').addClass('active');
		} else {
			$('.btn_up').removeClass('active');
		}
	});
});

//=======================//

// Native JS code smooth scrolling by links inside the page

"use strict";
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;		
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top - document.querySelector('.heading').offsetHeight;				

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth" /* Indicates smooth scrolling */
			});
			e.preventDefault(); /* We cancel the standard link behavior */			
		}		
	}	
}