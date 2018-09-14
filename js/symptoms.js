$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() >100) {
      $(".hiddenNav").animate({top:'0'},10)
    } else {
      $(".hiddenNav").animate({top:'-80px'},10)
    }
  });
});


  $(".owl-carousel").owlCarousel({
      
      
      autoplay:true


  });
