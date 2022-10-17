$(document).ready(function () {
  // Скрипт для показа и скрытия выпадающего меню на смартфонах
  // Создаем переменые для кнопки, меню и ссылки:
  var pull = $('#navigation-toggle'),
    menu = $('.navigation ul'),
    anchor = $('.menu__link');
  // Описываем событие при нажатии на кнопку меню (вся панель
  // навигации, а не только кнопка бургера):
  $(pull).on("click", function (e) {
    // Отменяем стандартное поведение ссылки в браузере
    e.preventDefault();
    // Открываем/Скрываем меню
    menu.slideToggle();
    // Добавляем модификатор --active (добавляет/
    // удаляет темно-синий цветв кнопки меню)
    $(this).toggleClass('navigation__toggle-button--active');
    // Возвращает на начало стр при нажатии на бургер
    // если не находились в начале стр:	
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  // При изменении размера окна в большую сторону, если меню было скрыто, показываем его
  // И у кнопки убираем модификатор --active
  $(window).resize(function () {
    var w = $(window).width();
    if (w > 991) {
      menu.removeAttr('style');
      pull.removeClass('navigation__toggle-button--active');
    };
  });
  //Скрываем меню при клике на пункт списка меню
  // на смартфоне и планцете.
  //По клику на ссылку в меню запускаем ф-ю fnstart();
  anchor.on("click", function () {
    fnstart();
  });
  // В ф-ии fnstart(); проверяем - если меню открыто (проверяем 
  // по наличию класса --active у кнопки pull) тогда убираем
  // класс модификатор --active у кнопки pull(который задает
  // темно-синий фон кнопке) и сворачиваем/скрываем меню 
  function fnstart() {
    if (pull.hasClass("navigation__toggle-button--active")) {
      pull.toggleClass('navigation__toggle-button--active');
      menu.slideToggle();      
    }
  };
  // Плавная прокрутка при нажатии на пункты меню
  $("a.menu__link").click(function () {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 68
    }, {
      duration: 1000,
      easing: "swing"
    });    
    return false;
  });

  // Вызов слайдера owl-carousel
  $("#top-slider").owlCarousel({
    singleItem: true,
    navigation: true,
    theme: "top-slider-theme",
    navigationText: ["", ""],
    slideSpeed: 600
  });

});
// Кнопка вверх (.btn-up)
$('body').append('<button class="btn-up" />');

$('.btn-up').click(function () {
  $('body').animate({ scrollTop: 0 }, 1000);
  $('html').animate({ scrollTop: 0 }, 1000);
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    $('.btn-up').addClass('active');
  } else {
    $('.btn-up').removeClass('active');
  }
});