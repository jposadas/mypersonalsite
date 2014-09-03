var audioPlayerApp = angular.module('audioPlayerApp', ['ui.router', 'appControllers', 'appServices']);

audioPlayerApp.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

	$urlRouterProvider.when('', 'default');

	$stateProvider
		.state('default', {
			url: '/default',
			templateUrl: 'templates/playlist.html',
			controller: 'TrackListCtrl',
			data: {
				playlistFile: 'tracklist.json'
			}
		})
		.state('vivian', {
			url: '/vivian',
			templateUrl: 'templates/playlist.html',
			controller: 'TrackListCtrl',
			data: {
				playlistFile: 'vivian.json'
			}
		});

	soundManager.onready(function() {
		console.log('Sound Manager is Ready');
	});

}]);
