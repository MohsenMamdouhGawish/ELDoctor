$(".show").click(function(){
    $("#contentHidden").css("display","block");
    $("#form").css("display","none");
})
/*$(document).ready(function(){
    $("#loading").css("opacity","0")
    $("body").css("overflow","auto")

})*/

$(document).ready(function(){
	
	var plch = '';
	
	$('.contact_us input').mouseenter(function(){
	plch=$(this).attr("placeholder")	
	$(this).attr("placeholder","")
		$(this).mouseleave(function(){
			$(this).attr("placeholder",plch)
		})
	})
	
	
	
});


