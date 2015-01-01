$(document).ready(function() {
  
   $('#b1').click(transition1);

});

function transition1() {
	$('#d1').css("display", "none");

	$('#d2').css("display", "block");

}