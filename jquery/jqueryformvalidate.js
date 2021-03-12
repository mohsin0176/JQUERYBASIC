$(document).ready(function(){
	$("#reg_form").submit(function(){
		if(validateTextField("fname","fnameinfo")&validateTextField("l_name"),
		 "lnameInfo")& validateEmail("email","mailinfo")&validateNumber("phone","phoneInfo"))
	{
		return true;
	}
	else
	{
		return false;
	}
	});

function validateTextField(fieldName,
{
	if ($('input[name='+fieldName+']').val().length<1) {

		$("#"+Id)
		.addClass("error");
		return false;
	}
	else if(isNaN($("input[name="+fieldName+"]").val())==false)
	{
		$("#"+Id).text("Please Enter Text").fadeIn();
		$("#"+Id).addClass("error");
		return false;
	}

	else
	{
		$("input[name="+fieldName+"]").removeClass("error");
		$("#"+Id).fadeOut();
		return true;
	}
	}
	function validateEmail(fieldName,Id) {

    var a = $("input[name="+fieldName+"]").val();
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (filter.test(a)) {
     $("#"+Id).removeClass("error");
     return true;
 }
 else
 {
 	$("#"+Id).text("Please Type Valid Email");
 	$("#"+Id).addClass("error");
 	return false;
 }
}

function validateNumber(fieldName,Id)
{
	if (isNaN($("input[name="+fieldName+"]").val())) {

		$("#"+Id).text("Only Number No Text Allowed");
		$("#"+Id).addClass("error");
		return false;
	}
	else if ($("input[name"+fieldName+"]").val()<1) {
		$("#"+Id).text("Please Fill The Field").fadeIn();
		$("#"+Id).addClass("error");
		return false;
	}
	else
	{
		$("input[name="+fieldName+"]").removeClass("error");
		$("#"+Id).fadeOut();
		$("#"+Id).removeClass("error");
		return true;
	}
}

});