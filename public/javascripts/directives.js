terranullius.directive('google', function (User) {
	return function linkGoogle($scope, $elem, attrs) {
		$scope.user = User;
		gapi.signin.render(
			attrs.googleElementId,
			{
				callback: function signinCallback(authResult) {
					$scope.$apply(function(s) {
						s.user.initDone = true;
					});
					if (authResult['access_token']) {
						console.log('success');
						$scope.$apply(function setLoggedIn(s) {
							s.user.loggedIn = true;
							s.user.accessToken = authResult['access_token'];
						});
					} else if (authResult['error']) {
						console.log('error: ' + authResult.error);
						$scope.$apply(function setNotLoggedIn(s) {
							s.user.loggedIn = false;
						});
					}
				},
				clientid: '168443930129.apps.googleusercontent.com',
				cookiepolicy: 'single_host_origin'
			}
		);
	}
});

terranullius.directive('usersettings', function($http, $window, User) {
	return function linkUserSettings($scope, $elem, attrs) {
		$scope.user = User;
		$scope.revoke = function revoke() {
			var revokeUrl = 'https://accounts.google.com/o/oauth2/revoke?'
			+ 'token=' + $scope.user.accessToken;
			$.ajax({
				type: 'GET',
				url: revokeUrl,
				async: false,
				contentType: 'application/json',
				dataType: 'jsonp',
				success: function onRevokeSuccess() {
					console.log('Revoked');
					$scope.$apply(function setRevoked(s) {
						s.user.loggedIn = false;
					});
					console.log('setting location');
					$window.location.href = '/';
				},
				error: function onRevokeFail() {
					//Handle error
				}
			});
		}
	}
});