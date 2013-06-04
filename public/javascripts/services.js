terranullius.factory('User', function userFactory() {
		return {
				initDone: false,
				loggedIn: false,
				id: null,
				accessToken: null
		};
	});