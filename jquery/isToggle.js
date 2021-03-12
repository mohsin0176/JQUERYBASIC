$(document).ready(function()
{

$("tuturial").click(function()
{
	if ($("#webcoachbd").is(":visible")) {

		$("webcoachbd").hide();
	}
	else
	{
		$("#webcoachbd").show();
	}
});

$("#tutorial").click(function()
{
	$("#webcoachbd").toggle();
});

$("#tutorial").click(function()
{
	$("#webcoachbd").slideToggle(500);
});

});