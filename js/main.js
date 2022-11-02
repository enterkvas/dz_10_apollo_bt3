$(document).ready(function () {  
  // Script for showing and hiding the drop-down menu on smartphones
  // Create a change for the button, menu and links:
  var pull = $('#navigation-toggle'),
    menu = $('.menu__list'),
    anchor = $('.menu__link');
  // We describe the event when pressing the menu button (the entire panel
  // navigation, not just the Burger button):
  $(pull).on("click", function (e) {
    // We cancel the standard behavior in the browser
    e.preventDefault();
    // Open/hide the menu
    menu.slideToggle();
    // Add the modifier --active (Adds/
    // Removes a dark blue menu button color)
    $(this).toggleClass('navigation__toggle-button--active');
    // Returns to the beginning of the page when pressed on a burger
    // if you were not at the beginning of the page:	
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  // When the window size changes in the larger direction, if the menu was hidden, show it
  // And from the button we remove the modifier --active
  $(window).resize(function () {
    var w = $(window).width();
    if (w > 991) {
      menu.removeAttr('style');
      pull.removeClass('navigation__toggle-button--active');
    };
  });
  //We hide the menu when clicking on the menu list item
  // on a smartphone and tablet
  //By clicking on the link in the menu, start the function fnstart();
  anchor.on("click", function () {
    fnstart();
  });
  // In function fnstart(); Check - if the menu is open (check
  // by class --active at the button pull) then we remove
  // class modifier --active at the button pull(which sets
  // dark blue background button) and turn/hide the menu 
  function fnstart() {
    if (pull.hasClass("navigation__toggle-button--active")) {
      pull.toggleClass('navigation__toggle-button--active');
      menu.slideToggle();      
    }
  };  
  // Smooth scrolling when pressing on menu items
  $("a.menu__link").click(function () {
    var w = $(window).width();
    if (w < 992) {
      $("html, body").animate({      
        scrollTop: $($(this).attr("href")).offset().top - 68      
      }, {
        duration: 1000,
        easing: "swing"
      });       
      // return false;
    } else {
      $("html, body").animate({      
        scrollTop: $($(this).attr("href")).offset().top      
      }, {
        duration: 1000,
        easing: "swing"
      });       
      // return false;
    };
    return false;     
  });  
  $("#top-slider").owlCarousel({
    singleItem: true,
    navigation: true,
    baseClass: "top-slider",
    theme: "top-slider-theme",
    navigationText: ["", ""],
    slideSpeed: 600
  });
});
// Button up (.btn-up)
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