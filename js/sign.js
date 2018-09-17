  $(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() >100) {
      $(".hiddenNav").animate({top:'0'},10)
    } else {
      $(".hiddenNav").animate({top:'-110px'},10)
    }
  });
});
