$(document).ready(function() {

	startLayout();


});

var startLayout = function() {

	setTimeout(function() {

		$('#right-panel').addClass('col-md-8');
		$('#left-panel').removeClass('col-md-12');
		$('#left-panel').addClass('col-md-4');
		
		
		
	
	}, 1000);
	

};