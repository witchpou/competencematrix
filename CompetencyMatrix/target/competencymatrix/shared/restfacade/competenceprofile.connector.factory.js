competenceprofileConnectorFactory = ['$http', '$location', 'restConnectorFactory', function competenceprofileConnectorFactory ($http, $location, restConnectorFactory) {
    var factory = {
    		getCompetenceProfileAll: getCompetenceProfileAll,
    		loadCompetenceProfile: loadCompetenceProfile,
    		createCompetenceProfile: createCompetenceProfile,
    		updateCompetenceProfile: updateCompetenceProfile,
    		deleteCompetenceProfile : deleteCompetenceProfile
     };
    return factory;
	
	function getCompetenceProfileAll() {
		return $http.get('api/competenceprofile/query/all')
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function loadCompetenceProfile(id) {
		return $http.get('api/competenceprofile/query/' + id)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function createCompetenceProfile(competenceprofile) {
		return $http.put('api/competenceprofile/', competenceprofile)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function updateCompetenceProfile(competenceprofile) {
		return $http.post('api/competenceprofile/', competenceprofile)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
		
	function deleteCompetenceProfile(id) {
		return $http.delete('api/competenceprofile/' + id)
		.then(
			restConnectorFactory.handleResponseSuccess,
			restConnectorFactory.handleResponseError
		);
	};
}];