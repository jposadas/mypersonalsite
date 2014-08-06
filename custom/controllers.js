
var audioPlayerApp = angular.module('audioPlayerApp', []);

audioPlayerApp.controller('TrackListCtrl', ['$scope', '$http', 'AppModel', function($scope, $http, AppModel) {

    $http.get('custom/tracklist.json').success(function(data) {
        $scope.tracks = data.tracks;
        //TODO: Image caching
    });

    $scope.playTrack = function(track) {
        console.log(track);
        AppModel.setSelectedTrack(track);
        AppModel.setIsTrackSelected(true);
    };

    $scope.predicate = "name";

}]);

audioPlayerApp.controller('PlayTrackCtrl', ['$scope', 'AppModel', function($scope, AppModel) {
    $scope.model = AppModel;
}]);

audioPlayerApp.service('AppModel', ['$http', function($http) {

    this.selectedTrack = null;
    this.isTrackSelected = false;
    this.setSelectedTrack = function(track) {
        this.selectedTrack = track;
    };
    this.setIsTrackSelected = function(isSelected) {
        this.isTrackSelected = isSelected;
    }

}]);
