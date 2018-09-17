$("#contentHidden").slideUp();
$(".show").click(function(){
    $("#form").slideUp(1000,function(){
                $("#contentHidden").slideDown(4000);

    });

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
      $(".hiddenNav").animate({top:'-300px'},10)
    }
  });
});






var dangers = document.getElementsByClassName("alert-danger")
var success = document.getElementsByClassName("alert-success")

function validateUsername()
{
       var userName = document.getElementById("username").value

    var r = /^[A-z]{12,18}$/;
 
    if(r.test(userName) == false)
        {
            success[0].style.display="none"
            dangers[0].style.display="block"
        }
    else
        {
            success[0].style.display="block"
            dangers[0].style.display="none"

        }
}


 function validatePassword()  {
             var Password = document.getElementById("password").value

 
    var r1 = /^[0-9]{6,10}/;
      if(r1.test(Password) == false)
        {
            console.log('sss');
            success[1].style.display="none"
            dangers[1].style.display="block"
        }
    else
        {
            success[1].style.display="block"
            dangers[1].style.display="none"

        }
 }