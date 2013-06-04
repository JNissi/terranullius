terranullius.config(['$locationProvider', function configLocationProvider($locationProvider) {
	$locationProvider
		.html5Mode(true);
}]);

terranullius.config(['$routeProvider', function configRouteProvider($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'partials/index.html', controller: 'IndexCtrl'})
		.when('/account', {templateUrl: 'partials/account.html', controller: 'AccountCtrl'})
		.when('/gameSelection', {templateUrl: 'partials/gameSelection.html', controller: 'GameSelectionCtrl'})
		.when('/play', {templateUrl: 'partials/play.html', controller: 'GameCtrl'})
		.otherwise({redirectTo: '/'});
}]);