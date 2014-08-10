
var appControllers = angular.module('appControllers', []);

appControllers.controller('TrackListCtrl', 
    ['$scope', '$http', 'AppModel', 'preloadImage', function($scope, $http, AppModel, preloadImage) {

    $http.get('custom/tracklist.json').success(function(data) {
        $scope.tracks = data.tracks;
    });

    //Updating the model for now. TODO: Play the actual song
    $scope.playTrack = function(track) {
        AppModel.setSelectedTrack(track);
        AppModel.setIsTrackSelected(true);
    };

    $scope.cacheImage = function(imgSrc) {
        preloadImage(imgSrc);
    };


    $scope.predicate = "name";

}]);

appControllers.controller('PlayTrackCtrl', ['$scope', 'AppModel', function($scope, AppModel) {
    $scope.model = AppModel;
}]);


