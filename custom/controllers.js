
var appControllers = angular.module('appControllers', []);

appControllers.controller('TrackListCtrl', 
    ['$scope', '$http', 'AppModel', 'preloadImage', 'soundcloud', function($scope, $http, AppModel, preloadImage, soundcloud) {

    $http.get('custom/tracklist.json').success(function(data) {
        $scope.tracks = data.tracks;
    });

    //Updating the model for now. TODO: Play the actual song
    $scope.playTrack = function(track) {
        AppModel.setSelectedTrack(track);
        AppModel.setIsTrackSelected(true);
        soundcloud.playTrack(track.soundcloud_id);
    };

    $scope.cacheImage = function(imgSrc) {
        preloadImage(imgSrc);
    };


    $scope.predicate = "name";

}]);

appControllers.controller('PlayTrackCtrl', ['$scope', 'soundcloud', 'AppModel', function($scope, soundcloud, AppModel) {
    $scope.model = AppModel;
    $scope.soundcloud = soundcloud;
}]);


