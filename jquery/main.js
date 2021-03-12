$(document).ready(function()
{
$("button").show();
$(".myheader").show();
$(".mypara").hide();
$(".myheader").click(function()
{
  $(".mypara").show();
});

$("button").click(function(){

	$(".myheader").hide();
	$(".mypara").hide();
});

$("p,h1,#tutorial,#first_para,.coach").click(function()
{
	alert("Someone clicked on Paragraph");
});

});