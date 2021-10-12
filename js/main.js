$(document).ready(function () {
	var menu = $('.menu__list'),
			pull = $('#navigation-toggle'),
			anchor = $('.navigation a');

	// Скрипт для показа и скрытия выпадающего меню на смартфонах
	// Создаем переменые для кнопки, меню и ссылки:		
	// Описываем событие при нажатии на кнопку бургера
	$(pull).on("click", function (e) {
		// Отменяем стандартное поведение ссылки в браузере
		e.preventDefault();		
		// Открываем/Скрываем меню
		menu.slideToggle();		
		// Добавляем модификатор --active
		$(this).toggleClass('navigation__toggle-button--active');		
	});

	// Скрываем меню на смартфоне и планшете при клике на пункты в выпадающем меню
	// По клику на ссылку в меню запускаем ф-ю fnstart();
	anchor.on("click", function () {
		fnstart();
	});
	// В ф-ии fnstart(); проверяем - если меню открыто (проверяем по наличию класса --active у кнопки pull)
	// тогда убираем класс модификатор --active у кнопки pull(который задает темно-синий фон кнопке)
	// и сворачиваем/скрываем меню 
	function fnstart() {
		if (pull.hasClass("navigation__toggle-button--active")) {
			pull.toggleClass('navigation__toggle-button--active');
			menu.slideToggle();
		}
	};

	// Этот скрипт должен работать для текста нижеуказанного при ЗАГРУЗКЕ стр:
	var w = $(window).width();
	if (w > 991) {
		$('#change_text_1200').html('<div id="change_text_1200" class="slider__slogan">Разместите свое портфолио и сайты<br> клиентов. Надежные сервера,<br> отзывчивая техподдержка.</div>');
	} else {
		$('#change_text_1200').html('<div id="change_text_1200" class="slider__slogan">Разместите свое портфолио и сайты клиентов. Надежные сервера,<br> отзывчивая техподдержка.</div>');
	}

	// При изменении размера окна, в большую сторону, если меню было скрыто, показываем его
	// И у кнопки убираем модификатор --active	
	$(window).resize(function () {		
		if (w > 991) {
			menu.removeAttr('style');
			pull.removeClass('navigation__toggle-button--active');
			// Этот скрипт должен работать для текста нижеуказанного при ИЗМЕНЕНИИ ШИРИНЫ окна:			
			$('#change_text_1200').html('<div id="change_text_1200" class="slider__slogan">Разместите свое портфолио и сайты<br> клиентов. Надежные сервера,<br> отзывчивая техподдержка.</div>');
			// Убираем отступы сверху (нужны были для w<992px)
			$('.prices').css('margin-top', '0px');
			$('.benefits').css('margin-top', '0px');
		} else {
			$('#change_text_1200').html('<div id="change_text_1200" class="slider__slogan">Разместите свое портфолио и сайты клиентов. Надежные сервера,<br> отзывчивая техподдержка.</div>');
		};		
	});	

	// Вызов слайдера owl-carousel

	$("#top-slider").owlCarousel({
		singleItem: true,
		navigation: true,
		theme: "top-slider-theme",
		navigationText: ["", ""],
		slideSpeed: 600
	});

	//slide2id - плавная прокрутка по ссылкам внутри страницы (ниже сделал на нативном js Этот скрипт тоже рабочий, только на jQuery)
	// $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	// 	highlightSelector: "nav a"
	// });

// Кнопка вверх (.btn_up)

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

// Ниже код нативного js

"use strict";
// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.heading').offsetHeight;	

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth" /* указывает ПЛАВНУЮ прокрутку */
			});
			e.preventDefault(); /* отменяем стандартное поведение ссылки */
		}
	}
}