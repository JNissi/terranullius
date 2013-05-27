(function initTerraNullius() {
	var initGame = function initGame(THREE) {
		var camera,
			clock,
			controls,
			scene,
			renderer,
			windmill,
			rotor,
			door,
			building,
			setView,
			init,
			animate,
			render,
			initMouseControls;


		setView = function setView() {
			var w = window.innerWidth,
				h = window.innerHeight;
			console.log('Setting to:' + w + 'x' + h);
			camera.aspect = w / h;
			renderer.setSize(w, h);
		};

		init = function init(cb) {
			var three = THREE,
				dom,
				w = window.innerWidth,
				h = window.innerHeight,
				loader = new three.JSONLoader(true),
				dummy;

			document.onselectstart = function onselectstart() {
				return false;
			};

			scene = new three.Scene();
			dummy = new three.Object3D();
			dummy.position.set(0, 0, 0);
			camera = new three.PerspectiveCamera(75, w / h, 1, 10000);
			camera.position.set(0, 62, 112);
			camera.lookAt(new three.Vector3(0, 0, 0));
			dummy.add(camera);
			scene.add(dummy);
			controls = new three.RTSControls(dummy);

			scene.add(new three.AmbientLight(0xababab));
			var pointLight = new three.PointLight(0xff4400, 5, 30);
			pointLight.position.set(5, 0, 0);
			scene.add(pointLight);
			renderer = new three.WebGLRenderer();
			setView();
			dom = renderer.domElement;
			window.onresize = setView;
			document
				.getElementById('main-container')
				.appendChild(renderer.domElement);
			renderer.domElement.id = 'mainview';
			/*tn.windmill({}, function onWindmillLoad(wm) {
				windmill = wm;
				scene.add(wm.object3d);
				//initMouseControls();
				cb();
			});*/

			renderer.setClearColorHex(0x000000, 1);

			tn.terrain({}, function onTerrainLoad(terrain) {
				scene.add(terrain.object3d);
				cb();
			});
		};

	/*	initMouseControls = function initMouseControls() {
			var mainview = document.getElementById('mainview'),
				scrollListener = function scrollListener(e) {
					var delta = Math.max(-1, Math.min(1, e.wheelDelta));
					camera.position.z += delta * 2;
				};
			mainview.addEventListener('mousewheel', scrollListener, false);
		};*/

		(function initAnimate(requestAnimationFrame) {
			var clock = new THREE.Clock();
			animate = function animate() {
				var delta = clock.getDelta();
				controls.update(delta);
				TWEEN.update(clock.getElapsedTime() * 1000);
				render();
				requestAnimationFrame(animate);
			};
		})(requestAnimationFrame);

		render = function render() {
			renderer.render(scene, camera);
		};

		init(animate);
	};

	var terranullius = angular.module('terranullius', []);
	terranullius.factory('User', function userFactory() {
		return {
				initDone: false,
				loggedIn: false,
				id: null,
				accessToken: null
		};
	});

	terranullius.config(['$locationProvider', function configLocationProvider($locationProvider) {
		$locationProvider
			.html5Mode(true);
	}]);

	terranullius.config(['$routeProvider', function configRouteProvider($routeProvider) {
		$routeProvider
			.when('/', {templateUrl: 'partials/index.html', controller: 'IndexCtrl'})
			.when('/account', {templateUrl: 'partials/account.html', controller: 'AccountCtrl'})
			.when('/game', {templateUrl: 'partials/game.html', controller: 'GameSelectionCtrl'})
			.when('/play', {templateUrl: 'partials/play.html', controller: 'GameCtrl'})
			.otherwise({redirectTo: '/'});
	}]);

	terranullius
		.controller('IndexCtrl', function IndexCtrl($scope, $location) {
			$scope.openAccountMenu = function openAccountMenu() {
				$location.path('/account');
			};
			$scope.openGameSelection = function openGameSelection() {
				$location.path('/game');
			};
		})
		.controller('AccountCtrl', function AccountCtrl($location, $scope, User) {
			console.log('AccountCtrl');
			$scope.user = User;
			if (!$scope.user.loggedIn) {

				$location.path('/');
			}
		});

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
})();