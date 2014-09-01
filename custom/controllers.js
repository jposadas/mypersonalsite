
var appControllers = angular.module('appControllers', []);

appControllers.controller('TrackListCtrl', 
    ['$scope', '$http', '$state', 'AppModel', 'preloadImage', 'player', function($scope, $http, $state, AppModel, preloadImage, player) {

    $http.get('custom/playlists/' +  $state.current.data.playlistFile).success(function(data) {
        $scope.tracks = data.tracks;
        $scope.predicate = data.predicate;
    });

    //Updating the model for now. TODO: Play the actual song
    $scope.playTrack = function(track) {
        AppModel.setSelectedTrack(track);
        AppModel.setIsTrackSelected(true);
        player.playTrack(track.soundcloud_id, track.file);
    };

    $scope.cacheImage = function(imgSrc) {
        preloadImage(imgSrc);
    };

}]);

appControllers.controller('PlayTrackCtrl', ['$scope', 'player', 'AppModel', function($scope, player, AppModel) {
    $scope.model = AppModel;
    $scope.player = player;
}]);


