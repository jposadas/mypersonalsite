/* Soundcloud */

SC.initialize({
  client_id: '7628e03972183bcbb93172dcadf83d88'
});


var track;

// stream track id 5151498, Rawnald Erickson Gregory The Second
SC.stream("/tracks/3679190", function(sound){
 	track = sound;
});


(function($) {

	$('#playButton').click(function(event) {
		
		event.preventDefault();
		track.play();
		

	});

	$('#pauseButton').click(function(event) { 

		event.preventDefault();
		track.pause();

	})

})(jQuery);