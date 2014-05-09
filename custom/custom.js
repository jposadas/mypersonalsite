var timeOutLength = 1200;


$(document).ready(function() {

	startLayout();


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