$(".show").click(function(){
    $("#contentHidden").css("display","block");
    $("#form").css("display","none");
})
$(document).ready(function(){
    $("#loading").fadeOut(1000);
    $("body").css("overflow","auto")
})
 
//Show Nav
  $(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() >100) {
      $(".hiddenNav").animate({top:'0'},10)
    } else {
      $(".hiddenNav").animate({top:'-110px'},10)
    }
  });
});



