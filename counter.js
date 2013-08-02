
jQuery(document).ready(function($) {

$("#button").click(function() {

if(isNaN($('#element_1').val()) || $('#element_1').val() == ""){ 
$('#res h4').text('Введите число знаков');
}

else{

if($('#element_2').val()==1){ // Eng => Russ

var result = Math.ceil($('#element_1').val()/1800)*45);
$('#res h4').text(result +' грн.');
}

else if($('#element_2').val()==2){ //Russ => Eng

var result = Math.ceil($('#element_1').val()/1800)*55);
$('#res h4').text(result +' грн.');
 
}
else if($('#element_2').val()==3){ // Russ => Ua

var result = Math.ceil($('#element_1').val()/1800)*25);
$('#res h4').text(result +' грн.');
}
}
});//OnClick	
});//readyFunc		

