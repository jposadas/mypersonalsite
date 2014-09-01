var appServices = angular.module('appServices', []);

appServices.service('AppModel', ['$http', function($http) {

    this.selectedTrack = null;
    this.isTrackSelected = false;
    this.setSelectedTrack = function(track) {
        this.selectedTrack = track;
    };
    this.setIsTrackSelected = function(isSelected) {
        this.isTrackSelected = isSelected;
    }


}]);

appServices.factory('preloadImage', ['$http', function($http) {
	var preloadedImages = [];
	return function(imgSrc) {
		var elem = document.createElement('img');
		var index = preloadedImages.indexOf(imgSrc);
		if (index === -1) {
			elem.onload = function() {
				preloadedImages.push(imgSrc);
			};
			elem.src = imgSrc;
		}
	};
}]);

appServices.factory('player', ['equalizer', function(equalizer) {
	var isTrackPlaying = false;
	var track, soundcloud_id, lock;
	return {
		isTrackPlaying: function() {
			return isTrackPlaying;
		},
		playTrack: function(id, src) {
			if (!isTrackPlaying) {
				if (id) {
					SC.stream("/tracks/" + id, function(sound){
						track = sound;
						if (track) {
							track.play();
							isTrackPlaying = true;
						}
					});
				} else {
					track = document.createElement('audio');
					track.setAttribute('type', 'audio/mpeg');
					track.setAttribute('src', './public/tracks/' + src);
					track.play();
					isTrackPlaying = true;
				}
			}
		},
		pauseTrack: function() {
			if (isTrackPlaying)
				track.pause();
		}
	}
}]);

appServices.factory('equalizer', [function() {

}]);
