$(document).ready(function()
{

$("#menu li").hover(function(){
	$(this).find("ul").stop(true,true).slideDown(200);
},function(){
	$(this).find("ul").stop(true,true).slideUp(200);
});
$("#menu li").hover(function(){
	if ($(this).children("ul").length>0)
	{
		$(this).addClass("rem_radius");
	}
},
function(){
	$(this).removeClass("rem_radius");

});
});