$(document).ready(function(){

$("h3").sliderPlugin({
	duration:500,
	complete:function(){
		alert("Sliding Finished");
	}
});

});