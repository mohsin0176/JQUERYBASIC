$(document).ready(function(){

$(".tip").hover(function(event)
{
	var spanText=$(this).next().html();
	$("< p class="toolTip"></p>").text(spanText).appendTo("body").css("top",(eventpageY-40)+"px").css("left",(eventpageX+20)+"px").fadeIn("slow");
},function(){
	$("toolTip").remove();
}).mousemove(function(event){
	$(".toolTip").css("top",(eventpageY-40)+"px").css("left",(eventpageX+20)+"px");

});

});