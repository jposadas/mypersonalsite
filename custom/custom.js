var timeOutLength = 1200;


$(document).ready(function() {

	startLayout();
	setEvents();


});

var startLayout = function() {

	setTimeout(function() {

		$('#right-panel').addClass('col-md-8');
		$('#left-panel').removeClass('col-md-12');
		$('#left-panel').addClass('col-md-4');

		setTimeout(function() {

			$('#loader').hide(2000, function() {
				$('#photo-div').show(600);
				$('#footer').show(600);
			});

		}, timeOutLength);
			
	}, timeOutLength);
	

};

var setEvents = function() {

	$('#email-icon').click(function() {
		window.location.href = "mailto:jposadas@stanford.edu";
	});

	$('#github-icon').click(function() {
		window.open("https://github.com/jposadas");
	});

	$('#linkedin-icon').click(function() {
		window.open("http://www.linkedin.com/pub/juan-posadas-castillo/6b/22a/213");
	});

	$('#facebook-icon').click(function() {
		window.open("https://www.facebook.com/jposadas92");
	});

};