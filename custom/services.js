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
			//Load image
			elem.onabort = function() {
				console.log("abort on image loading");
			};
			elem.onerror = function() {
				console.log("error on image loading");
			}
			elem.onload = function() {
				preloadedImages.push(imgSrc);
			};
			elem.src = imgSrc;
		} else {
			console.log('Image is already cached');
		}
	};
}]);
