$(document).ready(function(){

$("table tr").each(function(i){

if (i%2==0) 
{
	$(this).addClass("even");
}
else
{
	$(this).addClass("odd");
}

});

});