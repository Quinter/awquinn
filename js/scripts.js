$(document).ready(function() {
	$ ("#name").transition({skewX:'30deg'})
	.fadeIn({duration:2000, easing:"swing", queue:false})
	.transition({x:'70px', duration: 4000})
	;
	$ ("#title").transition({skewX:'-30deg'})
	.fadeIn({duration:2000, easing:"swing", queue:false})
	.transition({x:'-80px', duration: 4000})
	;
	$ ("#skills").transition({skewX:'30deg'})
	.fadeIn({duration:2000, easing:"swing", queue:false})
	.transition({x:'70px', duration: 4000})
	;	
});

$("p.work").hover(function() {
	$(this).fadeIn(1000);
});

$("#contact-form").submit(function() {
var str = $(this).serialize();
$.ajax({
type: "POST",
url: "assets/contact.php",
data: str,
success: function(msg) {
if(msg == 'OK') {
result = '<div class="alert alert-success">All good, message sent!</div>';
$(".input-group").hide();
setTimeout("location.reload(true);",7000);
} else {
result = msg;
}
$('#contact-error').html(result);
}
});
return false;
}); 