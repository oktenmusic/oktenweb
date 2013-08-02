
jQuery(document).ready(function($) {

$("#button").click(function() {

if(isNaN($('#element_1').val()) || $('#element_1').val() == ""){ 
$('#res h4').text('Введите число знаков');
}

else{

if($('#element_2').val()==1){ // Eng => Russ
var count1 = $('#element_1').val() ;
var count2 = 1800;
var result = (count1/count2)*45;
var result2 = Math.ceil(result);
var result3 = $('#res h4').text(result2 +' грн.');
}

else if($('#element_2').val()==2){ //Russ => Eng
var count1 = $('#element_1').val();
var count2 = 1800;
var result = (count1/count2)*55;
var result2 = Math.ceil(result);
var result3 = $('#res h4').text(result2 +' грн.');
 
}
else if($('#element_2').val()==3){ // Russ => Ua
var count1 = $('#element_1').val();
var count2 = 1800;
var result = (count1/count2)*25;
var result2 = Math.ceil(result);
var result3 = $('#res h4').text(result2 +' грн.');
}
}
});//OnClick	
});//readyFunc		

