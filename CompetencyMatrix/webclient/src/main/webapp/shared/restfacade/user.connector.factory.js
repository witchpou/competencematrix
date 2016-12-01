userConnectorFactory = ['$http', '$location', 'restConnectorFactory', function userConnectorFactory ($http, $location, restConnectorFactory) {
    var factory = {
    		getUserAll: getUserAll,
    		loadUser: loadUser,
    		createUser: createUser,
    		updateUser: updateUser,
    		deleteUser : deleteUser
     };
    return factory;
	
	function getUserAll() {
		return $http.get('api/user/query/all')
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function loadUser(id) {
		return $http.get('api/user/query/' + id)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function createUser(user) {
		return $http.put('api/user/', user)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function updateUser(user) {
		return $http.post('api/user/', user)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function deleteUser(id) {
		return $http.delete('api/user/' + id)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
}];