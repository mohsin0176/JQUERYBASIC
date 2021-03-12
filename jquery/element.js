$(document).ready(function(){

$(".teen").click(function(){
$(this).css('color','blue');
});
$("#tuto").click(function(){
$(this).css('color','green');
var text=$(this).css('text-align');
alert(text);
});

});