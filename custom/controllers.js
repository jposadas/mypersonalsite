
var audioPlayerApp = angular.module('audioPlayerApp', []);

audioPlayerApp.controller('TrackListCtrl', function($scope, $http) {

    $http.get('custom/tracklist.json').success(function(data) {
        $scope.tracks = data.tracks;
    });

});