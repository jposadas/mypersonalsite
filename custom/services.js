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