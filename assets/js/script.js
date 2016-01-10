// Hides mobile menu when document is clicked on
$(document).on('click', function() {
	$('.navbar-collapse').collapse('hide');
});

//Add selected class to clicked link
$('.nav-link').on('click', function() {
	event.preventDefault();
	var $position = $(this).attr('href');
	$('html, body').animate({
		scrollTop: $($position).offset().top
	}, 800);
	
	$('.nav-link').removeClass('selected');
	$(this).addClass('selected');
});