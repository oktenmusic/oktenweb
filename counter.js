jQuery(document).ready(function($) {

$("#button").click(function() {

if(isNaN($('#element_1').val()) || $('#element_1').val() == ""){ 
$('#res h4').text('Введите число знаков');
}

else{
var engRuss = 45;
var russEng = 55;
var russUa = 25;

function counting(lang1){
var result = Math.ceil(($('#element_1').val()/1800)*lang1);
$('#res h4').text(result +' грн.');
}

if($('#element_2').val()==1){ // Eng => Russ
	counting(engRuss);
}

else if($('#element_2').val()==2){ //Russ => Eng
	counting(russEng);
}
else if($('#element_2').val()==3){ // Russ => Ua
	counting(russUa);
}
}
});//OnClick	
});//readyFunc		