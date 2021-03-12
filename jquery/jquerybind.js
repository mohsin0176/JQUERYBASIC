$(document).ready(function()
{
$(".myheader,p").click(function()
{
    $(this).toggleClass("changeColor");
});
 

$("myheader").bind('click mouseenter mouseleave',function(){
$(this).toggleClass("changeColor");
});

});