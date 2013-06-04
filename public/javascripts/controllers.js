terranullius
	.controller('IndexCtrl', function IndexCtrl($scope, $location) {
		$scope.openAccountMenu = function openAccountMenu() {
			$location.path('/account');
		};
		$scope.openGameSelection = function openGameSelection() {
			$location.path('/gameSelection');
		};
	})
	.controller('AccountCtrl', function AccountCtrl($location, $scope, User) {
		console.log('AccountCtrl');
		$scope.user = User;
		if (!$scope.user.loggedIn) {
			$location.path('/');
		}
	})
	.controller('GameSelectionCtrl', function GameSelectionCtrl() {
		
	});