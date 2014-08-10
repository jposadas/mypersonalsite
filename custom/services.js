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
	var elem = document.createElement('img');
	return function(imgSrc) {
		var index = preloadedImages.indexOf(imgSrc);
		if (index === -1) {
			//Load image
			elem.onerror = function() {
				console.log("Error on image loading");
			};
			elem.onload = function() {
				preloadedImages.push(imgSrc);
			};
			elem.src = imgSrc;
		} else {
			console.log('Image is already cached');
		}
	};
}]);
