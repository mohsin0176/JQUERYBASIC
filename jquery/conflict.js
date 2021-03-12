var x=jQuery.noConflict();
x(document).ready(function(){

x("table tr").each(function(i){

if (i%2==0) 
{
	x(this).addClass("even");
}
else
{
	x(this).addClass("odd");
}

});

});