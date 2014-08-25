var appServices = angular.module('appServices', []);

appServices.service('AppModel', ['$http', function($http) {

    this.selectedTrack = null;
    this.isTrackSelected = false;
    this.setSelectedTrack = function(track) {
        this.selectedTrack = track;
    };
    this.setIsTrackSelected = function(isSelected) {
        this.isTrackSelected = isSelected;
        console.log(this.isTrackSelected);
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

appServices.factory('playSong', ['AppModel', function(AppModel) {
	var isPlaying = false;
	var track, soundcloud_id;
	return function(id) {
		if (id == soundcloud_id && isPlaying) {
			track.pause();
			isPlaying = false;
		} else if (id != soundcloud_id) {
			if (isPlaying) track.pause();
			SC.stream("/tracks/" + id, function(sound){
				track = sound;
				track.play();
				isPlaying = true;
			});
		} else {
			track.play();
			isPlaying = true;
		}
		soundcloud_id = id;
	}
}]);
