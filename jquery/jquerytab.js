$(document).ready(function(){

$("#current").show();
$("#tab_bar li:nth-child(1)").addClass("running");
$("#favorite,#all_time").hide();
$("#tab_bar li:nth-child(1)").click(function(event){
	event.preventDefault();
	$(this).addClass("running");
	$("#tab_bar li:nth-child(2) a,#tab_bar li:nth-child(3)").removeClass("running");
	$("#current").fadeIn(500);
	$("#favorite,#all_time").hide();
	)};
$("tab_bar li:nth-child(2)").click(function(event){
	event.preventDefault();
	$(this).addClass("running");
$("#tab_bar li:nth-child(1) a,#tab_bar li:nth-child(3)).removeClass("running");
$("#favorite").fadeIn(500);
$("#current,#all_time").hide();	
});

$("#tab_bar li:nth-child(3)").click(function(event){
	event.preventDefault();
	$(this).addClass("running");
	$("#tab_bar li:nth-child(1) a,#tab_bar li:nth-child(2)").removeClass("running");
	$("#all_time").fadeIn(500);
	$("#current,#favorite").hide();


});

});

