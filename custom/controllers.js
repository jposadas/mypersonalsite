
var appControllers = angular.module('appControllers', []);

appControllers.controller('TrackListCtrl', 
    ['$scope', '$http', 'AppModel', 'preloadImage', 'playSong', function($scope, $http, AppModel, preloadImage, playSong) {

    $http.get('custom/tracklist.json').success(function(data) {
        $scope.tracks = data.tracks;
    });

    //Updating the model for now. TODO: Play the actual song
    $scope.playTrack = function(track) {
        AppModel.setSelectedTrack(track);
        AppModel.setIsTrackSelected(true);
        playSong(track.soundcloud_id);
    };

    $scope.cacheImage = function(imgSrc) {
        preloadImage(imgSrc);
    };


    $scope.predicate = "name";

}]);

appControllers.controller('PlayTrackCtrl', ['$scope', 'AppModel', function($scope, AppModel) {
    $scope.model = AppModel;
}]);


