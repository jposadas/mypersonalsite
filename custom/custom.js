/* Soundcloud */

SC.initialize({
  client_id: '7628e03972183bcbb93172dcadf83d88'
});


var rawnaldTrack;

// stream track id 3679190, Rawnald Erickson Gregory The Second
SC.stream("/tracks/3679190", function(sound){
 	rawnaldTrack = sound;
});


(function($) {

	$('#playButton').click(function(event) {
		
		event.preventDefault();
		rawnaldTrack.play();
		

	});

	$('#pauseButton').click(function(event) { 

		event.preventDefault();
		rawnaldTrack.pause();

	})

})(jQuery);