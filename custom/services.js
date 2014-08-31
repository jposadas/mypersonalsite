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

appServices.factory('soundcloud', ['equalizer', function(equalizer) {
	var isTrackPlaying = false;
	var track, soundcloud_id, lock;
	return {
		isTrackPlaying: function() {
			return isTrackPlaying;
		},
		playTrack: function(id) {
			if(!lock) {
				if (id == soundcloud_id && isTrackPlaying) {
					// console.log("option1")
					// console.log(track);
					// console.log(soundcloud_id);
					if (track) {
						track.pause();
						isTrackPlaying = false;
					}
				} else if (id !== soundcloud_id) {
					// console.log("option2")
					// console.log(track);
					// console.log(soundcloud_id);
					soundcloud_id = id;
					if (isTrackPlaying) {
						if (track) {
							track.pause();
							isTrackPlaying = false;
						}
					}
					lock = true;
					SC.stream("/tracks/" + id, function(sound){
						console.log("NEW TRACK"); 
						console.log(sound);
						track = sound;
						if (track) {
							track.play();
							isTrackPlaying = true;
						}
						lock = false;
					});
				} else if (!isTrackPlaying) {
					// console.log("option3")
					// console.log(track);
					// console.log(soundcloud_id);
					if (track) {
						track.play();
						isTrackPlaying = true;
						soundcloud_id = id;
					}
				}
			}
		}
	}
}]);

appServices.factory('equalizer', [function() {

}]);
