
$(document).ready(function() {
  
    $(window).scroll(function () {
    
      if ($(window).scrollTop() > 720) {
        $('#navbar').addClass('navbar-fixed');
        
      }
      if ($(window).scrollTop() < 721) {
        $('#navbar').removeClass('navbar-fixed');
      }
    });
  });