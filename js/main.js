$(document).ready(function() {
	// Этот скрипт должен работать для текста нижеуказанного при ЗАГРУЗКЕ стр:
	var w = $(window).width();
	if(w > 991) {
		$('#change_text_1200').html('<div id="change_text_1200" class="slider__slogan">Разместите свое портфолио и сайты<br> клиентов. Надежные сервера,<br> отзывчивая техподдержка.</div>');
	} else {
	    $('#change_text_1200').html('<div id="change_text_1200" class="slider__slogan">Разместите свое портфолио и сайты клиентов. Надежные сервера,<br> отзывчивая техподдержка.</div>');
	}

});

$(document).ready(function() {
	// Скрипт для показа и скрытия выпадающего меню на смартфонах
	// Создаем переменые для кнопки, меню и ссылки:
	var pull = $('#navigation-toggle'),
		menu = $('.navigation ul'),
		anchor = $('nav.navigation a');
	// Описываем событие при нажатии на кнопку
	$(pull).on("click", function(e){
	    // Отменяем стандартное поведение ссылки в браузере
	    e.preventDefault();
	    // Открываем/Скрываем меню
	    menu.slideToggle();
	    // Добавляем модификатор --active
	    $(this).toggleClass('navigation__toggle-button--active');
	    
	});

	// При изменении размера окна, в большую сторону, если меню было скрыто, показываем его
	// И у кнопки убираем модификатор --active
	$(window).resize(function(){
	    var w = $(window).width();
	    if(w > 991) {
	        menu.removeAttr('style');
	        pull.removeClass('navigation__toggle-button--active');
	        // Этот скрипт должен работать для текста нижеуказанного при ИЗМЕНЕНИИ ШИРИНЫ окна:			
			$('#change_text_1200').html('<div id="change_text_1200" class="slider__slogan">Разместите свое портфолио и сайты<br> клиентов. Надежные сервера,<br> отзывчивая техподдержка.</div>');						
	    } else {	    	
	  		$('#change_text_1200').html('<div id="change_text_1200" class="slider__slogan">Разместите свое портфолио и сайты клиентов. Надежные сервера,<br> отзывчивая техподдержка.</div>');
	    };
	});	
	// Скрываем меню при клике на него на смартфоне и планцете
	// По клику на ссылку в меню запускаем ф-ю fnstart();
	anchor.on("click", function(){				
		fnstart();
	});
	// В ф-ии fnstart(); проверяем - если меню открыто (проверяем по наличию класса --active у кнопки pull)
	// тогда убираем класс модификатор --active у кнопки pull(который задает темно-синий фон кнопке)
	// и сворачиваем/скрываем меню 
	function fnstart(){	
		if ( pull.hasClass("navigation__toggle-button--active")  ) {
   			pull.toggleClass('navigation__toggle-button--active');
			menu.slideToggle();	
		}
	};
	// Вызов слайдера owl-carousel
	$("#top-slider").owlCarousel({
		singleItem: true,
		navigation: true,
		theme: "top-slider-theme",
		navigationText : ["",""],
		slideSpeed: 600
	});
	//slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});	

});

			// Кнопка вверх (.btn_up)

	$('body').append('<button class="btn_up" />');

	$('.btn_up').click(function () {
		$('body').animate({scrollTop: 0}, 1000);
		$('html').animate({scrollTop: 0}, 1000);
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() > 200) {
			$('.btn_up').addClass('active');
		} else {
			$('.btn_up').removeClass('active');
		}
	});









  
     
      	
     
